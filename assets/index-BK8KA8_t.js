(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=u(e);fetch(e.href,o)}})();document.querySelector("#app").innerHTML=`
    <button class="show-modal">Show modal 1</button>
		<button class="show-modal">Show modal 2</button>
		<button class="show-modal">Show modal 3</button>
		<div class="modal hidden">
		  <button class="close-modal">&times;</button>
		  <h1>I'm a modal window 😍</h1>
		  <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
		</div>
		<div class="overlay hidden"></div>
`;const i=document.querySelector(".modal"),n=document.querySelector(".overlay"),c=document.querySelector(".close-modal"),a=document.querySelectorAll(".show-modal"),d=function(){i.classList.add("hidden"),n.classList.add("hidden")},m=function(){i.classList.remove("hidden"),n.classList.remove("hidden")};a.forEach(t=>t.addEventListener("click",m));c.addEventListener("click",d);n.addEventListener("click",d);console.log(i,n,c,a);document.addEventListener("keydown",f);function f(t){t.key==="Escape"&&!i.classList.contains("hidden")&&d()}
