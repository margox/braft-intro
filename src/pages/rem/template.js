export default (content) => {

  const script = '!function(e){function h(){var a=f.getBoundingClientRect().width;375<a/b&&(a=375*b);a/=16;f.style.fontSize=a+"px";e.rem=a}function k(a,b,c,e){var d;return function(){var f=e||this,g=arguments,h=c&&!d;clearTimeout(d);d=setTimeout(function(){d=null;c||a.apply(f,g)},b);h&&a.apply(f,g)}}var b,a,d,c=e.document,g=e.navigator,f=c.documentElement,i=c.querySelector(\'meta[name="viewport"]\');d=c.querySelector(\'meta[name="flexible"]\');i?(d=i.getAttribute("content").match(/initial\-scale=(["\']?)([\d\.]+)\\1?/))&&(a=parseFloat(d[2]),b=parseInt(1/a)):d&&(d=d.getAttribute("content").match(/initial\-dpr=(["\']?)([\d\.]+)\\1?/))&&(b=parseFloat(j[2]),a=parseFloat((1/b).toFixed(2)));!b&&!a&&(b=e.devicePixelRatio,b=g.appVersion.match(/android/gi)||g.appVersion.match(/iphone/gi)?3<=b?3:2<=b?2:1:1,a=1/b);f.setAttribute("data-dpr",b);i||(a=\'<meta name="viewport" content="width=device-width, initial-scale=\'+a+", maximum-scale="+a+", minimum-scale="+a+\', user-scalable=no" />\',f.firstElementChild?(g=c.createElement("div"),g.innerHTML=a,f.firstElementChild.appendChild(g.firstChild)):c.write(a));e.dpr=b;e.addEventListener("resize",k(h,50),!1);e.addEventListener("pageshow",k(function(a){a.persisted&&h()},300),!1);"complete"===c.readyState?c.body.style.fontSize=12*b+"px":c.addEventListener("DOMContentLoaded",function(){c.body.style.fontSize=12*b+"px"},!1);h()}(window);'

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>演示页面</title>
  <script>${script}</script>
  <style>
    html,body{
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: auto;
      background-color: #f1f2f3;
    }
    .container{
      box-sizing: border-box;
      width: 100%;
      max-width: 16rem;
      min-height: 100%;
      margin: 0 auto;
      padding: 0.64rem;
      overflow: hidden;
      background-color: #fff;
      border-right: solid 1px #eee;
      border-left: solid 1px #eee;
      font-size: 0.597333rem;
    }
    .container img,
    .container audio,
    .container video{
      max-width: 100%;
      height: auto;
    }
    .container p{
      white-space: pre-wrap;
      min-height: 1em;
    }
    .container pre{
      padding: 0.32rem;
      background-color: #f1f1f1;
      border-radius: 5px;
    }
    .container blockquote{
      margin: 0;
      padding: 0.32rem;
      background-color: #f1f1f1;
      border-left: 0.064rem solid #d1d1d1;
    }
  </style>
</head>
<body ontouchstart>
  <div class="container">${content}</div>
</body>
</html>
`
}