(function(t){function e(e){for(var n,i,c=e[0],o=e[1],u=e[2],m=0,d=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/cloneTwitch/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"214d":function(t,e,a){"use strict";a("7dbc")},"2cda":function(t,e,a){},"2ce7":function(t,e,a){"use strict";a("6e15")},"35fb":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("div",{staticClass:"app"},[a("Sidebar"),a("div",{staticClass:"body"},[a("div",{staticClass:"body--left"},[a("router-view",{key:t.$route.path})],1)])],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{id:"nav"}},[a("div",{staticClass:"navbar__left"},[a("img",{staticClass:"navbar__leftLogo",attrs:{src:"https://pngimg.com/uploads/twitch/twitch_PNG6.png",alt:"twitch logo"}}),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/"}},[t._v("Top Gamer")]),a("RouterLink",{attrs:{to:"/topStream"}},[t._v("Top Streams")])],1)])])])},c=[],o={name:"NavBar"},u=o,l=(a("5ff4"),a("2877")),m=Object(l["a"])(u,i,c,!1,null,"a31514ce",null),d=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"sidebar__top"},[a("h5",[t._v("FOLLOW CHANNELS")]),a("Channel",{attrs:{avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/69e324f6-fc7d-4131-89ed-227a955637cf-profile_image-70x70.png",name:"Gotage",follower:"810k"}}),a("Channel",{attrs:{avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/70d90ec14808c95f-profile_image-70x70.png",name:"Lockclear",follower:"900k"}}),a("h5",[t._v("RECOMMENDED CHANNELS")]),a("Channel",{attrs:{avatar:"https://static-cdn.jtvnw.net/jtv_user_pictures/21d8988f-87b4-4a6b-a63a-f87d30624031-profile_image-70x70.png",name:"Jacquie",follower:"100k"}}),a("p",{staticClass:"sidebar__topShowMore"},[t._v("Show more")])],1),t._m(0)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar__bottom"},[a("div",{staticClass:"sidebar__bottomContainer"},[a("i",{staticClass:"fas fa-search"}),a("input",{attrs:{type:"text",placeholder:"Search to add friend"}})])])}],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"channel"},[a("div",{staticClass:"channel__details"},[a("img",{attrs:{src:t.avatar,alt:"img channel"}}),a("p",[t._v(t._s(t.name))])]),a("p",[t._v(t._s(t.follower))])])},h=[],v={name:"Channel",props:{avatar:String,name:String,follower:String}},b=v,g=(a("7cf5"),Object(l["a"])(b,_,h,!1,null,"6630f630",null)),w=g.exports,T={name:"Sidebar",components:{Channel:w}},C=T,S=(a("b36f"),Object(l["a"])(C,p,f,!1,null,"137254ef",null)),O=S.exports,y={components:{Sidebar:O,NavBar:d}},j=y,x=(a("5c0b"),Object(l["a"])(j,r,s,!1,null,null,null)),E=x.exports,k=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ListTopGame",{attrs:{h1:"Top Game","get-top":t.getTopGames}})},L=[],G=a("bc3a"),N=a.n(G),B="https://api.twitch.tv",I="".concat(B,"/helix"),R="8w29lr1ln3w867fbs3uey0enfmj83k",P="hcf4cuknq3kliu26w1fynbw0mrlgfh",U=N.a.create({baseURL:I,headers:{Authorization:"Bearer ".concat(R),"Client-Id":P}}),A="/games",M={getTopGame:function(t){return U.get("".concat(A,"/top?first=").concat(t))}},D="/streams",F={getTopStream:function(t){return U.get("".concat(D,"/?first=").concat(t))},getBroadCastByUserId:function(t){return U.get("".concat(D,"/?user_id=").concat(t))}},q="/channels",J={getChannelByUserId:function(t){return U.get("".concat(q,"?broadcaster_id=").concat(t))}},V={games:M,streams:F,channels:J},H={get:function(t){return V[t]}},z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("div",{staticClass:"top__game"},[a("h1",[t._v(t._s(t.h1))]),a("div",{staticClass:"top__games"},t._l(t.listOfTop,(function(t){return a("Game",{key:t.id,attrs:{name:t.name,avatar:t.boxArtUrl}})})),1)])])},W=[],Y=a("2909"),K=a("1da1"),Q=(a("96cf"),a("d3b7"),a("b0c0"),a("ac1f"),a("5319"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"channel"},[a("div",{staticClass:"channel__details"},[a("img",{attrs:{src:this.$props.avatar,alt:"img channel"}}),a("p",[t._v(t._s(this.$props.name))])]),a("p",[t._v(t._s(t.follower))])])}),X=[],Z={name:"Channel",props:{avatar:String,name:String,follower:String},mounted:function(){console.log(this.avatar)}},tt=Z,et=(a("fec0"),Object(l["a"])(tt,Q,X,!1,null,"425cd162",null)),at=et.exports,nt={name:"ListTopGame",props:{h1:String,getTop:Promise},components:{Game:at},data:function(){return{listOfTop:[],topFunction:Function}},methods:{fetchTop:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTop;case 2:for(s in a=e.sent,n=a.data,r=[],n.data)r.push({id:n.data[s].id,name:n.data[s].name,boxArtUrl:n.data[s].box_art_url.replace("{width}","100").replace("{height}","150")});t.listOfTop=[].concat(Object(Y["a"])(t.listOfTop),r);case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchTop()}},rt=nt,st=(a("214d"),Object(l["a"])(rt,z,W,!1,null,null,null)),it=st.exports,ct=H.get("games"),ot={name:"TopGame",components:{ListTopGame:it},data:function(){return{getTopGames:ct.getTopGame(30)}}},ut=ot,lt=(a("b85e"),Object(l["a"])(ut,$,L,!1,null,"739c842f",null)),mt=lt.exports,dt=a("ecee"),pt=a("c074"),ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ListTopStreams",{attrs:{h1:"Top Streamers","get-top":t.getTopStream}})},_t=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("div",{staticClass:"top__game"},[a("h1",[t._v(t._s(t.h1))]),a("div",{staticClass:"top__streams"},t._l(t.listTopStream,(function(t){return a("Streamer",{key:t.id,attrs:{"stream-title":t.stream_title,thumbnail_url:t.thumbnail_url.replace("{width}","301").replace("{height}","201"),user_name:t.user_name,viewer_count:t.viewer_count,user_id:t.user_id}})})),1)])])},vt=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"streamer"},[a("router-link",{staticClass:"streamer__link",attrs:{to:"/stream/"+t.user_id}},[a("div",{staticClass:"streamer__thumbnailContainer"},[a("img",{attrs:{src:t.thumbnail_url,alt:""}})]),a("div",{staticClass:"streamer__description"},[a("span",{staticClass:"streamer__title"},[a("strong",[t._v(t._s(t.streamTitle))])]),a("span",{staticClass:"streamer__username"},[t._v("Streamer name: "+t._s(t.user_name))]),a("span",{staticClass:"streamer__viewerCount"},[t._v("Viewers: "+t._s(t.viewer_count))])])])],1)},gt=[],wt=(a("a9e3"),{name:"Streamer",props:{streamTitle:String,thumbnail_url:String,user_name:String,viewer_count:{type:Number},user_id:String}}),Tt=wt,Ct=(a("8e34"),Object(l["a"])(Tt,bt,gt,!1,null,"f77d1820",null)),St=Ct.exports,Ot={name:"ListTopStreams",props:{h1:String,getTop:Promise},components:{Streamer:St},data:function(){return{listTopStream:[],topFunction:Function}},methods:{fetchTop:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTop;case 2:for(s in a=e.sent,n=a.data,r=[],n.data)r.push({id:n.data[s].id,user_id:n.data[s].user_id,user_name:n.data[s].user_name,game_id:n.data[s].game_id,stream_title:n.data[s].stream_title,viewer_count:n.data[s].viewer_count,thumbnail_url:n.data[s].thumbnail_url});t.listTopStream=[].concat(Object(Y["a"])(t.listTopStream),r);case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchTop()}},yt=Ot,jt=(a("ef04"),Object(l["a"])(yt,ht,vt,!1,null,null,null)),xt=jt.exports,Et=H.get("streams"),kt={name:"TopStream",components:{ListTopStreams:xt},data:function(){return{getTopStream:Et.getTopStream(30)}}},$t=kt,Lt=Object(l["a"])($t,ft,_t,!1,null,"45552382",null),Gt=Lt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"streamer"},[a("div",{staticClass:"streamer__heading"},[a("h1",[t._v(t._s(this.streamTitle))])]),a("div",{attrs:{id:"twitch-embed"}}),a("div",{attrs:{id:"twitch_embed_script_link"}})])},Bt=[],It=H.get("channels"),Rt={name:"StreamUser",data:function(){return{streamId:0,streamerName:"",gameId:0,gameName:"",streamTitle:"",streamerViewerCount:0}},methods:{fetchBroadCastByUserId:function(){var t=this;return Object(K["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,It.getChannelByUserId(t.$route.params.id);case 2:a=e.sent,n=a.data,t.streamId=n.data[0].broadcaster_id,t.streamerName=n.data[0].broadcaster_name,t.gameId=n.data[0].game_id,t.gameName=n.data[0].game_name,t.streamTitle=n.data[0].title;case 9:case"end":return e.stop()}}),e)})))()},insertTwitchEmbedScript:function(){var t=document.querySelector("#twitch_embed_script_link"),e=document.createElement("script");e.setAttribute("src","https://embed.twitch.tv/embed/v1.js"),t.appendChild(e)},runTwitchEmbed:function(){var t=new Twitch.Embed("twitch-embed",{width:854,height:480,channel:this.streamerName,style:"height: 1000px"});t.addEventListener(Twitch.Embed.VIDEO_READY,(function(){console.log("The video is ready")})),this.$forceUpdate()}},mounted:function(){var t=this;this.fetchBroadCastByUserId(),this.insertTwitchEmbedScript(),setTimeout((function(){return t.runTwitchEmbed()}),3e3)}},Pt=Rt,Ut=(a("2ce7"),Object(l["a"])(Pt,Nt,Bt,!1,null,"c00bef7c",null)),At=Ut.exports;dt["b"].add(pt["a"]),n["default"].use(k["a"]),dt["a"].watch();var Mt=[{path:"/",name:"TopGame",component:mt},{path:"/topStream",name:"TopStream",component:Gt},{path:"/stream/:id",name:"StreamerDetails",component:At}],Dt=new k["a"]({routes:Mt}),Ft=Dt,qt=a("43f9"),Jt=a.n(qt);a("51de"),a("e094");n["default"].use(Jt.a),n["default"].config.productionTip=!1,new n["default"]({router:Ft,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5ff4":function(t,e,a){"use strict";a("a36f")},"6e15":function(t,e,a){},7024:function(t,e,a){},"7cf5":function(t,e,a){"use strict";a("c8b0")},"7dbc":function(t,e,a){},"8c86":function(t,e,a){},"8cc9":function(t,e,a){},"8e34":function(t,e,a){"use strict";a("7024")},"9c0c":function(t,e,a){},a36f:function(t,e,a){},b36f:function(t,e,a){"use strict";a("8cc9")},b85e:function(t,e,a){"use strict";a("8c86")},c8b0:function(t,e,a){},ef04:function(t,e,a){"use strict";a("2cda")},fec0:function(t,e,a){"use strict";a("35fb")}});
//# sourceMappingURL=app.a185c395.js.map