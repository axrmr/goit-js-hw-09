!function(){var t=function(t){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))},o={startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]"),colorSwitcherTimeoutId:null};o.startButton.addEventListener("click",(function(e){var n=document.body;t(n),o.colorSwitcherTimeoutId=setInterval((function(){t(n)}),1e3),o.startButton.disabled=!0,o.stopButton.disabled=!1})),o.stopButton.addEventListener("click",(function(t){clearTimeout(o.colorSwitcherTimeoutId),o.stopButton.disabled=!0,o.startButton.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.15bc39c8.js.map