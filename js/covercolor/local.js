let coverColor=()=>{var e=document.getElementById("post-cover")?.src;e?localColor(e):setDefaultThemeColors()};function setDefaultThemeColors(){document.documentElement.style.setProperty("--ba-main","var(--ba-theme)"),document.documentElement.style.setProperty("--ba-main-op","var(--ba-theme-op)"),document.documentElement.style.setProperty("--ba-main-op-deep","var(--ba-theme-op-deep)"),document.documentElement.style.setProperty("--ba-main-none","var(--ba-theme-none)"),initThemeColor()}let localColor=e=>{var t=new ColorThief;let o=new Image;o.crossOrigin="Anonymous",o.onload=()=>setThemeColors(rgbToHex(t.getColor(o))),o.onerror=()=>console.error("Image Error"),o.src=e},rgbToHex=([e,t,o])=>"#"+[e,t,o].map(e=>{e=Math.floor(.8*e).toString(16);return 1===e.length?"0"+e:e}).join("");function setThemeColors(e,t=null,o=null,n=null){if(e){if(document.documentElement.style.setProperty("--ba-main",e),document.documentElement.style.setProperty("--ba-main-op",e+"23"),document.documentElement.style.setProperty("--ba-main-op-deep",e+"dd"),document.documentElement.style.setProperty("--ba-main-none",e+"00"),t&&o&&n&&Math.round((299*parseInt(t)+587*parseInt(o)+114*parseInt(n))/1e3)<125){var r=document.getElementsByClassName("card-content");for(let e=0;e<r.length;e++)r[e].style.setProperty("--ba-card-bg","var(--ba-white)");var m=document.getElementsByClassName("author-info__sayhi");for(let e=0;e<m.length;e++)m[e].style.setProperty("background","var(--ba-white-op)"),m[e].style.setProperty("color","var(--ba-white)");e=LightenDarkenColor(e,50),document.documentElement.style.setProperty("--ba-main",e),document.documentElement.style.setProperty("--ba-main-op",e+"23"),document.documentElement.style.setProperty("--ba-main-op-deep",e+"dd"),document.documentElement.style.setProperty("--ba-main-none",e+"00")}document.getElementById("coverdiv").classList.add("loaded")}else document.documentElement.style.setProperty("--ba-main","var(--ba-theme)"),document.documentElement.style.setProperty("--ba-main-op","var(--ba-theme-op)"),document.documentElement.style.setProperty("--ba-main-op-deep","var(--ba-theme-op-deep)"),document.documentElement.style.setProperty("--ba-main-none","var(--ba-theme-none)");initThemeColor()}