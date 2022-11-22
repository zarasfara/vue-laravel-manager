import{L as x}from"./Layout.d136807d.js";import{j as b,e as _,w as y,d as w,o as l,b as e,c as d,k as i,v as u,t as n,h as m,l as v}from"./app.0c45ca61.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import"./AppHeader.e1cfbb2b.js";const k={name:"DashBoard",data(){return{status:!1}},props:["errors","user"],components:{Layout:x},setup(a){return{form:b({nickname:a.user.nickname,surname:a.user.surname,name:a.user.name,email:a.user.email,avatar:null,_method:"PUT"})}},methods:{previewImageUpload(a){if(a.target.files.length>0){let t=URL.createObjectURL(a.target.files[0]),r=document.getElementById("uploadedImage");r.src=t}}},mounted(){this.status=!0}},p={class:"overflow-hidden w-fit"},C=["src"],L={key:1,class:"flex justify-center items-center animate-pulse w-36 h-36 bg-gray-300 rounded-full sm:w-96"},U=e("svg",{class:"w-12 h-12 text-gray-200",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 640 512"},[e("path",{d:"M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"})],-1),B=[U],I={class:"desktop:ml-4 p-2 py-0 flex w-full flex-wrap"},V={class:"w-2/4 px-1.5"},j=e("label",{for:"first_name",class:"block mt-0 text-sm font-medium text-gray-900"},"\u0418\u043C\u044F",-1),D={key:0,class:"text-red-500 text-sm text-sm"},M=e("label",{for:"second_name",class:"block text-sm font-medium text-gray-900 mt-2"},"\u0424\u0430\u043C\u0438\u043B\u0438\u044F",-1),z={key:1},E={class:"w-2/4 px-1.5"},N=e("label",{for:"second_name",class:"block text-sm font-medium text-gray-900"},"\u041D\u0438\u043A ",-1),R={key:0,class:"text-red-500 text-sm"},S=e("label",{for:"email",class:"block text-sm font-medium text-gray-900 mt-2"},"\u041F\u043E\u0447\u0442\u0430 ",-1),T={key:1,class:"text-red-500 text-sm"},F={class:"flex px-1.5"},H=e("label",{for:"upload-image",class:"block w-full text-sm text-white cursor-pointer py-2 px-4 mt-2 rounded border-0 text-center text-sm font-semibold bg-emerald-400 hover:bg-emerald-500 mr-2"}," \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ",-1),O={key:0},P=["disabled"];function q(a,t,r,s,f,c){const g=w("Layout");return l(),_(g,null,{default:y(()=>[e("form",{onSubmit:t[6]||(t[6]=v(o=>s.form.post(a.route("update-user")),["prevent"])),class:"flex justify-around"},[e("div",p,[f.status?(l(),d("img",{key:0,id:"uploadedImage",class:"rounded-full w-36",src:r.user.avatar,alt:"user_image"},null,8,C)):(l(),d("div",L,B))]),e("div",I,[e("div",V,[j,i(e("input",{type:"text",id:"first_name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded leading-4 focus:ring-emerald-300 focus:border-emerald-300 block w-full p-2.5","onUpdate:modelValue":t[0]||(t[0]=o=>s.form.name=o)},null,512),[[u,s.form.name]]),r.errors.name?(l(),d("div",D,n(r.errors.name),1)):m("",!0),M,i(e("input",{type:"text",id:"first_name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded leading-4 focus:ring-emerald-300 focus:border-emerald-300 block w-full p-2.5","onUpdate:modelValue":t[1]||(t[1]=o=>s.form.surname=o)},null,512),[[u,s.form.surname]]),r.errors.surname?(l(),d("div",z,n(r.errors.surname),1)):m("",!0)]),e("div",E,[N,i(e("input",{type:"text",id:"nickname",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded leading-4 focus:ring-emerald-300 focus:border-emerald-300 block w-full p-2.5","onUpdate:modelValue":t[2]||(t[2]=o=>s.form.nickname=o)},null,512),[[u,s.form.nickname]]),r.errors.name?(l(),d("div",R,n(r.errors.nickname),1)):m("",!0),S,i(e("input",{type:"text",id:"nickname",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded leading-4 focus:ring-emerald-300 focus:border-emerald-300 block w-full p-2.5","onUpdate:modelValue":t[3]||(t[3]=o=>s.form.email=o)},null,512),[[u,s.form.email]]),r.errors.name?(l(),d("div",T,n(r.errors.email),1)):m("",!0)]),e("div",F,[H,e("input",{id:"upload-image",type:"file",class:"hidden",onInput:t[4]||(t[4]=o=>s.form.avatar=o.target.files[0]),onChange:t[5]||(t[5]=(...o)=>c.previewImageUpload&&c.previewImageUpload(...o))},null,32),r.errors.name?(l(),d("div",O,n(r.errors.avatar),1)):m("",!0),e("button",{class:"block w-full text-sm text-white cursor-pointer py-2 px-4 mt-2 rounded border-0 text-center text-sm font-semibold bg-emerald-400 hover:bg-emerald-500",disabled:s.form.processing,type:"submit"},"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C ",8,P)])])],32)]),_:1})}const Q=h(k,[["render",q]]);export{Q as default};
