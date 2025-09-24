import{a as p,S as f,i}from"./assets/vendor-CYMld6vM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m="52389108-9de8a863b1caabc6aa6df9d02",h="https://pixabay.com/api/";function g(o){return p.get(h,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function v(o){const r=o.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${t.likes}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${t.views}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${t.comments}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${t.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function b(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}const d=document.querySelector(".form"),l=d.querySelector('input[name="search-text"]');d.addEventListener("submit",w);function w(o){o.preventDefault();const r=l.value.trim();if(!r){i.warning({title:"Warning",message:"Enter a search query",position:"topRight"});return}L(),b(),l.value="",g(r).then(t=>{if(!t.hits.length){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(t.hits),i.success({title:"Success",message:`Found ${t.hits.length} images`,position:"topRight"})}).catch(()=>{i.error({title:"Error",message:"Something went wrong",position:"topRight"})}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
