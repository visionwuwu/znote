(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{281:function(t,e,a){},288:function(t,e,a){},289:function(t,e,a){},301:function(t,e,a){"use strict";var o=a(281);a.n(o).a},302:function(t,e,a){"use strict";a(183);var o=a(22),n=a(292),s={props:{currentTag:{type:String,default:""}},computed:{tags:function(){return[{name:"全部",path:"/tag/"}].concat(Object(o.a)(this.$tags.list))}},methods:{tagClick:function(t){this.$emit("getCurrentTag",t)},getOneColor:n.a}},i=(a(301),a(2)),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,(function(e,o){return a("span",{key:o,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(a){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"7f960c8d",null);e.a=r.exports},330:function(t,e,a){},331:function(t,e,a){},332:function(t,e,a){},333:function(t,e,a){},334:function(t,e,a){},335:function(t,e,a){"use strict";var o=a(288);a.n(o).a},336:function(t,e,a){"use strict";var o=a(289);a.n(o).a},383:function(t,e,a){"use strict";var o=a(330);a.n(o).a},384:function(t,e,a){t.exports=a.p+"assets/img/home-bg.7b267d7c.jpg"},385:function(t,e,a){"use strict";var o=a(331);a.n(o).a},386:function(t,e,a){"use strict";var o=a(332);a.n(o).a},387:function(t,e,a){"use strict";var o=a(333);a.n(o).a},388:function(t,e,a){"use strict";var o=a(334);a.n(o).a},416:function(t,e,a){"use strict";a.r(e);var o=a(352),n=a(285),s=a(283),i={mixins:[s.a],components:{NavLink:o.a,ModuleTransition:n.a},computed:{actionLink:function(){return{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}}},r=(a(383),a(2)),c=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"hero"},[a("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?a("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&!1!==t.$frontmatter.isShowTitleInHome?a("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"午后南杂"))]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[a("p",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"description"},[t._v(t._s(t.$description||"Welcome to your vuePress-theme-reco site"))])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&!0===t.$themeConfig.huawei?a("p",{staticClass:"huawei"},[a("i",{staticClass:"iconfont reco-huawei",staticStyle:{color:"#fc2d38"}}),t._v("\n           华为，为中华而为之！\n      ")]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?a("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(e,o){return a("div",{key:o,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.4"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,l=(a(23),a(20),a(69)),u=a(302),h=(a(42),a(294)),d=a.n(h),p=a(292),m={data:function(){return{popupWindowStyle:{}}},computed:{dataAddColor:function(){var t=this.$themeConfig.friendLink;return t&&t.length>0?t=t.map((function(t){return Object(l.a)({},t,{color:Object(p.a)()})})):[]}},methods:{getMd5:function(t){return d()(t)},showDetail:function(t){var e=this,a=t.target,o=a.querySelector(".popup-window-wrapper"),n=a.querySelector(".popup-window");o.style.display="block";var s=a.clientWidth,i=n.clientWidth,r=n.clientHeight;this.popupWindowStyle={left:(s-i)/2+"px",top:-r+"px"},this.$nextTick((function(){e._adjustPosition(a.querySelector(".popup-window"))}))},hideDetail:function(t){t.target.querySelector(".popup-window-wrapper").style.display="none"},getImgUrl:function(t){var e=t.logo,a=t.email;return e&&/^http/.test(e)?e:e&&!/^http/.test(e)?this.$withBase(e):"//1.gravatar.com/avatar/".concat(this.getMd5(a||""),"?s=50&amp;d=mm&amp;r=x")},_adjustPosition:function(t){var e=document.body.offsetWidth,a=t.getBoundingClientRect(),o=e-(a.x+a.width);if(o<0){var n=t.offsetLeft;this.popupWindowStyle=Object(l.a)({},this.popupWindowStyle,{left:n+o+"px"})}}}},v=(a(385),Object(r.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(e,o){return a("div",{key:o,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[a("span",{staticClass:"list-style",style:{backgroundColor:e.color}}),t._v("\n    "+t._s(e.title)+"\n    "),a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"popup-window-wrapper"},[a("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.getImgUrl(e)}})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(e.title))]),t._v(" "),a("a",{staticClass:"btn-go",style:{backgroundColor:e.color},attrs:{href:e.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),e.desc?a("p",[t._v(t._s(e.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"5acd0517",null).exports),f=a(306),g=a(305),_=a(360),C={mixins:[g.a,s.a],components:{NoteAbstract:f.a,TagList:u.a,FriendLink:v,ModuleTransition:n.a,PersonalInfo:_.a},data:function(){return{recoShow:!1,currentPage:1,tags:[]}},computed:{actionLink:function(){var t=this.$frontmatter;return{link:t.actionLink,text:t.actionText}},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}},bgImageStyle:function(){var t={height:"350px",textAlign:"center",overflow:"hidden"},e=this.$frontmatter.bgImageStyle;return e?Object(l.a)({},t,{},e):t},heroHeight:function(){return document.querySelector(".hero").clientHeight}},mounted:function(){this.recoShow=!0,this._setPage(this._getStoragePage())},methods:{getCurrentPage:function(t){var e=this;this._setPage(t),setTimeout((function(){window.scrollTo(0,e.heroHeight)}),100)},getPages:function(){var t=this.$site.pages;t=t.filter((function(t){var e=t.frontmatter,a=e.home,o=e.date;return!(1==a||void 0===o)})),this.pages=0==t.length?[]:t},getPagesByTags:function(t){this.$router.push({path:t.path})},_setPage:function(t){this.currentPage=t,this.$page.currentPage=t,this._setStoragePage(t)},getOneColor:p.a}},w=(a(386),Object(r.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-blog"},[o("div",{staticClass:"hero",style:Object.assign({},t.bgImageStyle)},[o("div",{staticClass:"mask",style:{background:"url("+(t.$frontmatter.bgImage?t.$withBase(t.$frontmatter.bgImage):a(384))+") center/cover no-repeat"}}),t._v(" "),o("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?o("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.04"}},[!1!==t.$frontmatter.isShowTitleInHome?o("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"午后南杂"))]):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.08"}},[o("p",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"description"},[t._v("\n        "+t._s(t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")])]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&!0===t.$themeConfig.huawei?o("p",{staticClass:"huawei"},[o("i",{staticClass:"iconfont reco-huawei",staticStyle:{color:"#fc2d38"}}),t._v("   华为，为中华而为之！\n      ")]):t._e()])],1),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.24"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[o("div",{staticClass:"blog-list"},[o("note-abstract",{attrs:{data:t.$recoPosts,currentPage:t.currentPage}}),t._v(" "),o("pagation",{staticClass:"pagation",attrs:{total:t.$recoPosts.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1),t._v(" "),o("div",{staticClass:"info-wrapper"},[o("PersonalInfo"),t._v(" "),o("h4",[o("i",{staticClass:"iconfont reco-category"}),t._v(" 分类")]),t._v(" "),o("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(e,a){return o("li",{key:a,staticClass:"category-item"},[o("router-link",{attrs:{to:e.path}},[o("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),o("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(e.pages.length))])])],1)})),0),t._v(" "),o("hr"),t._v(" "),0!==t.$tags.list.length?o("h4",[o("i",{staticClass:"iconfont reco-tag"}),t._v(" 标签")]):t._e(),t._v(" "),o("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?o("h4",[o("i",{staticClass:"iconfont reco-friend"}),t._v(" 友链")]):t._e(),t._v(" "),o("FriendLink")],1)])]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.36"}},[o("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),$=(a(26),a(28),a(358)),y=a(58);function b(t,e,a){var o=[];!function t(e,a){for(var o=0,n=e.length;o<n;o++)"group"===e[o].type?t(e[o].children||[],a):a.push(e[o])}(e,o);for(var n=0;n<o.length;n++){var s=o[n];if("page"===s.type&&s.path===decodeURIComponent(t.path))return o[n+a]}}var k={mixins:[s.a],components:{PageInfo:$.a,ModuleTransition:n.a},props:["sidebarItems"],data:function(){return{isHasKey:!0}},computed:{showAccessNumber:function(){return"valine"===this.$themeConfig.commentsSolution},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$themeConfig.lastUpdated?this.$themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,a=this.$frontmatter.prev;return!1===a?void 0:a?Object(y.m)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,b(t,e,-1))},next:function(){var t,e,a=this.$frontmatter.next;return!1===a?void 0:a?Object(y.m)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,b(t,e,1))},editLink:function(){if(!1===this.$frontmatter.editLink)return!1;var t=this.$themeConfig,e=t.repo,a=t.editLinks,o=t.docsDir,n=void 0===o?"":o,s=t.docsBranch,i=void 0===s?"master":s,r=t.docsRepo,c=void 0===r?e:r;return c&&a&&this.$page.relativePath?this.createEditLink(e,c,n,i,this.$page.relativePath):""},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,a,o,n){return/bitbucket.org/.test(t)?(y.k.test(e)?e:t).replace(y.b,"")+"/src"+"/".concat(o,"/")+(a?a.replace(y.b,"")+"/":"")+n+"?mode=edit&spa=0&at=".concat(o,"&fileviewer=file-view-default"):(y.k.test(e)?e:"https://github.com/".concat(e)).replace(y.b,"")+"/edit"+"/".concat(o,"/")+(a?a.replace(y.b,"")+"/":"")+n}}},S=(a(387),Object(r.a)(k,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[a("ModuleTransition",[t._t("top")],2),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-title"},[a("h1",[t._v(t._s(t.$page.title))]),t._v(" "),a("hr"),t._v(" "),a("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1)]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"theme-reco-content"})],1),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[a("footer",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule&&(t.prev||t.next)?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n          ←\n          "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e(),t._v("\n          →\n        ")],1):t._e()])]):t._e()]),t._v(" "),a("ModuleTransition",{attrs:{delay:"0.40"}},[t._t("bottom")],2)],1)}),[],!1,null,null,null).exports),x=(a(41),{computed:{year:function(){return(new Date).getFullYear()}}}),M=(a(388),Object(r.a)(x,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("span",[a("i",{staticClass:"iconfont reco-theme"}),t._v(" "),a("a",{attrs:{target:"blank",href:t.$withBase("/views/specification/guide.html")}},[t._v("\n      Reform "),t._m(0),t._v("\n      And "),t._m(1)])]),t._v(" "),t.$themeConfig.record?a("span",[a("i",{staticClass:"iconfont reco-beian"}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.recordLink||"#"}},[t._v(t._s(t.$themeConfig.record))])]):t._e(),t._v(" "),a("span",[a("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),a("a",[t.$themeConfig.author||t.$site.title?a("span",[t._v(t._s(t.$themeConfig.author||t.$site.title))]):t._e(),t._v("\n        \n      "),t.$themeConfig.startYear?a("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s(t.year)+"\n    ")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.$themeConfig.valineConfig,expression:"$themeConfig.valineConfig !== undefined"}]},[a("i",{staticClass:"iconfont reco-eye"}),t._v(" "),a("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.cyberSecurityRecord?a("p",{staticClass:"cyber-security"},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),a("a",{attrs:{href:t.$themeConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.cyberSecurityRecord))])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com"}},[e("b",[this._v("Reco")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://vuepress.vuejs.org/"}},[e("b",[this._v("Vuepress")])])}],!1,null,"82afaea8",null).exports),T={components:{HomeBlog:w,Home:c,Page:S,Common:a(293).a,Footer:M},computed:{sidebarItems:function(){return Object(y.n)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},homeCom:function(){var t=this.$themeConfig.type;return void 0!==t?"blog"==t?"HomeBlog":t:"Home"}}},L=(a(335),a(336),Object(r.a)(T,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Common",[t.$frontmatter.home?a(t.homeCom,{tag:"component"}):a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$frontmatter.home?a("Footer",{staticClass:"footer"}):t._e()],1)],1)}),[],!1,null,null,null));e.default=L.exports}}]);