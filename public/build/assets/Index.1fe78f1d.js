import{L as l}from"./Layout.e72c5d70.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as n,o as i,e as d,w as m,b as e,t as u,f as r}from"./app.fd5f30ee.js";import"./AppHeader.1312ec7b.js";document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("filter-more"),o=document.getElementById("filter-switcher"),t=document.getElementById("switcher-active-tasks");o.addEventListener("click",function(){s.classList.toggle("hidden"),s.classList.toggle("scale-up-center")}),t.addEventListener("click",()=>{document.querySelector(".projects-tasks__list").classList.toggle("hidden"),document.querySelector(".projects-tasks__list").classList.toggle("h-0")})});const p={name:"Index",props:{user:Object},components:{Layout:l}},b=e("section",{class:"main-block w-4/5 mr-2 bg-white rounded-md p-2 px-3 border border-gray-200"},[e("div",{class:"breadcrumb-container rounded mb-4"},[e("ol",{class:"list-none flex"},[e("li",{class:"text-slate-500 breadcrumb-item"},[e("a",{href:"#"},"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),e("span",{class:"mx-1"},"/")]),e("li",{class:"text-slate-500 breadcrumb-item"},[e("a",{href:"#"},"\u0417\u0430\u0434\u0430\u0447\u0438")])])]),e("div",{class:"statuses-list flex mb-3"},[e("div",{class:"p-1 px-2 rounded-md flex items-center cursor-pointer border border-gray-300 relative"},[e("div",{id:"filter-switcher",class:"flex items-center"},[e("span",{class:"mr-2 select-none"},"\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F"),e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20"},[e("path",{d:"M9.5 16q-.208 0-.354-.146T9 15.5v-4.729L4.104 4.812q-.187-.25-.052-.531Q4.188 4 4.5 4h11q.312 0 .448.281.135.281-.052.531L11 10.771V15.5q0 .208-.146.354T10.5 16Zm.5-6.375L13.375 5.5H6.604Zm0 0Z"})])]),e("form",{id:"filter-more",class:"bg-white rounded-md w-fit border border-gray-300 p-2 absolute top-10 w-200px hidden left-0 select-none"},[e("label",{class:"block"},[e("span",{class:"text-gray-700"},"\u0421\u0442\u0430\u0442\u0443\u0441\u044B"),e("select",{class:"block mt-1 rounded cursor-pointer"},[e("option",null,"\u0412\u0441\u0435"),e("option",null,"\u041D\u043E\u0432\u044B\u0435"),e("option",null,"Birthday"),e("option",null,"Other")])])])])]),e("hr"),e("div",{class:"projects-list mt-4"},[e("div",{class:"projects-item p-2 border-l-2 mt-8 border-gray-300 rounded-l"},[e("div",{class:"projects-item__header flex justify-between"},[e("div",{class:"w-2/5"},[e("p",{class:"font-bold"},[r("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 / "),e("a",{class:"text-emerald-500",href:"#"},"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430")]),e("div",{class:"task-item__description mt-1.5 flex items-center text-sm"},[e("p",{class:"expiration-date"},"\u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0434\u043E: 20.08.2002"),e("p",{class:"ml-3"},"\u0421\u0442\u0430\u0442\u0443\u0441: Active")])]),e("div",{class:"w-2/5"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex, excepturi exercitationem, fugiat id molestiae nulla reiciendis sed soluta, tenetur vel vero voluptas voluptates! Debitis error et maiores molestiae veniam. ")]),e("div",{id:"project-task",class:"mt-3"},[e("button",{id:"switcher-active-tasks",class:"text-emerald-500 cursor-pointer"},"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 - 1 "),e("div",{class:"projects-tasks__list hidden scale-up-hor-left h-0"},[e("div",{class:"active-task mt-1 ml-1.5 p-1.5 rounded border border-dashed border-rose-300 flex items-center justify-between max-h-7"},[e("div",{class:"flex"},[e("form",{class:"mr-2",action:""},[e("input",{id:"default-checkbox",type:"checkbox",value:"",class:"w-4 h-4 rounded border-gray-300"})]),e("p",null,"\u0414\u043E\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 \u0441\u0432\u044F\u0437\u0430\u043D\u0443\u044E \u0441 \u0447\u0435\u043C \u0442\u043E")]),e("form",{id:"task-change-status",action:""},[e("select",{id:"underline_select",class:"cursor-pointer w-40 block py-2.5 px-0 w-100 text-sm text-black bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"},[e("option",{selected:""},"Choose a country"),e("option",{value:"US"},"United States"),e("option",{value:"CA"},"Canada"),e("option",{value:"FR"},"France"),e("option",{value:"DE"},"Germany")])])]),e("div",{class:"active-task mt-1 ml-1.5 p-1.5 rounded border border-dashed border-rose-300 flex items-center justify-between max-h-7"},[e("div",{class:"flex"},[e("form",{class:"mr-2",action:""},[e("input",{id:"default-checkbox",type:"checkbox",value:"",class:"w-4 h-4 rounded border-gray-300"})]),e("p",null,"\u0414\u043E\u0434\u0435\u043B\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 \u0441\u0432\u044F\u0437\u0430\u043D\u0443\u044E \u0441 \u0447\u0435\u043C \u0442\u043E")]),e("form",{id:"task-change-status",action:""},[e("select",{id:"underline_select",class:"cursor-pointer w-40 block py-2.5 px-0 w-100 text-sm text-black bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"},[e("option",{selected:""},"Choose a country"),e("option",{value:"US"},"United States"),e("option",{value:"CA"},"Canada"),e("option",{value:"FR"},"France"),e("option",{value:"DE"},"Germany")])])])])])])])],-1),f={class:"w-1/4"},x={class:"bg-white mb-3 rounded-md p-2 px-4 flex justify-center flex-col text-base border border-gray-200"},h=r("\u041F\u0440\u0438\u0432\u0435\u0442, "),v={class:"font-bold"},g=e("div",{class:"flex mt-3 w-80"},[e("p",null,"\u0421\u0435\u0441\u0441\u0438\u044F: \u041D\u0435 \u043D\u0430\u0447\u0430\u0442\u0430"),e("form",{class:"ml-2 flex items-center",action:""},[e("button",{type:"submit",class:"p-0.5 px-2 bg-emerald-400 text-white rounded"},"\u041D\u0430\u0447\u0430\u0442\u044C")])],-1),y=e("div",{class:"bg-white rounded-md p-2 pb-8 border border-gray-200"},[e("div",{class:"flex"},[e("form",{class:"flex items-center",action:""},[e("input",{placeholder:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",class:"rounded border border-gray-300 h-8 mr-3 placeholder:text-base",type:"text"}),e("button",{class:"bg-emerald-400 rounded text-white p-1 px-2 h-8 focus:bg-emerald-500",type:"submit"}," \u041F\u043E\u0438\u0441\u043A ")])]),e("div",null,[e("div",{class:"text-center mt-4"},[e("h3",{class:"text-lg"},"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")]),e("div",{class:"comments-list mt-3"},[e("div",{class:"comments-item"},[e("div",{class:"comments-header"},[e("div",{class:"text-sm comment-message mr-2 font-bold"},[e("span",{class:"mr-3"},"Evgeniy Osipov"),e("span",{class:"text-gray-400 font-thin"},"10.23.2233")]),e("div",{class:"text-sm mt-3 border-b border-gray-300 break-words pb-3"},[e("p",null,[r("!!!Can you send this over to the marketing department qwe qwe query / "),e("a",{href:"#",class:"text-emerald-500 font-bold"},"task project")])])])])])])],-1);function w(s,o,t,_,k,L){const a=n("Layout");return i(),d(a,null,{default:m(()=>[b,e("aside",f,[e("div",x,[e("p",null,[h,e("span",v,u(t.user?t.user.name:"anonymous"),1)]),g]),y])]),_:1})}const S=c(p,[["render",w]]);export{S as default};
