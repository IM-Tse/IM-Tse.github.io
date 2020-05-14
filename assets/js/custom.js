/**
 * 搜索框样式修改 Start
 */
let search_result = $("#search-result");
let search_input = $(".search-input");
let search_popup = $(".search-popup");
search_result.hide();
search_popup.css("height", "auto");

search_input.on("input propertychange", function() {
    if(search_input.val() == ""){
        search_result.hide();
        search_popup.css("height", "auto");
    }else{
        search_result.show();
        search_popup.css("height", "80%");
    }
});
/**
 * 搜索框样式修改 End
 */


/**
 * 动态标题 Start
 */
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr('href', "/TEP.png");
        document.title = 'w(ﾟДﾟ)w 404 Not Found ！！！！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="shortcut icon"]').attr('href', "/favicon.png");
        document.title = '♪(^∇^*) ' + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});
/**
 * 动态标题 End
 */



/**
 * 鼠标点击事件 Start
 */
// 显示爱心
// !function (e, t, a) { function n() { c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r() } function r() { for (var e = 0; e < d.length; e++)d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y-- , d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999"); requestAnimationFrame(r) } function o() { var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { t && t(), i(e) } } function i(e) { var a = t.createElement("div"); a.className = "heart", d.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: s() }), t.body.appendChild(a) } function c(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function s() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var d = []; e.requestAnimationFrame = function () { return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) } }(), n() }(window, document);

// 显示社会主义核心价值观
!function(){"use strict";var t="",e=[18,25],n=1500,o=388;if(-1==window.location.href.search("/graph.qq.com/")){if("undefined"==typeof jQuery){var a=document.createElement("script");a.src="https://code.jquery.com/jquery-latest.js",a.charset="utf-8",a.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(a)}setTimeout(function(){!function(){try{$(document).ready(function(){})}catch(t){return}var a=0;$("html").click(function(r){var c=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"),i=$("<span/>").text(c[a]);a=(a+1)%c.length;var s=r.pageX,u=r.pageY,p="#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6);t.length>=4&&(p=t);var l=Math.random()*(e[1]-e[0])+e[0];l+="px",i.css({"z-index":99999,top:u-30,left:s,position:"absolute","font-weight":"bold","font-size":l,color:p}),$("html").append(i),i.animate({top:u-o,opacity:0},n,function(){i.remove()})})}()},777)}else console.log("error")}();

/**
 * 鼠标点击事件 End
 */


$(".post-body").find("a").not(".btn").not(".category-list-link").css({
    "color": "#007bff",
    "border-bottom-color": "#007bff"
})

$(".tag-cloud-tags").find("a").css({
    "border-bottom": "1px solid #999",
    "color": "#555"
})
