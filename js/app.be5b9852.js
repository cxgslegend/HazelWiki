(function(e){function t(t){for(var r,i,l=t[0],c=t[1],s=t[2],k=0,h=[];k<l.length;k++)i=l[k],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/HazelWiki/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1135:function(e,t,n){},1191:function(e,t,n){},1235:function(e,t,n){},1552:function(e,t,n){"use strict";var r=n("1235"),o=n.n(r);o.a},"15b2":function(e,t,n){"use strict";var r=n("e735"),o=n.n(r);o.a},1633:function(e,t,n){"use strict";var r=n("1135"),o=n.n(r);o.a},"18bd":function(e,t,n){"use strict";var r=n("bcf7"),o=n.n(r);o.a},"22d3":function(e,t,n){"use strict";var r=n("b999"),o=n.n(r);o.a},"2a72":function(e,t,n){"use strict";var r=n("1191"),o=n.n(r);o.a},"2b0f":function(e,t,n){},"2cb6":function(e,t,n){},"36a6":function(e,t,n){"use strict";var r=n("a5e2"),o=n.n(r);o.a},"37f0":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",["#"===e.element.token?n("markdown-header",{attrs:{element:e.element}}):e._e(),"p"===e.element.token?n("markdown-paragraph",{attrs:{element:e.element}}):e._e(),"\n"===e.element.token?n("markdown-newline",{attrs:{element:e.element}}):e._e(),"TXT"===e.element.token?n("markdown-text",{attrs:{element:e.element}}):e._e(),"**"===e.element.token?n("markdown-bold",{attrs:{element:e.element}}):e._e(),"*"===e.element.token?n("markdown-italic",{attrs:{element:e.element}}):e._e(),"`"===e.element.token?n("markdown-code",{attrs:{element:e.element}}):e._e(),"```"===e.element.token?n("markdown-codeblock",{attrs:{element:e.element}}):e._e(),"[]()"===e.element.token?n("markdown-link",{attrs:{element:e.element}}):e._e(),"![]()"===e.element.token?n("markdown-image",{attrs:{element:e.element}}):e._e(),"-"===e.element.token?n("markdown-list",{attrs:{element:e.element}}):e._e(),">"===e.element.token?n("markdown-quote",{attrs:{element:e.element}}):e._e()],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[1===e.element.content[0]?n("h1",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e(),2===e.element.content[0]?n("h2",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e(),3===e.element.content[0]?n("h3",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e(),4===e.element.content[0]?n("h4",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e(),5===e.element.content[0]?n("h5",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e(),6===e.element.content[0]?n("h6",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e()])},i=[],l=(n("fb6a"),n("d3b7"),{props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}},computed:{contentElements:function(){return"#"===this.element.token&&this.element.content.length>1?this.element.content.slice(1):[]}}}),c=l,s=(n("9cb9"),n("2877")),u=Object(s["a"])(c,a,i,!1,null,"c3d4a4b0",null),k=u.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",e._l(e.element.content,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},m=[],f={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},v=f,d=(n("36a6"),Object(s["a"])(v,h,m,!1,null,"3edb1dd3",null)),g=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("br",{attrs:{"v-repeat":e.element.content[0]}})},b=[],y={props:{element:{type:Object,required:!0}}},w=y,_=Object(s["a"])(w,p,b,!1,null,null,null),T=_.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(e._s(e.element.content))])},O=[],j={props:{element:{type:Object,required:!0}}},S=j,x=Object(s["a"])(S,E,O,!1,null,null,null),A=x.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("strong",e._l(e.element.content,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},$=[],q={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},P=q,C=(n("6f4a"),Object(s["a"])(P,R,$,!1,null,"821ac2e2",null)),B=C.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("em",e._l(e.element.content,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},z=[],N={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},H=N,V=(n("6610"),Object(s["a"])(H,L,z,!1,null,"ccccabac",null)),F=V.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code",e._l(e.element.content,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},W=[],I={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},G=I,M=(n("1552"),Object(s["a"])(G,Q,W,!1,null,"c4423ee4",null)),D=M.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code-styler",{attrs:{src:e.contentString,language:e.contentLanguage}})},J=[],U=(n("99af"),n("38cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-styler"},[n("pre",[e._v("\t\t"),n("code-styler-line-number",{attrs:{amount:e.numberOfLines,visible:e.lineNumbers}}),e._v("\n\t\t"),n("code-styler-code",{attrs:{src:e.src,language:e.language}}),e._v("\n\t")],1)])}),K=[],Y=(n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"line-number"},e._l(e.amount,(function(t,r){return n("span",{key:r},[e._v(e._s(t))])})),0)}),Z=[],ee=(n("a9e3"),{props:{amount:{type:Number,required:!0,default:1},visible:{type:Boolean,required:!1,default:!0}}}),te=ee,ne=(n("d3b8"),Object(s["a"])(te,Y,Z,!1,null,"424a964c",null)),re=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code",[e._v(e._s(e.src))])},ae=[],ie={props:{src:{type:String,required:!0},language:{type:String,required:!1,default:""}}},le=ie,ce=(n("2a72"),Object(s["a"])(le,oe,ae,!1,null,"07527280",null)),se=ce.exports,ue={props:{src:{type:String,required:!0},language:{type:String,required:!1,default:""},lineNumbers:{type:Boolean,required:!1,default:!0}},computed:{numberOfLines:function(){return this.src.split("\n").length}},components:{"code-styler-line-number":re,"code-styler-code":se}},ke=ue,he=(n("cdcb"),Object(s["a"])(ke,U,K,!1,null,"92a309e6",null)),me=he.exports,fe={props:{element:{type:Object,required:!0}},computed:{contentLanguage:function(){return"```"===this.element.token?this.element.content[0]:""},contentString:function(){var e="";if("```"===this.element.token&&this.element.content.length>1)for(var t=1;t<this.element.content.length;t++)e="\n"===this.element.content[t].token?e.concat("\n".repeat(this.element.content[t].content[0])):e.concat(this.element.content[t].content);return e}},components:{"code-styler":me}},ve=fe,de=Object(s["a"])(ve,X,J,!1,null,null,null),ge=de.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:e.link}},e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},be=[],ye={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}},computed:{link:function(){return"[]()"===this.element.token&&this.element.content.length>1&&"TXT"===this.element.content[0].token?this.element.content[0].content:""},contentElements:function(){return"[]()"===this.element.token&&this.element.content.length>1?this.element.content.slice(1):[]}}},we=ye,_e=Object(s["a"])(we,pe,be,!1,null,null,null),Te=_e.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{attrs:{src:e.link,alt:e.txt}})},Oe=[],je={props:{element:{type:Object,required:!0}},computed:{link:function(){return"![]()"===this.element.token&&this.element.content.length>1&&"TXT"===this.element.content[0].token?this.element.content[0].content:""},txt:function(){return"![]()"===this.element.token&&this.element.content.length>1&&"TXT"===this.element.content[1].token?this.element.content[1].content:""}}},Se=je,xe=Object(s["a"])(Se,Ee,Oe,!1,null,null,null),Ae=xe.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.element.content,(function(t,r){return n("li",{key:r},[e._l(t[0],(function(e,t){return n("markdown-element",{key:"li"+r+","+t,attrs:{element:e}})})),null!==t[1]?n("markdown-element",{key:"li"+r+",lu",attrs:{element:t[1]}}):e._e()],2)})),0)},$e=[],qe={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},Pe=qe,Ce=(n("7c27"),Object(s["a"])(Pe,Re,$e,!1,null,"c18749bc",null)),Be=Ce.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("blockquote",e._l(e.element.content,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},ze=[],Ne={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},He=Ne,Ve=(n("15b2"),Object(s["a"])(He,Le,ze,!1,null,"4c0b04f4",null)),Fe=Ve.exports,Qe={props:{element:{type:Object,required:!0}},components:{"markdown-header":k,"markdown-paragraph":g,"markdown-newline":T,"markdown-text":A,"markdown-bold":B,"markdown-italic":F,"markdown-code":D,"markdown-codeblock":ge,"markdown-link":Te,"markdown-image":Ae,"markdown-list":Be,"markdown-quote":Fe}},We=Qe,Ie=Object(s["a"])(We,r,o,!1,null,null,null);t["default"]=Ie.exports},"41e6":function(e,t,n){},"43bb":function(e,t,n){},"4fcb":function(e,t,n){"use strict";var r=n("2cb6"),o=n.n(r);o.a},5239:function(e,t,n){"use strict";var r=n("8117"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"EventBus",(function(){return Ke}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("navigation-bar",{attrs:{toc:e.HazelWikiLayout}}),n("overlay"),n("top-header"),n("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"navbar_fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"navbar"},e._l(e.externalLinkArray,(function(t,r){return n("navbar-section",{key:r,attrs:{label:t.label,icon:t.icon}},e._l(t.links,(function(e,t){return n("navbar-link",{key:t,attrs:{label:e.label,icon:e.icon,to:e.to,external:e.external,hidden:e.hidden}})})),1)})),1)])},l=[],c=n("b85c"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar_section"},[n("span",{staticClass:"navbar_section_header"},[""!==e.icon?n("span",{staticClass:"material-icons"},[e._v(e._s(e.icon))]):e._e(),e._v(e._s(e.label)+" ")]),e._t("default")],2)},u=[],k={props:{label:{type:String,required:!0},icon:{type:String,required:!1,default:""}}},h=k,m=(n("18bd"),n("2877")),f=Object(m["a"])(h,s,u,!1,null,"baf55ea8",null),v=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hidden||e.external?!e.hidden&&e.external?n("a",{staticClass:"navbar_link",attrs:{href:e.externalTo,target:"_blank",rel:"noopener noreferrer"},on:{click:e.closeNav}},[n("span",{staticClass:"material-icons"},[e._v(e._s(e.icon))]),e._v(e._s(e.label)+" ")]):e._e():n("router-link",e._b({staticClass:"navbar_link",nativeOn:{click:function(t){return e.closeNav(t)}}},"router-link",e.attrs,!1),[n("span",{staticClass:"material-icons"},[e._v(e._s(e.icon))]),e._v(e._s(e.label)+" ")])},g=[],p={props:{label:{type:String,required:!0},external:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},hidden:{type:Boolean,required:!1,default:!1}},computed:{externalTo:function(){var e=this.$attrs.to||"/",t=/^https?:\/\//i;return t.test(e)?e:"https://"+e},to:function(){return this.$attrs.to||"/"},attrs:function(){var e=Object.assign({},this.$attrs);return e}},methods:{closeNav:function(){Ke.$emit("navbar-closeVisibile"),Ke.$emit("overlay-closeVisibile")}}},b=p,y=(n("bea5"),Object(m["a"])(b,d,g,!1,null,"0117cfb6",null)),w=y.exports,_={props:{toc:{type:Array,required:!0}},data:function(){return{visible:!1}},created:function(){var e=this;Ke.$on("navbar-toggleVisibile",(function(){e.visible=!e.visible,e.visible&&Ke.$emit("overlay-openVisibile")})),Ke.$on("navbar-closeVisibile",(function(){e.visible=!1,Ke.$emit("overlay-closeVisibile")}))},computed:{externalLinkArray:function(){var e,t=this.toc,n=Object(c["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.links){var o,a=Object(c["a"])(r.links);try{for(a.s();!(o=a.n()).done;){var i=o.value;if("ignore"==i.type){var l=/^\//;l.test(i.to)&&(i["external"]=!1),i["external"]=!0}else i["external"]=!1}}catch(s){a.e(s)}finally{a.f()}}}}catch(s){n.e(s)}finally{n.f()}return t}},components:{"navbar-section":v,"navbar-link":w}},T=_,E=(n("22d3"),Object(m["a"])(T,i,l,!1,null,"c3ef4bba",null)),O=E.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("span",{staticClass:"left"},[n("header-button",{attrs:{eventName:"navbar-toggleVisibile",icon:"menu",label:""}})],1),e._m(0)])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"right"},[n("a",{staticClass:"github-button",attrs:{href:"https://github.com/thecherno/Hazel","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star thecherno/Hazel on GitHub"}},[e._v(" Star ")])])}],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"header_button",on:{click:function(t){return e.buttonAction(e.eventName)}}},[n("header-label",{attrs:{icon:e.icon,label:e.label}})],1)},A=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"header_label"},[""!==e.icon?n("span",{staticClass:"material-icons"},[e._v(e._s(e.icon))]):e._e(),""!==e.icon&&""!==e.label?n("span",{staticClass:"header_label_spacer"}):e._e(),""!==e.label?n("span",[e._v(e._s(e.label))]):e._e()])},$=[],q={props:{icon:{type:String,required:!1,default:""},label:{type:String,required:!1,default:""}}},P=q,C=(n("4fcb"),Object(m["a"])(P,R,$,!1,null,"77067a52",null)),B=C.exports,L={props:{eventName:{type:String,required:!0},icon:{type:String,required:!1,default:""},label:{type:String,required:!1,default:""}},methods:{buttonAction:function(e){Ke.$emit(e)}},components:{"header-label":B}},z=L,N=(n("ee79"),Object(m["a"])(z,x,A,!1,null,"67b486eb",null)),H=N.exports,V={components:{"header-button":H}},F=V,Q=(n("1633"),Object(m["a"])(F,j,S,!1,null,"6d14dd46",null)),W=Q.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showOverlay?n("div",{attrs:{id:"overlay"},on:{click:e.closeNavBar}}):e._e()},G=[],M={data:function(){return{showOverlay:!1}},created:function(){var e=this;Ke.$on("overlay-closeVisibile",(function(){e.showOverlay=!1})),Ke.$on("overlay-openVisibile",(function(){e.showOverlay=!0}))},methods:{closeNavBar:function(){Ke.$emit("navbar-closeVisibile")}}},D=M,X=(n("8768"),Object(m["a"])(D,I,G,!1,null,"cf41b432",null)),J=X.exports,U=(n("dc53"),n("4d5c"),n("c1f7")),K={name:"App",data:function(){return{HazelWikiLayout:U}},components:{overlay:J,"top-header":W,"navigation-bar":O}},Y=K,Z=Object(m["a"])(Y,o,a,!1,null,null,null),ee=Z.exports,te=(n("ac1f"),n("5319"),n("8c4f")),ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("markdown-interpreter",{attrs:{src:e.src}})],1)},re=[],oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-body"},e._l(e.elements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},ae=[],ie=n("bc3a"),le=n.n(ie),ce=(n("99af"),n("a15b"),n("fb6a"),n("a434"),n("2909")),se=n("d4ec"),ue=n("bee2"),ke=function(){function e(t,n,r){Object(se["a"])(this,e),this.token=t,this.content=n,this.length=r}return Object(ue["a"])(e,[{key:"isNull",value:function(){return this.token==e.nullToken().token}},{key:"isError",value:function(){return this.token==e.errorToken().token}},{key:"isValid",value:function(){return!(this.isNull()||this.isError())}},{key:"isEnd",value:function(){return this.token==e.endOfFileToken().token}}],[{key:"endOfFileToken",value:function(){return new e("EOF",null,0)}},{key:"nullToken",value:function(){return new e("NULL",null,0)}},{key:"errorToken",value:function(){return new e("ERROR",null,0)}}]),e}(),he=function(){function e(){Object(se["a"])(this,e),this.scanners=[],this.scannersAmount=0}return Object(ue["a"])(e,[{key:"addScanner",value:function(e){this.scanners[this.scannersAmount++]=e}},{key:"scan",value:function(t){if(0==t.length)return ke.endOfFileToken();for(var n=0;n<this.scannersAmount;n++){var r=this.scanners[n].scan(t);if(r.isValid())return r}return new ke(e.getToken(),t.charAt(0),1)}},{key:"unscan",value:function(t){if(!t||!t.isValid())return"";if(t.token==e.getToken())return t.content;for(var n=0;n<this.scannersAmount;n++){var r=this.scanners[n].unscan(t);if(""!==r)return r}return""}}],[{key:"getToken",value:function(){return"TXT"}}]),e}(),me=function(){function e(){Object(se["a"])(this,e),this.scanner=new he}return Object(ue["a"])(e,[{key:"addScanner",value:function(e){this.scanner.addScanner(e)}},{key:"tokenize",value:function(e){var t=this.scanner.scan(e);return t.isEnd()?t:[t].concat(this.tokenize(e.substr(t.length)))}},{key:"untokenize",value:function(e){var t=this.untokenizeRecursive(e);return t}},{key:"untokenizeRecursive",value:function(e){return e.length<=1?this.scanner.unscan(e[0]):this.scanner.unscan(e[0]).concat(this.untokenizeRecursive(e.slice(1)))}}]),e}(),fe=n("262e"),ve=n("2caf"),de=function(e){Object(fe["a"])(n,e);var t=Object(ve["a"])(n);function n(){var e;return Object(se["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(ue["a"])(n,[{key:"scan",value:function(e){if(e.charAt(0)==this.token){var t=0;while(e.charAt(++t)==this.token);return new ke(this.token,null,t<3?1:3)}return ke.nullToken()}},{key:"unscan",value:function(e){if(e.token==this.token){for(var t="",n=e.length;n>0;n--)t=t.concat(this.token);return t}return""}}],[{key:"getToken",value:function(){return"`"}}]),n}(he),ge=(n("38cf"),function(e){Object(fe["a"])(n,e);var t=Object(ve["a"])(n);function n(){var e;return Object(se["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(ue["a"])(n,[{key:"scan",value:function(e){if(e.charAt(0)==this.token){var t=0;while(e.charAt(++t)==this.token);return new ke(this.token,null,t)}return ke.nullToken()}},{key:"unscan",value:function(e){return e.token==this.token?this.token.concat(this.token.repeat(e.length-1)):""}}],[{key:"getToken",value:function(){return"\n"}}]),n}(he)),pe=function(e){Object(fe["a"])(n,e);var t=Object(ve["a"])(n);function n(){var e;return Object(se["a"])(this,n),e=t.call(this),e.token=n.getToken(),e.tokenStage=0,e.srcStage=0,e}return Object(ue["a"])(n,[{key:"scan",value:function(e){if(e.substr(0,this.token[this.tokenStage].length)==this.token[this.tokenStage]){var t=new ke(this.token.join(""),null,this.token[this.tokenStage].length);return++this.tokenStage==this.token.length&&(this.tokenStage=0),t}return ke.nullToken()}},{key:"unscan",value:function(e){if(e.token==this.token.join("")){var t=this.token[this.tokenStage];return++this.tokenStage==this.token.length&&(this.tokenStage=0),t}return""}}],[{key:"getToken",value:function(){return["![","](",")"]}}]),n}(he),be=function(e){Object(fe["a"])(n,e);var t=Object(ve["a"])(n);function n(){var e;return Object(se["a"])(this,n),e=t.call(this),e.token=n.getToken(),e.tokenStage=0,e.srcStage=0,e}return Object(ue["a"])(n,[{key:"scan",value:function(e){if(e.substr(0,this.token[this.tokenStage].length)==this.token[this.tokenStage]){var t=new ke(this.token.join(""),null,this.token[this.tokenStage].length);return++this.tokenStage==this.token.length&&(this.tokenStage=0),t}return ke.nullToken()}},{key:"unscan",value:function(e){if(e.token==this.token.join("")){var t=this.token[this.tokenStage];return++this.tokenStage==this.token.length&&(this.tokenStage=0),t}return""}}],[{key:"getToken",value:function(){return["[","](",")"]}}]),n}(he),ye=function(e){Object(fe["a"])(n,e);var t=Object(ve["a"])(n);function n(){var e;return Object(se["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(ue["a"])(n,[{key:"scan",value:function(e){if(e.charAt(0)==this.token){var t=0;while(e.charAt(++t)==this.token);return new ke(this.token,null,t)}return ke.nullToken()}},{key:"unscan",value:function(e){if(e.token==this.token){for(var t="",n=e.length;n>0;n--)t=t.concat(this.token);return t}return""}}],[{key:"getToken",value:function(){return"#"}}]),n}(he),we=function(e){Object(fe["a"])(n,e);var t=Object(ve["a"])(n);function n(){var e;return Object(se["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(ue["a"])(n,[{key:"scan",value:function(e){return e.charAt(0)==this.token?new ke(this.token,0,1):ke.nullToken()}},{key:"unscan",value:function(e){return e.token==this.token?this.token:""}}],[{key:"getToken",value:function(){return"-"}}]),n}(he),_e=function(e){Object(fe["a"])(n,e);var t=Object(ve["a"])(n);function n(){var e;return Object(se["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(ue["a"])(n,[{key:"scan",value:function(e){if(e.charAt(0)==this.token){var t=0;while(e.charAt(++t)==this.token);return new ke(this.token,null,t)}return ke.nullToken()}},{key:"unscan",value:function(e){return e.token==this.token?this.token:""}}],[{key:"getToken",value:function(){return">"}}]),n}(he),Te=function(e){Object(fe["a"])(n,e);var t=Object(ve["a"])(n);function n(){var e;return Object(se["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(ue["a"])(n,[{key:"scan",value:function(e){return e.substr(0,this.token.length)==this.token?new ke(this.token,null,this.token.length):ke.nullToken()}},{key:"unscan",value:function(e){return e.token==this.token?this.token.concat(this.token):""}}],[{key:"getToken",value:function(){return"**"}}]),n}(he),Ee=function(e){Object(fe["a"])(n,e);var t=Object(ve["a"])(n);function n(){var e;return Object(se["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(ue["a"])(n,[{key:"scan",value:function(e){return e.charAt(0)==this.token?new ke(this.token,null,this.token.length):ke.nullToken()}},{key:"unscan",value:function(e){return e.token==this.token?this.token.concat(this.token):""}}],[{key:"getToken",value:function(){return"*"}}]),n}(he),Oe=function(){function e(t,n){Object(se["a"])(this,e),this.token=t,this.content=n}return Object(ue["a"])(e,null,[{key:"createParagraphElement",value:function(t){return new e("p",t instanceof Array?t:[t])}},{key:"createTextElement",value:function(t){return new e(he.getToken(),t)}},{key:"createBoldElement",value:function(t){return new e(Te.getToken(),[t])}},{key:"createItalicElement",value:function(t){return new e(Ee.getToken(),[t])}},{key:"createNewlineElement",value:function(t){return new e(ge.getToken(),[t])}},{key:"createHeaderElement",value:function(t,n){return new e(ye.getToken(),[t].concat(n))}},{key:"createImageElement",value:function(t,n){return new e(pe.getToken().join(""),[t].concat(n))}},{key:"createLinkElement",value:function(t,n){return new e(be.getToken().join(""),[t].concat(n))}},{key:"createListElement",value:function(t){return new e(we.getToken(),t)}},{key:"createCodeElement",value:function(t){return new e(de.getToken(),[t])}},{key:"createCodeBlockElement",value:function(t,n){return new e(de.getToken().repeat(3),[t].concat(n))}},{key:"createQuoteElement",value:function(t){return new e(_e.getToken(),t instanceof Array?t:[t])}}]),e}(),je=function(){function e(){Object(se["a"])(this,e),this.lexer=new me,this.lexer.addScanner(new de),this.lexer.addScanner(new ge),this.lexer.addScanner(new pe),this.lexer.addScanner(new be),this.lexer.addScanner(new ye),this.lexer.addScanner(new we),this.lexer.addScanner(new _e),this.lexer.addScanner(new Te),this.lexer.addScanner(new Ee),this.codeScanner=new me,this.codeBlockScanner=new me,this.codeBlockScanner.addScanner(new ge),this.src="",this.tokenArray=[],this.elementArray=[],this.insideParagraph=!1,this.insideQuote=!1}return Object(ue["a"])(e,[{key:"parse",value:function(e){return this.setSrc(e),this.createTokens(),this.cleanupTokens(),this.createElements(),this.getElements()}},{key:"setSrc",value:function(e){this.src=e}},{key:"createTokens",value:function(){this.tokenArray=this.lexer.tokenize(this.src)}},{key:"cleanupTokens",value:function(){this.untokenizeCodeTokens(),this.removeTokens(),this.mergeTokens()}},{key:"untokenizeCodeTokens",value:function(){var e=0;while(e<this.tokenArray.length-1){var t=this.tokenArray[e++];if(t.token==de.getToken()){var n,r=e--;while(++e<this.tokenArray.length-1&&(this.tokenArray[e].token!=t.token||this.tokenArray[e].length<t.length));var o=e++,a=this.lexer.untokenize(this.tokenArray.slice(r,o)),i=[];1==t.length?i=this.codeScanner.tokenize(a).slice(0,-1):3==t.length&&(i=this.codeBlockScanner.tokenize(a).slice(0,-1)),(n=this.tokenArray).splice.apply(n,[r,o-r].concat(Object(ce["a"])(i))),e=r+i.length+1}}}},{key:"removeTokens",value:function(){var e=0;while(e<this.tokenArray.length){var t=this.tokenArray[e++];if(t.token==he.getToken()&&"\r"===t.content)this.tokenArray.splice(--e,1);else if(t.isEnd())this.tokenArray.splice(--e,1);else if(t.token==ye.getToken()){var n=this.tokenArray[e];n.token==he.getToken()&&" "===n.content&&this.tokenArray.splice(e--,1)}else if(t.token==we.getToken()){var r=1;while(++r<=e&&this.tokenArray[e-r].token==he.getToken()&&" "===this.tokenArray[e-r].content);if(this.tokenArray[e-r].token===ge.getToken()){var o=this.tokenArray[e-2],a=this.tokenArray[e];o.token==he.getToken()&&" "===o.content?(t.content++,e--,this.tokenArray.splice(--e,1)):a.token==he.getToken()&&" "===a.content&&this.tokenArray.splice(e--,1)}else this.tokenArray[--e]=new ke(he.getToken(),t.token,t.token.length)}else if(t.token==_e.getToken()){var i=this.tokenArray[e-2],l=this.tokenArray[e];i.token===t.token||i.token===ge.getToken()?l.token==he.getToken()&&" "===l.content&&this.tokenArray.splice(e--,1):this.tokenArray[--e]=new ke(he.getToken(),t.token,t.token.length)}}}},{key:"mergeTokens",value:function(){var e=0;while(e<this.tokenArray.length-1){var t=this.tokenArray[e++],n=this.tokenArray[e];t.token===he.getToken()&&n.token===t.token?(n.content=t.content.concat(n.content),n.length+=t.length,this.tokenArray.splice(--e,1)):(t.token===ge.getToken()&&n.token===t.token||t.token===ye.getToken()&&n.token===t.token||t.token==_e.getToken()&&n.token===t.token)&&(n.length+=t.length,this.tokenArray.splice(--e,1))}}},{key:"isPagragraphToken",value:function(e){return this.insideQuote||!this.insideParagraph&&(e.token==he.getToken()||e.token==ge.getToken()||e.token==Ee.getToken()||e.token==Te.getToken()||e.token==we.getToken()||e.token==pe.getToken().join("")||e.token==be.getToken().join("")||e.token==de.getToken()&&e.length<3)}},{key:"isParagraphEnd",value:function(e){return e.token==ge.getToken()&&e.length>=2||e.token==ye.getToken()}},{key:"createRecursiveListItems",value:function(e){var t=e[0][0].content,n=[],r=-1;while(++r<e.length&&e[r][0].content<=t){var o=e[r].slice(1),a=r;while(++a<e.length&&e[a][0].content>t);var i=[];a-r>1&&(i=this.createRecursiveListItems(e.slice(r+1,a))),n.push([o,i]),r=a-1}return n}},{key:"createRecursiveListElements",value:function(e){var t=-1;while(++t<e.length){var n=this.createElementsRecursive(e[t][0]);void 0===n.length&&(n=[n]);var r=null;e[t][1].length>0&&(r=this.createRecursiveListElements(e[t][1])),e[t]=[n,r]}return Oe.createListElement(e)}},{key:"createElements",value:function(){this.tokenArray&&this.tokenArray.length>0?this.elementArray=this.createElementsRecursive(this.tokenArray):this.elementArray=[]}},{key:"createElementsRecursive",value:function(e){if(0==e.length)return console.warn("Parser received an empty array!"),console.trace(),[];var t=e[0];if(t.token==ye.getToken()){var n=0;while(++n<e.length-1&&e[n].token!=ge.getToken());this.insideParagraph=!0;var r=Oe.createHeaderElement(t.length,this.createElementsRecursive(e.slice(1,n)));return this.insideParagraph=!1,n==e.length-1?r:[r].concat(this.createElementsRecursive(e.slice(n+1)))}if(t.token==de.getToken()&&t.length>=3){var o=0;while(++o<e.length-1&&e[o].token!==t.token);var a=e.slice(1,o),i=null;a[0].token==he.getToken()&&(i=a.splice(0,1)[0].content);while(a[0].token==ge.getToken())a.splice(0,1);while(a[a.length-1].token==ge.getToken())a.splice(-1);this.insideParagraph=!0;var l=Oe.createCodeBlockElement(i,this.createElementsRecursive(a));return this.insideParagraph=!1,o==e.length-1?l:[l].concat(this.createElementsRecursive(e.slice(o+1)))}if(t.token==_e.getToken()){var c=-1;while(++c<e.length&&e[c].token===t.token){while(++c<e.length&&e[c].token!==ge.getToken());if(c<e.length&&e[c].length>1){++c;break}}var s=e.slice(0,c),u=-1;while(++u<s.length)s[u].token===t.token&&(s[u].length>1?s[u].length--:(s.splice(u--,1),u>=0&&u<s.length-1&&s[u].token===ge.getToken()&&s[u+1].token===ge.getToken()&&(s[u].length+=s[u+1].length,s.splice(u+1,1))));this.insideQuote=!0;var k=Oe.createQuoteElement(this.createElementsRecursive(s));return this.insideQuote=!1,c>=e.length-1?k:[k].concat(this.createElementsRecursive(e.slice(c)))}if(this.isPagragraphToken(t)){var h=-1;while(++h<e.length-1&&e[h].token==ge.getToken());var m=h;while(++m<e.length-1&&!this.isParagraphEnd(e[m]));var f=this.insideQuote;this.insideQuote=!1,this.insideParagraph=!0;var v=Oe.createParagraphElement(this.createElementsRecursive(e.slice(h,m)));return this.insideParagraph=!1,this.insideQuote=f,m>=e.length-1?v:[v].concat(this.createElementsRecursive(e.slice(m+1)))}if(t.token==ge.getToken()){var d=Oe.createNewlineElement(t.length);return 1==e.length?d:[d].concat(this.createElementsRecursive(e.slice(1)))}if(t.token==he.getToken()){var g=Oe.createTextElement(t.content);return 1==e.length?g:[g].concat(this.createElementsRecursive(e.slice(1)))}if(t.token==Te.getToken()){var p=0;while(++p<e.length&&e[p].token!=t.token);var b=Oe.createBoldElement(this.createElementsRecursive(e.slice(1,p)));return p==e.length-1?b:[b].concat(this.createElementsRecursive(e.slice(p+1)))}if(t.token==Ee.getToken()){var y=0;while(++y<e.length&&e[y].token!=t.token);var w=Oe.createItalicElement(this.createElementsRecursive(e.slice(1,y)));return y==e.length-1?w:[w].concat(this.createElementsRecursive(e.slice(y+1)))}if(t.token==pe.getToken().join("")){var _,T=0;while(++T<e.length&&e[T].token!=t.token);_=T>1?this.createElementsRecursive(e.slice(1,T)):this.createElementsRecursive([new ke(he.getToken(),"")]);var E,O=T;while(++O<e.length&&e[O].token!=t.token);E=O-T>1?this.createElementsRecursive(e.slice(T+1,O)):this.createElementsRecursive([new ke(he.getToken(),"")]);var j=Oe.createImageElement(E,_);return O==e.length-1?j:[j].concat(this.createElementsRecursive(e.slice(O+1)))}if(t.token==be.getToken().join("")){var S,x=0;while(++x<e.length&&e[x].token!=t.token);S=x>1?this.createElementsRecursive(e.slice(1,x)):this.createElementsRecursive([new ke(he.getToken(),"")]);var A,R=x;while(++R<e.length&&e[R].token!=t.token);A=R-x>1?this.createElementsRecursive(e.slice(x+1,R)):this.createElementsRecursive([new ke(he.getToken(),"")]);var $=Oe.createLinkElement(A,S);return R==e.length-1?$:[$].concat(this.createElementsRecursive(e.slice(R+1)))}if(t.token==we.getToken()){var q=[],P=0;while(P<e.length&&e[P].token==we.getToken()){var C=P;while(++C<e.length&&e[C].token!==ge.getToken());q.push(e.slice(P,C)),P=C+1}q=this.createRecursiveListItems(q);var B=this.createRecursiveListElements(q);return C==e.length?B:[B].concat(this.createElementsRecursive(e.slice(C+1)))}if(t.token==de.getToken()){var L=0;while(++L<e.length&&e[L].token!=t.token);var z=Oe.createCodeElement(this.createElementsRecursive(e.slice(1,L)));return L==e.length-1?z:[z].concat(this.createElementsRecursive(e.slice(L+1)))}return console.warn("unknown token: ".concat(t.token)),e.length>1?this.createElementsRecursive(e.slice(1)):[]}},{key:"getElements",value:function(){return this.elementArray}},{key:"logTokens",value:function(){console.log(this.tokenArray)}},{key:"logElements",value:function(){console.log(this.elementArray)}}]),e}(),Se=n("37f0"),xe=new je,Ae={props:{src:{type:String,required:!0}},data:function(){return{text:""}},mounted:function(){var e=this;le()({url:this.src,method:"GET"}).then((function(t){e.text=t.data})).catch((function(e){console.log(e)}))},watch:{src:function(){var e=this;le()({url:this.src,method:"GET"}).then((function(t){e.text=t.data})).catch((function(e){console.log(e)}))}},computed:{elements:function(){return xe.parse(this.text)}},components:{"markdown-element":Se["default"]}},Re=Ae,$e=(n("cd17"),Object(m["a"])(Re,oe,ae,!1,null,null,null)),qe=$e.exports,Pe={props:{src:{type:String,required:!0}},components:{"markdown-interpreter":qe}},Ce=Pe,Be=(n("a3e1"),Object(m["a"])(Ce,ne,re,!1,null,"25ef40d2",null)),Le=Be.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("markdown-page",{attrs:{src:"./content/Wiki Dev/Testfile.md"}})],1)},Ne=[],He={components:{"markdown-page":qe}},Ve=He,Fe=Object(m["a"])(Ve,ze,Ne,!1,null,null,null),Qe=Fe.exports,We=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ie=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("h3",[e._v("404: Page Not Found "),n("span",{staticClass:"material-icons"},[e._v("mood_bad")])])])])}],Ge=(n("5239"),{}),Me=Object(m["a"])(Ge,We,Ie,!1,null,"1f07239c",null),De=Me.exports,Xe=n("c1f7");function Je(){function e(e){var t=/^[^\w]*/,n=/\.{2}\//g,r=/\.{1}\//g,o=e.replace(t,"").replace(n,"").replace(r,"");return"./content/".concat(o)}function t(t){return"markdown"==t.type||"external-link"==t.type?{path:t.to,component:Le,props:{src:e(t.src)}}:("ignore"==t.type||console.warn("unknown route type: ".concat(t.type)),null)}for(var n=[{path:"*",component:De},{path:"/testpage",component:Qe}],r=0;r<Xe.length;r++){var o=Xe[r].links;if(o)for(var a=0;a<o.length;a++){var i=t(o[a]);i&&n.push(i)}}return n}r["a"].use(te["a"]);var Ue=new te["a"]({mode:"history",base:"/HazelWiki/",routes:Je()}),Ke=new r["a"];r["a"].config.productionTip=!1,new r["a"]({router:Ue,render:function(e){return e(ee)}}).$mount("#app")},"628e":function(e,t,n){},6610:function(e,t,n){"use strict";var r=n("43bb"),o=n.n(r);o.a},"6f4a":function(e,t,n){"use strict";var r=n("c632"),o=n.n(r);o.a},"7b67":function(e,t,n){},"7c27":function(e,t,n){"use strict";var r=n("7b67"),o=n.n(r);o.a},8117:function(e,t,n){},8768:function(e,t,n){"use strict";var r=n("a3a5"),o=n.n(r);o.a},"87db":function(e,t,n){},"9cb9":function(e,t,n){"use strict";var r=n("87db"),o=n.n(r);o.a},a3a5:function(e,t,n){},a3e1:function(e,t,n){"use strict";var r=n("ae31"),o=n.n(r);o.a},a5e2:function(e,t,n){},ae31:function(e,t,n){},b999:function(e,t,n){},bcf7:function(e,t,n){},bea5:function(e,t,n){"use strict";var r=n("2b0f"),o=n.n(r);o.a},c1f7:function(e){e.exports=JSON.parse('[{"label":"Navigation bar"},{"label":"Basics","icon":"info","links":[{"to":"/","label":"Home","type":"markdown","src":"Basics/Home.md"},{"to":"/Features","label":"Features","type":"markdown","src":"Basics/FutureFeatures.md"},{"to":"/GettingStarted","label":"Getting started","type":"markdown","src":"Basics/GettingStarted.md"},{"to":"/SystemRequirements","label":"System requirements","type":"markdown","src":"Basics/SystemRequirements.md"},{"to":"/BuildingHazel","label":"Building Hazel","type":"markdown","src":"Basics/BuildingHazel.md"},{"to":"/FirstProject","label":"First project","type":"markdown","src":"Basics/FirstProject.md"}]},{"label":"Engine","icon":"menu_book","links":[{"to":"/Benchmarking","label":"Benchmarking","type":"markdown","src":"Engine/Benchmarking.md"},{"to":"/LayerSystem","label":"Layer system","type":"markdown","src":"Engine/LayerSystem.md"},{"to":"/EventSystem","label":"Event system","type":"markdown","src":"Engine/EventSystem.md"}]},{"label":"Useful Links","links":[{"to":"https://thecherno.com/discord","label":"Discord","icon":"question_answer","type":"ignore"}]},{"label":"Wiki Dev","icon":"code","links":[{"to":"/ContributingMarkdown","label":"Contributing markdown","type":"markdown","src":"Wiki Dev/ContributingMarkdown.md"},{"to":"/testpage","label":"Testpage markdown","type":"markdown","src":"Wiki Dev/Testfile.md","hidden":true}]}]')},c632:function(e,t,n){},cd17:function(e,t,n){"use strict";var r=n("d4ae"),o=n.n(r);o.a},cdcb:function(e,t,n){"use strict";var r=n("e9e7"),o=n.n(r);o.a},d3b8:function(e,t,n){"use strict";var r=n("628e"),o=n.n(r);o.a},d4ae:function(e,t,n){},e735:function(e,t,n){},e9e7:function(e,t,n){},ee79:function(e,t,n){"use strict";var r=n("41e6"),o=n.n(r);o.a}});
//# sourceMappingURL=app.be5b9852.js.map