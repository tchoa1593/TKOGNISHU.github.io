import{L as i}from"./Load.26a0632f.js";import{_ as d,u as m,A as h,r as u,o as f,c as _,a as e,j as p,e as g,b as w}from"./index.38b2b56d.js";const S={components:{Load:i},setup(){const t=m();return{store:t,getUser:()=>t.getUser,logIn:t.logIn}},data(){return{isShow:!1,src:""}},methods:{async submit(){const t=document.getElementById("profile"),s=new FormData(t);for(let[r,o]of s)switch(r){case"name":if(o=o.trim(),o.length==0){alert("T\xEAn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!");return}break}try{this.isShow=!0,await h.update(this.getUser()._id,s),this.logIn(),this.isShow=!1}catch(r){this.isShow=!1,console.log(r),alert("C\xF3 l\u1ED7i!")}},setSrc(t){this.isShow=!0,this.src=this.createSrc(t),this.isShow=!1},createSrc(t){const s=t.target;if(s.type=="file"){let r="";for(let o=0;o<s.files.length;o++)r=URL.createObjectURL(s.files[o]);return r}}}},b={class:"row row-cols-1 row-cols-md-2"},v={class:"col col-md-3 ms-3"},x={for:"avatar",class:"d-block m-auto text-center text-light cursor-pointer square-120 avatar"},y=["src"],U=e("p",{class:"border p-2 rounded"},"Ch\u1ECDn \u1EA3nh",-1),k={class:"col py-4 text-light fs-4"},L={class:"mb-3 row"},I=e("label",{for:"name",class:"col-sm-3 col-form-label"},"T\xEAn t\xE0i kho\u1EA3n",-1),B={class:"col-sm-9"},C=["value"],j=e("div",{class:"mx-auto mb-5"},[e("button",{class:"btn btn-primary fs-4 px-4"},"L\u01B0u")],-1);function A(t,s,r,o,a,l){const c=u("Load");return f(),_(w,null,[e("form",{onSubmit:s[1]||(s[1]=p((...n)=>l.submit&&l.submit(...n),["prevent"])),class:"d-flex flex-column bg-dark rounded",action:"",method:"POST",enctype:"multipart/form-data",id:"profile"},[e("div",b,[e("section",v,[e("label",x,[e("img",{src:a.src?a.src:o.getUser().image,class:"w-100 h-100 rounded-circle p-3 object-fit",alt:""},null,8,y),U]),e("input",{onChange:s[0]||(s[0]=(...n)=>l.setSrc&&l.setSrc(...n)),class:"d-none",name:"image",type:"file",id:"avatar"},null,32)]),e("section",k,[e("div",L,[I,e("div",B,[e("input",{type:"text",class:"form-control fs-4",name:"name",id:"name",value:o.getUser().name,required:""},null,8,C)])])])]),j],32),g(c,{isShow:a.isShow,"onUpdate:isShow":s[2]||(s[2]=n=>a.isShow=n)},null,8,["isShow"])],64)}const D=d(S,[["render",A]]);export{D as default};
