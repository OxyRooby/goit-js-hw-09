const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),l=document.querySelector("button[data-stop]"),n=document.querySelector(".wrap");let r;n.style.display="flex",n.style.gap="20px",n.style.justifyContent="center",e.style.padding="18px 36px",e.style.fontSize="36px",l.style.padding="18px 36px",l.style.fontSize="36px",e.addEventListener("click",(()=>{clearInterval(r),r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),l.addEventListener("click",(()=>{clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.7250eb7d.js.map