"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6521],{6521:(y,a,i)=>{i.r(a),i.d(a,{ion_input_password_toggle:()=>s});var r=i(8737),d=i(4929),u=i(333),c=i(3992),p=i(694);const s=class{constructor(n){(0,r.r)(this,n),this.togglePasswordVisibility=()=>{const{inputElRef:e}=this;e&&(e.type="text"===e.type?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(n){"text"===n||"password"===n||(0,d.p)(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${n}" is not compatible.`,this.el)}connectedCallback(){const{el:n}=this,e=this.inputElRef=n.closest("ion-input");e?this.type=e.type:(0,d.p)("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",n)}disconnectedCallback(){this.inputElRef=null}render(){var n,e;const{color:l,type:b}=this,f=(0,p.b)(this),P=null!==(n=this.showIcon)&&void 0!==n?n:c.x,E=null!==(e=this.hideIcon)&&void 0!==e?e:c.y,g="text"===b;return(0,r.h)(r.f,{key:"d9811e25bfeb2aa197352bb9be852e9e420739d5",class:(0,u.c)(l,{[f]:!0})},(0,r.h)("ion-button",{key:"1eaea1442b248fb2b8d61538b27274e647a07804",mode:f,color:l,fill:"clear",shape:"round","aria-checked":g?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:w=>{w.preventDefault()},onClick:this.togglePasswordVisibility},(0,r.h)("ion-icon",{key:"9c88de8f4631d9bde222ce2edf6950d639e04773",slot:"icon-only","aria-hidden":"true",icon:g?E:P})))}get el(){return(0,r.i)(this)}static get watchers(){return{type:["onTypeChange"]}}};s.style={ios:"",md:""}},333:(y,a,i)=>{i.d(a,{c:()=>u,g:()=>p,h:()=>d,o:()=>_});var r=i(467);const d=(o,t)=>null!==t.closest(o),u=(o,t)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},t):t,p=o=>{const t={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(o).forEach(s=>t[s]=!0),t},h=/^[a-z][a-z0-9+\-.]*:/,_=function(){var o=(0,r.A)(function*(t,s,n,e){if(null!=t&&"#"!==t[0]&&!h.test(t)){const l=document.querySelector("ion-router");if(l)return null!=s&&s.preventDefault(),l.push(t,n,e)}return!1});return function(s,n,e,l){return o.apply(this,arguments)}}()}}]);