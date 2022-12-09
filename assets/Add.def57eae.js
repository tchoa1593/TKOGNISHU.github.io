import{L as I}from"./Load.f836c773.js";import{F as L,a as S}from"./FormCheck.a09b7fe6.js";import{_ as G,u as C,G as A,l as F,F as T,r as h,o as r,c as i,j as m,a as e,e as o,w as _,m as V,v as N,b as p,d as R,f as g,t as f,g as w}from"./index.0339631f.js";import{G as y}from"./group.service.173483cb.js";const D={components:{Load:I,FormControl:L,FormCheck:S},setup(){const t=C();return{getUser:()=>t.getUser,isAdmin:()=>t.isAdmin,logIn:t.logIn}},data(){return{isShow:!1,isLoad:!1,genres:[],countries:[],srcImgIsAdd:{},searchValue:"",searchResults:[],group:{}}},watch:{async searchValue(t,s,u){if(t.trim().length>0)try{this.searchResults=await y.getElementsByName(t),this.isLoad=!this.searchResults[0]}catch(d){console.log(d)}else this.isLoad=!1,this.searchResults=[]}},methods:{async retrieveData(){await Promise.all([A.getAll(),F.getAll()]).then(([t,s])=>{this.genres=t,this.countries=s})},updateSrc(t,s){this.srcImgIsAdd[s]=t},async submit(t){alert("save");const s=document.getElementById("form1"),u=new FormData(s);this.isShow=!0,await T.create(u).then(()=>console.log("Save film is successfully!")).catch(d=>d),this.isShow=!1},chooseGroup(t){this.searchValue="",this.group={_id:t.target.dataset.id,name:t.target.innerText},this.searchResults=[]},deleteGroup(t){this.group={}},async addGroup(t){await y.create({name:this.searchValue}).then(s=>{this.isLoad=!1,this.group=s}).catch(s=>s)}},async created(){await this.retrieveData()}},j={class:"row justify-content-between"},B={class:"col-4"},U={class:"show-image"},E=["src"],M={class:"show-background"},P=["src"],Q={class:"col-7 border-start border-light"},q={class:"row justify-content-between"},z={class:"col-sm-5"},K={class:"col-sm-5"},O={class:"row justify-content-between"},H={class:"col-sm-5"},J={class:"col-sm-5"},W={class:"row justify-content-between"},X={class:"col-sm-5"},Y={class:"col-sm-5"},Z=e("div",{class:"row mb-3 align-items-center"},[e("label",{for:"note",class:"col-sm-5 col-form-label"},"Ghi ch\xFA"),e("div",{class:"col-sm-4"},[e("textarea",{name:"note",id:"note",rows:"2"})])],-1),$={class:"row mb-3 align-items-center"},ee=e("label",{for:"searchGroup",class:"col-sm-5 col-form-label"},"T\xEAn nh\xF3m cho anime",-1),se={class:"col-sm-7"},te={class:"row align-items-center"},oe={class:"col-sm-10"},ae={class:"row position-relative"},le={class:"col-12 list-group list-group-flush ms-2 mt-1 position-absolute top-0 left-0 border border-1 border-secondary rounded bg-light search-items",style:{"z-index":"1000"}},ne={class:"list-group-item text-truncate"},ce=["data-id"],re={key:1,class:"spinner-border text-secondary",role:"status"},ie=e("span",{class:"visually-hidden"},"Loading...",-1),de=[ie],he=e("i",{class:"fa-solid fa-circle-plus"},null,-1),me=[he],ue={class:"row align-items-center w-100 form-check form-check-inline group-field"},_e={class:"col-1"},pe=["value"],ge={class:"col-8 form-check-label LabelGroupId",for:""},we=e("i",{class:"fa-solid fa-xmark"},null,-1),be=[we],fe=e("div",{class:"text-center"},[e("button",{type:"submit",class:"btn btn-primary"},"Add")],-1),ye={key:1,class:"row mt-3"},ve={class:"text-center fs-4 text-light"},xe=w("Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 n\xE0o! Quay l\u1EA1i "),ke=w("Trang Ch\u1EE7"),Ie=w("?");function Le(t,s,u,d,l,c){const n=h("FormControl"),b=h("FormCheck"),v=h("router-link"),x=h("load");return r(),i(p,null,[d.isAdmin()?(r(),i("form",{key:0,class:"container-fluid mt-3 w-75 text-light fs-4",onSubmit:s[6]||(s[6]=m((...a)=>c.submit&&c.submit(...a),["prevent"])),action:"/save",method:"POST",name:"form-submit",id:"form1"},[e("div",j,[e("div",B,[o(n,{label:"\u1EA2nh ch\xEDnh",name:"image",type:"file","onCreate:src":s[0]||(s[0]=a=>c.updateSrc(a,"show-image"))},{default:_(()=>[e("div",U,[e("img",{src:l.srcImgIsAdd["show-image"],style:{height:"120px","max-width":"300px"},alt:""},null,8,E)])]),_:1}),o(n,{label:"N\u1EC1n",name:"background",type:"file","onCreate:src":s[1]||(s[1]=a=>c.updateSrc(a,"show-background"))},{default:_(()=>[e("div",M,[e("img",{src:l.srcImgIsAdd["show-background"],style:{height:"200px","max-width":"300px"},alt:""},null,8,P)])]),_:1})]),e("div",Q,[o(n,{label:"T\xEAn anime",name:"name",type:"text",class:"anime-name"}),o(n,{label:"T\xEAn kh\xE1c",name:"otherName",type:"text",class:"anime-name"}),o(n,{label:"M\xF4 t\u1EA3",name:"description",type:"textarea",cols:"60",rows:"2"}),e("div",q,[e("div",z,[o(n,{label:"N\u0103m ph\xE1t h\xE0nh",name:"year",type:"number",value:"2022",wLabel:"5",wInput:"7"})]),e("div",K,[o(n,{label:"L\u1ECBch chi\u1EBFu",name:"schedule",type:"text",class:"w-100",wLabel:"2",wInput:"8"})])]),e("div",O,[e("div",H,[o(n,{label:"T\u1ED5ng s\u1ED1 t\u1EADp d\u1EF1 ki\u1EBFn",name:"length",type:"number",class:"w-100",wLabel:"8",wInput:"4"})]),e("div",J,[o(n,{label:"Nh\xE0 s\u1EA3n xu\u1EA5t",name:"producer",type:"text",class:"w-100",wLabel:"4",wInput:"8"})])]),e("div",W,[e("div",X,[o(n,{label:"Th\u1EDDi l\u01B0\u1EE3ng",name:"time",type:"text",class:"w-100",wLabel:"8",wInput:"4"})]),e("div",Y,[o(n,{label:"Ph\u1EA7n",name:"part",type:"text",class:"w-100",wLabel:"4",wInput:"8"})])]),o(b,{label:"Qu\u1ED1c gia",name:"countryId",type:"radio",wLabel:"2",wInput:"8",data:l.countries},null,8,["data"]),o(b,{label:"Th\u1EC3 lo\u1EA1i",name:"genreId[]",type:"checkbox",wLabel:"2",wInput:"8",data:l.genres},null,8,["data"]),Z,e("div",$,[ee,e("div",se,[e("div",te,[e("div",oe,[V(e("input",{class:"w-100",type:"text",name:"searchGroup",placeholder:"Nh\u1EADp t\xEAn nh\xF3m c\u1EA7n t\xECm","onUpdate:modelValue":s[2]||(s[2]=a=>l.searchValue=a)},null,512),[[N,l.searchValue]]),e("div",ae,[e("ul",le,[l.searchResults?(r(!0),i(p,{key:0},R(l.searchResults,(a,Se)=>(r(),i("li",ne,[e("a",{onClick:s[3]||(s[3]=m((...k)=>c.chooseGroup&&c.chooseGroup(...k),["prevent"])),href:"#","data-id":a._id,class:"text-secondary text-decoration-none"},f(a.name),9,ce)]))),256)):g("",!0),l.isLoad?(r(),i("div",re,de)):g("",!0)])])]),e("a",{onClick:s[4]||(s[4]=m((...a)=>c.addGroup&&c.addGroup(...a),["prevent"])),class:"col-sm-1 text-info plus-icon",href:"#"},me)]),e("div",ue,[l.group._id?(r(),i(p,{key:0},[e("div",_e,[e("input",{class:"form-check-input",name:"groupId",type:"radio",value:l.group._id,checked:"checked"},null,8,pe)]),e("label",ge,f(l.group.name),1),e("a",{onClick:s[5]||(s[5]=m((...a)=>c.deleteGroup&&c.deleteGroup(...a),["prevent"])),href:"#",class:"col-1 text-danger unchecked-group"},be)],64)):g("",!0)])])])])]),fe],32)):(r(),i("section",ye,[e("h3",ve,[xe,o(v,{to:"/"},{default:_(()=>[ke]),_:1}),Ie])])),o(x,{isShow:l.isShow},null,8,["isShow"])],64)}const Te=G(D,[["render",Le]]);export{Te as default};
