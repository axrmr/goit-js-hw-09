const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.body;let o=null;function n(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,o=setTimeout(n,1e3)}t.addEventListener("click",(function(d){n(),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(d){clearTimeout(o),e.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.99f85976.js.map
