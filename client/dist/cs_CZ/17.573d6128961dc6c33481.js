(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3aF6":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){return function(){}}(),o=e("pMnS"),a=e("ZYCi"),r=e("Ip0R"),i=function(){return function(){}}(),d=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function s(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,17,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,13,"div",[["class","sub-menu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,12,"div",[["class","links"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,5,"a",[["class","title-page"],["routerLink","instance"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,4).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](4,671744,[[2,4]],0,a.s,[a.p,a.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),u["\u0275did"](5,1720320,null,2,a.r,[a.p,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u["\u0275qud"](603979776,1,{links:1}),u["\u0275qud"](603979776,2,{linksWithHrefs:1}),(l()(),u["\u0275ted"](-1,null,["Instance"])),(l()(),u["\u0275eld"](9,0,null,null,5,"a",[["class","title-page"],["routerLink","peertube"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,10).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](10,671744,[[4,4]],0,a.s,[a.p,a.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),u["\u0275did"](11,1720320,null,2,a.r,[a.p,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u["\u0275qud"](603979776,3,{links:1}),u["\u0275qud"](603979776,4,{linksWithHrefs:1}),(l()(),u["\u0275ted"](-1,null,["PeerTube"])),(l()(),u["\u0275eld"](15,0,null,null,2,"div",[["class","margin-content"]],null,null,null,null,null)),(l()(),u["\u0275eld"](16,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u["\u0275did"](17,212992,null,0,a.u,[a.b,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null)],function(l,n){l(n,4,0,"instance"),l(n,5,0,"active"),l(n,10,0,"peertube"),l(n,11,0,"active"),l(n,17,0)},function(l,n){l(n,3,0,u["\u0275nov"](n,4).target,u["\u0275nov"](n,4).href),l(n,9,0,u["\u0275nov"](n,10).target,u["\u0275nov"](n,10).href)})}function c(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"my-about",[],null,null,null,s,d)),u["\u0275did"](1,49152,null,0,i,[],null,null)],null,null)}var p=u["\u0275ccf"]("my-about",i,c,{},{},[]),m=e("XX9I"),v=(e("ey9i"),e("YHcc"),e("lNG3")),b=function(){function l(l,n,e,u){this.notificationsService=l,this.serverService=n,this.markdownService=e,this.i18n=u,this.shortDescription="",this.descriptionHTML="",this.termsHTML=""}return Object.defineProperty(l.prototype,"instanceName",{get:function(){return this.serverService.getConfig().instance.name},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"userVideoQuota",{get:function(){return this.serverService.getConfig().user.videoQuota},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"isSignupAllowed",{get:function(){return this.serverService.getConfig().signup.allowed},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){var l=this;this.serverService.getAbout().subscribe(function(n){l.shortDescription=n.instance.shortDescription,l.descriptionHTML=l.markdownService.textMarkdownToHTML(n.instance.description),l.termsHTML=l.markdownService.textMarkdownToHTML(n.instance.terms)},function(n){return l.notificationsService.error(l.i18n("Error getting about from server"),n)})},l}(),f=e("pyEO"),h=e("uEkc"),k=e("Jm/i"),g=u["\u0275crt"]({encapsulation:0,styles:[[".about-instance-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:15px}.section-title[_ngcontent-%COMP%]{font-weight:600;font-size:20px;margin-bottom:5px}.description[_ngcontent-%COMP%], .short-description[_ngcontent-%COMP%], .signup[_ngcontent-%COMP%], .terms[_ngcontent-%COMP%]{margin-bottom:30px}"]],data:{}});function y(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" tato instance poskytuje z\xe1kladn\xed limit "," m\xedsta pro videa sv\xfdm u\u017eivatel\u016fm. "])),u["\u0275ppd"](2,2)],null,function(l,n){var e=n.component,t=u["\u0275unv"](n,1,0,l(n,2,0,u["\u0275nov"](n.parent.parent,0),e.userVideoQuota,0));l(n,1,0,t)})}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" tato instance poskytuje neomezen\xfd prostor pro videa sv\xfdch u\u017eivatel\u016f. "]))],null,null)}function P(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,null,null,null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Registrace u\u017eivatel\u016f je povolena a"])),(l()(),u["\u0275and"](16777216,null,null,1,null,y)),u["\u0275did"](4,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,T)),u["\u0275did"](6,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,4,0,-1!==e.userVideoQuota),l(n,6,0,-1===e.userVideoQuota)},null)}function z(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Registrace u\u017eivatel\u016f nen\xed moment\xe1ln\u011b povolena. "]))],null,null)}function j(l){return u["\u0275vid"](0,[u["\u0275pid"](0,m.a,[]),(l()(),u["\u0275eld"](1,0,null,null,1,"div",[["class","about-instance-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](2,null,[" O instanci ","\n"])),(l()(),u["\u0275eld"](3,0,null,null,2,"div",[["class","short-description"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u["\u0275ted"](5,null,["",""])),(l()(),u["\u0275eld"](6,0,null,null,3,"div",[["class","description"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Popis"])),(l()(),u["\u0275eld"](9,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,3,"div",[["class","terms"],["id","terms-section"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,1,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Podm\xednky"])),(l()(),u["\u0275eld"](13,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,6,"div",[["class","signup"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,1,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Registrovat"])),(l()(),u["\u0275and"](16777216,null,null,1,null,P)),u["\u0275did"](18,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,z)),u["\u0275did"](20,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,18,0,e.isSignupAllowed),l(n,20,0,!1===e.isSignupAllowed)},function(l,n){var e=n.component;l(n,2,0,e.instanceName),l(n,5,0,e.shortDescription),l(n,9,0,e.descriptionHTML),l(n,13,0,e.termsHTML)})}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"my-about-instance",[],null,null,null,j,g)),u["\u0275did"](1,114688,null,0,b,[v.NotificationsService,f.a,h.a,k.a],null,null)],function(l,n){l(n,1,0)},null)}var C=u["\u0275ccf"]("my-about-instance",b,w,{},{},[]),M=function(){return function(){}}(),I=u["\u0275crt"]({encapsulation:0,styles:[[".about-peertube-title[_ngcontent-%COMP%]{font-size:25px;font-weight:700;margin-bottom:15px}.section-title[_ngcontent-%COMP%]{font-weight:600;font-size:20px;margin-bottom:5px}.description[_ngcontent-%COMP%]{margin-bottom:30px}.p2p-privacy-title[_ngcontent-%COMP%]{margin-top:15px}"]],data:{}});function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"h1",[["class","about-peertube-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" O PeerTube\n"])),(l()(),u["\u0275eld"](2,0,null,null,12,"div",[["class","description"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["PeerTube je federovan\xe1 (ActivityPub) platforma pro video streaming pou\u017e\xedvaj\xedc\xed P2P (WebTorrent) p\u0159\xedmo v prohl\xed\u017ee\u010di u\u017eivatele."])),(l()(),u["\u0275eld"](5,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Jde o svobodn\xfd software zve\u0159ejn\u011bn\xfd pod "])),(l()(),u["\u0275eld"](7,0,null,null,1,"a",[["href","https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["AGPLv3 licenc\xed"])),(l()(),u["\u0275ted"](-1,null,[". "])),(l()(),u["\u0275eld"](10,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Pro v\xedce informac\xed nav\u0161tivte "])),(l()(),u["\u0275eld"](12,0,null,null,1,"a",[["href","https://joinpeertube.org"],["rel","noopener noreferrer"],["target","_blank"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["joinpeertube.org"])),(l()(),u["\u0275ted"](-1,null,[". "])),(l()(),u["\u0275eld"](15,0,null,null,52,"div",[["id","p2p-privacy"]],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,1,"h3",[["class","section-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["P2P & soukrom\xed"])),(l()(),u["\u0275eld"](18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" PeerTube pou\u017e\xedv\xe1 protokol BitTorrent pro sd\xedlen\xed p\u0159enosu mezi u\u017eivateli. To znamen\xe1, \u017ee va\u0161e IP adresa je ulo\u017eena v trackeru BitTorrent t\xe9to instance po dobu stahov\xe1n\xed nebo sledov\xe1n\xed videa."])),(l()(),u["\u0275eld"](20,0,null,null,1,"h6",[["class","p2p-privacy-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Co to m\xe1 za n\xe1sledky?"])),(l()(),u["\u0275eld"](22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Teoreticky, n\u011bkdo s dostate\u010dn\xfdm technick\xfdm vzd\u011bl\xe1n\xed m\u016f\u017ee vytvo\u0159it skript sleduj\xedc\xed, jak\xe1 IP adresa stahuje kter\xe9 video. V praxi to v\u0161ak nen\xed tak jednoduch\xe9, proto\u017ee:"])),(l()(),u["\u0275eld"](24,0,null,null,18,"ul",[],null,null,null,null,null)),(l()(),u["\u0275eld"](25,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" na ka\u017ed\xfd tracker mus\xed b\xfdt zasl\xe1n HTTP po\u017eadavek za ka\u017ed\xe9 \u0161pehovan\xe9 video. Pokud bychom cht\u011bli \u0161pehovat v\u0161echna videa na PeerTube, museli bychom poslat tolik po\u017eadavk\u016f, kolik je na PeerTube vide\xed (tedy potenci\xe1ln\u011b hodn\u011b)"])),(l()(),u["\u0275eld"](27,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Pro ka\u017ed\xfd odeslan\xfd po\u017eadavek vr\xe1t\xed tracker limitovan\xfd po\u010det n\xe1hodn\xfdch peer\u016f. Nap\u0159\xedklad, pokud je zde 1000 peer\u016f ve skupin\u011b a tracker po\u0161le pouze 20 peer\u016f pro ka\u017ed\xfd po\u017eadavek, muselo b\xfdt odesl\xe1no alespo\u0148 50 po\u017eadavk\u016f na z\xedsk\xe1n\xed v\u0161ech peer\u016f ve skupin\u011b"])),(l()(),u["\u0275eld"](29,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Pro zji\u0161t\u011bn\xed, kdo za\u010d\xedn\xe1 nebo kon\u010d\xed sledov\xe1n\xed videa, mus\xed b\xfdt tyto po\u017eadavky odes\xedl\xe1ny pravideln\u011b. Takov\xe9 chov\xe1n\xed je jednodu\u0161e detekov\xe1no"])),(l()(),u["\u0275eld"](31,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Pokud je IP adresa ulo\u017eena v trackeru, neznamen\xe1 to, \u017ee osoba za IP adresou (pokud n\u011bjak\xe1 existuje) opravdu zhl\xe9dla dan\xe9 video"])),(l()(),u["\u0275eld"](33,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" IP adresa je nedostate\u010dn\xe1 informace : oby\u010dejn\u011b se pravideln\u011b m\u011bn\xed a m\u016f\u017ee za n\xed tak vystupovat v\xedce osob nebo entit"])),(l()(),u["\u0275eld"](35,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Web peers are not publicly accessible: because we use WebRTC inside the web browser ("])),(l()(),u["\u0275eld"](37,0,null,null,1,"a",[["href","https://webtorrent.io/"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["with the WebTorrent library"])),(l()(),u["\u0275ted"](-1,null,["), the protocol is different from classic BitTorrent. When you are in a web browser, you send a signal containing your IP address to the tracker that will randomly choose other peers to forward the information to. See "])),(l()(),u["\u0275eld"](40,0,null,null,1,"a",[["href","https://github.com/yciabaud/webtorrent/blob/beps/bep_webrtc.rst"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["this document"])),(l()(),u["\u0275ted"](-1,null,[" for more information "])),(l()(),u["\u0275eld"](43,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Nejhor\u0161\xed mo\u017en\xfd sc\xe9n\xe1\u0159: \u010dlov\u011bk, kter\xfd \u0161pehuje sv\xe9 kamar\xe1dy, je nepravd\u011bpodobn\xfd. Existuj\xed mnohem \xfa\u010dinn\u011bj\u0161\xed zp\u016fsoby, jak z\xedskat takov\xe9 informace. "])),(l()(),u["\u0275eld"](45,0,null,null,1,"h6",[["class","p2p-privacy-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Jak\xfd e PeerTube v porovn\xe1n\xed s YouTube?"])),(l()(),u["\u0275eld"](47,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Ohro\u017een\xed soukrom\xed je na YouTube odli\u0161n\xe9 od toho na PeerTube. V p\u0159\xedpad\u011b YouTube, tato slu\u017eba o v\xe1s sb\xedr\xe1 obrovsk\xe9 mn\u017eostv\xed osobn\xedch informac\xed (nejen va\u0161\xed IP adresu), aby je pot\xe9 analyzovala a sledovala v\xe1s. Krom\u011b toho, YouTube je vlastn\u011bn Google/Alphabet, spole\u010dnost\xed, kter\xe1 v\xe1s sleduje nap\u0159\xed\u010d r\u016fzn\xfdmi webov\xfdmi str\xe1nkami (p\u0159es AdSense nebo Google Analytics). "])),(l()(),u["\u0275eld"](49,0,null,null,1,"h6",[["class","p2p-privacy-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Co mohu d\u011blat pro zkr\xe1cen\xed doby ulo\u017een\xed m\xe9 IP adresy?"])),(l()(),u["\u0275eld"](51,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Va\u0161e IP adresa je ve\u0159ejn\xe1, tak\u017ee p\u0159i ka\u017ed\xe9 n\xe1v\u0161t\u011bv\u011b n\u011bjak\xe9 webslu\u017eby je va\u0161e IP adresa zaps\xe1na do log\u016f v\u0161ech p\u0159esm\u011bruj\xedc\xedch za\u0159\xedzen\xed (routery, br\xe1ny, ...). PeerTube je otev\u0159en\xfd. Pokud si chcete zachovat va\u0161i IP adresu nezjistitelnou, mus\xedte pou\u017e\xedt VPN nebo TorBrowser. Myslet si, \u017ee odstran\u011bn\xedm P2P z PeerTube z\xedsk\xe1te zp\u011bt anonymitu, je nesmysl. "])),(l()(),u["\u0275eld"](53,0,null,null,1,"h6",[["class","p2p-privacy-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Co budete d\u011blat pro zm\xedrn\u011bn\xed tohoto probl\xe9mu?"])),(l()(),u["\u0275eld"](55,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" PeerTube is in its early stages, and want to deliver the best countermeasures possible by the time the stable is released. In the meantime, we want to test different ideas related to this issue: "])),(l()(),u["\u0275eld"](57,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),u["\u0275eld"](58,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Nastavit limit po\u010dtu peer\u016f odeslan\xfdch trackerem"])),(l()(),u["\u0275eld"](60,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Nastavit limit opakov\xe1n\xed po\u017eadavk\u016f p\u0159ijat\xfdch trackerem (v testov\xe1n\xed)"])),(l()(),u["\u0275eld"](62,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Zazvonit na zvon v p\u0159\xedpad\u011b podez\u0159el\xfdch po\u017eadavk\u016f na tracker (v testov\xe1n\xed)"])),(l()(),u["\u0275eld"](64,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Mo\u017enost z\xe1kazu P2P z administra\u010dn\xedho panelu"])),(l()(),u["\u0275eld"](66,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Automatick\xe9 rozpozn\xe1v\xe1n\xed redundantn\xedch videi\xed: nelze poznat, zda byly nahr\xe1ny z\xe1m\u011brn\u011b \u010dlov\u011bkem nebo \u0161lo o automatizovan\xfd \xfatok"]))],null,null)}function L(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"my-about-peertube",[],null,null,null,R,I)),u["\u0275did"](1,49152,null,0,M,[],null,null)],null,null)}var _=u["\u0275ccf"]("my-about-peertube",M,L,{},{},[]),A=e("9AJC"),N=e("gIcY"),S=e("t/Na"),O=e("9IV+"),F=e("4GxJ"),x=e("Huiz"),D=e("nvTd"),V=e("upD4"),H=e("6RP5"),E=e("HvDw"),Y=e("vQJr"),B=e("LTwV"),K=e("l/z6"),J=e("wQE2"),Q=e("cKMx"),W=e("mTdg"),G=e("VNja"),X=e("3szM"),q=e("mpCX"),Z=e("hD3C"),U=e("F4xN"),$=e("Qmuk"),ll=e("wpFD"),nl=e("/7bI"),el=e("JtBY"),ul=e("0C+C"),tl=e("D/X6"),ol=e("cvwr"),al=e("tSwB"),rl=e("RtUV"),il=e("W3Gj"),dl=e("hlYB"),sl=e("M9Zh"),cl=e("fR23"),pl=e("cDr6"),ml={meta:{title:"About this instance"}},vl={meta:{title:"About PeerTube"}},bl=function(){return function(){}}(),fl=e("7LN8"),hl=e("PCNd");e.d(n,"AboutModuleNgFactory",function(){return kl});var kl=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,p,C,_,A.f,A.c,A.d,A.e]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[u.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,N["\u0275angular_packages_forms_forms_j"],N["\u0275angular_packages_forms_forms_j"],[]),u["\u0275mpd"](4608,N.FormBuilder,N.FormBuilder,[]),u["\u0275mpd"](4608,S.m,S.s,[r.DOCUMENT,u.PLATFORM_ID,S.q]),u["\u0275mpd"](4608,S.t,S.t,[S.m,S.r]),u["\u0275mpd"](5120,S.a,function(l,n){return[l,new O.a(n)]},[S.t,u.Injector]),u["\u0275mpd"](4608,S.p,S.p,[]),u["\u0275mpd"](6144,S.n,null,[S.p]),u["\u0275mpd"](4608,S.l,S.l,[S.n]),u["\u0275mpd"](6144,S.b,null,[S.l]),u["\u0275mpd"](4608,S.g,S.o,[S.b,u.Injector]),u["\u0275mpd"](4608,S.c,S.c,[S.g]),u["\u0275mpd"](4608,F.w,F.w,[u.ComponentFactoryResolver,u.Injector,F.bb,F.x]),u["\u0275mpd"](4608,k.a,k.a,[u.TRANSLATIONS_FORMAT,u.TRANSLATIONS,u.LOCALE_ID,[2,k.b]]),u["\u0275mpd"](4608,x.a,x.a,[a.p,k.a]),u["\u0275mpd"](4608,D.a,D.a,[]),u["\u0275mpd"](4608,V.a,V.a,[S.c,D.a,x.a]),u["\u0275mpd"](4608,H.a,H.a,[S.c,D.a,x.a]),u["\u0275mpd"](4608,E.a,E.a,[S.c,D.a,x.a]),u["\u0275mpd"](4608,Y.a,Y.a,[S.c,x.a,D.a,k.a]),u["\u0275mpd"](4608,B.a,B.a,[S.c,x.a,D.a,f.a,k.a]),u["\u0275mpd"](4608,K.a,K.a,[S.c,x.a]),u["\u0275mpd"](4608,h.a,h.a,[]),u["\u0275mpd"](4608,J.a,J.a,[S.c,x.a]),u["\u0275mpd"](4608,Q.a,Q.a,[S.c,f.a,x.a]),u["\u0275mpd"](4608,W.a,W.a,[S.c,D.a,x.a,f.a]),u["\u0275mpd"](4608,G.a,G.a,[S.c,x.a,D.a]),u["\u0275mpd"](4608,X.a,X.a,[N.FormBuilder]),u["\u0275mpd"](4608,q.a,q.a,[k.a]),u["\u0275mpd"](4608,Z.a,Z.a,[k.a]),u["\u0275mpd"](4608,U.a,U.a,[k.a]),u["\u0275mpd"](4608,$.a,$.a,[k.a]),u["\u0275mpd"](4608,ll.a,ll.a,[k.a]),u["\u0275mpd"](4608,nl.a,nl.a,[k.a]),u["\u0275mpd"](4608,el.a,el.a,[k.a]),u["\u0275mpd"](4608,ul.a,ul.a,[k.a]),u["\u0275mpd"](4608,tl.a,tl.a,[k.a]),u["\u0275mpd"](4608,ol.a,ol.a,[k.a]),u["\u0275mpd"](4608,al.a,al.a,[S.c,x.a,B.a,f.a]),u["\u0275mpd"](4608,rl.a,rl.a,[k.a]),u["\u0275mpd"](4608,il.a,il.a,[k.a]),u["\u0275mpd"](4608,dl.a,dl.a,[S.c,x.a,D.a]),u["\u0275mpd"](4608,sl.a,sl.a,[k.a]),u["\u0275mpd"](4608,cl.a,cl.a,[]),u["\u0275mpd"](1073742336,a.t,a.t,[[2,a.z],[2,a.p]]),u["\u0275mpd"](1073742336,bl,bl,[]),u["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),u["\u0275mpd"](1073742336,N["\u0275angular_packages_forms_forms_bc"],N["\u0275angular_packages_forms_forms_bc"],[]),u["\u0275mpd"](1073742336,N.FormsModule,N.FormsModule,[]),u["\u0275mpd"](1073742336,N.ReactiveFormsModule,N.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,S.e,S.e,[]),u["\u0275mpd"](1073742336,S.d,S.d,[]),u["\u0275mpd"](1073742336,F.u,F.u,[]),u["\u0275mpd"](1073742336,F.y,F.y,[]),u["\u0275mpd"](1073742336,F.F,F.F,[]),u["\u0275mpd"](1073742336,F.R,F.R,[]),u["\u0275mpd"](1073742336,F.Y,F.Y,[]),u["\u0275mpd"](1073742336,fl.SharedModule,fl.SharedModule,[]),u["\u0275mpd"](1073742336,m.b,m.b,[]),u["\u0275mpd"](1073742336,m.g,m.g,[]),u["\u0275mpd"](1073742336,m.d,m.d,[]),u["\u0275mpd"](1073742336,m.c,m.c,[]),u["\u0275mpd"](1073742336,m.e,m.e,[]),u["\u0275mpd"](1073742336,m.f,m.f,[]),u["\u0275mpd"](1073742336,hl.a,hl.a,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,a.n,function(){return[[{path:"",component:i,canActivateChild:[pl.a],children:[{path:"",redirectTo:"instance",pathMatch:"full"},{path:"instance",component:b,data:ml},{path:"peertube",component:M,data:vl}]}]]},[]),u["\u0275mpd"](256,u.LOCALE_ID,"cs-CZ",[]),u["\u0275mpd"](256,S.q,"XSRF-TOKEN",[]),u["\u0275mpd"](256,S.r,"X-XSRF-TOKEN",[]),u["\u0275mpd"](256,u.TRANSLATIONS_FORMAT,"xlf",[])])})}}]);