/* __________________ Supports Touch or Not __________________*/
/*	Detects touch support and adds appropriate classes to html and returns a JS object
* 	Copyright (c) 2013 Izilla Partners Pty Ltd
* 	http://www.izilla.com.au / Licensed under the MIT license
* 	https://coderwall.com/p/egbgdw
*/
var supports=(function(){var a=document.documentElement,b="ontouchstart" in window||navigator.msMaxTouchPoints;if(b){a.className+=" touch";return{touch:true}}else{a.className+=" no-touch";return{touch:false}}})();

/* __________________ Easing __________________*/
/*
jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ Uses the built in easing capabilities added In jQuery 1.1 to offer multiple easing options
TERMS OF USE - EASING EQUATIONSOpen source under the BSD License. Copyright 2001 Robert Penner / All rights reserved. / Open source under the BSD License. Copyright 2008 George McGinley Smith. All rights reserved.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDINGNEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/* _______ jQuery WidowFix Plugin * http://matthewlein.com/widowfix/ * Copyright (c) 2010 Matthew Lein * Version: 1.3.2 (7/23/2011) * Dual licensed under the MIT and GPL licenses * Requires: jQuery v1.4 or later */
(function(a){jQuery.fn.widowFix=function(d){var c={letterLimit:null,prevLimit:null,linkFix:false,dashes:false};var b=a.extend(c,d);if(this.length){return this.each(function(){var i=a(this);var n;if(b.linkFix){var h=i.find("a:last");h.wrap("<var>");var e=a("var").html();n=h.contents()[0];h.contents().unwrap()}var f=a(this).html().split(" "),m=f.pop();if(f.length<=1){return}function k(){if(m===""){m=f.pop();k()}}k();if(b.dashes){var j=["-","–","—"];a.each(j,function(o,p){if(m.indexOf(p)>0){m='<span style="white-space:nowrap;">'+m+"</span>";return false}})}var l=f[f.length-1];if(b.linkFix){if(b.letterLimit!==null&&n.length>=b.letterLimit){i.find("var").each(function(){a(this).contents().replaceWith(e);a(this).contents().unwrap()});return}else{if(b.prevLimit!==null&&l.length>=b.prevLimit){i.find("var").each(function(){a(this).contents().replaceWith(e);a(this).contents().unwrap()});return}}}else{if(b.letterLimit!==null&&m.length>=b.letterLimit){return}else{if(b.prevLimit!==null&&l.length>=b.prevLimit){return}}}var g=f.join(" ")+"&nbsp;"+m;i.html(g);if(b.linkFix){i.find("var").each(function(){a(this).contents().replaceWith(e);a(this).contents().unwrap()})}})}}})(jQuery);

/* __________________ FitVideos __________________*/
(function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null},d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return d.className="fit-vids-style",d.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",e.parentNode.insertBefore(d,e),b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}})(jQuery);
 
/* __________________ Touch Swipe __________________*/
//https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
// Copyright (c) 2010 Matt Bryson
// Dual licensed under the MIT or GPL Version 2 licenses.
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));
 
/* __________________ flexVerticalCenter __________________*/
 // FlexVerticalCenter.js 1.0Copyright 2011, Paul Sprangers http://paulsprangers.com * Released under the WTFPL license http://sam.zoy.org/wtfpl/ Date: Fri Oct 28 19:12:00 2011 +0100 */
(function($){$.fn.flexVerticalCenter=function(onAttribute){return this.each(function(){var $this=$(this);var attribute=onAttribute||"margin-top";var resizer=function(){$this.css(attribute,(($this.parent().height()-$this.height())/2))};resizer();$(window).resize(resizer);$this.find("img").load(resizer)})}})(jQuery);

/* __________________ bootstrap file input __________________*/
//http://gregpike.net/demos/bootstrap-file-input/demo.html
$(function(){$.fn.bootstrapFileInput=function(){this.each(function(i,elem){var $elem=$(elem);if(typeof $elem.attr("data-bfi-disabled")!="undefined"){return}var buttonWord="Browse";if(typeof $elem.attr("title")!="undefined"){buttonWord=$elem.attr("title")}var input=$("<div>").append($elem.eq(0).clone()).html();var className="";if(!!$elem.attr("class")){className=" "+$elem.attr("class")}$elem.replaceWith('<a class="file-input-wrapper btn btn-primary btn-custom'+className+'"><i class="icon-upload"></i>'+buttonWord+input+"</a>")}).promise().done(function(){$(".file-input-wrapper").mousemove(function(cursor){var input,wrapper,wrapperX,wrapperY,inputWidth,inputHeight,cursorX,cursorY;wrapper=$(this);input=wrapper.find("input");wrapperX=wrapper.offset().left;wrapperY=wrapper.offset().top;inputWidth=input.width();inputHeight=input.height();cursorX=cursor.pageX;cursorY=cursor.pageY;moveInputX=cursorX-wrapperX-inputWidth+20;moveInputY=cursorY-wrapperY-(inputHeight/2);input.css({left:moveInputX,top:moveInputY})});$(".file-input-wrapper input[type=file]").change(function(){var fileName;fileName=$(this).val();$(this).parent().next(".file-input-name").remove();if(!!$(this).prop("files")&&$(this).prop("files").length>1){fileName=$(this)[0].files.length+" files"}else{fileName=fileName.substring(fileName.lastIndexOf("\\")+1,fileName.length)}$(this).parent().after('<span class="file-input-name">'+fileName+"</span>")})})};var cssHtml="<style>.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }.file-input-name { margin-left: 8px; }</style>";$("link[rel=stylesheet]").eq(0).before(cssHtml)});

/* __________________ Cookie script used for fancybox on page modals, notify bar, and switcher __________________*/
/*!jQuery Cookie Plugin v1.3.1 / https://github.com/carhartl/jquery-cookie
 * Copyright 2013 Klaus Hartl / Released under the MIT license */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{factory(jQuery);}}(function($){var pluses=/\+/g;function decode(s){if(config.raw){return s;}try{return decodeURIComponent(s.replace(pluses," "));}catch(e){}}function decodeAndParse(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\");}s=decode(s);try{return config.json?JSON.parse(s):s;}catch(e){}}var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}value=config.json?JSON.stringify(value):String(value);return(document.cookie=[config.raw?key:encodeURIComponent(key),"=",config.raw?value:encodeURIComponent(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""));}var result=key?undefined:{};var cookies=document.cookie?document.cookie.split("; "):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split("=");var name=decode(parts.shift());var cookie=parts.join("=");if(key&&key===name){result=decodeAndParse(cookie);break;}if(!key&&(cookie=decodeAndParse(cookie))!==undefined){result[name]=cookie;}}return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==undefined){$.cookie(key,"",$.extend({},options,{expires:-1}));return true;}return false;};}));

/* __________________ Easy Responsive Tabs Plugin __________________*/
// Author: Samson.Onna <Email : samson3d@gmail.com>
(function($){$.fn.extend({easyResponsiveTabs:function(options){var defaults={type:"default",width:"auto",fit:true,closed:false,activate:function(){}};var options=$.extend(defaults,options);var opt=options,jtype=opt.type,jfit=opt.fit,jwidth=opt.width,vtabs="vertical",accord="accordion";var hash=window.location.hash;var historyApi=!!(window.history&&history.replaceState);$(this).bind("tabactivate",function(e,currentTab){if(typeof options.activate==="function"){options.activate.call(currentTab,e);}});this.each(function(){var $respTabs=$(this);var $respTabsList=$respTabs.find("ul.rtabs-tabs-list");var respTabsId=$respTabs.attr("id");$respTabs.find("ul.rtabs-tabs-list li").addClass("rtabs-tab-item");$respTabs.css({display:"block",width:jwidth});$respTabs.find(".rtabs-tabs-container > div").addClass("rtabs-tab-content");jtab_options();function jtab_options(){if(jtype==vtabs){$respTabs.addClass("rtabs-vtabs");}if(jfit==true){$respTabs.css({width:"100%",margin:"0px"});}if(jtype==accord){$respTabs.addClass("rtabs-easy-accordion");$respTabs.find(".rtabs-tabs-list").css("display","none");}}var $tabItemh2;$respTabs.find(".rtabs-tab-content").before("<h2 class='rtabs-accordion' role='tab'><span class='rtabs-arrow'></span></h2>");var itemCount=0;$respTabs.find(".rtabs-accordion").each(function(){$tabItemh2=$(this);var $tabItem=$respTabs.find(".rtabs-tab-item:eq("+itemCount+")");var $accItem=$respTabs.find(".rtabs-accordion:eq("+itemCount+")");$accItem.append($tabItem.html());$accItem.data($tabItem.data());$tabItemh2.attr("aria-controls","tab_item-"+(itemCount));itemCount++;});var count=0,$tabContent;$respTabs.find(".rtabs-tab-item").each(function(){$tabItem=$(this);$tabItem.attr("aria-controls","tab_item-"+(count));$tabItem.attr("role","tab");var tabcount=0;$respTabs.find(".rtabs-tab-content").each(function(){$tabContent=$(this);$tabContent.attr("aria-labelledby","tab_item-"+(tabcount));tabcount++;});count++;});var tabNum=0;if(hash!=""){var matches=hash.match(new RegExp(respTabsId+"([0-9]+)"));if(matches!==null&&matches.length===2){tabNum=parseInt(matches[1],10)-1;if(tabNum>count){tabNum=0;}}}$($respTabs.find(".rtabs-tab-item")[tabNum]).addClass("rtabs-tab-active");if(options.closed!==true&&!(options.closed==="accordion"&&!$respTabsList.is(":visible"))&&!(options.closed==="tabs"&&$respTabsList.is(":visible"))){$($respTabs.find(".rtabs-accordion")[tabNum]).addClass("rtabs-tab-active");$($respTabs.find(".rtabs-tab-content")[tabNum]).addClass("rtabs-tab-content-active").attr("style","display:block");}else{$($respTabs.find(".rtabs-tab-content")[tabNum]).addClass("rtabs-tab-content-active rtabs-accordion-closed");}$respTabs.find("[role=tab]").each(function(){var $currentTab=$(this);$currentTab.click(function(){var $currentTab=$(this);var $tabAria=$currentTab.attr("aria-controls");if($currentTab.hasClass("rtabs-accordion")&&$currentTab.hasClass("rtabs-tab-active")){$respTabs.find(".rtabs-tab-content-active").slideUp("",function(){$(this).addClass("rtabs-accordion-closed");});$currentTab.removeClass("rtabs-tab-active");return false;}if(!$currentTab.hasClass("rtabs-tab-active")&&$currentTab.hasClass("rtabs-accordion")){$respTabs.find(".rtabs-tab-active").removeClass("rtabs-tab-active");$respTabs.find(".rtabs-tab-content-active").slideUp().removeClass("rtabs-tab-content-active rtabs-accordion-closed");$respTabs.find("[aria-controls="+$tabAria+"]").addClass("rtabs-tab-active");$respTabs.find(".rtabs-tab-content[aria-labelledby = "+$tabAria+"]").slideDown().addClass("rtabs-tab-content-active");}else{$respTabs.find(".rtabs-tab-active").removeClass("rtabs-tab-active");$respTabs.find(".rtabs-tab-content-active").removeAttr("style").removeClass("rtabs-tab-content-active").removeClass("rtabs-accordion-closed");$respTabs.find("[aria-controls="+$tabAria+"]").addClass("rtabs-tab-active");$respTabs.find(".rtabs-tab-content[aria-labelledby = "+$tabAria+"]").addClass("rtabs-tab-content-active").attr("style","display:block");}$currentTab.trigger("tabactivate",$currentTab);if(historyApi){var currentHash=window.location.hash;var newHash=respTabsId+(parseInt($tabAria.substring(9),10)+1).toString();if(currentHash!=""){var re=new RegExp(respTabsId+"[0-9]+");if(currentHash.match(re)!=null){newHash=currentHash.replace(re,newHash);}else{newHash=currentHash+"|"+newHash;}}else{newHash="#"+newHash;}history.replaceState(null,null,newHash);}});});$(window).resize(function(){$respTabs.find(".rtabs-accordion-closed").removeAttr("style");});});}});})(jQuery);

/* __________________ FitText __________________*/
// Copyright 2011, Dave Rupert http://daverupert.com / Released under the WTFPL license / http://sam.zoy.org/wtfpl/ */
(function(a){a.fn.fitText=function(d,b){var e=d||1,c=a.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},b);return this.each(function(){var f=a(this);var g=function(){f.css("font-size",Math.max(Math.min(f.width()/(e*10),parseFloat(c.maxFontSize)),parseFloat(c.minFontSize)))};g();a(window).on("resize.fittext orientationchange.fittext",g)})}})(jQuery);



/* __________________ BEGIN INITIALIZATIONS and CUSTOM SCRIPTS __________________*/


// +++++  These document readys are isolated so you can remove stuff you don't need and combine in another file should you choose to do so 


//

/* __________________ Animated Slider Swipe after swipe plugin __________________*/

        $(".da-slider").swipe({
            swipeLeft: function (event, direction, distance, duration, fingerCount) {
                $('.da-arrows-prev').click();
            },
            swipeRight: function (event, direction, distance, duration, fingerCount) {
                $('.da-arrows-next').click();
            },
            threshold: 0
        });

/* This is here because the slider loads in head but the swipe is in footer */





/* __________________ Fade In Logo __________________*/
$(window).load(function () {

    $('#logo').animate({
        opacity: 1
    }, 500);

}); // end fade in logo


/* __________________ FitText __________________*/
$(document).ready(function () {
    $(".js-fit-text").fitText(1.6);
});

/* __________________ Opacity on Body __________________*/
$(document).ready(function () {
    $('body').animate({
        opacity: 1
    }, 500);
});

/* __________________ Reverse Order of Right Floated Items in toolbar __________________*/

$(document).ready(function () {
    // for toolbar
    if ($('body').width() >= '768') {
        //$('.toolbar').hide();
        var list = $('.toolbar-menu');
        var listItems = list.children('li.right');
        list.append(listItems.get().reverse());
    }

});

/* __________________ Toggle Off Canvas on Subpages __________________*/
$(document).ready(function () {

    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.row-offcanvas .primary-column, .row-offcanvas [href*=#]').click(function () {
        $('.row-offcanvas, [data-toggle=offcanvas], .row-offcanvas').removeClass('active');
    });

});

/* __________________ Rounding Fix for Mozilla Full Width Images inside Featured Columns __________________*/

$(document).ready(function () {
    $('.equalize .img-fullwidth').wrap('<div class="rounding-fix" />');

});

/* __________________ List Group Adjustment & Custom Append __________________*/

$(document).ready(function () {
    $('a.list-group-item').wrapInner('<span />');
    $('.custom-append .btn, .custom-prepend .btn, .custom-prepend-append .btn').wrapInner('<span />');
});

/* __________________ Responsive Table wraps tables with div.table-responsive __________________*/

$(document).ready(function () {
    $('table').wrap('<div class="table-responsive" />');
    if ($("html").hasClass("touch")) { //load the touch script
        $('div.table-responsive').before('<span><i class="icon-alert"></i>Swipe to view all content</strong></span>');
    }
    $('table.not-responsive').unwrap();
});


/* __________________ Sticky HEADER/NAV html class "no-touch" only and not for browsers that don't support boxshadow __________________*/

 if( $("html").hasClass("no-touch") && $("html").hasClass("boxshadow")) {

    $(window).load(function () {

  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop) {    
    $('.header, .stripe.top-of-page, .toolbar').addClass('stickit');
} else {  
    $('.header, .stripe.top-of-page, .toolbar').removeClass('stickit');   
}  
};  
  
stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});  


});

} // end sticky stuff IF NOT touch device and not IE or anything that can't handle css animations


/* __________________ Initialize File Input Buttons __________________*/

// load input file types look like a button && select tags and options look less fugly
$(window).load(function() {
	$('.pretty-file-input').bootstrapFileInput(); // turn file input into a bootstrap button
});


/* __________________ Scroll to top __________________*/


if( $("html").hasClass("boxshadow")) { // avoid IE8 bug

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('#toTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

}



/* __________________ Responsive Tabs to Accordion __________________*/

$(document).ready(function () {

	$('.rtabs').easyResponsiveTabs({
            type: 'default', // (DO NOT USE VERTICAL)        
            width: 'auto', //auto or any width like 600px
            fit: true   // 100% fit in a container
        });
	$('.rtabs').slideDown('slow');
    });


/* __________________ Vertical Center on window load __________________*/
$(window).load(function() {

    $('.hover-effect .caption-mask').flexVerticalCenter();
    
    	$('#logo').animate({opacity: 1},500);

    
});




/* __________________ Adaptive Map on Contact Page __________________*/

if( $("html").hasClass("touch") ) { 

	$(document).ready(function () {
		$('.map .map-iframe').css("display","none");
		$('.map a').css("visibility","visible");
	});

}else{

	$(document).ready(function () {
		$('.map .map-iframe').css("visibility","visible");
		$('.map a').css("display","none");
	});
} // end adaptive map



/* __________________ Fix bug on Android Stock Browser and any other browser that is not Chrome or Mozilla or AppleWebKit __________________*/

var nua = navigator.userAgent;
var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
if(is_android) {

		$('select.form-control').removeClass('form-control').css('width', '100%');

}


/* __________________ Turn off Pointer events on tel links on non-touch devices __________________*/
if( $("html").hasClass("no-touch") ) { 

	$(document).ready(function () {
		$('a[href^=tel]').css('pointer-events', 'none');
	});

} // end turn off pointer events



/* __________________ Click Outside Popover and Close __________________*/

$(':not(#anything)').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons and other elements within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
            return;
        }
    });
});

	
/* __________________ Tooltip and Popover __________________*/

 $(document).ready(function () {

	$('#image-array-wrapper [data-toggle=popover]').popover({
	container: '.jumbotron'
	});

	/*_____ Tooltips on Social Icons and Primary-Nav _____*/
	$('.social a, .primary-nav a').tooltip({
		trigger: 'hover',
		placement: 'bottom',
		container: 'body'
	});


	/*_____ ToolTip for HOVER _____*/
	$('.hasTip').tooltip({
		trigger: 'hover',
		container: 'body'
	});
	
	/*_____ ToolTip for TOGGLE _____*/
	$('.hasTipClick').tooltip({
		trigger: 'click',
		container: 'body'
	});

	
	/*_____ PopOver for HOVER _____*/
	$('.hasPopOver').popover({
		trigger: 'hover',
		placement: 'bottom'
	});
	

	/*_____ PopOver for TOGGLE _____*/
	$('.hasPopOverClick').popover({
		trigger: 'click',
		placement: 'bottom'
	});
	
	
	/*_____ PopOver for Data Toggle _____*/
 	$("[data-toggle=popover]")
      .popover()
      
	/*_____ PopOver for Data Hover _____*/
 	$("[data-hover=popover]")
      .popover({trigger: 'hover'})



}); // end bootstrap inits works with bootstrap.min.js



/* __________________ Fade All But Hovered __________________*/

$(document).ready(function () {
	$('.image-widget li, .thumb-gallery ul li, .masonry li').hover(function () {
		$(this).siblings().addClass('myfader');
	}, function () {
		$(this).siblings().removeClass('myfader');
	});
}); // end fade all but hovered


/* __________________ General Responsive Video __________________*/

$(window).load(function () {
	$('.responsive-video').fitVids();
});

/* __________________ Video Gallery Stand Alone__________________*/

$(window).load(function () {


$('.video-case').fitVids();

$('.video-case, .responsive-video').fadeIn();


	$('.video-thumb a, .video-carousel li a').click(function (e) {
		e.preventDefault();
		var URL = $(this).attr('data-src');
		var htm = '<iframe width="990" height="600" src="' + URL + '?wmode=transparent" frameborder="0"></iframe>';
		$('.video-case').html(htm);
		$('.video-case').fitVids();
		//$(this).addClass('active').siblings('.active').removeClass('active');
		 $(this).parent('li').addClass('active').siblings('.active').removeClass('active');

		return false;
});

//?wmode=transparent"
//http://stackoverflow.com/questions/9074365/youtube-video-embedded-via-iframe-ignoring-z-index

}); // end video gallery

/* __________________ Video Triggers __________________*/
$(document).ready(function () {
	$('.video-holder.youtube .video-trigger').click(function (e) {
		e.preventDefault();
		var URL = $(this).attr('href');
		var htm = '<iframe width="560" height="315" src="http://www.youtube.com/embed/' + URL + '?rel=0?wmode=transparent" frameborder="0"></iframe>';
		$(this).parent().html(htm);
		$('.video-holder').fitVids();
		return false;
	});
	$('.video-holder.vimeo .video-trigger').click(function (e) {
		e.preventDefault();
		var URL = $(this).attr('href');
		var htm = '<iframe width="500" height="281" src="http://player.vimeo.com/video/' + URL + '?title=0&amp;byline=0&amp;portrait=0?wmode=transparent" frameborder="0"></iframe>';
		$(this).parent().html(htm);
		$('.video-holder').fitVids();
		return false;
	});
}); // end video triggers


/* __________________ Short Headline / Widget Title / Stripe (optional) __________________*/

  $(document).ready(function(){
  
  	//$('.rotating-testimonials blockquote p').wrapInner('<span></span>');
  	$('.rotating-testimonials blockquote cite').wrapInner('<span></span>');
  	$('.short-headline').wrapInner('<span><span></span></span>');
	$('.widget .title, .section-title, .footer .title').wrapInner('<span></span>');
	//$('.stripe').wrapInner('<em class="oneclr"></em><em class="twoclr"></em><em class="threeclr"></em><em class="fourclr"></em> <em class="oneclr"></em><em class="twoclr"></em><em class="threeclr"></em><em class="fourclr"></em>');

  }); //end short headline and widget title



/* __________________ Search Toggle __________________*/
$(document).ready(function () {
	$('#search-trigger').click(function () {
		$('.search input').toggle('fast').focus();
		window.scrollTo(0, 0);
		$(this).toggleClass('active');
	});

	$(document).click(function (event) {
		if ($(event.target).parents().index($('.search')) == -1) {

			$('.search input').hide(0, function () {
				if ($('.search input').is(":visible"));
				$('#search-trigger').removeClass('active');
			});
		}
	});

	$(document).on('touchstart', function (event) {
		if ($(event.target).parents().index($('.search')) == -1) {

			$('.search input').hide(0, function () {
				if ($('.search input').is(":visible"));
				$('#search-trigger').removeClass('active');
			});
		}
	});
}); // end search toggle

	
/* __________________ Fix Widows __________________*/
    $(window).load(function() {
        $('.fixwidows').widowFix({
    	linkFix: true
		});
    }); 
    

/* __________________ Pricing Plans option details trigger __________________*/
$(document).ready(function() {
	
       $('.option-details').hide();
       $('.show-details').click(function(){
          if ($(this).hasClass('active')) {
               $(this).removeClass('active');
               $(this).children('.option-details').slideUp();
          } else {
               $('.show-details').removeClass('active');
               $(this).addClass('active');
               $('.option-details').slideUp();
               $(this).children('.option-details').slideDown();
          }
          return false;
       }); 
	

});	// end pricing plans









