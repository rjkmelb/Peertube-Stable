(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3aF6":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){return function(){}}(),a=e("pMnS"),i=e("ZYCi"),r=e("Ip0R"),o=function(){return function(){}}(),d=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function s(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,17,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,13,"div",[["class","sub-menu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,12,"div",[["class","links"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,5,"a",[["class","title-page"],["routerLink","instance"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,4).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](4,671744,[[2,4]],0,i.s,[i.p,i.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),u["\u0275did"](5,1720320,null,2,i.r,[i.p,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u["\u0275qud"](603979776,1,{links:1}),u["\u0275qud"](603979776,2,{linksWithHrefs:1}),(l()(),u["\u0275ted"](-1,null,["Inst\xe0ncia"])),(l()(),u["\u0275eld"](9,0,null,null,5,"a",[["class","title-page"],["routerLink","peertube"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,10).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](10,671744,[[4,4]],0,i.s,[i.p,i.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),u["\u0275did"](11,1720320,null,2,i.r,[i.p,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u["\u0275qud"](603979776,3,{links:1}),u["\u0275qud"](603979776,4,{linksWithHrefs:1}),(l()(),u["\u0275ted"](-1,null,["PeerTube"])),(l()(),u["\u0275eld"](15,0,null,null,2,"div",[["class","margin-content"]],null,null,null,null,null)),(l()(),u["\u0275eld"](16,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u["\u0275did"](17,212992,null,0,i.u,[i.b,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null)],function(l,n){l(n,4,0,"instance"),l(n,5,0,"active"),l(n,10,0,"peertube"),l(n,11,0,"active"),l(n,17,0)},function(l,n){l(n,3,0,u["\u0275nov"](n,4).target,u["\u0275nov"](n,4).href),l(n,9,0,u["\u0275nov"](n,10).target,u["\u0275nov"](n,10).href)})}function c(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"my-about",[],null,null,null,s,d)),u["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)}var p=u["\u0275ccf"]("my-about",o,c,{},{},[]),m=e("XX9I"),f=(e("ey9i"),e("YHcc"),e("lNG3")),v=function(){function l(l,n,e,u){this.notificationsService=l,this.serverService=n,this.markdownService=e,this.i18n=u,this.shortDescription="",this.descriptionHTML="",this.termsHTML=""}return Object.defineProperty(l.prototype,"instanceName",{get:function(){return this.serverService.getConfig().instance.name},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"userVideoQuota",{get:function(){return this.serverService.getConfig().user.videoQuota},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"isSignupAllowed",{get:function(){return this.serverService.getConfig().signup.allowed},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){var l=this;this.serverService.getAbout().subscribe(function(n){l.shortDescription=n.instance.shortDescription,l.descriptionHTML=l.markdownService.textMarkdownToHTML(n.instance.description),l.termsHTML=l.markdownService.textMarkdownToHTML(n.instance.terms)},function(n){return l.notificationsService.error(l.i18n("Error getting about from server"),n)})},l}(),b=e("pyEO"),g=e("uEkc"),h=e("Jm/i"),T=u["\u0275crt"]({encapsulation:0,styles:[[".about-instance-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:15px}.section-title[_ngcontent-%COMP%]{font-weight:600;font-size:20px;margin-bottom:5px}.description[_ngcontent-%COMP%], .short-description[_ngcontent-%COMP%], .signup[_ngcontent-%COMP%], .terms[_ngcontent-%COMP%]{margin-bottom:30px}"]],data:{}});function P(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" aquesta inst\xe0ncia proporciona una quota b\xe0sica de "," d''espai per els v\xeddeos dels seus usuaris. "])),u["\u0275ppd"](2,2)],null,function(l,n){var e=n.component,t=u["\u0275unv"](n,1,0,l(n,2,0,u["\u0275nov"](n.parent.parent,0),e.userVideoQuota,0));l(n,1,0,t)})}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" aquesta inst\xe0ncia proporciona espai il\xb7limitat per els v\xeddeos del seus usuaris. "]))],null,null)}function y(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,null,null,null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["El registre d'usuaris \xe9s perm\xe8s i"])),(l()(),u["\u0275and"](16777216,null,null,1,null,P)),u["\u0275did"](4,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,w)),u["\u0275did"](6,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,4,0,-1!==e.userVideoQuota),l(n,6,0,-1===e.userVideoQuota)},null)}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" El registre d'usuaris actualment no \xe9s perm\xe8s. "]))],null,null)}function L(l){return u["\u0275vid"](0,[u["\u0275pid"](0,m.a,[]),(l()(),u["\u0275eld"](1,0,null,null,1,"div",[["class","about-instance-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](2,null,[" Quant a la inst\xe0ncia ","\n"])),(l()(),u["\u0275eld"](3,0,null,null,2,"div",[["class","short-description"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u["\u0275ted"](5,null,["",""])),(l()(),u["\u0275eld"](6,0,null,null,3,"div",[["class","description"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Descripci\xf3"])),(l()(),u["\u0275eld"](9,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,3,"div",[["class","terms"],["id","terms-section"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,1,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Termes"])),(l()(),u["\u0275eld"](13,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,6,"div",[["class","signup"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,1,"div",[["class","section-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Registra't"])),(l()(),u["\u0275and"](16777216,null,null,1,null,y)),u["\u0275did"](18,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](20,16384,null,0,r.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,18,0,e.isSignupAllowed),l(n,20,0,!1===e.isSignupAllowed)},function(l,n){var e=n.component;l(n,2,0,e.instanceName),l(n,5,0,e.shortDescription),l(n,9,0,e.descriptionHTML),l(n,13,0,e.termsHTML)})}function I(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"my-about-instance",[],null,null,null,L,T)),u["\u0275did"](1,114688,null,0,v,[f.NotificationsService,b.a,g.a,h.a],null,null)],function(l,n){l(n,1,0)},null)}var M=u["\u0275ccf"]("my-about-instance",v,I,{},{},[]),k=function(){return function(){}}(),R=u["\u0275crt"]({encapsulation:0,styles:[[".about-peertube-title[_ngcontent-%COMP%]{font-size:25px;font-weight:700;margin-bottom:15px}.section-title[_ngcontent-%COMP%]{font-weight:600;font-size:20px;margin-bottom:5px}.description[_ngcontent-%COMP%]{margin-bottom:30px}.p2p-privacy-title[_ngcontent-%COMP%]{margin-top:15px}"]],data:{}});function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"h1",[["class","about-peertube-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Quant a PeerTube\n"])),(l()(),u["\u0275eld"](2,0,null,null,12,"div",[["class","description"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["PeerTube \xe9s una plataforma de transmissi\xf3 de v\xeddeo federada (ActivityPub) que utilitza P2P (WebTorrent) directament al navegador web "])),(l()(),u["\u0275eld"](5,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" \xc9s un programari lliure i de codi obert, sota la "])),(l()(),u["\u0275eld"](7,0,null,null,1,"a",[["href","https://github.com/Chocobozzz/PeerTube/blob/develop/LICENSE"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["llic\xe8ncia AGPLv3"])),(l()(),u["\u0275ted"](-1,null,[". "])),(l()(),u["\u0275eld"](10,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Per a m\xe9s informaci\xf3 si us plau visita "])),(l()(),u["\u0275eld"](12,0,null,null,1,"a",[["href","https://joinpeertube.org"],["rel","noopener noreferrer"],["target","_blank"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["joinpeertube.org"])),(l()(),u["\u0275ted"](-1,null,[". "])),(l()(),u["\u0275eld"](15,0,null,null,52,"div",[["id","p2p-privacy"]],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,1,"h3",[["class","section-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["P2P i Privacitat"])),(l()(),u["\u0275eld"](18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" PeerTube utilitza el protocol BitTorrent per compartir l'ample de banda entre els usuaris.\n\xa0\xa0\xa0\xa0 Aix\xf2 implica que la teva adre\xe7a IP s'emmagatzema al rastrejador BitTorrent de la inst\xe0ncia sempre que descarreguis o miris el v\xeddeo. "])),(l()(),u["\u0275eld"](20,0,null,null,1,"h6",[["class","p2p-privacy-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Quines conseq\xfc\xe8ncies?"])),(l()(),u["\u0275eld"](22,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" En teoria, alg\xfa amb prou habilitats t\xe8cniques podria crear un script que rastreja quina IP est\xe0 descarregant el v\xeddeo.\n\xa0\xa0\xa0\xa0 A la pr\xe0ctica, aix\xf2 \xe9s molt m\xe9s dif\xedcil perqu\xe8: "])),(l()(),u["\u0275eld"](24,0,null,null,18,"ul",[],null,null,null,null,null)),(l()(),u["\u0275eld"](25,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" S'ha d'enviar una sol \xb7 licitud HTTP a cada seguidor per espiar cada v\xeddeo.\n\xa0\xa0\xa0\xa0\xa0\xa0 Si volem espiar tots els v\xeddeos de PeerTube, hem d'enviar tantes sol \xb7 licituds com v\xeddeos hi ha (molt potencialment) "])),(l()(),u["\u0275eld"](27,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Per a cada sol\xb7licitud enviada, el seguidor retorna els punts aleatoris en un nombre limitat.\n\xa0\xa0\xa0\xa0\xa0\xa0 Per exemple, si hi ha 1000 punts en la muni\xf3 i el rastrejador envia nom\xe9s 20 per cada sol licitud, ha d'haver almenys 50 sol\xb7licituds enviades per con\xe8ixer tots els punts "])),(l()(),u["\u0275eld"](29,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Aquestes sol\xb7licituds s'han d'enviar regularment per saber qui comen\xe7a / deixa de veure un v\xeddeo. \xc9s f\xe0cil detectar aquest tipus de comportament "])),(l()(),u["\u0275eld"](31,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Si una adre\xe7a IP s'emmagatzema al rastrejador, no vol dir que la persona darrere de la IP (si aquesta persona existeix) ha vist el v\xeddeo "])),(l()(),u["\u0275eld"](33,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" L'adre\xe7a IP \xe9s una informaci\xf3 vaga: en general, canvia regularment i pot representar moltes persones o entitats "])),(l()(),u["\u0275eld"](35,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Web peers are not publicly accessible: because we use WebRTC inside the web browser ("])),(l()(),u["\u0275eld"](37,0,null,null,1,"a",[["href","https://webtorrent.io/"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["with the WebTorrent library"])),(l()(),u["\u0275ted"](-1,null,["), the protocol is different from classic BitTorrent. When you are in a web browser, you send a signal containing your IP address to the tracker that will randomly choose other peers to forward the information to. See "])),(l()(),u["\u0275eld"](40,0,null,null,1,"a",[["href","https://github.com/yciabaud/webtorrent/blob/beps/bep_webrtc.rst"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["this document"])),(l()(),u["\u0275ted"](-1,null,[" for more information "])),(l()(),u["\u0275eld"](43,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" L'escenari m\xe9s greu d'una persona mitjana que espia als seus amics \xe9s for\xe7a improbable.\n\xa0\xa0\xa0\xa0 Hi ha maneres molt m\xe9s eficaces d'obtenir aquest tipus d'informaci\xf3. "])),(l()(),u["\u0275eld"](45,0,null,null,1,"h6",[["class","p2p-privacy-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["How does PeerTube compare with YouTube?"])),(l()(),u["\u0275eld"](47,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Les amenaces a la privadesa a YouTube s\xf3n diferents de les de PeerTube.\n\xa0\xa0\xa0\xa0 En el cas de YouTube, la plataforma recull una gran quantitat de la vostra informaci\xf3 personal (no nom\xe9s la vostra IP) per analitzar-los i fer-ne un seguiment.\n\xa0\xa0\xa0\xa0 D'altra banda, YouTube \xe9s propietat de Google / Alphabet, una empresa que fa el seguiment de molts llocs web (mitjan\xe7ant AdSense o Google Analytics). "])),(l()(),u["\u0275eld"](49,0,null,null,1,"h6",[["class","p2p-privacy-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Qu\xe8 puc fer per limitar l'exposici\xf3 de la meva adre\xe7a IP?"])),(l()(),u["\u0275eld"](51,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" La teva adre\xe7a IP \xe9s p\xfablica, aix\xed que cada vegada que consultes un lloc web, hi ha diversos actors (a m\xe9s del lloc web final) que veuen la teva IP als registres de connexi\xf3: ISP / routers / trackers / CDN i molt m\xe9s.\n\xa0\xa0\xa0\xa0 PeerTube \xe9s transparent al respecte: t'avisem que si vols mantenir la teva IP privada, has d'utilitzar un navegador VPN o Tor.\n\xa0\xa0\xa0\xa0 Pensant que eliminar P2P de PeerTube et retornar\xe0 l'anonimat no t\xe9 sentit. "])),(l()(),u["\u0275eld"](53,0,null,null,1,"h6",[["class","p2p-privacy-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Qu\xe8 es far\xe0 per mitigar aquest problema?"])),(l()(),u["\u0275eld"](55,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" PeerTube is in its early stages, and want to deliver the best countermeasures possible by the time the stable is released. In the meantime, we want to test different ideas related to this issue: "])),(l()(),u["\u0275eld"](57,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),u["\u0275eld"](58,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Estableix un l\xedmit al nombre de punts enviats pel rastrejador"])),(l()(),u["\u0275eld"](60,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Estableix un l\xedmit a la freq\xfc\xe8ncia de sol\xb7licitud rebuda pel rastrejador (en proves)"])),(l()(),u["\u0275eld"](62,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Toca una campana si hi ha peticions inusuals (en proves)"])),(l()(),u["\u0275eld"](64,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Desactiva P2P des de la interf\xedcie d'administraci\xf3"])),(l()(),u["\u0275eld"](66,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Un programa autom\xe0tic de redund\xe0ncia de v\xeddeo: no sabr\xedem si l'IP descarregava el v\xeddeo a prop\xf2sit o si era el programa automatitzat"]))],null,null)}function S(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"my-about-peertube",[],null,null,null,_,R)),u["\u0275did"](1,49152,null,0,k,[],null,null)],null,null)}var A=u["\u0275ccf"]("my-about-peertube",k,S,{},{},[]),q=e("9AJC"),x=e("gIcY"),N=e("t/Na"),O=e("9IV+"),F=e("4GxJ"),D=e("Huiz"),E=e("nvTd"),j=e("upD4"),z=e("6RP5"),H=e("HvDw"),V=e("vQJr"),Q=e("LTwV"),Y=e("l/z6"),B=e("wQE2"),K=e("cKMx"),W=e("mTdg"),G=e("VNja"),J=e("3szM"),X=e("mpCX"),U=e("hD3C"),Z=e("F4xN"),$=e("Qmuk"),ll=e("wpFD"),nl=e("/7bI"),el=e("JtBY"),ul=e("0C+C"),tl=e("D/X6"),al=e("cvwr"),il=e("tSwB"),rl=e("RtUV"),ol=e("W3Gj"),dl=e("hlYB"),sl=e("M9Zh"),cl=e("fR23"),pl=e("cDr6"),ml={meta:{title:"About this instance"}},fl={meta:{title:"About PeerTube"}},vl=function(){return function(){}}(),bl=e("7LN8"),gl=e("PCNd");e.d(n,"AboutModuleNgFactory",function(){return hl});var hl=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,p,M,A,q.f,q.c,q.d,q.e]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[u.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,x["\u0275angular_packages_forms_forms_j"],x["\u0275angular_packages_forms_forms_j"],[]),u["\u0275mpd"](4608,x.FormBuilder,x.FormBuilder,[]),u["\u0275mpd"](4608,N.m,N.s,[r.DOCUMENT,u.PLATFORM_ID,N.q]),u["\u0275mpd"](4608,N.t,N.t,[N.m,N.r]),u["\u0275mpd"](5120,N.a,function(l,n){return[l,new O.a(n)]},[N.t,u.Injector]),u["\u0275mpd"](4608,N.p,N.p,[]),u["\u0275mpd"](6144,N.n,null,[N.p]),u["\u0275mpd"](4608,N.l,N.l,[N.n]),u["\u0275mpd"](6144,N.b,null,[N.l]),u["\u0275mpd"](4608,N.g,N.o,[N.b,u.Injector]),u["\u0275mpd"](4608,N.c,N.c,[N.g]),u["\u0275mpd"](4608,F.w,F.w,[u.ComponentFactoryResolver,u.Injector,F.bb,F.x]),u["\u0275mpd"](4608,h.a,h.a,[u.TRANSLATIONS_FORMAT,u.TRANSLATIONS,u.LOCALE_ID,[2,h.b]]),u["\u0275mpd"](4608,D.a,D.a,[i.p,h.a]),u["\u0275mpd"](4608,E.a,E.a,[]),u["\u0275mpd"](4608,j.a,j.a,[N.c,E.a,D.a]),u["\u0275mpd"](4608,z.a,z.a,[N.c,E.a,D.a]),u["\u0275mpd"](4608,H.a,H.a,[N.c,E.a,D.a]),u["\u0275mpd"](4608,V.a,V.a,[N.c,D.a,E.a,h.a]),u["\u0275mpd"](4608,Q.a,Q.a,[N.c,D.a,E.a,b.a,h.a]),u["\u0275mpd"](4608,Y.a,Y.a,[N.c,D.a]),u["\u0275mpd"](4608,g.a,g.a,[]),u["\u0275mpd"](4608,B.a,B.a,[N.c,D.a]),u["\u0275mpd"](4608,K.a,K.a,[N.c,b.a,D.a]),u["\u0275mpd"](4608,W.a,W.a,[N.c,E.a,D.a,b.a]),u["\u0275mpd"](4608,G.a,G.a,[N.c,D.a,E.a]),u["\u0275mpd"](4608,J.a,J.a,[x.FormBuilder]),u["\u0275mpd"](4608,X.a,X.a,[h.a]),u["\u0275mpd"](4608,U.a,U.a,[h.a]),u["\u0275mpd"](4608,Z.a,Z.a,[h.a]),u["\u0275mpd"](4608,$.a,$.a,[h.a]),u["\u0275mpd"](4608,ll.a,ll.a,[h.a]),u["\u0275mpd"](4608,nl.a,nl.a,[h.a]),u["\u0275mpd"](4608,el.a,el.a,[h.a]),u["\u0275mpd"](4608,ul.a,ul.a,[h.a]),u["\u0275mpd"](4608,tl.a,tl.a,[h.a]),u["\u0275mpd"](4608,al.a,al.a,[h.a]),u["\u0275mpd"](4608,il.a,il.a,[N.c,D.a,Q.a,b.a]),u["\u0275mpd"](4608,rl.a,rl.a,[h.a]),u["\u0275mpd"](4608,ol.a,ol.a,[h.a]),u["\u0275mpd"](4608,dl.a,dl.a,[N.c,D.a,E.a]),u["\u0275mpd"](4608,sl.a,sl.a,[h.a]),u["\u0275mpd"](4608,cl.a,cl.a,[]),u["\u0275mpd"](1073742336,i.t,i.t,[[2,i.z],[2,i.p]]),u["\u0275mpd"](1073742336,vl,vl,[]),u["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),u["\u0275mpd"](1073742336,x["\u0275angular_packages_forms_forms_bc"],x["\u0275angular_packages_forms_forms_bc"],[]),u["\u0275mpd"](1073742336,x.FormsModule,x.FormsModule,[]),u["\u0275mpd"](1073742336,x.ReactiveFormsModule,x.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,N.e,N.e,[]),u["\u0275mpd"](1073742336,N.d,N.d,[]),u["\u0275mpd"](1073742336,F.u,F.u,[]),u["\u0275mpd"](1073742336,F.y,F.y,[]),u["\u0275mpd"](1073742336,F.F,F.F,[]),u["\u0275mpd"](1073742336,F.R,F.R,[]),u["\u0275mpd"](1073742336,F.Y,F.Y,[]),u["\u0275mpd"](1073742336,bl.SharedModule,bl.SharedModule,[]),u["\u0275mpd"](1073742336,m.b,m.b,[]),u["\u0275mpd"](1073742336,m.g,m.g,[]),u["\u0275mpd"](1073742336,m.d,m.d,[]),u["\u0275mpd"](1073742336,m.c,m.c,[]),u["\u0275mpd"](1073742336,m.e,m.e,[]),u["\u0275mpd"](1073742336,m.f,m.f,[]),u["\u0275mpd"](1073742336,gl.a,gl.a,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,i.n,function(){return[[{path:"",component:o,canActivateChild:[pl.a],children:[{path:"",redirectTo:"instance",pathMatch:"full"},{path:"instance",component:v,data:ml},{path:"peertube",component:k,data:fl}]}]]},[]),u["\u0275mpd"](256,u.LOCALE_ID,"ca-ES",[]),u["\u0275mpd"](256,N.q,"XSRF-TOKEN",[]),u["\u0275mpd"](256,N.r,"X-XSRF-TOKEN",[]),u["\u0275mpd"](256,u.TRANSLATIONS_FORMAT,"xlf",[])])})}}]);