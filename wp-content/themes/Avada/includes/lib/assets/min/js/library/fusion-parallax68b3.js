function _fusionRefreshScroll(){window._fusionScrollTop=window.pageYOffset,window._fusionScrollLeft=window.pageXOffset}function _fusionParallaxAll(){var t;for(_fusionRefreshScroll(),t=0;t<window._fusionImageParallaxImages.length;t++)window._fusionImageParallaxImages[t].doParallax()}function _fusionRefreshWindow(){window._fusionScrollTop=window.pageYOffset,window._fusionWindowHeight=jQuery(window).height(),window._fusionScrollLeft=window.pageXOffset,window._fusionWindowWidth=jQuery(window).width()}!function(t){var i;i=0,t.requestAnimationFrame||(t.webkitRequestAnimationFrame&&(t.requestAnimationFrame=t.webkitRequestAnimationFrame,t.cancelAnimationFrame=t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame),t.requestAnimationFrame=function(e){var s=(new Date).getTime(),a=Math.max(0,16-(s-i)),n=t.setTimeout(function(){e(s+a)},a);return i=s+a,n},t.cancelAnimationFrame=function(t){clearTimeout(t)}),"function"==typeof define&&define(function(){return t.requestAnimationFrame})}(window),void 0===window._fusionImageParallaxImages&&(window._fusionImageParallaxImages=[]),function(t,i){var e="fusionImageParallax",s={direction:"up",mobileenabled:!1,mobiledevice:!1,width:"",height:"",align:"center",opacity:"1",velocity:".3",image:"",target:"",repeat:!1,loopScroll:"",loopScrollTime:"2",removeOrig:!1,complete:function(){}};function a(i,a){var n;this.element=i,this.settings=t.extend({},s,a),n=this.settings.align.split(" "),this.settings.xpos=n[0],2===n.length?this.settings.ypos=n[1]:this.settings.ypos="center",this._defaults=s,this._name=e,this.init()}t.extend(a.prototype,{init:function(){var e;""===this.settings.target&&(this.settings.target=t(this.element)),""===this.settings.image&&void 0!==t(this.element).css("backgroundImage")&&""!==t(this.element).css("backgroundImage")&&(this.settings.image=t(this.element).css("backgroundImage").replace(/url\(|\)|"|'/g,"")),this.settings.imageMedium&&Modernizr.mq("only screen and (max-width: "+fusionJSVars.visibility_medium+"px)")&&(this.settings.image=this.settings.imageMedium),this.settings.imageSmall&&Modernizr.mq("only screen and (max-width: "+fusionJSVars.visibility_small+"px)")&&(this.settings.image=this.settings.imageSmall),e=i._fusionImageParallaxImages.push(this),jQuery(this.element).attr("data-parallax-index",e-1),this.setup(),this.settings.complete(),this.containerWidth=0,this.containerHeight=0},setup:function(){!1!==this.settings.removeOrig&&t(this.element).remove(),this.resizeParallaxBackground()},doParallax:function(){var t,e,s,a,n,o,r,d,g=this.settings.target.find(".parallax-inner");this.settings.mobiledevice&&!this.settings.mobileenabled||this.isInView()&&(g.css({minHeight:"150px"}),t=this.settings.target.width()+parseInt(this.settings.target.css("paddingRight"),10)+parseInt(this.settings.target.css("paddingLeft"),10),e=this.settings.target.height()+parseInt(this.settings.target.css("paddingTop"),10)+parseInt(this.settings.target.css("paddingBottom"),10),0===this.containerWidth||0===this.containerHeight||t===this.containerWidth&&e===this.containerHeight||this.resizeParallaxBackground(),this.containerWidth=t,this.containerHeight=e,void 0!==g&&0!==g.length&&(s=(i._fusionScrollTop-this.scrollTopMin)/(this.scrollTopMax-this.scrollTopMin),a=this.moveMax*s,"down"===this.settings.direction&&(a*=1.25),"left"!==this.settings.direction&&"up"!==this.settings.direction||(a*=-1),n="translate3d(",o="px, -2px, 0px)",r="translate3d(0, ",d="px, 0)",jQuery("html").hasClass("ua-safari")&&g.parent().find(".fusion-section-separator").length&&(n="translate(",o="px, 0)",r="translate(0, ",d="px)"),"no-repeat"===g.css("background-repeat")&&("down"===this.settings.direction&&0>a?a=0:"up"===this.settings.direction&&0<a?a=0:"right"===this.settings.direction&&0>a?a=0:"left"===this.settings.direction&&0<a&&(a=0)),"fixed"===this.settings.direction||("left"===this.settings.direction||"right"===this.settings.direction?g.css({webkitTransform:n+a+o,mozTransform:n+a+o,msTransform:n+a+o,oTransform:n+a+o,transform:n+a+o}):g.css({webkitTransform:r+a+d,mozTransform:r+a+d,msTransform:r+a+d,oTransform:r+a+d,transform:r+a+d}))))},isInView:function(){var t,e=this.settings.target;if(void 0!==e&&0!==e.length)return!((t=e.offset().top)+(e.height()+parseInt(e.css("paddingTop"),10)+parseInt(e.css("paddingBottom"),10))<i._fusionScrollTop||i._fusionScrollTop+i._fusionWindowHeight<t)},setBackgroundStyling:function(t,i){var e="none"===this.settings.blendMode?"":this.settings.blendMode,s=this.settings.backgroundColor;this.settings.backgroundColorMedium&&Modernizr.mq("only screen and (max-width: "+fusionJSVars.visibility_medium+"px)")&&(s=this.settings.backgroundColorMedium),this.settings.backgroundColorSmall&&Modernizr.mq("only screen and (max-width: "+fusionJSVars.visibility_small+"px)")&&(s=this.settings.backgroundColorSmall),this.settings.blendModeMedium&&Modernizr.mq("only screen and (max-width: "+fusionJSVars.visibility_medium+"px)")&&(e=this.settings.blendModeMedium),this.settings.blendModeSmall&&Modernizr.mq("only screen and (max-width: "+fusionJSVars.visibility_small+"px)")&&(e=this.settings.blendModeSmall),t.find(".parallax-inner").css({"background-color":s,"background-blend-mode":e}),""!==i&&t.find(".parallax-inner").css({"background-image":i})},resizeParallaxBackground:function(){var t,e,s,a,n,o,r,d,g,l,h,u,c=this.settings.target,m="";void 0!==c&&0!==c.length&&c.is(":visible")&&(u=c.hasClass("lazyload"),t="true"===this.settings.repeat||!0===this.settings.repeat||1===this.settings.repeat,""===this.settings.gradientStartColor&&""===this.settings.gradientStartPosition||("linear"===this.settings.gradientType?m+="linear-gradient("+this.settings.gradientAngle+"deg, ":"radial"===this.settings.gradientType&&(m+="radial-gradient(circle at "+this.settings.gradientRadialDirection+", "),m+=this.settings.gradientStartColor+" "+this.settings.gradientStartPosition+"%,",m+=this.settings.gradientEndColor+" "+this.settings.gradientEndPosition+"%)",""!==this.settings.image&&"none"!==this.settings.image&&(m+=",url('"+this.settings.image+"')")),"none"===this.settings.direction?(e=c.width()+parseInt(c.css("paddingRight"),10)+parseInt(c.css("paddingLeft"),10),a=c.offset().left,"center"===this.settings.align?a="50% 50%":"left"===this.settings.align?a="0% 50%":"right"===this.settings.align?a="100% 50%":"top"===this.settings.align?a="50% 0%":"bottom"===this.settings.align&&(a="50% 100%"),c.css({opacity:Math.abs(parseFloat(this.settings.opacity)/100),backgroundSize:"cover",backgroundAttachment:"scroll",backgroundPosition:a,backgroundRepeat:"no-repeat"}),""!==this.settings.image&&"none"!==this.settings.image&&c.css({opacity:Math.abs(parseFloat(this.settings.opacity)/100),backgroundImage:u?"":"url("%2bthis.settings.image%2b")"})):"fixed"===this.settings.direction?(c.css({backgroundAttachment:"fixed",backgroundRepeat:"repeat"}),""!==this.settings.image&&"none"!==this.settings.image&&c.attr("style","background-image: url("%2bthis.settings.image%2b") !important;"+c.attr("style"))):"left"===this.settings.direction||"right"===this.settings.direction?(e=c.width()+parseInt(c.css("paddingRight"),10)+parseInt(c.css("paddingLeft"),10),s=c.height()+4+parseInt(c.css("paddingTop"),10)+parseInt(c.css("paddingBottom"),10),n=e,e+=400*Math.abs(parseFloat(this.settings.velocity)),o=0,"right"===this.settings.direction&&(o-=e-n),1>c.find(".parallax-inner").length&&c.prepend('<div class="parallax-inner"></div>'),c.css({position:"relative",overflow:"hidden",zIndex:1,"background-image":"none"}).attr("style",c.attr("style")).find(".parallax-inner").css({pointerEvents:"none",width:e,height:s,position:"absolute",zIndex:-1,top:0,left:o,opacity:Math.abs(parseFloat(this.settings.opacity)/100),backgroundPosition:t?"0 0 ":this.settings.xpos+" "+this.settings.ypos,backgroundRepeat:t?"repeat":"no-repeat",backgroundSize:t?"auto":"cover"}),""!==this.settings.image&&"none"!==this.settings.image&&(c.find(".parallax-inner").css({opacity:Math.abs(parseFloat(this.settings.opacity)/100),backgroundImage:u?"":"url("%2bthis.settings.image%2b")"}),this.setBackgroundStyling(c,m)),d=0,c.offset().top>i._fusionWindowHeight&&(d=c.offset().top-i._fusionWindowHeight),g=c.offset().top+c.height()+parseInt(c.css("paddingTop"),10)+parseInt(c.css("paddingBottom"),10),this.moveMax=e-n,this.scrollTopMin=d,this.scrollTopMax=g):(r=900,r=jQuery(i).height(),e=c.width()+parseInt(c.css("paddingRight"),10)+parseInt(c.css("paddingLeft"),10),l=s=c.height()+parseInt(c.css("paddingTop"),10)+parseInt(c.css("paddingBottom"),10),s+=r*Math.abs(parseFloat(this.settings.velocity)),h=0,"down"===this.settings.direction&&(h-=s-l),1>c.find(".parallax-inner").length&&c.prepend('<div class="parallax-inner"></div>'),c.css({position:"relative",overflow:"hidden",zIndex:1,"background-image":"none"}).attr("style",c.attr("style")).find(".parallax-inner").css({pointerEvents:"none",width:e,height:s,position:"absolute",zIndex:-1,top:h,left:0,opacity:Math.abs(parseFloat(this.settings.opacity)/100),backgroundPosition:t?"0 0 ":this.settings.xpos+" "+this.settings.ypos,backgroundRepeat:t?"repeat":"no-repeat",backgroundSize:t?"auto":"cover"}),""!==this.settings.image&&"none"!==this.settings.image&&(c.find(".parallax-inner").css({opacity:Math.abs(parseFloat(this.settings.opacity)/100),backgroundImage:u?"":"url("%2bthis.settings.image%2b")"}),this.setBackgroundStyling(c,m)),d=0,c.offset().top>i._fusionWindowHeight&&(d=c.offset().top-i._fusionWindowHeight),g=c.offset().top+c.height()+parseInt(c.css("paddingTop"),10)+parseInt(c.css("paddingBottom"),10),this.moveMax=s-l,this.scrollTopMin=d,this.scrollTopMax=g),u&&c.find(".parallax-inner").attr("data-bg",this.settings.image).addClass("lazyload"))},isMobile:function(){return cssua.ua.mobile}}),t.fn[e]=function(i){return this.each(function(){t.data(this,"plugin_"+e)||t.data(this,"plugin_"+e,new a(this,i))}),this}}(jQuery,window,document),jQuery(document).ready(function(t){"use strict";t(window).on("scroll touchmove touchstart touchend gesturechange",function(){requestAnimationFrame(_fusionParallaxAll)}),cssua.ua.mobile&&requestAnimationFrame(function(){var t;for(_fusionRefreshScroll(),t=0;t<window._fusionImageParallaxImages.length;t++)window._fusionImageParallaxImages[t].doParallax()}),t(window).on("resize",function(){setTimeout(function(){_fusionRefreshWindow(),jQuery.each(window._fusionImageParallaxImages,function(t,i){i.resizeParallaxBackground()})},1)}),setTimeout(function(){_fusionRefreshWindow(),jQuery.each(window._fusionImageParallaxImages,function(t,i){i.resizeParallaxBackground()})},1),setTimeout(function(){_fusionRefreshWindow(),jQuery.each(window._fusionImageParallaxImages,function(t,i){i.resizeParallaxBackground()})},100)}),jQuery(window).on("load",function(){setTimeout(function(){_fusionRefreshWindow(),jQuery.each(window._fusionImageParallaxImages,function(t,i){i.resizeParallaxBackground()})},1),setTimeout(function(){_fusionRefreshWindow(),jQuery.each(window._fusionImageParallaxImages,function(t,i){i.resizeParallaxBackground()})},1e3)}),jQuery(document).on("ready fusion-element-render-fusion_builder_container",function(t,i){"use strict";var e=void 0!==i?jQuery('div[data-cid="'+i+'"]').find(".fusion-bg-parallax"):jQuery(".fusion-bg-parallax");function s(){return cssua.ua.mobile}s()&&jQuery(".fusion-bg-parallax.video > div").remove(),e.next().addClass("bg-parallax-parent"),e.attr("style","").css("display","none"),e.each(function(){cssua.ua.mobile&&!jQuery(this).data("mobile-enabled")||(jQuery(this).removeData(),jQuery(this).fusionImageParallax({image:jQuery(this).data("bg-image"),imageMedium:jQuery(this).data("bg-image-medium"),imageSmall:jQuery(this).data("bg-image-small"),backgroundColor:void 0!==jQuery(this).data("bg-color")?jQuery(this).data("bg-color"):"",backgroundColorMedium:void 0!==jQuery(this).data("bg-color-medium")?jQuery(this).data("bg-color-medium"):"",backgroundColorSmall:void 0!==jQuery(this).data("bg-color-small")?jQuery(this).data("bg-color-small"):"",blendMode:void 0!==jQuery(this).data("blend-mode")?jQuery(this).data("blend-mode"):"none",blendModeMedium:void 0!==jQuery(this).data("blend-mode-medium")?jQuery(this).data("blend-mode-medium"):"",blendModeSmall:void 0!==jQuery(this).data("blend-mode-small")?jQuery(this).data("blend-mode-small"):"",direction:jQuery(this).data("direction"),mobileenabled:jQuery(this).data("mobile-enabled"),mobiledevice:s(),bgAlpha:jQuery(this).data("bg-alpha"),opacity:jQuery(this).data("opacity"),width:jQuery(this).data("bg-width"),height:jQuery(this).data("bg-height"),velocity:jQuery(this).data("velocity"),align:jQuery(this).data("bg-align"),repeat:jQuery(this).data("bg-repeat"),target:jQuery(this).next(),gradientType:void 0!==jQuery(this).data("bg-gradient-type")?jQuery(this).data("bg-gradient-type"):"",gradientAngle:void 0!==jQuery(this).data("bg-gradient-angle")?jQuery(this).data("bg-gradient-angle"):"",gradientStartColor:void 0!==jQuery(this).data("bg-gradient-start-color")?jQuery(this).data("bg-gradient-start-color"):"",gradientStartPosition:void 0!==jQuery(this).data("bg-gradient-start-position")?jQuery(this).data("bg-gradient-start-position"):"",gradientEndColor:void 0!==jQuery(this).data("bg-gradient-end-color")?jQuery(this).data("bg-gradient-end-color"):"",gradientEndPosition:void 0!==jQuery(this).data("bg-gradient-end-position")?jQuery(this).data("bg-gradient-end-position"):"",gradientRadialDirection:void 0!==jQuery(this).data("bg-radial-direction")?jQuery(this).data("bg-radial-direction"):"",complete:function(){}}))})});