!function(){var t,e=document.querySelector("body"),n=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),a=document.querySelector(".wrap");a.style.display="flex",a.style.gap="20px",a.style.justifyContent="center",n.style.padding="18px 36px",n.style.fontSize="36px",o.style.padding="18px 36px",o.style.fontSize="36px",n.addEventListener("click",(function(){clearInterval(t),t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),o.addEventListener("click",(function(){clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.beb9b368.js.map