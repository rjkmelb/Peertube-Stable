(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{IOkP:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){return function(){}}(),u=e("pMnS"),a=e("x19x"),i=e("jxlV"),r=e("Vurf"),c=e("ZYCi"),d=e("lNG3"),s=e("VNja"),p=e("Jm/i"),m=e("LTwV"),g=e("Ip0R"),v=e("wQE2"),f=(e("M0ag"),e("67Y/")),h=e("ad02"),C=e("15JJ"),b=e("9Z1F"),O=(e("ey9i"),e("yccp")),M=function(){function n(n,l,e,t,o,u){this.i18n=n,this.route=l,this.authService=e,this.videoChannelService=t,this.restExtractor=o,this.hotkeysService=u}return n.prototype.ngOnInit=function(){var n=this;this.routeSub=this.route.params.pipe(Object(f.a)(function(n){return n.videoChannelId}),Object(h.a)(),Object(C.a)(function(l){return n.videoChannelService.getVideoChannel(l)}),Object(b.a)(function(l){return n.restExtractor.redirectTo404IfNotFound(l,[400,404])})).subscribe(function(l){return n.videoChannel=l}),this.hotkeys=[new O.Hotkey("S",function(l){return n.subscribeButton.subscribed?n.subscribeButton.unsubscribe():n.subscribeButton.subscribe(),!1},void 0,this.i18n("Subscribe to the account"))],this.isUserLoggedIn()&&this.hotkeysService.add(this.hotkeys)},n.prototype.ngOnDestroy=function(){this.routeSub&&this.routeSub.unsubscribe(),this.isUserLoggedIn()&&this.hotkeysService.remove(this.hotkeys)},n.prototype.isUserLoggedIn=function(){return this.authService.isLoggedIn()},n}(),_=e("Huiz"),y=e("oVTH"),P=t["\u0275crt"]({encapsulation:0,styles:[[".sub-menu[_ngcontent-%COMP%]{height:160px;display:flex;flex-direction:column;align-items:start}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]{display:flex;margin-top:20px;margin-bottom:20px}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;border-radius:50%;width:80px;height:80px;margin-right:20px}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-names[_ngcontent-%COMP%]{display:flex;align-items:center}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-names[_ngcontent-%COMP%]   .actor-display-name[_ngcontent-%COMP%]{font-size:23px;font-weight:700}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-names[_ngcontent-%COMP%]   .actor-name[_ngcontent-%COMP%]{margin-left:7px;position:relative;top:3px;font-size:14px;color:#777272}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-followers[_ngcontent-%COMP%]{font-size:15px}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]{display:inline-table;font-size:13px;margin-top:4px;color:var(--mainForegroundColor)}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]:active, .sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]:focus, .sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]:hover{text-decoration:none!important;outline:0!important}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{opacity:.8}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;border-radius:50%;width:18px;height:18px;margin-left:7px;position:relative;top:-2px}.sub-menu[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}.sub-menu[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%], .sub-menu[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]{width:100%}.sub-menu[_ngcontent-%COMP%]   .actor-name[_ngcontent-%COMP%]{flex-grow:1}"]],data:{}});function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,35,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,31,"div",[["class","sub-menu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,17,"div",[["class","actor"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,0,"img",[["alt","Avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,15,"div",[["class","actor-info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,6,"div",[["class","actor-names"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,1,"div",[["class","actor-display-name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](7,null,["",""])),(n()(),t["\u0275eld"](8,0,null,null,1,"div",[["class","actor-name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](9,null,["",""])),(n()(),t["\u0275eld"](10,0,null,null,1,"my-subscribe-button",[],null,null,null,a.b,a.a)),t["\u0275did"](11,114688,[[1,4],["subscribeButton",4]],0,i.a,[r.a,c.p,d.NotificationsService,s.a,p.a,m.a],{videoChannel:[0,"videoChannel"]},null),(n()(),t["\u0275eld"](12,0,null,null,1,"div",[["class","actor-followers"]],null,null,null,null,null)),(n()(),t["\u0275ted"](13,null,[""," prenumeranter"])),(n()(),t["\u0275eld"](14,0,null,null,5,"a",[["class","actor-owner"],["title","G\xe5 till \xe4garens kontosida"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,15).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t["\u0275did"](15,671744,null,0,c.s,[c.p,c.a,g.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](16,2),(n()(),t["\u0275eld"](17,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](18,null,["Skapad av ",""])),(n()(),t["\u0275eld"](19,0,null,null,0,"img",[["alt","Owner account avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),t["\u0275eld"](20,0,null,null,12,"div",[["class","links"]],null,null,null,null,null)),(n()(),t["\u0275eld"](21,0,null,null,5,"a",[["class","title-page"],["routerLink","videos"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,22).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t["\u0275did"](22,671744,[[3,4]],0,c.s,[c.p,c.a,g.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](23,1720320,null,2,c.r,[c.p,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,2,{links:1}),t["\u0275qud"](603979776,3,{linksWithHrefs:1}),(n()(),t["\u0275ted"](-1,null,["Videor"])),(n()(),t["\u0275eld"](27,0,null,null,5,"a",[["class","title-page"],["routerLink","about"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,28).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t["\u0275did"](28,671744,[[5,4]],0,c.s,[c.p,c.a,g.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](29,1720320,null,2,c.r,[c.p,t.ElementRef,t.Renderer2,t.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,4,{links:1}),t["\u0275qud"](603979776,5,{linksWithHrefs:1}),(n()(),t["\u0275ted"](-1,null,["Om"])),(n()(),t["\u0275eld"](33,0,null,null,2,"div",[["class","margin-content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](34,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](35,212992,null,0,c.u,[c.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(n,l){var e=l.component;n(l,11,0,e.videoChannel);var t=n(l,16,0,"/accounts",e.videoChannel.ownerBy);n(l,15,0,t),n(l,22,0,"videos"),n(l,23,0,"active"),n(l,28,0,"about"),n(l,29,0,"active"),n(l,35,0)},function(n,l){var e=l.component;n(l,3,0,e.videoChannel.avatarUrl),n(l,7,0,e.videoChannel.displayName),n(l,9,0,e.videoChannel.nameWithHost),n(l,13,0,e.videoChannel.followersCount),n(l,14,0,t["\u0275nov"](l,15).target,t["\u0275nov"](l,15).href),n(l,18,0,e.videoChannel.ownerBy),n(l,19,0,e.videoChannel.ownerAvatarUrl),n(l,21,0,t["\u0275nov"](l,22).target,t["\u0275nov"](l,22).href),n(l,27,0,t["\u0275nov"](l,28).target,t["\u0275nov"](l,28).href)})}function S(n){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{subscribeButton:0}),(n()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](2,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.component.videoChannel)},null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,S,P)),t["\u0275did"](1,245760,null,0,M,[p.a,c.a,r.a,v.a,_.a,y.HotkeysService],null,null)],function(n,l){n(l,1,0)},null)}var L=t["\u0275ccf"]("ng-component",M,I,{},{},[]),w=e("heyd"),T=e("8qHF"),R=e("gIcY"),x=e("ybWZ"),N=e("DKkR"),F=e("4SI2"),V=e("pyEO"),D=e("WMch"),A=e("MGin"),B=e("F3OD"),H=e("mrSG"),E=e("HB7e"),j=(e("Rtfg"),e("KwVR"),e("c7xs")),K=e("xMyE"),z=e("fR23"),q=function(n){function l(l,e,t,o,u,a,i,r,c,d){var s=n.call(this)||this;return s.router=l,s.route=e,s.authService=t,s.notificationsService=o,s.confirmService=u,s.location=a,s.screenService=i,s.i18n=r,s.videoChannelService=c,s.videoService=d,s.marginContent=!1,s.currentRoute="/video-channels/videos",s.loadOnInit=!1,s.titlePage=s.i18n("Published videos"),s}return Object(H.__extends)(l,n),l.prototype.ngOnInit=function(){var l=this;n.prototype.ngOnInit.call(this),this.videoChannelSub=this.videoChannelService.videoChannelLoaded.subscribe(function(n){l.videoChannel=n,l.currentRoute="/video-channels/"+l.videoChannel.uuid+"/videos",l.reloadVideos(),l.generateSyndicationList()})},l.prototype.ngOnDestroy=function(){this.videoChannelSub&&this.videoChannelSub.unsubscribe(),n.prototype.ngOnDestroy.call(this)},l.prototype.getVideosObservable=function(n){var l=this,e=Object(E.e)(this.pagination,{currentPage:n});return this.videoService.getVideoChannelVideos(this.videoChannel,e,this.sort).pipe(Object(K.a)(function(n){l.titlePage=l.i18n("Published {{totalVideos}} videos",{totalVideos:n.totalVideos})}))},l.prototype.generateSyndicationList=function(){this.syndicationItems=this.videoService.getVideoChannelFeedUrls(this.videoChannel.id)},l}(j.a),J=e("37nT"),U=t["\u0275crt"]({encapsulation:0,styles:[w.a,[".title-page-single[_ngcontent-%COMP%]{margin-top:0}"]],data:{}});function G(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.titlePage)})}function Y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","moderation-block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"my-peertube-checkbox",[["inputName","display-unlisted-private"],["labelText","Visa olistade och privata videor"]],null,[[null,"change"]],function(n,l,e){var t=!0;return"change"===l&&(t=!1!==n.component.toggleModerationDisplay()&&t),t},T.b,T.a)),t["\u0275prd"](5120,null,R.NG_VALUE_ACCESSOR,function(n){return[n]},[x.a]),t["\u0275did"](3,49152,null,0,x.a,[],{inputName:[0,"inputName"],labelText:[1,"labelText"]},null)],function(n,l){n(l,3,0,"display-unlisted-private","Visa olistade och privata videor")},null)}function X(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","no-results"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Inga resultat."]))],null,null)}function W(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-video-miniature",[],null,null,null,N.b,N.a)),t["\u0275did"](1,114688,null,0,F.a,[V.a],{user:[0,"user"],video:[1,"video"],ownerDisplayType:[2,"ownerDisplayType"]},null)],function(n,l){var e=l.component;n(l,1,0,e.user,l.context.$implicit,e.ownerDisplayType)},null)}function Z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","videos-page"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,W)),t["\u0275did"](2,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],function(n,l){n(l,2,0,l.context.$implicit,l.component.videoById)},null)}function Q(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{videosElement:0}),t["\u0275qud"](402653184,2,{infiniteScroller:0}),(n()(),t["\u0275eld"](2,0,null,null,15,"div",[],null,null,null,null,null)),t["\u0275did"](3,278528,null,0,g.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](4,{"margin-content":0}),(n()(),t["\u0275eld"](5,0,null,null,6,"div",[["class","videos-header"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,G)),t["\u0275did"](7,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](8,0,null,null,1,"my-feed",[],null,null,null,D.b,D.a)),t["\u0275did"](9,49152,null,0,A.a,[],{syndicationItems:[0,"syndicationItems"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,Y)),t["\u0275did"](11,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,X)),t["\u0275did"](13,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](14,0,[[1,0],["videosElement",1]],null,3,"div",[["class","videos"],["myInfiniteScroller",""]],null,[[null,"nearOfTop"],[null,"nearOfBottom"],[null,"pageChanged"]],function(n,l,e){var t=!0,o=n.component;return"nearOfTop"===l&&(t=!1!==o.onNearOfTop()&&t),"nearOfBottom"===l&&(t=!1!==o.onNearOfBottom()&&t),"pageChanged"===l&&(t=!1!==o.onPageChanged(e)&&t),t},null,null)),t["\u0275did"](15,212992,[[2,4]],0,B.a,[],{pageHeight:[0,"pageHeight"],firstLoadedPage:[1,"firstLoadedPage"]},{nearOfBottom:"nearOfBottom",nearOfTop:"nearOfTop",pageChanged:"pageChanged"}),(n()(),t["\u0275and"](16777216,null,null,1,null,Z)),t["\u0275did"](17,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],function(n,l){var e=l.component,t=n(l,4,0,e.marginContent);n(l,3,0,t),n(l,7,0,e.titlePage),n(l,9,0,e.syndicationItems),n(l,11,0,e.displayModerationBlock),n(l,13,0,0===e.pagination.totalItems),n(l,15,0,e.pageHeight,e.firstLoadedPage),n(l,17,0,e.videoPages,e.pageByVideoId)},null)}function $(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-video-channel-videos",[],null,null,null,Q,U)),t["\u0275did"](1,245760,null,0,q,[c.p,c.a,r.a,d.NotificationsService,J.a,g.Location,z.a,p.a,v.a,m.a],null,null)],function(n,l){n(l,1,0)},null)}var nn=t["\u0275ccf"]("my-video-channel-videos",q,$,{},{},[]),ln=(e("YHcc"),function(){function n(n,l,e){this.i18n=n,this.videoChannelService=l,this.markdownService=e,this.descriptionHTML="",this.supportHTML=""}return n.prototype.ngOnInit=function(){var n=this;this.videoChannelSub=this.videoChannelService.videoChannelLoaded.subscribe(function(l){n.videoChannel=l,n.descriptionHTML=n.markdownService.textMarkdownToHTML(n.videoChannel.description),n.supportHTML=n.markdownService.enhancedMarkdownToHTML(n.videoChannel.support)})},n.prototype.ngOnDestroy=function(){this.videoChannelSub&&this.videoChannelSub.unsubscribe()},n.prototype.getVideoChannelDescription=function(){return this.descriptionHTML?this.descriptionHTML:this.i18n("No description")},n}()),en=e("uEkc"),tn=t["\u0275crt"]({encapsulation:0,styles:[[".block[_ngcontent-%COMP%]{margin-bottom:40px}.block[_ngcontent-%COMP%]   .small-title[_ngcontent-%COMP%]{text-transform:uppercase;color:var(--mainColor);font-weight:700;font-size:13px;margin-bottom:20px}"]],data:{}});function on(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[["class","small-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["St\xf6d den h\xe4r kanalen"])),(n()(),t["\u0275eld"](3,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,3,0,l.component.supportHTML)})}function un(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,"div",[["class","description col-md-6 col-sm-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,3,"div",[["class","block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","small-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Beskrivning"])),(n()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,on)),t["\u0275did"](7,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](8,0,null,null,6,"div",[["class","stats col-md-6 col-sm-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,5,"div",[["class","block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](10,0,null,null,1,"div",[["class","small-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Statistik"])),(n()(),t["\u0275eld"](12,0,null,null,2,"div",[["class","content"]],null,null,null,null,null)),(n()(),t["\u0275ted"](13,null,["Skapades ",""])),t["\u0275ppd"](14,1)],function(n,l){n(l,7,0,l.component.supportHTML)},function(n,l){var e=l.component;n(l,5,0,e.getVideoChannelDescription());var o=t["\u0275unv"](l,13,0,n(l,14,0,t["\u0275nov"](l.parent,0),e.videoChannel.createdAt));n(l,13,0,o)})}function an(n){return t["\u0275vid"](0,[t["\u0275pid"](0,g.DatePipe,[t.LOCALE_ID]),(n()(),t["\u0275and"](16777216,null,null,1,null,un)),t["\u0275did"](2,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,l.component.videoChannel)},null)}function rn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-video-channel-about",[],null,null,null,an,tn)),t["\u0275did"](1,245760,null,0,ln,[p.a,v.a,en.a],null,null)],function(n,l){n(l,1,0)},null)}var cn=t["\u0275ccf"]("my-video-channel-about",ln,rn,{},{},[]),dn=e("9AJC"),sn=e("t/Na"),pn=e("9IV+"),mn=e("4GxJ"),gn=e("nvTd"),vn=e("upD4"),fn=e("6RP5"),hn=e("HvDw"),Cn=e("vQJr"),bn=e("l/z6"),On=e("cKMx"),Mn=e("mTdg"),_n=e("3szM"),yn=e("mpCX"),Pn=e("hD3C"),kn=e("F4xN"),Sn=e("Qmuk"),In=e("wpFD"),Ln=e("/7bI"),wn=e("JtBY"),Tn=e("0C+C"),Rn=e("D/X6"),xn=e("cvwr"),Nn=e("tSwB"),Fn=e("RtUV"),Vn=e("W3Gj"),Dn=e("hlYB"),An=e("M9Zh"),Bn=e("cDr6"),Hn={meta:{title:"Video channel videos"}},En={meta:{title:"About video channel"}},jn=function(){return function(){}}(),Kn=e("7LN8"),zn=e("XX9I"),qn=e("PCNd");e.d(l,"VideoChannelsModuleNgFactory",function(){return Jn});var Jn=t["\u0275cmf"](o,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,L,nn,cn,dn.f,dn.c,dn.d,dn.e]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[t.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,R["\u0275angular_packages_forms_forms_j"],R["\u0275angular_packages_forms_forms_j"],[]),t["\u0275mpd"](4608,R.FormBuilder,R.FormBuilder,[]),t["\u0275mpd"](4608,sn.m,sn.s,[g.DOCUMENT,t.PLATFORM_ID,sn.q]),t["\u0275mpd"](4608,sn.t,sn.t,[sn.m,sn.r]),t["\u0275mpd"](5120,sn.a,function(n,l){return[n,new pn.a(l)]},[sn.t,t.Injector]),t["\u0275mpd"](4608,sn.p,sn.p,[]),t["\u0275mpd"](6144,sn.n,null,[sn.p]),t["\u0275mpd"](4608,sn.l,sn.l,[sn.n]),t["\u0275mpd"](6144,sn.b,null,[sn.l]),t["\u0275mpd"](4608,sn.g,sn.o,[sn.b,t.Injector]),t["\u0275mpd"](4608,sn.c,sn.c,[sn.g]),t["\u0275mpd"](4608,mn.w,mn.w,[t.ComponentFactoryResolver,t.Injector,mn.bb,mn.x]),t["\u0275mpd"](4608,p.a,p.a,[t.TRANSLATIONS_FORMAT,t.TRANSLATIONS,t.LOCALE_ID,[2,p.b]]),t["\u0275mpd"](4608,_.a,_.a,[c.p,p.a]),t["\u0275mpd"](4608,gn.a,gn.a,[]),t["\u0275mpd"](4608,vn.a,vn.a,[sn.c,gn.a,_.a]),t["\u0275mpd"](4608,fn.a,fn.a,[sn.c,gn.a,_.a]),t["\u0275mpd"](4608,hn.a,hn.a,[sn.c,gn.a,_.a]),t["\u0275mpd"](4608,Cn.a,Cn.a,[sn.c,_.a,gn.a,p.a]),t["\u0275mpd"](4608,m.a,m.a,[sn.c,_.a,gn.a,V.a,p.a]),t["\u0275mpd"](4608,bn.a,bn.a,[sn.c,_.a]),t["\u0275mpd"](4608,en.a,en.a,[]),t["\u0275mpd"](4608,v.a,v.a,[sn.c,_.a]),t["\u0275mpd"](4608,On.a,On.a,[sn.c,V.a,_.a]),t["\u0275mpd"](4608,Mn.a,Mn.a,[sn.c,gn.a,_.a,V.a]),t["\u0275mpd"](4608,s.a,s.a,[sn.c,_.a,gn.a]),t["\u0275mpd"](4608,_n.a,_n.a,[R.FormBuilder]),t["\u0275mpd"](4608,yn.a,yn.a,[p.a]),t["\u0275mpd"](4608,Pn.a,Pn.a,[p.a]),t["\u0275mpd"](4608,kn.a,kn.a,[p.a]),t["\u0275mpd"](4608,Sn.a,Sn.a,[p.a]),t["\u0275mpd"](4608,In.a,In.a,[p.a]),t["\u0275mpd"](4608,Ln.a,Ln.a,[p.a]),t["\u0275mpd"](4608,wn.a,wn.a,[p.a]),t["\u0275mpd"](4608,Tn.a,Tn.a,[p.a]),t["\u0275mpd"](4608,Rn.a,Rn.a,[p.a]),t["\u0275mpd"](4608,xn.a,xn.a,[p.a]),t["\u0275mpd"](4608,Nn.a,Nn.a,[sn.c,_.a,m.a,V.a]),t["\u0275mpd"](4608,Fn.a,Fn.a,[p.a]),t["\u0275mpd"](4608,Vn.a,Vn.a,[p.a]),t["\u0275mpd"](4608,Dn.a,Dn.a,[sn.c,_.a,gn.a]),t["\u0275mpd"](4608,An.a,An.a,[p.a]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](1073742336,c.t,c.t,[[2,c.z],[2,c.p]]),t["\u0275mpd"](1073742336,jn,jn,[]),t["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),t["\u0275mpd"](1073742336,R["\u0275angular_packages_forms_forms_bc"],R["\u0275angular_packages_forms_forms_bc"],[]),t["\u0275mpd"](1073742336,R.FormsModule,R.FormsModule,[]),t["\u0275mpd"](1073742336,R.ReactiveFormsModule,R.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,sn.e,sn.e,[]),t["\u0275mpd"](1073742336,sn.d,sn.d,[]),t["\u0275mpd"](1073742336,mn.u,mn.u,[]),t["\u0275mpd"](1073742336,mn.y,mn.y,[]),t["\u0275mpd"](1073742336,mn.F,mn.F,[]),t["\u0275mpd"](1073742336,mn.R,mn.R,[]),t["\u0275mpd"](1073742336,mn.Y,mn.Y,[]),t["\u0275mpd"](1073742336,Kn.SharedModule,Kn.SharedModule,[]),t["\u0275mpd"](1073742336,zn.b,zn.b,[]),t["\u0275mpd"](1073742336,zn.g,zn.g,[]),t["\u0275mpd"](1073742336,zn.d,zn.d,[]),t["\u0275mpd"](1073742336,zn.c,zn.c,[]),t["\u0275mpd"](1073742336,zn.e,zn.e,[]),t["\u0275mpd"](1073742336,zn.f,zn.f,[]),t["\u0275mpd"](1073742336,qn.a,qn.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,c.n,function(){return[[{path:":videoChannelId",component:M,canActivateChild:[Bn.a],children:[{path:"",redirectTo:"videos",pathMatch:"full"},{path:"videos",component:q,data:Hn},{path:"about",component:ln,data:En}]}]]},[]),t["\u0275mpd"](256,t.LOCALE_ID,"sv-SE",[]),t["\u0275mpd"](256,sn.q,"XSRF-TOKEN",[]),t["\u0275mpd"](256,sn.r,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,t.TRANSLATIONS_FORMAT,"xlf",[])])})}}]);