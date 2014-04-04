 if( $("html").hasClass("ie8")) {
 
// RENDER THE ICONS
var head = document.getElementsByTagName('head')[0],
style = document.createElement('style');
style.type = 'text/css';
style.styleSheet.cssText = ':before,:after{content:none !important';
head.appendChild(style);
setTimeout(function(){
head.removeChild(style);
}, 0);

$(document).ready(function () {
    $(".ie8 .header, .ie8 .toolbar, .ie8 #nav").css("display","block");
    $(".ie8 .primary-nav .parent i").css("visibility","visible");
});

}

/*
<!--[if lt IE 9]><div id="ie8loader">
<img src="assets/images/loader.gif" alt=""/>
<p>Loading IE8</p></div>
<![endif]-->

     $(document).ready(function () {
			$("#site-wrapper").fadeIn();
			$("#ie8loader").fadeOut();
     });

#ie8loader {position:fixed;z-index:10000;top:0;left:0;right:0;bottom:0;text-align:center;padding-top:20%;font-size:20px;font-weight:bold}
#ie8loader img {display:block;margin:0 auto;}

*/