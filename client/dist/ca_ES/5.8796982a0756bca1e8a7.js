(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1qlQ":function(n,e,t){"use strict";t.d(e,"a",function(){return u});var l=t("mrSG"),o=t("CcnG"),r=(t("lNG3"),t("3szM"),t("rCE/")),i=(t("OwH3"),function(n,e,t,l){return new(t||(t=Promise))(function(o,r){function i(n){try{c(l.next(n))}catch(e){r(e)}}function u(n){try{c(l.throw(n))}catch(e){r(e)}}function c(n){n.done?o(n.value):new t(function(e){e(n.value)}).then(i,u)}c((l=l.apply(n,e||[])).next())})}),u=function(n){function e(e,t,l,r,i,u){var c=n.call(this)||this;return c.formValidatorService=e,c.modalService=t,c.notificationsService=l,c.userService=r,c.userValidatorsService=i,c.i18n=u,c.userBanned=new o.EventEmitter,c}return Object(l.__extends)(e,n),e.prototype.ngOnInit=function(){this.buildForm({reason:this.userValidatorsService.USER_BAN_REASON})},e.prototype.openModal=function(n){this.usersToBan=n,this.openedModal=this.modalService.open(this.modal)},e.prototype.hideBanUserModal=function(){this.usersToBan=void 0,this.openedModal.close()},e.prototype.banUser=function(){return i(this,void 0,void 0,function(){var n=this;return function(n,e){var t,l,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(r){return function(u){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,l&&(o=2&r[0]?l.return:r[0]?l.throw||((o=l.return)&&o.call(l),0):l.next)&&!(o=o.call(l,r[1])).done)return o;switch(l=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,l=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(n,i)}catch(u){r=[6,u],l=0}finally{t=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,u])}}}(this,function(e){return this.userService.banUsers(this.usersToBan,this.form.value.reason||void 0).subscribe(function(){var e=Array.isArray(n.usersToBan)?n.i18n("{{num}} users banned.",{num:n.usersToBan.length}):n.i18n("User {{username}} banned.",{username:n.usersToBan.username});n.notificationsService.success(n.i18n("Success"),e),n.userBanned.emit(n.usersToBan),n.hideBanUserModal()},function(e){return n.notificationsService.error(n.i18n("Error"),e.message)}),[2]})})},e}(r.a)},GGhi:function(n,e,t){"use strict";var l=t("CcnG"),o=t("gIcY"),r=t("Ip0R");t("1qlQ"),t("3szM"),t("4GxJ"),t("lNG3"),t("vQJr"),t("Qmuk"),t("Jm/i"),t.d(e,"a",function(){return i}),t.d(e,"b",function(){return s});var i=l["\u0275crt"]({encapsulation:0,styles:[["textarea[_ngcontent-%COMP%]{display:inline-block;width:100%;background:var(--inputColor);border:1px solid #c6c6c6;border-radius:3px;height:60px;padding:5px 15px;font-size:15px}textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{color:var(--inputPlaceholderColor)}textarea[_ngcontent-%COMP%]::-ms-input-placeholder{color:var(--inputPlaceholderColor)}textarea[_ngcontent-%COMP%]::placeholder{color:var(--inputPlaceholderColor)}@media screen and (max-width:100%){textarea[_ngcontent-%COMP%]{width:100%}}"]],data:{}});function u(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"div",[["class","form-error"]],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,[" "," "]))],null,function(n,e){n(e,1,0,e.component.formErrors.reason)})}function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"div",[["class","modal-header"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Ban"])),(n()(),l["\u0275eld"](3,0,null,null,0,"span",[["aria-hidden","true"],["class","close"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.hideBanUserModal()&&l),l},null,null)),(n()(),l["\u0275eld"](4,0,null,null,23,"div",[["class","modal-body"]],null,null,null,null,null)),(n()(),l["\u0275eld"](5,0,null,null,22,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,e,t){var o=!0,r=n.component;return"submit"===e&&(o=!1!==l["\u0275nov"](n,7).onSubmit(t)&&o),"reset"===e&&(o=!1!==l["\u0275nov"](n,7).onReset()&&o),"ngSubmit"===e&&(o=!1!==r.banUser()&&o),o},null,null)),l["\u0275did"](6,16384,null,0,o["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](7,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),l["\u0275did"](9,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),l["\u0275eld"](10,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),l["\u0275eld"](11,0,null,null,8,"textarea",[["formControlName","reason"],["placeholder","Motiu..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,e,t){var o=!0;return"input"===e&&(o=!1!==l["\u0275nov"](n,14)._handleInput(t.target.value)&&o),"blur"===e&&(o=!1!==l["\u0275nov"](n,14).onTouched()&&o),"compositionstart"===e&&(o=!1!==l["\u0275nov"](n,14)._compositionStart()&&o),"compositionend"===e&&(o=!1!==l["\u0275nov"](n,14)._compositionEnd(t.target.value)&&o),o},null,null)),l["\u0275did"](12,278528,null,0,r.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{ngClass:[0,"ngClass"]},null),l["\u0275pod"](13,{"input-error":0}),l["\u0275did"](14,16384,null,0,o.DefaultValueAccessor,[l.Renderer2,l.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),l["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(n){return[n]},[o.DefaultValueAccessor]),l["\u0275did"](16,671744,null,0,o.FormControlName,[[3,o.ControlContainer],[8,null],[8,null],[6,o.NG_VALUE_ACCESSOR],[2,o["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),l["\u0275prd"](2048,null,o.NgControl,null,[o.FormControlName]),l["\u0275did"](18,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),(n()(),l["\u0275ted"](-1,null,["        "])),(n()(),l["\u0275and"](16777216,null,null,1,null,u)),l["\u0275did"](21,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](22,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,[" A banned user will no longer be able to login. "])),(n()(),l["\u0275eld"](24,0,null,null,3,"div",[["class","form-group inputs"]],null,null,null,null,null)),(n()(),l["\u0275eld"](25,0,null,null,1,"span",[["class","action-button action-button-cancel"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.hideBanUserModal()&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["Cancel"])),(n()(),l["\u0275eld"](27,0,null,null,0,"input",[["class","action-button-submit"],["type","submit"],["value","Ban this user"]],[[8,"disabled",0]],null,null,null,null))],function(n,e){var t=e.component;n(e,7,0,t.form);var l=n(e,13,0,t.formErrors.reason);n(e,12,0,l),n(e,16,0,"reason"),n(e,21,0,t.formErrors.reason)},function(n,e){var t=e.component;n(e,5,0,l["\u0275nov"](e,9).ngClassUntouched,l["\u0275nov"](e,9).ngClassTouched,l["\u0275nov"](e,9).ngClassPristine,l["\u0275nov"](e,9).ngClassDirty,l["\u0275nov"](e,9).ngClassValid,l["\u0275nov"](e,9).ngClassInvalid,l["\u0275nov"](e,9).ngClassPending),n(e,11,0,l["\u0275nov"](e,18).ngClassUntouched,l["\u0275nov"](e,18).ngClassTouched,l["\u0275nov"](e,18).ngClassPristine,l["\u0275nov"](e,18).ngClassDirty,l["\u0275nov"](e,18).ngClassValid,l["\u0275nov"](e,18).ngClassInvalid,l["\u0275nov"](e,18).ngClassPending),n(e,27,0,!t.form.valid)})}function s(n){return l["\u0275vid"](0,[l["\u0275qud"](402653184,1,{modal:0}),(n()(),l["\u0275and"](0,[[1,2],["modal",2]],null,0,null,c))],null,null)}},KdfM:function(n,e,t){"use strict";var l=t("CcnG"),o=t("GGhi"),r=t("1qlQ"),i=t("3szM"),u=t("4GxJ"),c=t("lNG3"),s=t("vQJr"),a=t("Qmuk"),d=t("Jm/i"),f=t("oEwo"),p=t("eEm8"),h=t("Ip0R");t("lKr9"),t("Vurf"),t("37nT"),t("pyEO"),t("hlYB"),t.d(e,"a",function(){return m}),t.d(e,"b",function(){return b});var m=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function v(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"my-user-ban-modal",[],null,[[null,"userBanned"]],function(n,e,t){var l=!0;return"userBanned"===e&&(l=!1!==n.component.onUserBanned()&&l),l},o.b,o.a)),l["\u0275did"](2,114688,[[1,4],["userBanModal",4]],0,r.a,[i.a,u.w,c.NotificationsService,s.a,a.a,d.a],null,{userBanned:"userBanned"}),(n()(),l["\u0275eld"](3,0,null,null,2,"my-action-dropdown",[],null,null,null,f.b,f.a)),l["\u0275did"](4,49152,null,0,p.a,[],{actions:[0,"actions"],entry:[1,"entry"],placement:[2,"placement"],buttonSize:[3,"buttonSize"]},null),l["\u0275pod"](5,{user:0,account:1})],function(n,e){var t=e.component;n(e,2,0);var l=t.userActions,o=n(e,5,0,t.user,t.account);n(e,4,0,l,o,t.placement,t.buttonSize)},null)}function b(n){return l["\u0275vid"](0,[l["\u0275qud"](671088640,1,{userBanModal:0}),(n()(),l["\u0275and"](16777216,null,null,1,null,v)),l["\u0275did"](2,16384,null,0,h.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,2,0,0!==e.component.userActions.length)},null)}},eEm8:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){function n(){this.actions=[],this.placement="bottom-left",this.buttonSize="normal",this.theme="grey"}return n.prototype.getActions=function(){return 0!==this.actions.length&&Array.isArray(this.actions[0])?this.actions:[this.actions]},n}()},lKr9:function(n,e,t){"use strict";t.d(e,"a",function(){return u});var l=t("CcnG"),o=(t("lNG3"),t("1qlQ"),t("OwH3"),t("ey9i"),t("MpoC")),r=(t("joIj"),t("gNPL"),function(n,e,t,l){return new(t||(t=Promise))(function(o,r){function i(n){try{c(l.next(n))}catch(e){r(e)}}function u(n){try{c(l.throw(n))}catch(e){r(e)}}function c(n){n.done?o(n.value):new t(function(e){e(n.value)}).then(i,u)}c((l=l.apply(n,e||[])).next())})}),i=function(n,e){var t,l,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(r){return function(u){return function(r){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,l&&(o=2&r[0]?l.return:r[0]?l.throw||((o=l.return)&&o.call(l),0):l.next)&&!(o=o.call(l,r[1])).done)return o;switch(l=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,l=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(n,i)}catch(u){r=[6,u],l=0}finally{t=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,u])}}},u=function(){function n(n,e,t,o,r,i,u){this.authService=n,this.notificationsService=e,this.confirmService=t,this.serverService=o,this.userService=r,this.blocklistService=i,this.i18n=u,this.buttonSize="normal",this.placement="left",this.userChanged=new l.EventEmitter,this.userDeleted=new l.EventEmitter,this.userActions=[]}return Object.defineProperty(n.prototype,"requiresEmailVerification",{get:function(){return this.serverService.getConfig().signup.requiresEmailVerification},enumerable:!0,configurable:!0}),n.prototype.ngOnChanges=function(){this.buildActions()},n.prototype.openBanUserModal=function(n){"root"!==n.username?this.userBanModal.openModal(n):this.notificationsService.error(this.i18n("Error"),this.i18n("You cannot ban root."))},n.prototype.onUserBanned=function(){this.userChanged.emit()},n.prototype.unbanUser=function(n){return r(this,void 0,void 0,function(){var e,t=this;return i(this,function(l){switch(l.label){case 0:return e=this.i18n("Do you really want to unban {{username}}?",{username:n.username}),[4,this.confirmService.confirm(e,this.i18n("Unban"))];case 1:return!1===l.sent()?[2]:(this.userService.unbanUsers(n).subscribe(function(){t.notificationsService.success(t.i18n("Success"),t.i18n("User {{username}} unbanned.",{username:n.username})),t.userChanged.emit()},function(n){return t.notificationsService.error(t.i18n("Error"),n.message)}),[2])}})})},n.prototype.removeUser=function(n){return r(this,void 0,void 0,function(){var e,t=this;return i(this,function(l){switch(l.label){case 0:return"root"===n.username?(this.notificationsService.error(this.i18n("Error"),this.i18n("You cannot delete root.")),[2]):(e=this.i18n("If you remove this user, you will not be able to create another with the same username!"),[4,this.confirmService.confirm(e,this.i18n("Delete"))]);case 1:return!1===l.sent()?[2]:(this.userService.removeUser(n).subscribe(function(){t.notificationsService.success(t.i18n("Success"),t.i18n("User {{username}} deleted.",{username:n.username})),t.userDeleted.emit()},function(n){return t.notificationsService.error(t.i18n("Error"),n.message)}),[2])}})})},n.prototype.setEmailAsVerified=function(n){var e=this;this.userService.updateUser(n.id,{emailVerified:!0}).subscribe(function(){e.notificationsService.success(e.i18n("Success"),e.i18n("User {{username}} email set as verified",{username:n.username})),e.userChanged.emit()},function(n){return e.notificationsService.error(e.i18n("Error"),n.message)})},n.prototype.blockAccountByUser=function(n){var e=this;this.blocklistService.blockAccountByUser(n).subscribe(function(){e.notificationsService.success(e.i18n("Success"),e.i18n("Account {{nameWithHost}} muted.",{nameWithHost:n.nameWithHost})),e.account.mutedByUser=!0,e.userChanged.emit()},function(n){return e.notificationsService.error(e.i18n("Error"),n.message)})},n.prototype.unblockAccountByUser=function(n){var e=this;this.blocklistService.unblockAccountByUser(n).subscribe(function(){e.notificationsService.success(e.i18n("Success"),e.i18n("Account {{nameWithHost}} unmuted.",{nameWithHost:n.nameWithHost})),e.account.mutedByUser=!1,e.userChanged.emit()},function(n){return e.notificationsService.error(e.i18n("Error"),n.message)})},n.prototype.blockServerByUser=function(n){var e=this;this.blocklistService.blockServerByUser(n).subscribe(function(){e.notificationsService.success(e.i18n("Success"),e.i18n("Instance {{host}} muted.",{host:n})),e.account.mutedServerByUser=!0,e.userChanged.emit()},function(n){return e.notificationsService.error(e.i18n("Error"),n.message)})},n.prototype.unblockServerByUser=function(n){var e=this;this.blocklistService.unblockServerByUser(n).subscribe(function(){e.notificationsService.success(e.i18n("Success"),e.i18n("Instance {{host}} unmuted.",{host:n})),e.account.mutedServerByUser=!1,e.userChanged.emit()},function(n){return e.notificationsService.error(e.i18n("Error"),n.message)})},n.prototype.blockAccountByInstance=function(n){var e=this;this.blocklistService.blockAccountByInstance(n).subscribe(function(){e.notificationsService.success(e.i18n("Success"),e.i18n("Account {{nameWithHost}} muted by the instance.",{nameWithHost:n.nameWithHost})),e.account.mutedByInstance=!0,e.userChanged.emit()},function(n){return e.notificationsService.error(e.i18n("Error"),n.message)})},n.prototype.unblockAccountByInstance=function(n){var e=this;this.blocklistService.unblockAccountByInstance(n).subscribe(function(){e.notificationsService.success(e.i18n("Success"),e.i18n("Account {{nameWithHost}} unmuted by the instance.",{nameWithHost:n.nameWithHost})),e.account.mutedByInstance=!1,e.userChanged.emit()},function(n){return e.notificationsService.error(e.i18n("Error"),n.message)})},n.prototype.blockServerByInstance=function(n){var e=this;this.blocklistService.blockServerByInstance(n).subscribe(function(){e.notificationsService.success(e.i18n("Success"),e.i18n("Instance {{host}} muted by the instance.",{host:n})),e.account.mutedServerByInstance=!0,e.userChanged.emit()},function(n){return e.notificationsService.error(e.i18n("Error"),n.message)})},n.prototype.unblockServerByInstance=function(n){var e=this;this.blocklistService.unblockServerByInstance(n).subscribe(function(){e.notificationsService.success(e.i18n("Success"),e.i18n("Instance {{host}} unmuted by the instance.",{host:n})),e.account.mutedServerByInstance=!1,e.userChanged.emit()},function(n){return e.notificationsService.error(e.i18n("Error"),n.message)})},n.prototype.getRouterUserEditLink=function(n){return["/admin","users","update",n.id]},n.prototype.buildActions=function(){var n=this;if(this.userActions=[],this.authService.isLoggedIn()){var e=this.authService.getUser();if(this.user&&e.id===this.user.id)return;if(this.user&&e.hasRight(o.b.MANAGE_USERS)&&this.userActions.push([{label:this.i18n("Edit"),linkBuilder:function(e){return n.getRouterUserEditLink(e.user)}},{label:this.i18n("Delete"),handler:function(e){return n.removeUser(e.user)}},{label:this.i18n("Ban"),handler:function(e){return n.openBanUserModal(e.user)},isDisplayed:function(n){return!n.user.blocked}},{label:this.i18n("Unban"),handler:function(e){return n.unbanUser(e.user)},isDisplayed:function(n){return n.user.blocked}},{label:this.i18n("Set Email as Verified"),handler:function(e){return n.setEmailAsVerified(e.user)},isDisplayed:function(e){var t=e.user;return n.requiresEmailVerification&&!t.blocked&&!1===t.emailVerified}}]),this.account){this.userActions.push([{label:this.i18n("Mute this account"),isDisplayed:function(n){return!1===n.account.mutedByUser},handler:function(e){return n.blockAccountByUser(e.account)}},{label:this.i18n("Unmute this account"),isDisplayed:function(n){return!0===n.account.mutedByUser},handler:function(e){return n.unblockAccountByUser(e.account)}},{label:this.i18n("Mute the instance"),isDisplayed:function(n){var e=n.account;return!e.userId&&!1===e.mutedServerByInstance},handler:function(e){return n.blockServerByUser(e.account.host)}},{label:this.i18n("Unmute the instance"),isDisplayed:function(n){var e=n.account;return!e.userId&&!0===e.mutedServerByInstance},handler:function(e){return n.unblockServerByUser(e.account.host)}}]);var t=[];e.hasRight(o.b.MANAGE_ACCOUNTS_BLOCKLIST)&&(t=t.concat([{label:this.i18n("Mute this account by your instance"),isDisplayed:function(n){return!1===n.account.mutedByInstance},handler:function(e){return n.blockAccountByInstance(e.account)}},{label:this.i18n("Unmute this account by your instance"),isDisplayed:function(n){return!0===n.account.mutedByInstance},handler:function(e){return n.unblockAccountByInstance(e.account)}}])),e.hasRight(o.b.MANAGE_SERVERS_BLOCKLIST)&&(t=t.concat([{label:this.i18n("Mute the instance by your instance"),isDisplayed:function(n){var e=n.account;return!e.userId&&!1===e.mutedServerByInstance},handler:function(e){return n.blockServerByInstance(e.account.host)}},{label:this.i18n("Unmute the instance by your instance"),isDisplayed:function(n){var e=n.account;return!e.userId&&!0===e.mutedServerByInstance},handler:function(e){return n.unblockServerByInstance(e.account.host)}}])),0!==t.length&&this.userActions.push(t)}}},n}()},oEwo:function(n,e,t){"use strict";var l=t("CcnG"),o=t("ZYCi"),r=t("Ip0R"),i=t("4GxJ");t("eEm8"),t.d(e,"a",function(){return u}),t.d(e,"b",function(){return m});var u=l["\u0275crt"]({encapsulation:0,styles:[[".dropdown-divider[_ngcontent-%COMP%]:last-child{display:none}.action-button[_ngcontent-%COMP%]{border:none;font-weight:600;font-size:15px;height:30px;line-height:30px;border-radius:3px;text-align:center;padding:0 10px;cursor:pointer;outline:0;display:inline-block}.action-button.grey[_ngcontent-%COMP%], .action-button.grey[_ngcontent-%COMP%]:active, .action-button.grey[_ngcontent-%COMP%]:focus{background-color:#e5e5e5;color:#585858}.action-button.grey.disabled[_ngcontent-%COMP%], .action-button.grey[_ngcontent-%COMP%]:active, .action-button.grey[_ngcontent-%COMP%]:focus, .action-button.grey[_ngcontent-%COMP%]:hover, .action-button.grey[disabled][_ngcontent-%COMP%]{color:#585858;background-color:#efefef}.action-button.grey.disabled[_ngcontent-%COMP%], .action-button.grey[disabled][_ngcontent-%COMP%]{cursor:default}.action-button.orange[_ngcontent-%COMP%], .action-button.orange[_ngcontent-%COMP%]:active, .action-button.orange[_ngcontent-%COMP%]:focus{color:#fff;background-color:var(--mainColor)}.action-button.orange[_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainHoverColor)}.action-button.orange.disabled[_ngcontent-%COMP%], .action-button.orange[disabled][_ngcontent-%COMP%]{cursor:default;color:#fff;background-color:#c6c6c6}.action-button[_ngcontent-%COMP%]::after{display:none}.action-button[_ngcontent-%COMP%]:active, .action-button[_ngcontent-%COMP%]:focus, .action-button[_ngcontent-%COMP%]:hover{background-color:#e5e5e5}.action-button[_ngcontent-%COMP%]   .icon-action[_ngcontent-%COMP%]{display:inline-block;background-repeat:no-repeat;background-size:contain;width:21px;height:21px;vertical-align:middle;cursor:pointer;background-image:url(/client/ca_ES/more.1db6cba1c2d0e599bd37.svg);top:-1px}.action-button.small[_ngcontent-%COMP%]{font-size:14px;height:20px;line-height:20px}.dropdown-toggle[_ngcontent-%COMP%]::after{position:relative;top:1px}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{cursor:pointer;color:#000!important}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:100%}"]],data:{}});function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"span",[["class","icon icon-action"]],null,null,null,null,null))],null,null)}function s(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"span",[["class","dropdown-toggle"]],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,["",""]))],null,function(n,e){n(e,1,0,e.component.label)})}function a(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,2,"a",[["class","dropdown-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==l["\u0275nov"](n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),l["\u0275did"](1,671744,null,0,o.s,[o.p,o.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),(n()(),l["\u0275ted"](2,null,["",""]))],function(n,e){var t=e.parent.parent.context.$implicit.linkBuilder(e.component.entry);n(e,1,0,t)},function(n,e){n(e,0,0,l["\u0275nov"](e,1).target,l["\u0275nov"](e,1).href),n(e,2,0,e.parent.parent.context.$implicit.label)})}function d(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"span",[["class","custom-action dropdown-item"],["role","button"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.parent.parent.context.$implicit.handler(n.component.entry)&&l),l},null,null)),(n()(),l["\u0275ted"](1,null,[" "," "]))],null,function(n,e){n(e,1,0,e.parent.parent.context.$implicit.label)})}function f(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,a)),l["\u0275did"](2,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,d)),l["\u0275did"](4,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](0,null,null,0))],function(n,e){n(e,2,0,e.parent.context.$implicit.linkBuilder),n(e,4,0,!e.parent.context.$implicit.linkBuilder)},null)}function p(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,f)),l["\u0275did"](2,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](0,null,null,0))],function(n,e){var t=void 0===e.context.$implicit.isDisplayed||!0===e.context.$implicit.isDisplayed(e.component.entry);n(e,2,0,t)},null)}function h(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,p)),l["\u0275did"](2,278528,null,0,r.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),l["\u0275eld"](3,0,null,null,0,"div",[["class","dropdown-divider"]],null,null,null,null,null))],function(n,e){n(e,2,0,e.context.$implicit)},null)}function m(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,16,"div",[["class","dropdown-root"],["ngbDropdown",""]],[[2,"show",null]],null,null,null,null)),l["\u0275did"](1,212992,null,2,i.s,[l.ChangeDetectorRef,i.t,r.DOCUMENT,l.NgZone],{placement:[0,"placement"]},null),l["\u0275qud"](335544320,1,{_menu:0}),l["\u0275qud"](335544320,2,{_anchor:0}),(n()(),l["\u0275eld"](4,0,null,null,8,"div",[["aria-haspopup","true"],["class","action-button dropdown-toggle"],["ngbDropdownToggle",""],["role","button"]],[[1,"aria-expanded",0]],[[null,"click"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==l["\u0275nov"](n,7).toggleOpen()&&o),o},null,null)),l["\u0275did"](5,278528,null,0,r.NgClass,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),l["\u0275pod"](6,{small:0,grey:1,orange:2}),l["\u0275did"](7,16384,null,0,i.ib,[i.s,l.ElementRef],null,null),l["\u0275prd"](2048,[[2,4]],i.hb,null,[i.ib]),(n()(),l["\u0275and"](16777216,null,null,1,null,c)),l["\u0275did"](10,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,s)),l["\u0275did"](12,16384,null,0,r.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](13,0,null,null,3,"div",[["class","dropdown-menu"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),l["\u0275did"](14,16384,[[1,4]],0,i.gb,[i.s,l.ElementRef,l.Renderer2],null,null),(n()(),l["\u0275and"](16777216,null,null,1,null,h)),l["\u0275did"](16,278528,null,0,r.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){var t=e.component;n(e,1,0,t.placement);var l=n(e,6,0,"small"===t.buttonSize,"grey"===t.theme,"orange"===t.theme);n(e,5,0,"action-button",l),n(e,10,0,!t.label),n(e,12,0,t.label),n(e,16,0,t.getActions())},function(n,e){n(e,0,0,l["\u0275nov"](e,1).isOpen()),n(e,4,0,l["\u0275nov"](e,7).dropdown.isOpen()),n(e,13,0,!0,l["\u0275nov"](e,14).dropdown.isOpen(),l["\u0275nov"](e,14).placement)})}}}]);