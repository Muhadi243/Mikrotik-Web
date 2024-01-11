"use strict";!function(o){o.bind("preview-ready",function(){var y=document,_=window,E=document.getElementById.bind(document);o.selectiveRefresh.bind("partial-content-rendered",function(e){switch(e.partial.params.selector){case"#to-top-wrap":var s,t,i,o=E("to-top"),a=(o&&(o.addEventListener("click",function(e){e.preventDefault(),_.scroll({top:0,left:0,behavior:"smooth"})}),_.addEventListener("scroll",function(e){60<_.pageYOffset?o.classList.add("visible"):o.classList.remove("visible")}),_.dispatchEvent(new Event("scroll"))),y.querySelector("#layout > article")),n=y.querySelector("#read-progress div");a&&n&&(s=a.getBoundingClientRect(),t=s.y+_.pageYOffset,i=s.height+t,_.addEventListener("scroll",function(){var e=_.pageYOffset;t<e&&e<i?n.style.width=100*(e-t)/s.height+"%":(e<t&&(n.style.width="0%"),t<e&&(n.style.width="100%"))}),_.addEventListener("resize",function(){s=a.getBoundingClientRect(),t=s.y+_.pageYOffset,i=s.height+t}),_.dispatchEvent(new Event("scroll")));break;case"#top-wrap":E("header-affix-wrap")&&(b=E("header"),h=(u=b).offsetTop,b=u.id,w=y.getElementById("header-absolute-wrap"),L=u.getAttribute("data-bg"),g=[],(m="header"===b&&w&&L&&u.classList.contains("transparent"))&&(g=L.split(" ")),_.onscroll=function(e){_.pageYOffset>=h?u.classList.contains("affix")||(m&&p(u,g,!0),u.classList.add("affix")):u.classList.contains("affix")&&(m&&p(u,g,!1),u.classList.remove("affix")),0===_.pageYOffset&&u.classList.contains("affix")&&(m&&p(u,g,!1),u.classList.remove("affix")),this.oldScroll>this.scrollY?(u.classList.add("scrolling-up"),u.classList.remove("scrolling-down")):(u.classList.remove("scrolling-up"),u.classList.add("scrolling-down")),this.oldScroll=this.scrollY}),_.dispatchEvent(new Event("scroll"));b=E("nav_close");function r(e,s){var t=new Date,t=(t.setTime(t.getTime()+31536e6),"expires="+t.toUTCString());y.cookie=e+"="+s+";"+t+";path=/"}function c(e){if(_.exsInverse)for(var s in _.exsInverse[e])y.documentElement.style.setProperty("--"+s,_.exsInverse[e][s])}b&&b.addEventListener("click",function(){_.dispatchEvent(new Event("scroll"))}),y.body.classList.remove("top-menu-active","side-menu-active","search-dropdown-active");var l=E("toggle_inverse");l&&l.addEventListener("click",function(e){l.classList.contains("active")?(l.classList.remove("active"),c("light"),r("exs-color-inverse","0")):(l.classList.add("active"),c("dark"),r("exs-color-inverse","1"))});break;case"#preloader-wrap":var d=E("preloader");d&&setTimeout(function(){d.classList.add("loaded")},1500);break;case"#layout":if("undefined"!=typeof Masonry&&"undefined"!=typeof imagesLoaded){var v=y.querySelectorAll(".masonry");if(v.length)for(var f=0;f<v.length;f++)imagesLoaded(v[f],function(e){new Masonry(e.elements[0],{itemSelector:".grid-item",columnWidth:".grid-sizer",percentPosition:!0})})}break;case"head":jQuery("body").animate({opacity:1},500)}function p(s,e,t){var i=s.classList.contains("header-inverse");t?s.classList.contains("affix")||(i?s.classList.remove("l"):s.classList.remove("i"),e.forEach(function(e){s.classList.add(e)})):s.classList.contains("affix")&&(e.forEach(function(e){s.classList.remove(e)}),i?s.classList.add("l"):s.classList.add("i"))}var u,h,b,w,L,g,m});[{controlId:"blog_single_sidebar_position",view:"post"},{controlId:"blog_sidebar_position",view:"archive"},{controlId:"search_sidebar_position",view:"search"},{controlId:"shop_sidebar_position",view:"shop"},{controlId:"product_sidebar_position",view:"product"},{controlId:"bbpress_sidebar_position",view:"bbpress"},{controlId:"buddypress_sidebar_position",view:"buddypress"},{controlId:"events_sidebar_position",view:"events"},{controlId:"event_sidebar_position",view:"event"},{controlId:"wpjm_sidebar_position",view:"wpjm"}].forEach(function(e,s){var t,i;t=e.controlId,i=e.view,o(t,function(e){e.bind(function(e){if(i===_.exsPreviewObject.viewGlobal)switch(y.body.classList.remove("with-sidebar","sidebar-left"),e){case"left":y.body.classList.add("with-sidebar","sidebar-left");break;case"right":y.body.classList.add("with-sidebar")}})})})})}(wp.customize);