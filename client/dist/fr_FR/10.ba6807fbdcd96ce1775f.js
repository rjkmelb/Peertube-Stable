(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{t94N:function(e,n,a){"use strict";a.r(n);var i=a("CcnG"),o=function(){return function(){}}(),t=a("pMnS"),l=a("1+T7"),r=a("gIcY"),d=a("ecRl"),u=a("QUbI"),c=a("3szM"),s=a("0C+C"),p=a("cKMx"),m=a("ZYCi"),v=a("lNG3"),f=a("pyEO"),h=a("M9Zh"),g=a("Ip0R"),C=a("mrSG"),b=a("67Y/"),S=a("15JJ"),F=a("ynQB"),P=a("BHD2"),_=(a("ey9i"),a("M0ag")),V=a("UFc/"),O=a("LTwV"),R=(a("HUk+"),function(e){function n(n,a,i,o,t,l,r,d,u){var c=e.call(this)||this;return c.formValidatorService=n,c.route=a,c.router=i,c.notificationsService=o,c.serverService=t,c.videoService=l,c.loadingBar=r,c.videoCaptionService=d,c.i18n=u,c.isUpdatingVideo=!1,c.videoPrivacies=[],c.userVideoChannels=[],c.schedulePublicationPossible=!1,c.videoCaptions=[],c.updateDone=!1,c}return Object(C.__extends)(n,e),n.prototype.ngOnInit=function(){var e=this;this.buildForm({}),this.serverService.videoPrivaciesLoaded.subscribe(function(){return e.videoPrivacies=e.serverService.getVideoPrivacies()}),this.route.data.pipe(Object(b.a)(function(e){return e.videoData})).subscribe(function(n){var a=n.videoChannels,i=n.videoCaptions;e.video=new V.a(n.video),e.userVideoChannels=a,e.videoCaptions=i,e.video.privacy!==P.c.PRIVATE?e.videoPrivacies=e.videoPrivacies.filter(function(e){return e.id!==P.c.PRIVATE}):e.schedulePublicationPossible=e.video.privacy===P.c.PRIVATE,e.videoPrivacies=e.videoService.explainedPrivacyLabels(e.videoPrivacies),setTimeout(function(){return e.hydrateFormFromVideo()})},function(n){console.error(n),e.notificationsService.error(e.i18n("Error"),n.message)})},n.prototype.canDeactivate=function(){if(!0===this.updateDone)return{canDeactivate:!0};for(var e=0,n=this.videoCaptions;e<n.length;e++)if(n[e].action)return{canDeactivate:!1};return{canDeactivate:!1===this.formChanged}},n.prototype.checkForm=function(){return this.forceCheck(),this.form.valid},n.prototype.update=function(){var e=this;!1!==this.checkForm()&&!0!==this.isUpdatingVideo&&(this.video.patch(this.form.value),this.loadingBar.start(),this.isUpdatingVideo=!0,this.videoService.updateVideo(this.video).pipe(Object(S.a)(function(){return e.videoCaptionService.updateCaptions(e.video.id,e.videoCaptions)})).subscribe(function(){e.updateDone=!0,e.isUpdatingVideo=!1,e.loadingBar.complete(),e.notificationsService.success(e.i18n("Success"),e.i18n("Video updated.")),e.router.navigate(["/videos/watch",e.video.uuid])},function(n){e.loadingBar.complete(),e.isUpdatingVideo=!1,e.notificationsService.error(e.i18n("Error"),n.message),console.error(n)}))},n.prototype.hydrateFormFromVideo=function(){var e=this;this.form.patchValue(this.video.toFormPatch());for(var n=function(n){fetch(a.video[n.url]).then(function(e){return e.blob()}).then(function(a){var i;e.form.patchValue(((i={})[n.name]=a,i))})},a=this,i=0,o=[{url:"thumbnailUrl",name:"thumbnailfile"},{url:"previewUrl",name:"previewfile"}];i<o.length;i++)n(o[i])},n}(_.a)),y=a("Jm/i"),M=i["\u0275crt"]({encapsulation:0,styles:[l.a],data:{}});function D(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,15,"div",[["class","margin-content"]],null,null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,1,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(e()(),i["\u0275ted"](2,null,[" Mise \xe0 jour "," "])),(e()(),i["\u0275eld"](3,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(e,n,a){var o=!0;return"submit"===n&&(o=!1!==i["\u0275nov"](e,5).onSubmit(a)&&o),"reset"===n&&(o=!1!==i["\u0275nov"](e,5).onReset()&&o),o},null,null)),i["\u0275did"](4,16384,null,0,r["\u0275angular_packages_forms_forms_bh"],[],null,null),i["\u0275did"](5,540672,null,0,r.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),i["\u0275prd"](2048,null,r.ControlContainer,null,[r.FormGroupDirective]),i["\u0275did"](7,16384,null,0,r.NgControlStatusGroup,[[4,r.ControlContainer]],null,null),(e()(),i["\u0275eld"](8,0,null,null,1,"my-video-edit",[],null,null,null,d.b,d.a)),i["\u0275did"](9,245760,null,0,u.a,[c.a,s.a,p.a,m.a,m.p,v.NotificationsService,f.a,h.a],{form:[0,"form"],formErrors:[1,"formErrors"],validationMessages:[2,"validationMessages"],videoPrivacies:[3,"videoPrivacies"],userVideoChannels:[4,"userVideoChannels"],schedulePublicationPossible:[5,"schedulePublicationPossible"],videoCaptions:[6,"videoCaptions"]},null),(e()(),i["\u0275eld"](10,0,null,null,5,"div",[["class","submit-container"]],null,null,null,null,null)),(e()(),i["\u0275eld"](11,0,null,null,4,"div",[["class","submit-button"]],null,[[null,"click"]],function(e,n,a){var i=!0;return"click"===n&&(i=!1!==e.component.update()&&i),i},null,null)),i["\u0275did"](12,278528,null,0,g.NgClass,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275pod"](13,{disabled:0}),(e()(),i["\u0275eld"](14,0,null,null,0,"span",[["class","icon icon-validate"]],null,null,null,null,null)),(e()(),i["\u0275eld"](15,0,null,null,0,"input",[["type","button"],["value","Mettre \xe0 jour"]],null,null,null,null,null))],function(e,n){var a=n.component;e(n,5,0,a.form),e(n,9,0,a.form,a.formErrors,a.validationMessages,a.videoPrivacies,a.userVideoChannels,a.schedulePublicationPossible,a.videoCaptions);var i=e(n,13,0,!a.form.valid||!0===a.isUpdatingVideo);e(n,12,0,"submit-button",i)},function(e,n){var a=n.component;e(n,2,0,null==a.video?null:a.video.name),e(n,3,0,i["\u0275nov"](n,7).ngClassUntouched,i["\u0275nov"](n,7).ngClassTouched,i["\u0275nov"](n,7).ngClassPristine,i["\u0275nov"](n,7).ngClassDirty,i["\u0275nov"](n,7).ngClassValid,i["\u0275nov"](n,7).ngClassInvalid,i["\u0275nov"](n,7).ngClassPending)})}function N(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,1,"my-videos-update",[],null,null,null,D,M)),i["\u0275did"](1,114688,null,0,R,[c.a,m.a,m.p,v.NotificationsService,f.a,O.a,F.c,p.a,y.a],null,null)],function(e,n){e(n,1,0)},null)}var I=i["\u0275ccf"]("my-videos-update",R,N,{},{},[]),T=a("9AJC"),j=a("AQUW"),E=a("t/Na"),w=a("9IV+"),A=a("4GxJ"),k=a("Huiz"),L=a("nvTd"),U=a("upD4"),B=a("6RP5"),J=a("HvDw"),x=a("vQJr"),G=a("l/z6"),X=a("uEkc"),Y=a("wQE2"),z=a("mTdg"),Q=a("VNja"),K=a("mpCX"),H=a("hD3C"),q=a("F4xN"),W=a("Qmuk"),Z=a("wpFD"),$=a("/7bI"),ee=a("JtBY"),ne=a("D/X6"),ae=a("cvwr"),ie=a("tSwB"),oe=a("RtUV"),te=a("W3Gj"),le=a("hlYB"),re=a("fR23"),de=function(){function e(e,n,a){this.videoService=e,this.videoChannelService=n,this.videoCaptionService=a}return e.prototype.resolve=function(e){var n=this;return this.videoService.getVideo(e.params.uuid).pipe(Object(S.a)(function(e){return n.videoService.loadCompleteDescription(e.descriptionPath).pipe(Object(b.a)(function(n){return Object.assign(e,{description:n})}))}),Object(S.a)(function(e){return n.videoChannelService.listAccountVideoChannels(e.account).pipe(Object(b.a)(function(e){return e.data}),Object(b.a)(function(e){return e.map(function(e){return{id:e.id,label:e.displayName,support:e.support}})}),Object(b.a)(function(n){return{video:e,videoChannels:n}}))}),Object(S.a)(function(e){var a=e.video,i=e.videoChannels;return n.videoCaptionService.listCaptions(a.id).pipe(Object(b.a)(function(e){return e.data}),Object(b.a)(function(e){return{video:a,videoChannels:i,videoCaptions:e}}))}))},e}(),ue=a("fftR"),ce=a("37nT"),se=a("cDr6"),pe=function(){return function(){}}(),me=a("h8Xd"),ve=a("VSng"),fe=a("7LN8"),he=a("KB/w"),ge=a("XX9I"),Ce=a("PCNd"),be=a("pYoP"),Se=a("0dEx");a.d(n,"VideoUpdateModuleNgFactory",function(){return Fe});var Fe=i["\u0275cmf"](o,[],function(e){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,I,T.f,T.c,T.d,T.e]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[i.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),i["\u0275mpd"](4608,r.FormBuilder,r.FormBuilder,[]),i["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_j"],r["\u0275angular_packages_forms_forms_j"],[]),i["\u0275mpd"](4608,j.h,j.h,[]),i["\u0275mpd"](4608,E.m,E.s,[g.DOCUMENT,i.PLATFORM_ID,E.q]),i["\u0275mpd"](4608,E.t,E.t,[E.m,E.r]),i["\u0275mpd"](5120,E.a,function(e,n){return[e,new w.a(n)]},[E.t,i.Injector]),i["\u0275mpd"](4608,E.p,E.p,[]),i["\u0275mpd"](6144,E.n,null,[E.p]),i["\u0275mpd"](4608,E.l,E.l,[E.n]),i["\u0275mpd"](6144,E.b,null,[E.l]),i["\u0275mpd"](4608,E.g,E.o,[E.b,i.Injector]),i["\u0275mpd"](4608,E.c,E.c,[E.g]),i["\u0275mpd"](4608,A.w,A.w,[i.ComponentFactoryResolver,i.Injector,A.bb,A.x]),i["\u0275mpd"](4608,y.a,y.a,[i.TRANSLATIONS_FORMAT,i.TRANSLATIONS,i.LOCALE_ID,[2,y.b]]),i["\u0275mpd"](4608,k.a,k.a,[m.p,y.a]),i["\u0275mpd"](4608,L.a,L.a,[]),i["\u0275mpd"](4608,U.a,U.a,[E.c,L.a,k.a]),i["\u0275mpd"](4608,B.a,B.a,[E.c,L.a,k.a]),i["\u0275mpd"](4608,J.a,J.a,[E.c,L.a,k.a]),i["\u0275mpd"](4608,x.a,x.a,[E.c,k.a,L.a,y.a]),i["\u0275mpd"](4608,O.a,O.a,[E.c,k.a,L.a,f.a,y.a]),i["\u0275mpd"](4608,G.a,G.a,[E.c,k.a]),i["\u0275mpd"](4608,X.a,X.a,[]),i["\u0275mpd"](4608,Y.a,Y.a,[E.c,k.a]),i["\u0275mpd"](4608,p.a,p.a,[E.c,f.a,k.a]),i["\u0275mpd"](4608,z.a,z.a,[E.c,L.a,k.a,f.a]),i["\u0275mpd"](4608,Q.a,Q.a,[E.c,k.a,L.a]),i["\u0275mpd"](4608,c.a,c.a,[r.FormBuilder]),i["\u0275mpd"](4608,K.a,K.a,[y.a]),i["\u0275mpd"](4608,H.a,H.a,[y.a]),i["\u0275mpd"](4608,q.a,q.a,[y.a]),i["\u0275mpd"](4608,W.a,W.a,[y.a]),i["\u0275mpd"](4608,Z.a,Z.a,[y.a]),i["\u0275mpd"](4608,$.a,$.a,[y.a]),i["\u0275mpd"](4608,ee.a,ee.a,[y.a]),i["\u0275mpd"](4608,s.a,s.a,[y.a]),i["\u0275mpd"](4608,ne.a,ne.a,[y.a]),i["\u0275mpd"](4608,ae.a,ae.a,[y.a]),i["\u0275mpd"](4608,ie.a,ie.a,[E.c,k.a,O.a,f.a]),i["\u0275mpd"](4608,oe.a,oe.a,[y.a]),i["\u0275mpd"](4608,te.a,te.a,[y.a]),i["\u0275mpd"](4608,le.a,le.a,[E.c,k.a,L.a]),i["\u0275mpd"](4608,h.a,h.a,[y.a]),i["\u0275mpd"](4608,re.a,re.a,[]),i["\u0275mpd"](4608,de,de,[O.a,Y.a,p.a]),i["\u0275mpd"](4608,ue.a,ue.a,[ce.a,y.a]),i["\u0275mpd"](1073742336,m.t,m.t,[[2,m.z],[2,m.p]]),i["\u0275mpd"](1073742336,pe,pe,[]),i["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),i["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_bc"],r["\u0275angular_packages_forms_forms_bc"],[]),i["\u0275mpd"](1073742336,r.ReactiveFormsModule,r.ReactiveFormsModule,[]),i["\u0275mpd"](1073742336,r.FormsModule,r.FormsModule,[]),i["\u0275mpd"](1073742336,me.e,me.e,[]),i["\u0275mpd"](1073742336,j.f,j.f,[]),i["\u0275mpd"](1073742336,ve.ButtonModule,ve.ButtonModule,[]),i["\u0275mpd"](1073742336,fe.SharedModule,fe.SharedModule,[]),i["\u0275mpd"](1073742336,he.CalendarModule,he.CalendarModule,[]),i["\u0275mpd"](1073742336,E.e,E.e,[]),i["\u0275mpd"](1073742336,E.d,E.d,[]),i["\u0275mpd"](1073742336,A.u,A.u,[]),i["\u0275mpd"](1073742336,A.y,A.y,[]),i["\u0275mpd"](1073742336,A.F,A.F,[]),i["\u0275mpd"](1073742336,A.R,A.R,[]),i["\u0275mpd"](1073742336,A.Y,A.Y,[]),i["\u0275mpd"](1073742336,ge.b,ge.b,[]),i["\u0275mpd"](1073742336,ge.g,ge.g,[]),i["\u0275mpd"](1073742336,ge.d,ge.d,[]),i["\u0275mpd"](1073742336,ge.c,ge.c,[]),i["\u0275mpd"](1073742336,ge.e,ge.e,[]),i["\u0275mpd"](1073742336,ge.f,ge.f,[]),i["\u0275mpd"](1073742336,Ce.a,Ce.a,[]),i["\u0275mpd"](1073742336,be.a,be.a,[]),i["\u0275mpd"](1073742336,o,o,[]),i["\u0275mpd"](1024,m.n,function(){return[[{path:"",component:R,canActivate:[se.a,Se.a],canDeactivate:[ue.a],resolve:{videoData:de}}]]},[]),i["\u0275mpd"](256,i.LOCALE_ID,"fr-FR",[]),i["\u0275mpd"](256,r.COMPOSITION_BUFFER_MODE,!1,[]),i["\u0275mpd"](256,E.q,"XSRF-TOKEN",[]),i["\u0275mpd"](256,E.r,"X-XSRF-TOKEN",[]),i["\u0275mpd"](256,i.TRANSLATIONS_FORMAT,"xlf",[])])})}}]);