"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6108],{6108:(G,m,l)=>{l.r(m),l.d(m,{HomePageModule:()=>V});var u=l(177),r=l(3819),d=l(4341),p=l(8986),t=l(4438);let h=(()=>{var n;class s{constructor(){}ngOnInit(){}}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.VBU({type:n,selectors:[["app-conundrum"]],decls:2,vars:0,template:function(e,o){1&e&&(t.j41(0,"p"),t.EFF(1," conundrum works!\n"),t.k0s())}}),s})();const a=JSON.parse('{"Jl":9,"H7":30,"VT":{"A":15,"E":21,"I":13,"O":13,"U":5},"DU":{"B":2,"C":3,"D":6,"F":2,"G":3,"H":2,"J":1,"K":1,"L":5,"M":4,"N":8,"P":4,"Q":1,"R":9,"S":9,"T":9,"V":1,"W":1,"X":1,"Y":1,"Z":1}}');var _=l(1626);let f=(()=>{var n;class s{constructor(e){this.http=e}getDefinition(e){return this.http.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+e)}}return(n=s).\u0275fac=function(e){return new(e||n)(t.KVO(_.Qq))},n.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),s})();function g(n,s){if(1&n){const i=t.RV6();t.j41(0,"div")(1,"div",4)(2,"p"),t.EFF(3),t.k0s(),t.j41(4,"ion-button",5),t.bIt("click",function(){t.eBV(i);const o=t.XpG();return t.Njj(o.selectConsonant())}),t.EFF(5,"Consonant"),t.k0s(),t.j41(6,"ion-button",5),t.bIt("click",function(){t.eBV(i);const o=t.XpG();return t.Njj(o.selectVowel())}),t.EFF(7,"Vowel"),t.k0s()()()}if(2&n){const i=t.XpG();t.R7$(3),t.SpI("Please select ",i.MAX_LETTERS-i.letterList.length," more letter(s)"),t.R7$(),t.Y8G("disabled",i.consonantButtonDisabled),t.R7$(2),t.Y8G("disabled",i.vowelButtonDisabled)}}function v(n,s){if(1&n){const i=t.RV6();t.j41(0,"span",6),t.bIt("click",function(){const o=t.eBV(i).$implicit,c=t.XpG();return t.Njj(c.selectLetter(o))}),t.j41(1,"strong"),t.EFF(2),t.k0s()()}if(2&n){const i=s.$implicit;t.R7$(2),t.SpI(" ",i," ")}}function b(n,s){1&n&&(t.j41(0,"span"),t.EFF(1,"s"),t.k0s())}function C(n,s){if(1&n&&(t.j41(0,"li"),t.EFF(1),t.k0s()),2&n){const i=s.$implicit;t.R7$(),t.JRh(i)}}function k(n,s){if(1&n){const i=t.RV6();t.j41(0,"div")(1,"p"),t.EFF(2),t.DNE(3,b,2,0,"span",0),t.k0s(),t.j41(4,"ion-input",7),t.bIt("keyup.enter",function(){t.eBV(i);const o=t.XpG();return t.Njj(o.submitWord())}),t.k0s(),t.j41(5,"ion-button",8),t.bIt("click",function(){t.eBV(i);const o=t.XpG();return t.Njj(o.submitWord())}),t.EFF(6,"Submit"),t.k0s(),t.j41(7,"div")(8,"p"),t.EFF(9,"Entered words"),t.k0s(),t.j41(10,"ul"),t.DNE(11,C,2,1,"li",9),t.k0s()()()}if(2&n){const i=t.XpG();t.R7$(2),t.SpI("Time left: ",i.timer," second"),t.R7$(),t.Y8G("ngIf",1!==i.timer),t.R7$(8),t.Y8G("ngForOf",i.wordlist)}}function F(n,s){if(1&n){const i=t.RV6();t.j41(0,"ion-button",8),t.bIt("click",function(){const o=t.eBV(i).$implicit,c=t.XpG(2);return t.Njj(c.selectWord(o))}),t.EFF(1),t.k0s()}if(2&n){const i=s.$implicit;t.R7$(),t.JRh(i)}}function w(n,s){if(1&n&&(t.j41(0,"div")(1,"div"),t.EFF(2," Select the word you would like to submit "),t.DNE(3,F,2,1,"ion-button",10),t.k0s()()),2&n){const i=t.XpG();t.R7$(3),t.Y8G("ngForOf",i.wordlist)}}function I(n,s){if(1&n){const i=t.RV6();t.j41(0,"div")(1,"p"),t.EFF(2),t.k0s(),t.j41(3,"ion-button",8),t.bIt("click",function(){t.eBV(i);const o=t.XpG();return t.Njj(o.replay(!0))}),t.EFF(4,"Play again"),t.k0s()()}if(2&n){const i=t.XpG();t.R7$(2),t.JRh(i.finalMessage)}}let T=(()=>{var n;class s{constructor(e){this.dictSrv=e,this.MAX_LETTERS=9,this.TIMER_DURATION=30,this.isToastOpen=!1,this.phase="letterSelection",this.errorMessage="",this.wordlist=[],this.vowels=[],this.consonants=[],this.vowelCount=0,this.consonantCount=0,this.vowelButtonDisabled=!1,this.consonantButtonDisabled=!1,this.timer=this.TIMER_DURATION,this.finalWord="",this.finalScore=0,this.finalMessage="",this.letterList=[]}ngOnInit(){this.MAX_LETTERS=a.Jl,this.TIMER_DURATION=a.H7,this.resetGame();for(const e in a.VT)for(let o=0;o<a.VT[e];o++)this.vowels.push(e);for(const e in a.DU)for(let o=0;o<a.DU[e];o++)this.consonants.push(e);this.vowels.sort((e,o)=>.5-Math.random()),this.consonants.sort((e,o)=>.5-Math.random())}resetGame(){this.phase="letterSelection",this.letterList=[],this.wordlist=[],this.vowelCount=0,this.vowelButtonDisabled=!1,this.consonantCount=0,this.consonantButtonDisabled=!1,this.finalWord="",this.finalScore=0,this.finalMessage=""}selectLetter(e){let o=document.getElementById("word");o.value=o.value+e}selectConsonant(){this.consonants.length&&(this.letterList.push(this.consonants[0]),this.consonants.splice(0,1),this.consonantCount++,this.consonantCount>=6&&(this.consonantButtonDisabled=!0),this.checkSelectionComplete())}selectVowel(){this.vowels.length&&(this.letterList.push(this.vowels[0]),this.vowels.splice(0,1),this.vowelCount++,this.vowelCount>=5&&(this.vowelButtonDisabled=!0),this.checkSelectionComplete())}checkSelectionComplete(){9===this.letterList.length&&(this.phase="entry",this.startTimer())}startTimer(){const e=new Audio("assets/audio/countdown_timer.mp3");e.volume=.25,e.play(),this.timer=this.TIMER_DURATION;const o=setInterval(()=>{this.timer<=0&&(clearInterval(o),this.wordlist.length>0?this.phase="finalSubmission":(this.finalScore=0,this.finalMessage="Sorry, you didn't enter any words. Your score is 0 points.",this.phase="score")),this.timer-=1},1e3)}submitWord(){const e=document.getElementById("word"),o=this.isValidWord(e.value.toUpperCase());this.hasNumber(e.value)?(this.errorMessage="Invalid word: Word may not contain numbers",this.setOpen(!0)):this.wordlist.includes(e.value)?(this.errorMessage="Word already submitted",this.setOpen(!0)):o?e.value.length>0&&!this.wordlist.includes(e.value)&&this.wordlist.push(e.value):(this.errorMessage="Invalid word: Word not valid based on given letters",this.setOpen(!0)),document.getElementById("word").value=""}isValidWord(e){const o=this.letterList.slice();for(let c=0;c<e.length;c++){if(!o.includes(e.charAt(c)))return!1;o.splice(o.indexOf(e.charAt(c)),1)}return!0}setOpen(e){this.isToastOpen=e}hasNumber(e){return/\d/.test(e)}selectWord(e){this.finalWord=e,this.dictSrv.getDefinition(e).subscribe(o=>{this.finalScore=9===e.length?18:e.length,this.finalMessage="Congratulations! The word "+e+" scored you "+this.finalScore+" points!",this.phase="score"},o=>{this.finalScore=0,this.finalMessage="Sorry, "+e+" isn't a valid word. You scored 0 points.",this.phase="score"})}replay(e){e?this.ngOnInit():this.resetGame()}}return(n=s).\u0275fac=function(e){return new(e||n)(t.rXU(f))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-letters"]],decls:10,vars:8,consts:[[4,"ngIf"],[1,"tile-group"],["class","tile",3,"click",4,"ngFor","ngForOf"],["position","bottom","positionAnchor","footer",3,"didDismiss","isOpen","message","duration"],[1,"selection-buttons"],[3,"click","disabled"],[1,"tile",3,"click"],["id","word","autofocus","true","fill","outline","placeholder","Enter a word",3,"keyup.enter"],[3,"click"],[4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t.j41(0,"div")(1,"strong"),t.EFF(2,"Letters Round"),t.k0s()(),t.DNE(3,g,8,3,"div",0),t.j41(4,"div",1),t.DNE(5,v,3,1,"span",2),t.k0s(),t.DNE(6,k,12,3,"div",0)(7,w,4,1,"div",0)(8,I,5,1,"div",0),t.j41(9,"ion-toast",3),t.bIt("didDismiss",function(){return o.setOpen(!1)}),t.k0s()),2&e&&(t.R7$(3),t.Y8G("ngIf","letterSelection"==o.phase),t.R7$(2),t.Y8G("ngForOf",o.letterList),t.R7$(),t.Y8G("ngIf","entry"==o.phase),t.R7$(),t.Y8G("ngIf","finalSubmission"==o.phase),t.R7$(),t.Y8G("ngIf","score"===o.phase),t.R7$(),t.Y8G("isOpen",o.isToastOpen)("message",o.errorMessage)("duration",5e3))},dependencies:[u.Sq,u.bT,r.Jm,r.$w,r.op,r.Gw],styles:[".selection-buttons[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content;margin-left:auto;margin-right:auto}.tile-group[_ngcontent-%COMP%]{padding:2rem 0;max-width:-moz-fit-content;max-width:fit-content;margin-left:auto;margin-right:auto}.tile-group[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]{color:#fff;background-color:#00f;padding:1rem;border:1px solid white;margin:1rem;display:inline-block;width:3.5rem;height:3.5rem;text-align:center}"]}),s})(),j=(()=>{var n;class s{constructor(){}ngOnInit(){}}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.VBU({type:n,selectors:[["app-numbers"]],decls:2,vars:0,template:function(e,o){1&e&&(t.j41(0,"p"),t.EFF(1," numbers works!\n"),t.k0s())}}),s})();function R(n,s){1&n&&(t.j41(0,"div",12)(1,"strong"),t.EFF(2,"Welcome!"),t.k0s(),t.j41(3,"p"),t.EFF(4,"Select a tab to get started."),t.k0s()())}function E(n,s){1&n&&(t.j41(0,"div",12),t.nrm(1,"app-letters"),t.k0s())}function y(n,s){1&n&&(t.j41(0,"div",12),t.nrm(1,"app-numbers"),t.k0s())}function M(n,s){1&n&&(t.j41(0,"div",12),t.nrm(1,"app-conundrum"),t.k0s())}const O=[{path:"",component:(()=>{var n;class s{constructor(){this.currentView="letters"}changeView(e){this.currentView=e}}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.VBU({type:n,selectors:[["app-home"]],decls:23,vars:6,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container",4,"ngIf"],["id","footer","slot","bottom"],["tab","letters",3,"click"],["name","text-outline"],["tab","numbers",3,"click"],["name","add-outline"],["tab","conundrum",3,"click"],["name","sad"],["id","container"]],template:function(e,o){1&e&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3," Countdown "),t.k0s()()(),t.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t.EFF(8,"Countdown"),t.k0s()()(),t.DNE(9,R,5,0,"div",4)(10,E,2,0,"div",4)(11,y,2,0,"div",4)(12,M,2,0,"div",4),t.k0s(),t.j41(13,"ion-tab-bar",5)(14,"ion-tab-button",6),t.bIt("click",function(){return o.changeView("letters")}),t.nrm(15,"ion-icon",7),t.EFF(16," Letters "),t.k0s(),t.j41(17,"ion-tab-button",8),t.bIt("click",function(){return o.changeView("numbers")}),t.nrm(18,"ion-icon",9),t.EFF(19," Numbers "),t.k0s(),t.j41(20,"ion-tab-button",10),t.bIt("click",function(){return o.changeView("conundrum")}),t.nrm(21,"ion-icon",11),t.EFF(22," Conundrum "),t.k0s()()),2&e&&(t.Y8G("translucent",!0),t.R7$(4),t.Y8G("fullscreen",!0),t.R7$(5),t.Y8G("ngIf",""===o.currentView),t.R7$(),t.Y8G("ngIf","letters"===o.currentView),t.R7$(),t.Y8G("ngIf","numbers"===o.currentView),t.R7$(),t.Y8G("ngIf","conundrum"===o.currentView))},dependencies:[u.bT,r.W9,r.eU,r.iq,r.Jq,r.qW,r.BC,r.ai,h,T,j],styles:["#container[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:3.5rem;padding:1rem}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),s})()}];let L=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[p.iI.forChild(O),p.iI]}),s})(),V=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[u.MD,d.YN,r.bv,L]}),s})()}}]);