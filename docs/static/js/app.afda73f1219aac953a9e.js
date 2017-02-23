webpackJsonp([0,2],[,function(t,e,a){"use strict";e.a={dataSourcePath:"http://jsonplaceholder.typicode.com",photoLimit:20}},,function(t,e,a){"use strict";var o=a(2),n=a.n(o),s=a(25),r=a.n(s),i=a(17),u=a.n(i),l=a(16),c=a.n(l),h=a(18),d=a.n(h),p=a(19),v=a.n(p);n.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Main",component:u.a},{path:"/album/:id",name:"Album",component:c.a},{path:"/photo/:id",name:"Photo",component:d.a},{path:"/user/:id",name:"User",component:v.a}]})},function(t,e,a){a(12);var o=a(0)(a(6),a(21),null,null);t.exports=o.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(1);e.default={data:function(){return{photos:[],album:{},author:{}}},created:function(){var t=this;this.$http.get(o.a.dataSourcePath+"/albums/"+this.$route.params.id).then(function(e){t.album=e.body,t.$http.get(o.a.dataSourcePath+"/users/"+t.album.userId).then(function(e){t.author=e.body},function(t){console.error(t)})},function(t){console.error(t)}),this.$http.get(o.a.dataSourcePath+"/album/"+this.$route.params.id+"/photos").then(function(e){t.photos=e.body},function(t){console.error(t)})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(1);e.default={data:function(){return{photos:[],lastLoadedPage:0,loading:!1}},created:function(){this.load(0),window.addEventListener("scroll",this.onScroll)},destroyed:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){window.scrollY+window.innerHeight-this.$el.offsetTop>=this.$el.scrollHeight-300&&this.load(this.lastLoadedPage+1)},load:function(t){var e=this;this.loading||(this.loading=!0,this.$http.get(o.a.dataSourcePath+"/photos/?_limit="+o.a.photoLimit+"&_page="+t).then(function(a){var o=0;a.body.forEach(function(t,a){var n=new Image;o++,e.loading=!0,n.onload=function(){t.thumbnailUrl=n.src,e.photos.push(t),o--,o<=0&&(e.loading=!1)},n.src=t.thumbnailUrl}),0==a.body.length&&(e.loading=!1),e.lastLoadedPage=t},function(t){console.error(t),e.loading=!1}))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(1);e.default={name:"photo",data:function(){return{photo:{}}},created:function(){var t=this;this.$http.get(o.a.dataSourcePath+"/photos/"+this.$route.params.id).then(function(e){t.photo=e.body},function(t){console.error(t)})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(1);e.default={data:function(){return{user:{company:{}},userInfo:[],albums:[]}},created:function(){var t=this;this.$http.get(o.a.dataSourcePath+"/users/"+this.$route.params.id).then(function(e){t.user=e.body,t.userInfo=[{label:"Name",value:t.user.name},{label:"Phone",value:t.user.phone},{label:"Email",value:t.user.email},{label:"Website",value:t.user.website},{label:"City",value:t.user.address.city}]},function(t){console.error(t)}),this.$http.get(o.a.dataSourcePath+"/users/"+this.$route.params.id+"/albums").then(function(e){t.albums=e.body},function(t){console.error(t)})}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){a(11);var o=a(0)(a(7),a(20),"data-v-15c9a0fc",null);t.exports=o.exports},function(t,e,a){a(13);var o=a(0)(a(8),a(22),"data-v-323c9c88",null);t.exports=o.exports},function(t,e,a){a(15);var o=a(0)(a(9),a(24),"data-v-57407182",null);t.exports=o.exports},function(t,e,a){a(14);var o=a(0)(a(10),a(23),"data-v-50ff8264",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"label"},[t._v("Album")]),t._v(" "),a("h1",[t._v(t._s(t.album.title))]),t._v(" "),a("h2",[t._v("by "),a("router-link",{attrs:{to:"/user/"+t.album.userId}},[t._v(t._s(t.author.username))])],1),t._v(" "),a("ul",{staticClass:"photo-list"},t._l(t.photos,function(t){return a("li",[a("router-link",{attrs:{to:"/photo/"+t.id}},[a("img",{staticClass:"photo",attrs:{src:t.thumbnailUrl}})])],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("div",{staticClass:"wrapper"},[a("router-link",{attrs:{to:"/"}},[t._v("Main page")]),t._v(" "),a("a",{attrs:{href:"https://github.com/asandberg/photoalbum-vue"}},[t._v("Project in Github")]),t._v(" "),a("a",{attrs:{href:"http://jsonplaceholder.typicode.com/"}},[t._v("JSON Placeholder data")]),t._v(" "),a("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")])],1)]),t._v(" "),t._m(0),t._v(" "),a("div",{attrs:{id:"main"}},[a("router-view")],1),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"banner"}},[a("h2",[t._v("Vue photos")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("p",[t._v("What are cookies made of?")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"photo-list"},t._l(t.photos,function(t){return a("li",[a("router-link",{attrs:{to:"/photo/"+t.id}},[a("img",{staticClass:"photo",attrs:{src:t.thumbnailUrl}})])],1)})),t._v(" "),t.loading?a("div",{staticClass:"loader"},[a("img",{attrs:{src:"static/ripple.svg"}})]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user"},[a("h2",{staticClass:"label"},[t._v("User")]),t._v(" "),a("h1",[t._v(t._s(t.user.username))]),t._v(" "),a("div",{staticClass:"info"},[a("div",t._l(t.userInfo,function(e){return a("p",[a("span",[t._v(t._s(e.label)+":")]),a("span",[t._v(t._s(e.value))])])})),t._v(" "),a("div",{staticClass:"company"},[a("h3",{staticClass:"label"},[t._v("Company")]),t._v(" "),a("strong",[t._v(t._s(t.user.company.name))]),t._v(" "),a("p",[t._v(t._s(t.user.company.catchPhrase))]),t._v(" "),a("p",[t._v(t._s(t.user.company.bs))])])]),t._v(" "),a("div",{staticClass:"map"},[a("iframe",{staticStyle:{border:"0"},attrs:{width:"100%",height:"450",frameborder:"0",src:"https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&key=AIzaSyB_GNwPXHh5X-KZ_H72hOp4kKlxAHBg_VI"}})],1),t._v(" "),a("div",{staticClass:"album-list"},[a("h2",{staticClass:"text-left"},[t._v("Albums created by "+t._s(t.user.username))]),t._v(" "),t._l(t.albums,function(e){return a("div",[a("router-link",{attrs:{to:"/album/"+e.id}},[t._v(t._s(e.title))])],1)})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h2",{staticClass:"label"},[t._v("Photo")]),t._v(" "),a("h1",[t._v(t._s(t.photo.title))]),t._v(" "),a("img",{staticClass:"photo",attrs:{src:t.photo.url}}),t._v(" "),a("p",[a("router-link",{attrs:{to:"/album/"+this.photo.albumId}},[t._v("Album")])],1)])},staticRenderFns:[]}},,,,function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(2),n=a.n(o),s=a(4),r=a.n(s),i=a(3),u=a(5),l=a.n(u);n.a.use(l.a),new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})}],[29]);
//# sourceMappingURL=app.afda73f1219aac953a9e.js.map