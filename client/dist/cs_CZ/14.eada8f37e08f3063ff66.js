(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{HGAP:function(n,l,e){"use strict";e.r(l);var i=e("CcnG"),t=function(){return function(){}}(),u=e("pMnS"),a=e("ZYCi"),r=e("Ip0R"),o=e("lNG3"),d=e("M0ag"),c=function(){function n(n,l,e,i,t){this.userService=n,this.notificationsService=l,this.router=e,this.route=i,this.i18n=t,this.success=!1}return n.prototype.ngOnInit=function(){this.userId=this.route.snapshot.queryParams.userId,this.verificationString=this.route.snapshot.queryParams.verificationString,this.userId&&this.verificationString?this.verifyEmail():this.notificationsService.error(this.i18n("Error"),this.i18n("Unable to find user id or verification string."))},n.prototype.verifyEmail=function(){var n=this;this.userService.verifyEmail(this.userId,this.verificationString).subscribe(function(){n.success=!0,setTimeout(function(){n.router.navigate(["/login"])},2e3)},function(l){n.notificationsService.error(n.i18n("Error"),l.message)})},n}(),s=e("vQJr"),m=e("Jm/i"),p=i["\u0275crt"]({encapsulation:2,styles:[],data:{}});function f(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,[" Your email has been verified and you may now login. Redirecting... "]))],null,null)}function v(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["An error occurred. "])),(n()(),i["\u0275eld"](3,0,null,null,2,"a",[["routerLink","/verify-account/ask-email"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==i["\u0275nov"](n,4).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),i["\u0275did"](4,671744,null,0,a.s,[a.p,a.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),(n()(),i["\u0275ted"](-1,null,["Vy\u017e\xe1dat nov\xfd ov\u011b\u0159ovac\xed e-mail."]))],function(n,l){n(l,4,0,"/verify-account/ask-email")},function(n,l){n(l,3,0,i["\u0275nov"](l,4).target,i["\u0275nov"](l,4).href)})}function g(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,5,"div",[["class","margin-content"]],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,1,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,[" Verify account email confirmation "])),(n()(),i["\u0275and"](16777216,null,null,1,null,f)),i["\u0275did"](4,16384,null,0,r.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),i["\u0275and"](0,[["verificationError",2]],null,0,null,v))],function(n,l){n(l,4,0,l.component.success,i["\u0275nov"](l,5))},null)}function C(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"my-verify-account-email",[],null,null,null,g,p)),i["\u0275did"](1,114688,null,0,c,[s.a,o.NotificationsService,a.p,a.a,m.a],null,null)],function(n,l){n(l,1,0)},null)}var h=i["\u0275ccf"]("my-verify-account-email",c,C,{},{},[]),y=e("gIcY"),b=e("mrSG"),_=(e("cPqw"),e("ey9i"),e("3szM")),S=e("Qmuk"),I=function(n){function l(l,e,i,t,u,a,r){var o=n.call(this)||this;return o.formValidatorService=l,o.userValidatorsService=e,o.userService=i,o.serverService=t,o.notificationsService=u,o.redirectService=a,o.i18n=r,o}return Object(b.__extends)(l,n),Object.defineProperty(l.prototype,"requiresEmailVerification",{get:function(){return this.serverService.getConfig().signup.requiresEmailVerification},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){this.buildForm({"verify-email-email":this.userValidatorsService.USER_EMAIL})},l.prototype.askSendVerifyEmail=function(){var n=this,l=this.form.value["verify-email-email"];this.userService.askSendVerifyEmail(l).subscribe(function(){var e=n.i18n("An email with verification link will be sent to {{email}}.",{email:l});n.notificationsService.success(n.i18n("Success"),e),n.redirectService.redirectToHomepage()},function(l){n.notificationsService.error(n.i18n("Error"),l.message)})},l}(d.a),R=e("pyEO"),E=e("dubb"),N=i["\u0275crt"]({encapsulation:0,styles:[["input[_ngcontent-%COMP%]:not([type=submit]){height:30px;width:340px;background:var(--inputColor);border:1px solid #c6c6c6;border-radius:3px;padding-left:15px;padding-right:15px;display:block}input[_ngcontent-%COMP%]:not([type=submit])::-webkit-input-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::-ms-input-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::placeholder{color:var(--inputPlaceholderColor)}@media screen and (max-width:340px){input[_ngcontent-%COMP%]:not([type=submit]){width:100%}}input[type=submit][_ngcontent-%COMP%]{border:none;font-weight:600;font-size:15px;height:30px;line-height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer;outline:0}input[type=submit][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:focus{color:#fff;background-color:var(--mainColor)}input[type=submit][_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainHoverColor)}input[type=submit].disabled[_ngcontent-%COMP%], input[type=submit][disabled][_ngcontent-%COMP%]{cursor:default;color:#fff;background-color:#c6c6c6}"]],data:{}});function O(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"div",[["class","form-error"]],null,null,null,null,null)),(n()(),i["\u0275ted"](1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.formErrors["verify-email-email"])})}function k(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,20,"form",[["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0,u=n.component;return"submit"===l&&(t=!1!==i["\u0275nov"](n,2).onSubmit(e)&&t),"reset"===l&&(t=!1!==i["\u0275nov"](n,2).onReset()&&t),"ngSubmit"===l&&(t=!1!==u.askSendVerifyEmail()&&t),t},null,null)),i["\u0275did"](1,16384,null,0,y["\u0275angular_packages_forms_forms_bh"],[],null,null),i["\u0275did"](2,540672,null,0,y.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),i["\u0275prd"](2048,null,y.ControlContainer,null,[y.FormGroupDirective]),i["\u0275did"](4,16384,null,0,y.NgControlStatusGroup,[[4,y.ControlContainer]],null,null),(n()(),i["\u0275eld"](5,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),i["\u0275eld"](6,0,null,null,1,"label",[["for","verify-email-email"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Email"])),(n()(),i["\u0275eld"](8,0,null,null,9,"input",[["formControlName","verify-email-email"],["id","verify-email-email"],["placeholder","Emailov\xe1 adresa"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0;return"input"===l&&(t=!1!==i["\u0275nov"](n,11)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==i["\u0275nov"](n,11).onTouched()&&t),"compositionstart"===l&&(t=!1!==i["\u0275nov"](n,11)._compositionStart()&&t),"compositionend"===l&&(t=!1!==i["\u0275nov"](n,11)._compositionEnd(e.target.value)&&t),t},null,null)),i["\u0275did"](9,278528,null,0,r.NgClass,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2],{ngClass:[0,"ngClass"]},null),i["\u0275pod"](10,{"input-error":0}),i["\u0275did"](11,16384,null,0,y.DefaultValueAccessor,[i.Renderer2,i.ElementRef,[2,y.COMPOSITION_BUFFER_MODE]],null,null),i["\u0275did"](12,16384,null,0,y.RequiredValidator,[],{required:[0,"required"]},null),i["\u0275prd"](1024,null,y.NG_VALIDATORS,function(n){return[n]},[y.RequiredValidator]),i["\u0275prd"](1024,null,y.NG_VALUE_ACCESSOR,function(n){return[n]},[y.DefaultValueAccessor]),i["\u0275did"](15,671744,null,0,y.FormControlName,[[3,y.ControlContainer],[6,y.NG_VALIDATORS],[8,null],[6,y.NG_VALUE_ACCESSOR],[2,y["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),i["\u0275prd"](2048,null,y.NgControl,null,[y.FormControlName]),i["\u0275did"](17,16384,null,0,y.NgControlStatus,[[4,y.NgControl]],null,null),(n()(),i["\u0275and"](16777216,null,null,1,null,O)),i["\u0275did"](19,16384,null,0,r.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275eld"](20,0,null,null,0,"input",[["type","submit"],["value","Send verification email"]],[[8,"disabled",0]],null,null,null,null))],function(n,l){var e=l.component;n(l,2,0,e.form);var i=n(l,10,0,e.formErrors["verify-email-email"]);n(l,9,0,i),n(l,12,0,""),n(l,15,0,"verify-email-email"),n(l,19,0,e.formErrors["verify-email-email"])},function(n,l){var e=l.component;n(l,0,0,i["\u0275nov"](l,4).ngClassUntouched,i["\u0275nov"](l,4).ngClassTouched,i["\u0275nov"](l,4).ngClassPristine,i["\u0275nov"](l,4).ngClassDirty,i["\u0275nov"](l,4).ngClassValid,i["\u0275nov"](l,4).ngClassInvalid,i["\u0275nov"](l,4).ngClassPending),n(l,8,0,i["\u0275nov"](l,12).required?"":null,i["\u0275nov"](l,17).ngClassUntouched,i["\u0275nov"](l,17).ngClassTouched,i["\u0275nov"](l,17).ngClassPristine,i["\u0275nov"](l,17).ngClassDirty,i["\u0275nov"](l,17).ngClassValid,i["\u0275nov"](l,17).ngClassInvalid,i["\u0275nov"](l,17).ngClassPending),n(l,20,0,!e.form.valid)})}function M(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["This instance does not require email verification."]))],null,null)}function V(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,5,"div",[["class","margin-content"]],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,1,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,[" Request email for account verification "])),(n()(),i["\u0275and"](16777216,null,null,1,null,k)),i["\u0275did"](4,16384,null,0,r.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),i["\u0275and"](0,[["emailVerificationNotRequired",2]],null,0,null,M))],function(n,l){n(l,4,0,l.component.requiresEmailVerification,i["\u0275nov"](l,5))},null)}function A(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"my-verify-account-ask-send-email",[],null,null,null,V,N)),i["\u0275did"](1,114688,null,0,I,[_.a,S.a,s.a,R.a,o.NotificationsService,E.a,m.a],null,null)],function(n,l){n(l,1,0)},null)}var F=i["\u0275ccf"]("my-verify-account-ask-send-email",I,A,{},{},[]),P=e("9AJC"),w=e("t/Na"),T=e("9IV+"),L=e("4GxJ"),D=e("Huiz"),x=e("nvTd"),q=e("upD4"),G=e("6RP5"),j=e("HvDw"),U=e("LTwV"),z=e("l/z6"),B=e("uEkc"),J=e("wQE2"),K=e("cKMx"),X=e("mTdg"),Y=e("VNja"),H=e("mpCX"),Q=e("hD3C"),Z=e("F4xN"),W=e("wpFD"),$=e("/7bI"),nn=e("JtBY"),ln=e("0C+C"),en=e("D/X6"),tn=e("cvwr"),un=e("tSwB"),an=e("RtUV"),rn=e("W3Gj"),on=e("hlYB"),dn=e("M9Zh"),cn=e("fR23"),sn=e("cDr6"),mn={meta:{title:"Verify account email"}},pn={meta:{title:"Verify account ask send email"}},fn=function(){return function(){}}(),vn=e("7LN8"),gn=e("XX9I"),Cn=e("PCNd");e.d(l,"VerifyAccountModuleNgFactory",function(){return hn});var hn=i["\u0275cmf"](t,[],function(n){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,h,F,P.f,P.c,P.d,P.e]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[i.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),i["\u0275mpd"](4608,y["\u0275angular_packages_forms_forms_j"],y["\u0275angular_packages_forms_forms_j"],[]),i["\u0275mpd"](4608,y.FormBuilder,y.FormBuilder,[]),i["\u0275mpd"](4608,w.m,w.s,[r.DOCUMENT,i.PLATFORM_ID,w.q]),i["\u0275mpd"](4608,w.t,w.t,[w.m,w.r]),i["\u0275mpd"](5120,w.a,function(n,l){return[n,new T.a(l)]},[w.t,i.Injector]),i["\u0275mpd"](4608,w.p,w.p,[]),i["\u0275mpd"](6144,w.n,null,[w.p]),i["\u0275mpd"](4608,w.l,w.l,[w.n]),i["\u0275mpd"](6144,w.b,null,[w.l]),i["\u0275mpd"](4608,w.g,w.o,[w.b,i.Injector]),i["\u0275mpd"](4608,w.c,w.c,[w.g]),i["\u0275mpd"](4608,L.w,L.w,[i.ComponentFactoryResolver,i.Injector,L.bb,L.x]),i["\u0275mpd"](4608,m.a,m.a,[i.TRANSLATIONS_FORMAT,i.TRANSLATIONS,i.LOCALE_ID,[2,m.b]]),i["\u0275mpd"](4608,D.a,D.a,[a.p,m.a]),i["\u0275mpd"](4608,x.a,x.a,[]),i["\u0275mpd"](4608,q.a,q.a,[w.c,x.a,D.a]),i["\u0275mpd"](4608,G.a,G.a,[w.c,x.a,D.a]),i["\u0275mpd"](4608,j.a,j.a,[w.c,x.a,D.a]),i["\u0275mpd"](4608,s.a,s.a,[w.c,D.a,x.a,m.a]),i["\u0275mpd"](4608,U.a,U.a,[w.c,D.a,x.a,R.a,m.a]),i["\u0275mpd"](4608,z.a,z.a,[w.c,D.a]),i["\u0275mpd"](4608,B.a,B.a,[]),i["\u0275mpd"](4608,J.a,J.a,[w.c,D.a]),i["\u0275mpd"](4608,K.a,K.a,[w.c,R.a,D.a]),i["\u0275mpd"](4608,X.a,X.a,[w.c,x.a,D.a,R.a]),i["\u0275mpd"](4608,Y.a,Y.a,[w.c,D.a,x.a]),i["\u0275mpd"](4608,_.a,_.a,[y.FormBuilder]),i["\u0275mpd"](4608,H.a,H.a,[m.a]),i["\u0275mpd"](4608,Q.a,Q.a,[m.a]),i["\u0275mpd"](4608,Z.a,Z.a,[m.a]),i["\u0275mpd"](4608,S.a,S.a,[m.a]),i["\u0275mpd"](4608,W.a,W.a,[m.a]),i["\u0275mpd"](4608,$.a,$.a,[m.a]),i["\u0275mpd"](4608,nn.a,nn.a,[m.a]),i["\u0275mpd"](4608,ln.a,ln.a,[m.a]),i["\u0275mpd"](4608,en.a,en.a,[m.a]),i["\u0275mpd"](4608,tn.a,tn.a,[m.a]),i["\u0275mpd"](4608,un.a,un.a,[w.c,D.a,U.a,R.a]),i["\u0275mpd"](4608,an.a,an.a,[m.a]),i["\u0275mpd"](4608,rn.a,rn.a,[m.a]),i["\u0275mpd"](4608,on.a,on.a,[w.c,D.a,x.a]),i["\u0275mpd"](4608,dn.a,dn.a,[m.a]),i["\u0275mpd"](4608,cn.a,cn.a,[]),i["\u0275mpd"](1073742336,a.t,a.t,[[2,a.z],[2,a.p]]),i["\u0275mpd"](1073742336,fn,fn,[]),i["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),i["\u0275mpd"](1073742336,y["\u0275angular_packages_forms_forms_bc"],y["\u0275angular_packages_forms_forms_bc"],[]),i["\u0275mpd"](1073742336,y.FormsModule,y.FormsModule,[]),i["\u0275mpd"](1073742336,y.ReactiveFormsModule,y.ReactiveFormsModule,[]),i["\u0275mpd"](1073742336,w.e,w.e,[]),i["\u0275mpd"](1073742336,w.d,w.d,[]),i["\u0275mpd"](1073742336,L.u,L.u,[]),i["\u0275mpd"](1073742336,L.y,L.y,[]),i["\u0275mpd"](1073742336,L.F,L.F,[]),i["\u0275mpd"](1073742336,L.R,L.R,[]),i["\u0275mpd"](1073742336,L.Y,L.Y,[]),i["\u0275mpd"](1073742336,vn.SharedModule,vn.SharedModule,[]),i["\u0275mpd"](1073742336,gn.b,gn.b,[]),i["\u0275mpd"](1073742336,gn.g,gn.g,[]),i["\u0275mpd"](1073742336,gn.d,gn.d,[]),i["\u0275mpd"](1073742336,gn.c,gn.c,[]),i["\u0275mpd"](1073742336,gn.e,gn.e,[]),i["\u0275mpd"](1073742336,gn.f,gn.f,[]),i["\u0275mpd"](1073742336,Cn.a,Cn.a,[]),i["\u0275mpd"](1073742336,t,t,[]),i["\u0275mpd"](1024,a.n,function(){return[[{path:"",canActivateChild:[sn.a],children:[{path:"email",component:c,data:mn},{path:"ask-send-email",component:I,data:pn}]}]]},[]),i["\u0275mpd"](256,i.LOCALE_ID,"cs-CZ",[]),i["\u0275mpd"](256,w.q,"XSRF-TOKEN",[]),i["\u0275mpd"](256,w.r,"X-XSRF-TOKEN",[]),i["\u0275mpd"](256,i.TRANSLATIONS_FORMAT,"xlf",[])])})}}]);