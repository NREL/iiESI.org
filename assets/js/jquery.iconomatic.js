/*!
*  Project: Iconomatic
*  Description: Detect links to native files and append the proper icon image after the link
*  Author: Michael Oakley
*  License: MIT
*/
;(function ( $, window, document, undefined ) {

    'use strict';

    var path = '//www.nrel.gov/images/';

    // Default file types to label with icons
    var fileTypes = {
          'avi':  { 'path': path + 'icon_video.gif',      'type': 'Video'}
        , 'doc':  { 'path': path + 'icon_word.gif',       'type': 'Microsoft Word'}
        , 'docx': { 'path': path + 'icon_word.gif',       'type': 'Microsoft Word'}
        , 'gif':  { 'path': path + 'icon_image.gif',      'type': 'GIF'}
        , 'jpg':  { 'path': path + 'icon_image.gif',      'type': 'JPG'}
        , 'm3u':  { 'path': path + 'icon_audio.gif',      'type': 'Audio'}
        , 'mov':  { 'path': path + 'icon_video.gif',      'type': 'Video'}
        , 'mp3':  { 'path': path + 'icon_audio.gif',      'type': 'Audio'}
        , 'mpg':  { 'path': path + 'icon_video.gif',      'type': 'Video'}
        , 'mpeg': { 'path': path + 'icon_video.gif',      'type': 'Video'}
        , 'pdf':  { 'path': path + 'icon_pdf.gif',        'type': 'PDF'}
        , 'ppt':  { 'path': path + 'icon_powerpoint.gif', 'type': 'Microsoft PowerPoint'}
        , 'pptx': { 'path': path + 'icon_powerpoint.gif', 'type': 'Microsoft PowerPoint'}
        , 'wmv':  { 'path': path + 'icon_video.gif',      'type': 'Video'}
        , 'txt':  { 'path': path + 'icon_text.gif',       'type': 'Text'}
        , 'xls':  { 'path': path + 'icon_excel.gif',      'type': 'Microsoft Excel'}
        , 'xlsx': { 'path': path + 'icon_excel.gif',      'type': 'Microsoft Excel'}
        , 'xlsm': { 'path': path + 'icon_excel.gif',      'type': 'Microsoft Excel'}
        , 'zip':  { 'path': path + 'icon_zip.gif',        'type': 'ZIP Archive'}
    };


    var pluginName = 'iconomatic';

    // Plugin defaults
    var defaults = {
         ajax:      false
        ,dataMode:  false
        ,dataAttr:  'iconomatic'
        ,iconClass: 'fileIcon'
        ,filesObj:  fileTypes
    };

    // Constructor
    function Iconomatic( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Iconomatic.prototype = {

        init: function() {
            var links,
                context;

            context = $('body');    // todo: move this into settings

            links = this.getLinks( context );
            this.addIcons( links );

            if( this.options.ajax ) {
                this.enableAjax();
            }},

        /*
         *  Inspect all <a> tags within our region
         *  Return the ones with relevant file extensions or data attributes
         *
         */
        getLinks: function( region ) {
            var opts,
                types,
                dataAttr,
                links;

            opts     = this.options;
            types    = opts.filesObj;
            dataAttr = 'data-' + opts.dataAttr;

            links = [];

            $(region).find('a').filter(function(){
                 return !$(this).attr('data-iconomatic-tagged'); // remove any previously tagged
            }).each( function( idx, link ){
                var href,
                    ext;


                href = $(link).attr('href');

                if( typeof href !== 'undefined' && href !== null && href !== '' ) {

                    ext = href.toLowerCase().split('.').splice( -1, 1 ).toString(); // this could be more elegant

                    if( ext in types ) {
                        $(link).attr('data-iconomatic-tagged', ext); // tag our valid links
                        links.push( link );
                    }
                }
                if( opts.dataMode ) {

                    // copy the users data attribute to our data attribute
                    if( $(link).attr(dataAttr) ) {

                        $(link).attr('data-iconomatic-tagged', function(){ // tag our valid links
                            return $(this).attr( dataAttr );
                        });

                        links.push( link );
                    }
                }
            });

            return links;
        },

        /*
         *  Use the mutation observer to watch for changes in our doc.
         *  Find the Links and add the icons in the changed region.
         *
         */
        enableAjax: function(){
            var links,
                MutationObserver,
                region,
                observer,
                self = this;

            if( window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver ) {
                MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            } else {
                return true; // BAIL ON <IE11
            }

            region   = document.querySelector('body');
            observer = new MutationObserver( function(mutations) {

                mutations.forEach( function(mutation) {
                    if (mutation.type === 'childList') {
                        links = self.getLinks( mutation.target );
                        self.addIcons( links );
                    }
                });
            });

            observer.observe(region, {
                childList: true,
                subtree: true
            });
        },

        /*
         *  Append the icon image on the link
         *
         */
        addIcons: function( links ) {
            var opts = this.options;

            $(links).filter(function() {
                return $(this).has('img').length === 0; // don't label things link lightboxes
            }).each( function( idx, link ){
                var fileType,
                    thePath,
                    imgAttrs;

                fileType = $(link).data('iconomatic-tagged');

                thePath  = ( typeof opts.filesObj[fileType] !== 'undefined' ) ?  opts.filesObj[fileType].path : false;

                if( thePath ) {

                    imgAttrs = {
                        'class': opts.iconClass,
                        'alt'  : opts.filesObj[fileType].type,
                        'src'  : thePath
                    };

                    $( '<img />', imgAttrs ).appendTo(link); // finally do the work!
                }
            });
        }

    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Iconomatic( this, options ));
            }
        });
    };


})( jQuery, window, document );
