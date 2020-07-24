"use strict";$(function(){var a=void 0!==GLOBAL_CONFIG.Snackbar,o=$("#nav"),s=$("#rightside"),e=$("body"),i=$("#blog_name").width(),n=$(".menus").width(),c=$("#sidebar").width();function t(e){var t;1===e?t=i+n>o.width()-c-20:2===e&&(t=i+n>o.width()-20),t?r():(o.find(".toggle-menu").removeClass("is-visible-inline"),o.find(".menus_items").removeClass("is-invisible"),o.find("#search_button span").removeClass("is-invisible"))}function r(){o.find(".toggle-menu").addClass("is-visible-inline"),o.find(".menus_items").addClass("is-invisible"),o.find("#search_button span").addClass("is-invisible")}function d(){window.innerWidth<768?r():t(2)}function l(){$("#sidebar").removeClass("tocOpenPc"),$(".menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#sidebar").animate({left:"-300px"},400),$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"}),setTimeout(function(){t(2)},400)}function h(){$("#sidebar").addClass("tocOpenPc"),$(".menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400),$("#sidebar").animate({left:0},400),$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"});var e=window.setInterval(function(){o.hasClass("fixed")?t(1):t(2)},100);setTimeout(function(){clearInterval(e)},400)}d(),$("#nav").css({opacity:"1",animation:"headerNoOpacity 1s"}),$(window).on("resize",function(){$("#sidebar").hasClass("tocOpenPc")&&o.hasClass("fixed")?t(1):d()}),GLOBAL_CONFIG_SITE.isPost&&1024<window.innerWidth&&$("#toggle-sidebar").hasClass("on")&&setTimeout(function(){h()},400),$("#toggle-sidebar").on("click",function(){var e=$(this).hasClass("on");e?$(this).removeClass("on"):$(this).addClass("on"),e?l():h()});var u=$(".toggle-menu"),f=$("#mobile-sidebar-menus"),m=$("#mobile-toc-button"),p=$("#menu_mask");function g(e){if(sidebarPaddingR(),$("body").css("overflow","hidden"),p.fadeIn(),"menu"===e){u.removeClass("close").addClass("open"),f.css("transform","translate3d(-100%,0,0)");for(var t=f.children(),i=0;i<=t.length;i++){var a=i/5+.2;t.eq(i).css("animation","sidebarItem "+a+"s")}}"toc"===e&&(m.removeClass("close").addClass("open"),$("#sidebar").addClass("tocOpenMobile"),$("#sidebar").css({transform:"translate3d(-100%,0,0)",left:""}))}function v(e){$("body").css({overflow:"","padding-right":""}),p.fadeOut(),"menu"===e&&(u.removeClass("open").addClass("close"),f.css("transform",""),$("#mobile-sidebar-menus > div,#mobile-sidebar-menus > hr").css("animation","")),"toc"===e&&(m.removeClass("open").addClass("close"),$("#sidebar").removeClass("tocOpenMobile"),$("#sidebar").css({transform:""}))}u.on("click",function(){g("menu")}),m.on("click",function(){g("toc")}),p.on("click touchstart",function(e){u.hasClass("open")&&v("menu"),m.hasClass("open")&&v("toc")}),$(window).on("resize",function(e){u.is(":visible")||u.hasClass("open")&&v("menu")}),window.matchMedia("(max-width: 1024px)").addListener(function(e){e.matches?$("#sidebar").hasClass("tocOpenPc")&&l():($("#toggle-sidebar").hasClass("on")&&h(),m.hasClass("open")&&v("toc"))}),$("#scroll_down").on("click",function(){scrollToDest("#content-inner")}),$("#bookmark-it").on("click",function(){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print)return this.title=document.title,!0;if(a){var e=GLOBAL_CONFIG.Snackbar.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.Snackbar.bookmark.message_next+".";snackbarShow(e)}else alert(GLOBAL_CONFIG.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".")}});var b=$("figure.highlight");if(b.length){var C=GLOBAL_CONFIG.highlightCopy,w=GLOBAL_CONFIG.highlightLang,O=GLOBAL_CONFIG_SITE.isHighlightShrink;(C||w||void 0!==O)&&b.prepend('<div class="highlight-tools"></div>');var y,_,L=$(".highlight-tools");if(!0===O?L.append('<i class="fas fa-angle-down code-expand code-closed"></i>'):!1===O&&L.append('<i class="fas fa-angle-down code-expand"></i>'),$(document).on("click",".highlight-tools >.code-expand",function(){var e=$(this).parent().nextAll();$(this).hasClass("code-closed")?(e.css("display","block"),$(this).removeClass("code-closed")):(e.css("display","none"),$(this).addClass("code-closed"))}),w)b.each(function(){"plain"!==(y=_=$(this).attr("class").split(" ")[1])&&void 0!==y||(_="Code"),$(this).find(".highlight-tools").append('<div class="code-lang">'+_+"</div>")});if(C){L.append('<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>');$(document).on("click",".highlight-tools>.copy-button",function(){var e=$(this).parents("figure.highlight");e.addClass("copy-true");var t=window.getSelection(),i=document.createRange();i.selectNodeContents(e.find("table .code pre")[0]),t.removeAllRanges(),t.addRange(i);t.toString();!function(e,t){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),a?snackbarShow(GLOBAL_CONFIG.copy.success):$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0},650)},400)})}catch(e){if(!a)return $(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1},650,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0},650)},400)});snackbarShow(GLOBAL_CONFIG.copy.success)}else a?snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}(0,this),t.removeAllRanges(),e.removeClass("copy-true")})}}GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each(function(e,t){var i=$(t);if(i.attr("alt")){var a=$('<div class="img-alt is-center">'+i.attr("alt")+"</div>");i.after(a)}});var G=$(".justified-gallery"),k=!1;if(G.length){k=!0;var I=G.find("img");I.unwrap(),I.length&&I.each(function(e,t){$(t).attr("data-src")&&$(t).attr("src",$(t).attr("data-src")),$(t).wrap("<div></div>")}),$("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.justifiedGallery.css,'">')),loadScript("".concat(GLOBAL_CONFIG.justifiedGallery.js),function(){initJustifiedGallery(G)})}var A=GLOBAL_CONFIG.medium_zoom;if(GLOBAL_CONFIG.fancybox)$("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(e,t){var i=$(t).attr("data-src")?$(t).attr("data-src"):$(t).attr("src");$(t).wrap('<a href="'.concat(i,'" data-fancybox="group" data-caption="').concat($(t).attr("alt"),'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"]});else if(A){var x=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));x.on("open",function(e){var t="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";x.update({background:t})})}var B=0,F=!0,N="function"==typeof chatBtnHide,S="function"==typeof chatBtnShow;if($(window).scroll(throttle(function(e){var t,i,a=$(this).scrollTop(),n=(i=B<(t=a),B=t,i);56<a?(n?(o.hasClass("visible")&&o.removeClass("visible"),S&&!0===F&&(chatBtnHide(),F=!1)):(o.hasClass("visible")||o.addClass("visible"),N&&!1===F&&(window.chatBtnShow(),F=!0)),o.addClass("fixed"),"0"===s.css("opacity")&&s.css({opacity:"1",transform:"translateX(-38px)"})):(0===a&&o.removeClass("fixed").removeClass("visible"),s.css({opacity:"",transform:""}))},200)),$("#go-up").on("click",function(){scrollToDest("body")}),GLOBAL_CONFIG_SITE.isPost&&GLOBAL_CONFIG_SITE.isSidebar){$(".toc-child").hide(),$(window).scroll(throttle(function(e){var t=$(this).scrollTop();T(t),P(t),z(t)},100)),$(".toc-link").on("click",function(e){window.innerWidth<=1024?v("toc"):(e.preventDefault(),scrollToDest($(this).attr("href")))});var T=function(e){var t=$("#article-container").height(),i=$(window).height(),a=e/(i<t?t-i:$(document).height()-i),n=Math.round(100*a),o=100<n?100:n<=0?0:n;$(".progress-num").text(o),$(".sidebar-toc__progress-bar").animate({width:o+"%"},100)},D=GLOBAL_CONFIG.isanchor,P=function(t){if(0===$(".toc-link").length)return!1;var e=$("#article-container").find("h1,h2,h3,h4,h5,h6"),i="";e.each(function(){var e=$(this);t>e.offset().top-25&&(i="#"+$(this).attr("id"))}),""===i&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var a,n,o=$(".toc-link.active");if(i&&o.attr("href")!==i){D&&(n=i,window.history.replaceState&&n!==window.location.hash&&window.history.replaceState(void 0,void 0,n)),$(".toc-link").removeClass("active");var s=$('.toc-link[href="'+i+'"]');s.addClass("active");var c=s.parents(".toc-child"),r=0<c.length?c.last():s;(a=r.closest(".toc-item").find(".toc-child")).is(":visible")||a.fadeIn(400),r.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}},z=function(e){if($(".toc-link").hasClass("active")){var t=$(".active").offset().top,i=$("#sidebar .sidebar-toc__content").scrollTop();t>e+$(window).height()-100&&$("#sidebar .sidebar-toc__content").scrollTop(i+100),t<e+100&&$("#sidebar .sidebar-toc__content").scrollTop(i-100)}}}$("#readmode").click(function(){$("body").toggleClass("read-mode")}),$("#font_plus").click(function(){e.css("font-size",parseFloat(e.css("font-size"))+1)}),$("#font_minus").click(function(){e.css("font-size",parseFloat(e.css("font-size"))-1)}),$("#mobile-sidebar-menus .menus-expand").on("click",function(){$(this).hasClass("menus-closed")?($(this).parents(".menus_item").find(".menus_item_child").slideDown(),$(this).removeClass("menus-closed")):($(this).parents(".menus_item").find(".menus_item_child").slideUp(),$(this).addClass("menus-closed"))}),$(window).on("touchmove",function(e){var t=$("#nav .menus_item_child");t.is(":visible")&&t.css("display","none")}),$("#rightside_config").on("click",function(){$("#rightside-config-hide").hasClass("rightside-in")?$("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out"):$("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")});var E=GLOBAL_CONFIG.copyright;if(void 0!==E&&(document.body.oncopy=function(e){var t;e.preventDefault();var i=window.getSelection(0).toString();return t=45<i.length?i+"\n\n\n"+E.languages.author+"\n"+E.languages.link+window.location.href+"\n"+E.languages.source+"\n"+E.languages.info:i,e.clipboardData?e.clipboardData.setData("text",t):window.clipboardData.setData("text",t)}),$("#darkmode").click(function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),Cookies.set("theme","dark",2),a&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),Cookies.set("theme","light",2),a&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme()}),GLOBAL_CONFIG.runtime){var j=$("#webinfo-runtime-count"),R=j.attr("publish_date"),M=function(){var e=new Date(R),t=(new Date).getTime()-e.getTime(),i=Math.floor(t/864e5);j.text(i+" "+GLOBAL_CONFIG.runtime_unit)};M(),setInterval(M,1e4)}$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')}),GLOBAL_CONFIG.baiduPush&&function(){var e=document.createElement("script"),t=window.location.protocol.split(":")[0];e.src="https"===t?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(e,i)}();var q=$(".hide-button");q.length&&q.on("click",function(e){var t=$(this),i=$(this).next(".hide-content");t.toggleClass("open"),i.toggle(),t.hasClass("open")&&k&&0<i.find(".justified-gallery").length&&initJustifiedGallery(i.find(".justified-gallery"))}),$("#article-container .tabs").find(".tab button").on("click",function(e){var t=$(this),i=t.parent();if(!i.hasClass("active")){var a=t.parents(".nav-tabs").next();i.siblings(".active").removeClass("active"),i.addClass("active");var n=t.attr("data-href");a.find("> .tab-item-content").removeClass("active"),a.find("> ".concat(n)).addClass("active");var o=a.find(n).find(".justified-gallery");k&&0<o.length&&initJustifiedGallery(o)}}),$(".card-category-list-item.parent a").on("click",function(e){if($(event.target).hasClass("card-category-list-icon")){var t=$(this);return t.find(".card-category-list-icon").toggleClass("expand"),t.parent().next().toggle(),!1}});var H,J,W,Z,U=!1;if($("#switch-comments-btn").change(function(){$("#post-comment > .comment-wrap > div").each(function(){$(this).is(":visible")?$(this).hide():$(this).css({display:"block",animation:"tabshow .5s"})}),U||"function"!=typeof loadOtherComment||(U=!0,loadOtherComment())}),GLOBAL_CONFIG_SITE.isPost&&void 0!==GLOBAL_CONFIG.noticeOutdate){var X=GLOBAL_CONFIG.noticeOutdate,K=(H=GLOBAL_CONFIG_SITE.postUpdate,J=new Date,W=new Date(H.replace(/-/g,"/")),Z=J.getTime()-W.getTime(),Math.floor(Z/864e5));if(K>=X.limitDay){var Q='<div class="post-outdate-notice">'.concat(X.messagePrev+" "+K+" "+X.messageNext,"</div>");"top"===X.position?$("#article-container").prepend(Q):$("#article-container").append(Q)}}});