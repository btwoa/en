window.addEventListener("load",()=>{let e=document.getElementById("search-mask"),t=document.querySelector("#algolia-search .search-dialog"),i=(window.openSearch=()=>{utils.animateIn(e,"to_show 0.5s"),t.style.display="block",setTimeout(()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()},100),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(i(),document.removeEventListener("keydown",e))}),a(),window.addEventListener("resize",a)},()=>{utils.animateOut(t,"search_close .5s"),utils.animateOut(e,"to_hide 0.5s"),window.removeEventListener("resize",a)}),a=()=>{window.innerWidth<768&&t.style.setProperty("--search-height",window.innerHeight+"px")},s=(document.addEventListener("keydown",function(e){e.ctrlKey&&"k"===e.key&&(e.preventDefault(),openSearch())}),()=>{utils.addEventListenerPjax(document.querySelector("#search-button > .search"),"click",openSearch),GLOBAL_CONFIG.right_menu&&document.getElementById("menu-search").addEventListener("click",function(){rm.hideRightMenu(),openSearch();var e=document.getElementsByClassName("ais-SearchBox-input")[0],t=document.createEvent("HTMLEvents");t.initEvent("input",!0,!0),e.value=selectTextNow,e.dispatchEvent(t)})}),n=GLOBAL_CONFIG.algolia;if(!(n.appId&&n.apiKey&&n.indexName))return console.error("Algolia setting is invalid!");var o=instantsearch({indexName:n.indexName,searchClient:algoliasearch(n.appId,n.apiKey),searchFunction(e){e.state.query&&(document.getElementById("algolia-hits").innerHTML='<i class="solitude st-loading-line st-spin"></i>',e.search())}}),l=instantsearch.widgets.configure({hitsPerPage:n.hits.per_page||5}),r=instantsearch.widgets.searchBox({container:"#algolia-search-input",showReset:!1,showSubmit:!1,placeholder:GLOBAL_CONFIG.lang.search.placeholder,showLoadingIndicator:!0,searchOnEnterKeyPressOnly:!0,searchAsYouType:!1}),c=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item(e){var t=e.permalink||GLOBAL_CONFIG.root+e.path,e=e._highlightResult,i=document.querySelector("#algolia-hits .st-spin");return i&&(i.style.display="none"),setTimeout(()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()},200),`
          <a href="${t}" class="algolia-hit-item-link">
          <span class="algolia-hits-item-title">${e.title.value||"no-title"}</span>
          </a>`},empty:function(e){var t=document.querySelector("#algolia-hits .st-spin");return t&&(t.style.display="none"),setTimeout(()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()},200),'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.lang.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}}),d=instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:n.hits.per_page??5,scrollTo:!1,showFirstLast:!1,templates:{first:'<i class="solitude st-show-left-line"></i>',last:'<i class="solitude st-show-right-line"></i>',previous:'<i class="solitude st-arrow-left-bold"></i>',next:'<i class="solitude st-arrow-right-bold"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}}),h=instantsearch.widgets.stats({container:"#algolia-tips > #algolia-stats",templates:{text:function(e){return"<hr>"+GLOBAL_CONFIG.lang.search.hit.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)}}});o.addWidgets([l,r,h,c,d]),o.start(),s(),e.addEventListener("click",i),document.querySelector("#algolia-search .search-close-button").addEventListener("click",i),window.addEventListener("pjax:complete",()=>{utils.isHidden(e)||i(),s()}),window.pjax&&o.on("render",()=>{window.pjax.refresh(document.getElementById("algolia-hits"))})});