(this.webpackJsonpSyte3=this.webpackJsonpSyte3||[]).push([[13],{109:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(0),c=a.n(r),l=a(42),s=a.n(l),i=a(46),o=a(49),u=a(44),p=a.n(u),f=a(45),m=a(107),_=a(104),E=c.a.createContext(),y=a(18),v=a(52),d=a.n(v);function h(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],l=t[1],i=Object(r.useState)(!1),o=Object(n.a)(i,2),u=o[0],v=o[1],h=Object(r.useContext)(E),b=function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://www.rigoneri.com/api","/spotify/activity"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),v(!0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){b()}),[]),c.a.createElement("div",{className:d.a.recentTracks},c.a.createElement("h3",null,"Recent Tracks"),u&&c.a.createElement("p",{className:d.a.error},"Unable to fetch recent tracks."),a&&a.length?c.a.createElement("ul",null,a.map((function(e){return c.a.createElement("li",{key:"".concat(e.id,"-").concat(e.date)},c.a.createElement("a",{href:e.url,className:d.a.album,onClick:function(t){t.preventDefault(),h.onPlayTrack(e)}},c.a.createElement(s.a,{src:e.image,alt:e.title}),e.preview_url&&c.a.createElement("span",{className:"".concat(d.a.playIcon," ").concat(h.playing&&h.playing===e.id?d.a.playing:"")},h.playing&&h.playing===e.id?c.a.createElement(y.h,null):c.a.createElement(y.i,null))),c.a.createElement("a",{href:e.url,className:d.a.title},e.title),c.a.createElement("span",{className:d.a.artist},e.artist),c.a.createElement("span",{className:d.a.date},Object(m.a)(Object(_.a)(e.date))," ago"))}))):null)}function b(e){var t=e.artists;return c.a.createElement("div",{className:d.a.topArtists},c.a.createElement("h3",null,"Top Artists"),t&&t.length?c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:e.url},c.a.createElement(s.a,{src:e.image,alt:e.name,loader:c.a.createElement("div",{className:d.a.placeholder},c.a.createElement(y.f,{type:"Spotify"}))})),c.a.createElement("div",{className:d.a.info},c.a.createElement("div",{className:d.a.name},e.name),e.genres&&e.genres.length?c.a.createElement("div",{className:d.a.genre},1===e.genres.length?e.genres[0]:e.genres[1]):null))}))):null)}function g(e){var t=e.tracks,a=Object(r.useContext)(E);return c.a.createElement("div",{className:d.a.topTracks},c.a.createElement("h3",null,"Top Tracks"),t&&t.length?c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:e.url,className:d.a.album},c.a.createElement(s.a,{src:e.image,alt:e.title})),e.preview_url&&c.a.createElement("span",{className:"".concat(d.a.playIcon," ").concat(a.playing&&a.playing===e.id?d.a.playing:""),onClick:function(){a.onPlayTrack(e)}},a.playing&&a.playing===e.id?c.a.createElement(y.h,null):c.a.createElement(y.i,null)),c.a.createElement("a",{href:e.url,className:d.a.name},e.name),c.a.createElement("span",{className:d.a.artist},e.artist))}))):null)}function S(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),a=t[0],l=t[1],s=Object(r.useState)(!1),i=Object(n.a)(s,2),o=i[0],u=i[1];return Object(r.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://www.rigoneri.com/api","/spotify/top"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),u(!0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement("div",{className:d.a.top},o&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Top Artists"),c.a.createElement("p",{className:d.a.error},"Unable to fetch top artists and tracks.")),a?c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{artists:a?a.artists:null}),c.a.createElement(g,{tracks:a?a.tracks:null})):null)}function k(){var e=Object(o.a)("spotify"),t=Object(n.a)(e,2),a=t[0],l=t[1],u=Object(r.useState)(null),p=Object(n.a)(u,2),f=p[0],m=p[1],_=Object(r.useRef)(new Audio);Object(r.useEffect)((function(){var e=_.current;return e.onended=function(){m(null)},function(){e&&!e.paused&&e.pause()}}),[]);return l?c.a.createElement(i.a,{message:"Unable to fetch spotify profile."}):c.a.createElement("div",{className:d.a.page},a&&c.a.createElement("div",{className:d.a.profile},c.a.createElement("a",{href:a.url,className:d.a.picture},c.a.createElement(s.a,{src:a.picture,alt:"Spotify Profile"})),c.a.createElement("h2",null,a.name)),c.a.createElement(E.Provider,{value:{playing:f,onPlayTrack:function(e){var t=f!==e.id?e.id:null;m(t),_.current.paused||_.current.pause(),t&&(_.current.setAttribute("src",e.preview_url),_.current.play())}}},c.a.createElement(h,null),c.a.createElement(S,null)))}a.d(t,"default",(function(){return k}))},46:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(47),l=a.n(c);t.a=function(e){var t=e.message;return r.a.createElement("div",{className:l.a.Error},r.a.createElement("h3",null,":("),r.a.createElement("p",null,t||"Unable to load"))}},47:function(e,t,a){e.exports={Error:"Error_Error__3f4kP",fadeIn:"Error_fadeIn__2G69l"}},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(44),r=a.n(n),c=a(45),l=a(17),s=a(0);function i(e){var t=Object(s.useState)(null),a=Object(l.a)(t,2),n=a[0],i=a[1],o=Object(s.useState)(!1),u=Object(l.a)(o,2),p=u[0],f=u[1];return Object(s.useEffect)((function(){(function(){var t=Object(c.a)(r.a.mark((function t(){var a,n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="".concat("http://www.rigoneri.com/api","/").concat(e,"/user"),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,i(c),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),f(!0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),[n,p]}},52:function(e,t,a){e.exports={page:"Spotify_page__12STq",error:"Spotify_error__2IXI_",profile:"Spotify_profile__3XzpF",picture:"Spotify_picture__3-mYs",scaleIn:"Spotify_scaleIn__1Z_VD",moveIn:"Spotify_moveIn__12IKJ",moveOut:"Spotify_moveOut__3130A",recentTracks:"Spotify_recentTracks__2BB_U",album:"Spotify_album__6nidx",playIcon:"Spotify_playIcon__2kuF5",playing:"Spotify_playing__jJRye",title:"Spotify_title__26viw",artist:"Spotify_artist__2i6L1",date:"Spotify_date__1KWzx",top:"Spotify_top__1Y8IL",topArtists:"Spotify_topArtists__33lkk",halfScaleIn:"Spotify_halfScaleIn__2kM5N",info:"Spotify_info__3urrY",name:"Spotify_name__Xyh_D",genre:"Spotify_genre__3nHvw",placeholder:"Spotify_placeholder__3ZgsG",rotate:"Spotify_rotate__2vgfE",topTracks:"Spotify_topTracks__2ow3E",timelineTracks:"Spotify_timelineTracks__3P0Gn",fadeIn:"Spotify_fadeIn__1ohdH"}}}]);
//# sourceMappingURL=13.5c3a54b3.chunk.js.map