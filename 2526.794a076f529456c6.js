"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2526],{2526:(e,a,o)=>{o.r(a),o.d(a,{HomePageModule:()=>j});var u=o(177),r=o(3819),m=o(4341),M=o(8986),_=o(4438);let p=(()=>{var n;class l{constructor(){}ngOnInit(){}}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=_.VBU({type:n,selectors:[["app-conundrum"]],decls:2,vars:0,template:function(t,i){1&t&&(_.j41(0,"p"),_.EFF(1," conundrum works!\n"),_.k0s())}}),l})();var c=o(6739),D=o(1626);let P=(()=>{var n;class l{constructor(t){this.http=t}getDefinition(t){return this.http.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+t)}}return(n=l).\u0275fac=function(t){return new(t||n)(_.KVO(D.Qq))},n.\u0275prov=_.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),l})();var O=o(2852);function g(n,l){if(1&n){const s=_.RV6();_.j41(0,"div")(1,"div",4)(2,"p"),_.EFF(3),_.k0s(),_.j41(4,"ion-button",5),_.bIt("click",function(){_.eBV(s);const i=_.XpG();return _.Njj(i.selectConsonant())}),_.EFF(5,"Consonant"),_.k0s(),_.j41(6,"ion-button",5),_.bIt("click",function(){_.eBV(s);const i=_.XpG();return _.Njj(i.selectVowel())}),_.EFF(7,"Vowel"),_.k0s()()()}if(2&n){const s=_.XpG();_.R7$(3),_.SpI("Please select ",s.MAX_LETTERS-s.letterList.length," more letter(s)"),_.R7$(),_.Y8G("disabled",s.consonantButtonDisabled),_.R7$(2),_.Y8G("disabled",s.vowelButtonDisabled)}}function C(n,l){if(1&n){const s=_.RV6();_.j41(0,"span",6),_.bIt("click",function(){const i=_.eBV(s).$implicit,E=_.XpG();return _.Njj(E.selectLetter(i))}),_.j41(1,"strong"),_.EFF(2),_.k0s()()}if(2&n){const s=l.$implicit;_.R7$(2),_.SpI(" ",s," ")}}function T(n,l){1&n&&(_.j41(0,"span"),_.EFF(1,"s"),_.k0s())}function d(n,l){if(1&n&&(_.j41(0,"li"),_.EFF(1),_.k0s()),2&n){const s=l.$implicit;_.R7$(),_.JRh(s)}}function I(n,l){if(1&n){const s=_.RV6();_.j41(0,"div")(1,"p"),_.EFF(2),_.DNE(3,T,2,0,"span",0),_.k0s(),_.j41(4,"ion-input",7),_.bIt("keyup.enter",function(){_.eBV(s);const i=_.XpG();return _.Njj(i.submitWord())}),_.k0s(),_.j41(5,"ion-button",8),_.bIt("click",function(){_.eBV(s);const i=_.XpG();return _.Njj(i.submitWord())}),_.EFF(6,"Submit"),_.k0s(),_.j41(7,"div")(8,"p"),_.EFF(9,"Entered words"),_.k0s(),_.j41(10,"ul"),_.DNE(11,d,2,1,"li",9),_.k0s()()()}if(2&n){const s=_.XpG();_.R7$(2),_.SpI("Time left: ",s.timer," second"),_.R7$(),_.Y8G("ngIf",1!==s.timer),_.R7$(8),_.Y8G("ngForOf",s.wordlist)}}function R(n,l){if(1&n){const s=_.RV6();_.j41(0,"ion-button",8),_.bIt("click",function(){const i=_.eBV(s).$implicit,E=_.XpG(2);return _.Njj(E.selectWord(i))}),_.EFF(1),_.k0s()}if(2&n){const s=l.$implicit;_.R7$(),_.JRh(s)}}function h(n,l){if(1&n&&(_.j41(0,"div")(1,"div"),_.EFF(2," Select the word you would like to submit "),_.DNE(3,R,2,1,"ion-button",10),_.k0s()()),2&n){const s=_.XpG();_.R7$(3),_.Y8G("ngForOf",s.wordlist)}}function f(n,l){if(1&n){const s=_.RV6();_.j41(0,"div")(1,"p"),_.EFF(2),_.k0s(),_.j41(3,"ion-button",8),_.bIt("click",function(){_.eBV(s);const i=_.XpG();return _.Njj(i.replay(!0))}),_.EFF(4,"Play again"),_.k0s()()}if(2&n){const s=_.XpG();_.R7$(2),_.JRh(s.finalMessage)}}let L=(()=>{var n;class l{constructor(t,i){this.dictService=t,this.settingsService=i,this.MAX_LETTERS=9,this.TIMER_DURATION=30,this.isToastOpen=!1,this.phase="letterSelection",this.errorMessage="",this.wordlist=[],this.vowels=[],this.consonants=[],this.vowelCount=0,this.consonantCount=0,this.vowelButtonDisabled=!1,this.consonantButtonDisabled=!1,this.timer=this.TIMER_DURATION,this.finalWord="",this.finalScore=0,this.finalMessage="",this.letterList=[]}ngOnInit(){this.MAX_LETTERS=c.C.Jl,this.TIMER_DURATION=c.C.H7,this.resetGame();for(const t in c.C.VT)for(let i=0;i<c.C.VT[t];i++)this.vowels.push(t);for(const t in c.C.DU)for(let i=0;i<c.C.DU[t];i++)this.consonants.push(t);this.vowels.sort((t,i)=>.5-Math.random()),this.consonants.sort((t,i)=>.5-Math.random())}resetGame(){this.phase="letterSelection",this.letterList=[],this.wordlist=[],this.vowelCount=0,this.vowelButtonDisabled=!1,this.consonantCount=0,this.consonantButtonDisabled=!1,this.finalWord="",this.finalScore=0,this.finalMessage=""}selectLetter(t){let i=document.getElementById("word");i.value=i.value+t}selectConsonant(){this.consonants.length&&(this.letterList.push(this.consonants[0]),this.consonants.splice(0,1),this.consonantCount++,this.consonantCount>=6&&(this.consonantButtonDisabled=!0),this.checkSelectionComplete())}selectVowel(){this.vowels.length&&(this.letterList.push(this.vowels[0]),this.vowels.splice(0,1),this.vowelCount++,this.vowelCount>=5&&(this.vowelButtonDisabled=!0),this.checkSelectionComplete())}checkSelectionComplete(){9===this.letterList.length&&(this.phase="entry",this.startTimer())}startTimer(){if(this.settingsService.playAudio){const i=new Audio("assets/audio/countdown_timer.mp3");i.volume=this.settingsService.audioVolume,i.play()}this.timer=this.TIMER_DURATION;const t=setInterval(()=>{this.timer<=0&&(clearInterval(t),this.wordlist.length>0?this.phase="finalSubmission":(this.finalScore=0,this.finalMessage="Sorry, you didn't enter any words. Your score is 0 points.",this.phase="score")),this.timer-=1},1e3)}submitWord(){const t=document.getElementById("word"),i=this.isValidWord(t.value.toUpperCase());this.hasNumber(t.value)?(this.errorMessage="Invalid word: Word may not contain numbers",this.setOpen(!0)):this.wordlist.includes(t.value)?(this.errorMessage="Word already submitted",this.setOpen(!0)):i?t.value.length>0&&!this.wordlist.includes(t.value)&&this.wordlist.push(t.value):(this.errorMessage="Invalid word: Word not valid based on given letters",this.setOpen(!0)),document.getElementById("word").value=""}isValidWord(t){const i=this.letterList.slice();for(let E=0;E<t.length;E++){if(!i.includes(t.charAt(E)))return!1;i.splice(i.indexOf(t.charAt(E)),1)}return!0}setOpen(t){this.isToastOpen=t}hasNumber(t){return/\d/.test(t)}selectWord(t){this.finalWord=t,this.dictService.getDefinition(t).subscribe(i=>{this.finalScore=9===t.length?18:t.length,this.finalMessage="Congratulations! The word "+t+" scored you "+this.finalScore+" points!",this.phase="score"},i=>{this.finalScore=0,this.finalMessage="Sorry, "+t+" isn't a valid word. You scored 0 points.",this.phase="score"})}replay(t){t?this.ngOnInit():this.resetGame()}}return(n=l).\u0275fac=function(t){return new(t||n)(_.rXU(P),_.rXU(O.h))},n.\u0275cmp=_.VBU({type:n,selectors:[["app-letters"]],decls:10,vars:8,consts:[[4,"ngIf"],[1,"tile-group"],["class","tile",3,"click",4,"ngFor","ngForOf"],["position","bottom","positionAnchor","footer",3,"didDismiss","isOpen","message","duration"],[1,"selection-buttons"],[3,"click","disabled"],[1,"tile",3,"click"],["id","word","autofocus","true","fill","outline","placeholder","Enter a word",3,"keyup.enter"],[3,"click"],[4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(_.j41(0,"div")(1,"strong"),_.EFF(2,"Letters Round"),_.k0s()(),_.DNE(3,g,8,3,"div",0),_.j41(4,"div",1),_.DNE(5,C,3,1,"span",2),_.k0s(),_.DNE(6,I,12,3,"div",0)(7,h,4,1,"div",0)(8,f,5,1,"div",0),_.j41(9,"ion-toast",3),_.bIt("didDismiss",function(){return i.setOpen(!1)}),_.k0s()),2&t&&(_.R7$(3),_.Y8G("ngIf","letterSelection"==i.phase),_.R7$(2),_.Y8G("ngForOf",i.letterList),_.R7$(),_.Y8G("ngIf","entry"==i.phase),_.R7$(),_.Y8G("ngIf","finalSubmission"==i.phase),_.R7$(),_.Y8G("ngIf","score"===i.phase),_.R7$(),_.Y8G("isOpen",i.isToastOpen)("message",i.errorMessage)("duration",1e3))},dependencies:[u.Sq,u.bT,r.Jm,r.$w,r.op,r.Gw]}),l})();var B=o(1204);function U(n,l){if(1&n){const s=_.RV6();_.j41(0,"ion-item")(1,"ion-range",4),_.bIt("ionChange",function(i){_.eBV(s);const E=_.XpG();return _.Njj(E.setVolume(i))}),_.EFF(2,"Volume"),_.k0s()()}if(2&n){const s=_.XpG();_.R7$(),_.Y8G("value",100*s.settingsService.audioVolume)}}let A=(()=>{var n;class l{constructor(t){this.settingsService=t,this.toastMessage="",this.isToastOpen=!1}toggleAudio(){this.settingsService.toggleAudio()}saveSettings(){this.settingsService.saveSettings(),this.toastMessage="Settings saved successfully",this.setOpen(!0)}setOpen(t){this.isToastOpen=t}setVolume(t){this.settingsService.setVolume(t.detail.value)}}return(n=l).\u0275fac=function(t){return new(t||n)(_.rXU(O.h))},n.\u0275cmp=_.VBU({type:n,selectors:[["app-settings"]],decls:8,vars:6,consts:[[3,"ionChange","enableOnOffLabels","checked"],[4,"ngIf"],[3,"click"],["position","bottom","positionAnchor","footer",3,"didDismiss","isOpen","message","duration"],[3,"ionChange","value"]],template:function(t,i){1&t&&(_.j41(0,"ion-list")(1,"ion-item")(2,"ion-toggle",0),_.bIt("ionChange",function(){return i.toggleAudio()}),_.EFF(3,"Play Audio"),_.k0s()(),_.DNE(4,U,3,1,"ion-item",1),_.k0s(),_.j41(5,"ion-button",2),_.bIt("click",function(){return i.saveSettings()}),_.EFF(6,"Save Settings"),_.k0s(),_.j41(7,"ion-toast",3),_.bIt("didDismiss",function(){return i.setOpen(!1)}),_.k0s()),2&t&&(_.R7$(2),_.Y8G("enableOnOffLabels",!0)("checked",i.settingsService.playAudio),_.R7$(2),_.Y8G("ngIf",i.settingsService.playAudio),_.R7$(3),_.Y8G("isOpen",i.isToastOpen)("message",i.toastMessage)("duration",1e3))},dependencies:[u.bT,r.Jm,r.uz,r.nf,r.Ob,r.op,r.BY,r.hB,r.su]}),l})();function b(n,l){1&n&&(_.j41(0,"div",12)(1,"strong"),_.EFF(2,"Welcome!"),_.k0s(),_.j41(3,"p"),_.EFF(4,"Select a tab to get started."),_.k0s()())}function W(n,l){1&n&&(_.j41(0,"div",12),_.nrm(1,"app-letters"),_.k0s())}function v(n,l){1&n&&(_.j41(0,"div",12),_.nrm(1,"app-numbers"),_.k0s())}function K(n,l){1&n&&(_.j41(0,"div",12),_.nrm(1,"app-conundrum"),_.k0s())}function N(n,l){1&n&&(_.j41(0,"div",12),_.nrm(1,"app-settings"),_.k0s())}const k=[{path:"",component:(()=>{var n;class l{constructor(){this.currentView="numbers"}changeView(t){this.currentView=t}}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=_.VBU({type:n,selectors:[["app-home"]],decls:27,vars:6,consts:[[3,"translucent"],["collapse","condense"],["size","large"],["id","container",4,"ngIf"],["id","footer","slot","bottom"],["tab","letters",3,"click"],["name","text-outline"],["tab","numbers",3,"click"],["name","add-outline"],["tab","conundrum",3,"click"],["name","sad"],["name","settings-sharp"],["id","container"]],template:function(t,i){1&t&&(_.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),_.EFF(3," Countdown "),_.k0s()()(),_.j41(4,"ion-content")(5,"ion-header",1)(6,"ion-toolbar")(7,"ion-title",2),_.EFF(8,"Countdown"),_.k0s()()(),_.DNE(9,b,5,0,"div",3)(10,W,2,0,"div",3)(11,v,2,0,"div",3)(12,K,2,0,"div",3)(13,N,2,0,"div",3),_.k0s(),_.j41(14,"ion-tab-bar",4)(15,"ion-tab-button",5),_.bIt("click",function(){return i.changeView("letters")}),_.nrm(16,"ion-icon",6),_.EFF(17," Letters "),_.k0s(),_.j41(18,"ion-tab-button",7),_.bIt("click",function(){return i.changeView("numbers")}),_.nrm(19,"ion-icon",8),_.EFF(20," Numbers "),_.k0s(),_.j41(21,"ion-tab-button",9),_.bIt("click",function(){return i.changeView("conundrum")}),_.nrm(22,"ion-icon",10),_.EFF(23," Conundrum "),_.k0s(),_.j41(24,"ion-tab-button",9),_.bIt("click",function(){return i.changeView("settings")}),_.nrm(25,"ion-icon",11),_.EFF(26," Settings "),_.k0s()()),2&t&&(_.Y8G("translucent",!0),_.R7$(9),_.Y8G("ngIf",""===i.currentView),_.R7$(),_.Y8G("ngIf","letters"===i.currentView),_.R7$(),_.Y8G("ngIf","numbers"===i.currentView),_.R7$(),_.Y8G("ngIf","conundrum"===i.currentView),_.R7$(),_.Y8G("ngIf","settings"===i.currentView))},dependencies:[u.bT,r.W9,r.eU,r.iq,r.Jq,r.qW,r.BC,r.ai,p,L,B.Q,A],styles:["#container[_ngcontent-%COMP%]{position:absolute;left:0;right:0;padding:1rem}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),l})()}];let F=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=_.$C({type:n}),n.\u0275inj=_.G2t({imports:[M.iI.forChild(k),M.iI]}),l})(),j=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=_.$C({type:n}),n.\u0275inj=_.G2t({imports:[u.MD,m.YN,r.bv,F]}),l})()},1204:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>NumbersComponent});var _shared_config_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6739),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4438),_shared_settings_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2852),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(177),_ionic_angular__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3819);function NumbersComponent_div_3_ion_button_5_Template(e,a){if(1&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.RV6();_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"ion-button",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o).$implicit,m=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG(2);return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(m.selectLargeNumbersCount(r))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(1),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()}if(2&e){const o=a.$implicit;_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.SpI(" ",o," ")}}function NumbersComponent_div_3_Template(e,a){if(1&e&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"div")(1,"div",3)(2,"p"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(3,"How many large numbers would you like?"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(4,"div",4),_angular_core__WEBPACK_IMPORTED_MODULE_1__.DNE(5,NumbersComponent_div_3_ion_button_5_Template,2,1,"ion-button",5),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()()()),2&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(5),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngForOf",o.numberButtonArray)}}function NumbersComponent_div_4_Template(e,a){if(1&e&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"div",7)(1,"span",8)(2,"strong"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()()()),2&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.SpI(" ",o.targetNumber," ")}}function NumbersComponent_div_5_span_1_Template(e,a){if(1&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.RV6();_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"span",10),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o).$implicit,m=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG(2);return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(m.selectNumber(r))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(1,"strong"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()()}if(2&e){const o=a.$implicit;_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.SpI(" ",o," ")}}function NumbersComponent_div_5_Template(e,a){if(1&e&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"div",7),_angular_core__WEBPACK_IMPORTED_MODULE_1__.DNE(1,NumbersComponent_div_5_span_1_Template,3,1,"span",9),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()),2&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngForOf",o.numberList)}}function NumbersComponent_div_6_Template(e,a){if(1&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.RV6();_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"div",7)(1,"span",10),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.selectNumber("+"))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(2,"strong"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(3,"+"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(4,"span",10),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.selectNumber("-"))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(5,"strong"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(6,"-"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(7,"span",10),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.selectNumber("*"))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(8,"strong"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(9,"*"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(10,"span",10),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.selectNumber("/"))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(11,"strong"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(12,"/"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(13,"span",10),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.selectNumber("("))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(14,"strong"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(15,"("),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(16,"span",10),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.selectNumber(")"))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(17,"strong"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(18,")"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()()()}}function NumbersComponent_div_7_span_3_Template(e,a){1&e&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(1,"s"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s())}function NumbersComponent_div_7_Template(e,a){if(1&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.RV6();_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"div")(1,"p"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.DNE(3,NumbersComponent_div_7_span_3_Template,2,0,"span",0),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(4,"ion-input",11),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("keyup.enter",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.submitResult())}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(5,"ion-button",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.submitResult())}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(6,"Submit"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()()}if(2&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.SpI("Time left: ",o.timer," second"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngIf",1!==o.timer)}}function NumbersComponent_div_8_span_3_Template(e,a){1&e&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(1,"s"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s())}function NumbersComponent_div_8_Template(e,a){if(1&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.RV6();_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"div")(1,"p"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.DNE(3,NumbersComponent_div_8_span_3_Template,2,0,"span",0),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(4,"ion-input",12),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("keyup.enter",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.submitEquation())}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(5,"ion-button",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.submitEquation())}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(6,"Submit"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(7,"ion-button",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.clearEquation())}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(8,"Clear"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()()}if(2&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.SpI("Time left: ",o.inputTimer," second"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngIf",1!==o.inputTimer)}}function NumbersComponent_div_9_Template(e,a){if(1&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.RV6();_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"div")(1,"p"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(3,"ion-button",6),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_1__.eBV(o);const r=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_1__.Njj(r.replay(!0))}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(4,"Play again"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()()}if(2&e){const o=_angular_core__WEBPACK_IMPORTED_MODULE_1__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.JRh(o.finalMessage)}}var Phases=function(e){return e[e.NUMBER_SELECTION=0]="NUMBER_SELECTION",e[e.NUMBER_DISPLAY=1]="NUMBER_DISPLAY",e[e.RESULT_ENTRY=2]="RESULT_ENTRY",e[e.EQUATION_ENTRY=3]="EQUATION_ENTRY",e[e.SCORE=4]="SCORE",e}(Phases||{});let NumbersComponent=(()=>{var _NumbersComponent;class NumbersComponent{constructor(e){this.settingsService=e,this.MAX_NUMBERS=0,this.MAX_LARGE_NUMBERS=0,this.TIMER_DURATION=0,this.INPUT_TIMER_DURATION=0,this.Phases=Phases,this.phase=Phases.NUMBER_SELECTION,this.smallNumbers=[],this.largeNumbers=[],this.targetNumber=null,this.numberButtonArray=[],this.numberList=[],this.equationList=[],this.submittedResult=0,this.errorMessage="",this.isToastOpen=!1,this.timer=0,this.inputTimer=0,this.finalScore=0,this.finalMessage="",this.finalEquation=""}ngOnInit(){this.MAX_NUMBERS=_shared_config_json__WEBPACK_IMPORTED_MODULE_0__.F.Uf,this.MAX_LARGE_NUMBERS=_shared_config_json__WEBPACK_IMPORTED_MODULE_0__.F.yK,this.TIMER_DURATION=_shared_config_json__WEBPACK_IMPORTED_MODULE_0__.F.H7,this.INPUT_TIMER_DURATION=_shared_config_json__WEBPACK_IMPORTED_MODULE_0__.F.RN,this.resetGame(),this.smallNumbers=_shared_config_json__WEBPACK_IMPORTED_MODULE_0__.F.N8.slice(),this.largeNumbers=_shared_config_json__WEBPACK_IMPORTED_MODULE_0__.F.xq.slice(),this.smallNumbers.sort((e,a)=>.5-Math.random()),this.largeNumbers.sort((e,a)=>.5-Math.random())}resetGame(){this.phase=Phases.NUMBER_SELECTION,this.numberButtonArray=Array(this.MAX_LARGE_NUMBERS+1).fill(0).map((e,a)=>a),this.numberList=[],this.equationList=[],this.targetNumber=null,this.timer=this.TIMER_DURATION,this.inputTimer=this.INPUT_TIMER_DURATION,this.submittedResult=0,this.finalEquation="",this.finalMessage="",this.finalScore=0}selectLargeNumbersCount(e){this.phase=Phases.NUMBER_DISPLAY;const a=[];for(let r=0;r<e;r++)a.push(this.largeNumbers[0]),this.largeNumbers.splice(0,1);for(let r=e;r<this.MAX_NUMBERS;r++)a.push(this.smallNumbers[0]),this.smallNumbers.splice(0,1);let o=0;const u=setInterval(()=>{o<this.MAX_NUMBERS?(this.numberList.push(a[0]),a.splice(0,1),o++):(clearInterval(u),this.generateTargetNumber())},1e3)}generateTargetNumber(){const e=_shared_config_json__WEBPACK_IMPORTED_MODULE_0__.F.De,a=_shared_config_json__WEBPACK_IMPORTED_MODULE_0__.F.l_;this.targetNumber=Math.floor(Math.random()*(a-e)+e),this.phase=Phases.RESULT_ENTRY,this.startTimer()}startTimer(){if(this.settingsService.playAudio){const a=new Audio("assets/audio/countdown_timer.mp3");a.volume=this.settingsService.audioVolume,a.play()}this.timer=this.TIMER_DURATION;const e=setInterval(()=>{this.timer<=0&&(clearInterval(e),0!==this.submittedResult?(this.phase=Phases.EQUATION_ENTRY,this.startInputTimer()):(this.finalMessage="Sorry! You didn't submit a result in time. You scored 0 points.",this.phase=Phases.SCORE)),this.timer-=1},1e3)}startInputTimer(){this.inputTimer=this.INPUT_TIMER_DURATION;const e=setInterval(()=>{this.inputTimer<=0&&(clearInterval(e),this.selectEquation(this.finalEquation)),this.inputTimer-=1},1e3)}selectNumber(e){let a=document.getElementById("equation");a.value=a.value+e}clearEquation(){document.getElementById("equation").value=""}submitEquation(){const e=document.getElementById("equation");this.isValidEquationWithGivenNumbers(e.value),this.isEquation(e.value)?e.value.length>0&&(this.equationList.push(e.value),this.selectEquation(e.value)):(this.errorMessage="Invalid word: Equation may not contain letters",this.setOpen(!0)),document.getElementById("equation").value=""}setOpen(e){this.isToastOpen=e}isEquation(e){return/(\d+[+\-*\/^%])*(\d+)/.test(e)}isValidEquationWithGivenNumbers(e){return!0}submitResult(){const e=document.getElementById("result");0===this.submittedResult?(this.submittedResult=Number(e.value),this.errorMessage="Result submitted! Please wait for the timer to finish.",this.setOpen(!0)):(this.errorMessage="You've already submitted a result, please wait for the timer to finish.",this.setOpen(!0))}selectEquation(equation){this.finalEquation=equation;const finalEval=eval(this.finalEquation);if(null===this.targetNumber&&(this.targetNumber=0),""===equation)this.finalMessage="Sorry! You didn't submit an equation in time. You scored 0 points.";else if(this.submittedResult!==finalEval)this.finalMessage="You submitted the result "+this.submittedResult+", but your equation evaluated to "+finalEval+". You scored 0 points.";else{const e=Math.abs(this.targetNumber-finalEval);this.finalScore=0===e?10:e>=1&&e<=5?7:e>=6&&e<=10?5:0,this.finalMessage=this.finalScore>0?"Congratulations! You made "+finalEval+" which gives you a score of "+this.finalScore+" points!":"Sorry! You made "+finalEval+" which gives you a score of "+this.finalScore+" points."}this.phase=Phases.SCORE}replay(e){e?this.ngOnInit():this.resetGame()}}return _NumbersComponent=NumbersComponent,_NumbersComponent.\u0275fac=function e(a){return new(a||_NumbersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.rXU(_shared_settings_service__WEBPACK_IMPORTED_MODULE_2__.h))},_NumbersComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.VBU({type:_NumbersComponent,selectors:[["app-numbers"]],decls:11,vars:10,consts:[[4,"ngIf"],["class","tile-group",4,"ngIf"],["position","bottom","positionAnchor","footer",3,"didDismiss","isOpen","message","duration"],[1,"selection-buttons"],[1,"centered"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"tile-group"],[1,"tile","target-tile"],["class","tile",3,"click",4,"ngFor","ngForOf"],[1,"tile",3,"click"],["id","result","autofocus","true","fill","outline","placeholder","Enter your result",3,"keyup.enter"],["id","equation","autofocus","true","fill","outline","placeholder","Enter an equation",3,"keyup.enter"]],template:function e(a,o){1&a&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"div")(1,"strong"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(2,"Numbers Round"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.DNE(3,NumbersComponent_div_3_Template,6,1,"div",0)(4,NumbersComponent_div_4_Template,4,1,"div",1)(5,NumbersComponent_div_5_Template,2,1,"div",1)(6,NumbersComponent_div_6_Template,19,0,"div",1)(7,NumbersComponent_div_7_Template,7,2,"div",0)(8,NumbersComponent_div_8_Template,9,2,"div",0)(9,NumbersComponent_div_9_Template,5,1,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(10,"ion-toast",2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.bIt("didDismiss",function(){return o.setOpen(!1)}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()),2&a&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngIf",o.phase==o.Phases.NUMBER_SELECTION),_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngIf",o.phase!==o.Phases.NUMBER_SELECTION),_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngIf",o.phase!==o.Phases.NUMBER_SELECTION),_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngIf",o.phase===o.Phases.EQUATION_ENTRY),_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngIf",o.phase===o.Phases.RESULT_ENTRY),_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngIf",o.phase===o.Phases.EQUATION_ENTRY),_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("ngIf",o.phase===o.Phases.SCORE),_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y8G("isOpen",o.isToastOpen)("message",o.errorMessage)("duration",1e3))},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.Sq,_angular_common__WEBPACK_IMPORTED_MODULE_3__.bT,_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Jm,_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.$w,_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.op,_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Gw]}),NumbersComponent})()},6739:e=>{e.exports=JSON.parse('{"C":{"Jl":9,"H7":30,"VT":{"A":15,"E":21,"I":13,"O":13,"U":5},"DU":{"B":2,"C":3,"D":6,"F":2,"G":3,"H":2,"J":1,"K":1,"L":5,"M":4,"N":8,"P":4,"Q":1,"R":9,"S":9,"T":9,"V":1,"W":1,"X":1,"Y":1,"Z":1}},"F":{"Uf":6,"yK":4,"H7":30,"RN":30,"De":100,"l_":999,"N8":[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10],"xq":[25,50,75,100]}}')}}]);