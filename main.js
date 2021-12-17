(()=>{"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var t={formSelector:".form",inputSelector:".form__text",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"form__text_type_error",errorClass:"form__input-error_active"},n=function t(n,o){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),e(this,"toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled","disabled")):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),e(this,"_showInputError",(function(e,t){var n=r._form.querySelector("#".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),e(this,"_hideInputError",(function(e){var t=r._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),e(this,"_isValid",(function(e){!e.validity.valid||e.validity.typeMismatch?r._showInputError(e,e.validationMessage):r._hideInputError(e)})),e(this,"_setEventListeners",(function(){r._inputList=Array.from(r._form.querySelectorAll(r._inputSelector)),r._buttonElement=r._form.querySelector(r._submitButtonSelector),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r.toggleButtonState()}))}))})),e(this,"enableValidation",(function(){r._setEventListeners(r._form),r._form.addEventListener("submit",(function(e){e.preventDefault()}))})),this._form=o,this._inputSelector=n.inputSelector,this._inputList=n.inputList,this._buttonElement=n.buttonElement,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass};function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n,o,i,a){var u=this,c=a.handleCardClick,s=a.handleDeleteCard,l=a.handleLikeClick,f=a.deleteLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_addLike",(function(){u._card.querySelector(".photo-grid__like-button").classList.add("photo-grid__like-button_activ")})),r(this,"_removeLike",(function(){u._card.querySelector(".photo-grid__like-button").classList.remove("photo-grid__like-button_activ")})),this._data=t,this._cardSelector=n,this._userId=o,this._photoSelector=i,this._handleCardClick=c,this._handleDeletecard=s,this._handleLikeClick=l,this._deleteLikeClick=f}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".photo-grid__element").cloneNode(!0)}},{key:"deleteCardElem",value:function(){this._deleteElement(this._card)}},{key:"_deleteElement",value:function(e){e.remove(),e=null}},{key:"_like",value:function(e){this._addLike(),this._handleLikeClick(e)}},{key:"_disLike",value:function(e){this._removeLike(),this._deleteLikeClick(e)}},{key:"setLikeCount",value:function(e){this._likeCount.textContent=String(e.likes.length)}},{key:"_checkUserCard",value:function(){this._data.owner._id!==this._userId&&this._deleteElement(this._deleteButtonClick)}},{key:"_checkLeked",value:function(){var e=this;this._data.likes.forEach((function(t){t._id===e._userId&&e._addLike()}))}},{key:"_setEventListeners",value:function(){var e=this;this._card.querySelector(".photo-grid__image_click_open").addEventListener("click",(function(){e._handleCardClick(e._data)})),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("photo-grid__like-button_activ")?e._disLike(e._data):e._like(e._data)})),this._deleteButtonClick.addEventListener("click",(function(){e._handleDeletecard(e._data)}))}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._photoImage=this._card.querySelector(this._photoSelector.photoImageSelector),this._photoFigcaption=this._card.querySelector(this._photoSelector.photoFigcaptionSelector),this._likeCount=this._card.querySelector(this._photoSelector.photoLikeCount),this._likeButton=this._card.querySelector(this._photoSelector.photoLikeButton),this._deleteButtonClick=this._card.querySelector(this._photoSelector.photoDelete),this._card.setAttribute("id","a".concat(this._data._id)),this._photoImage.src=this._data.link,this._photoImage.alt=this._data.name,this._photoFigcaption.textContent=this._data.name,this.setLikeCount(this._data),this._setEventListeners(),this._checkUserCard(),this._checkLeked(),this._card}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"rendererCards",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popupElement=document.querySelector(this._popupSelector),this._handleClickClose=this._handleClickClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickClose",value:function(e){(e.target.classList.contains("popup__button-close")||e.target.classList.contains("popup_opened"))&&this.close()}},{key:"setEventListeners",value:function(){this._popupElement.addEventListener("click",this._handleClickClose),document.addEventListener("keydown",this._handleEscClose)}},{key:"_removeEventListeners",value:function(){this._popupElement.removeEventListener("click",this._handleClickClose),document.removeEventListener("keydown",this._handleKeydownClose)}},{key:"open",value:function(){this.setEventListeners(),this._popupElement.classList.add("popup_opened")}},{key:"close",value:function(){this._removeEventListeners(),this._popupElement.classList.remove("popup_opened")}}])&&c(t.prototype,n),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=p(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},h.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(o);if(r){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupPhoto=t._popupElement.querySelector(".popup-photo__image"),t._popupFigCaption=t._popupElement.querySelector(".popup-photo__caption"),t}return t=a,(n=[{key:"open",value:function(e){this._popupPhoto.src=e.link,this._popupPhoto.alt=e.name,this._popupFigCaption.textContent=e.name,h(v(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),a}(s);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=C(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},E.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(o);if(r){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n,o,r,u,c,s=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c=function(){o._form.addEventListener("submit",o._submitPreventDefault),E((n=S(o),L(a.prototype)),"setEventListeners",n).call(n)},(u="setEventListeners")in(r=S(o=i.call(this,e)))?Object.defineProperty(r,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[u]=c,o._form=o._popupElement.querySelector(".form"),o._handleSubmit=s,o._handleSubmitButton=document.querySelector(".popup__button-save"),o._submitPreventDefault=o._submitPreventDefault.bind(S(o)),o}return t=a,n=[{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Cохранение..";this._handleSubmitButton.textContent=e?t:this._initialSubmitButton}},{key:"_getInputValues",value:function(){var e=Array.from(this._form.querySelectorAll(".form__text")),t={};return e.forEach((function(e){t[e.name]=e.value})),t}},{key:"_submitPreventDefault",value:function(e){e.preventDefault(),this._handleSubmit(this._getInputValues()),this.close()}},{key:"_removeEventListeners",value:function(){this._form.removeEventListener("submit",this._submitPreventDefault),E(L(a.prototype),"_removeEventListeners",this).call(this)}},{key:"close",value:function(){this._removeEventListeners(),this._form.reset(),E(L(a.prototype),"close",this).call(this)}}],n&&b(t.prototype,n),a}(s);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function R(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return q(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=I(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},B.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(o);if(r){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e,t){var n,o,r,u,c,s=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c=function(){o._form.addEventListener("reset",o._submitPreventDefault),B((n=q(o),D(a.prototype)),"setEventListeners",n).call(n)},(u="setEventListeners")in(r=q(o=i.call(this,e)))?Object.defineProperty(r,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[u]=c,o._popupElement=document.querySelector(o._popupSelector),o._form=o._popupElement.querySelector(".form"),o._handleSubmit=s,o._submitPreventDefault=o._submitPreventDefault.bind(q(o)),o}return t=a,(n=[{key:"_submitPreventDefault",value:function(e){e.preventDefault(),this._handleSubmit(this._data),this.close()}},{key:"_removeEventListeners",value:function(){this._form.removeEventListener("reset",this._submitPreventDefault),B(D(a.prototype),"_removeEventListeners",this).call(this)}},{key:"close",value:function(){this._removeEventListeners(),this._form.reset(),B(D(a.prototype),"close",this).call(this)}}])&&P(t.prototype,n),a}(s);function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var A=function(){function e(t){var n=t.userNameSelector,o=t.userJobSelector,r=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=n,this._userJobSelector=o,this._userAvatarSelector=r,this._userName=document.querySelector(this._userNameSelector),this._userJob=document.querySelector(this._userJobSelector),this._userAvatar=document.querySelector(this._userAvatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userJob.textContent}}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about,this.setUserAvatar(e),this._userAvatar.alt="".concat(e.name)}}])&&x(t.prototype,n),e}(),U=document.querySelector(".profile__edit-button"),N=document.querySelector(".form__text_type_name"),J=document.querySelector(".form__text_type_job"),V=document.querySelector(".edit-form"),F=document.querySelector(".profile__add-button"),G=document.querySelector(".add-form"),H=document.querySelector(".avatar-form"),M=document.querySelector(".profile__avatar-edit-btn"),z={photoImageSelector:".photo-grid__image",photoFigcaptionSelector:".photo-grid__caption",photoLikeButton:".photo-grid__like-button",photoLikeCount:".photo-grid__like-count",photoDelete:".photo-grid__delete-button"};function K(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._handleResponse)}},{key:"getCard",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._handleResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e._id),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATHC",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATHC",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse)}}])&&K(t.prototype,n),e}(),W=null,X=null,Y=new y(".popup-photo"),Z=new A({userNameSelector:".profile__name",userJobSelector:".profile__job",userAvatarSelector:".profile__avatar"}),$=function(e){var t=oe(e),n=t.generateCard();t.setLikeCount(e),ee.addItem(n)},ee=new u({renderer:function(e){$(e)}},".photo-grid__elements"),te=new Q({url:"https://mesto.nomoreparties.co/v1/cohort-31",headers:{authorization:"32e84a94-3e62-41e4-a88d-158365ef2a09","Content-Type":"application/json"}});te.getUserInfo().then((function(e){var t=e;X=t._id,Z.setUserInfo(t)})).catch((function(e){console.log(e)})),te.getCard().then((function(e){var t=e;ee.rendererCards(t)})).catch((function(e){console.log(e)}));var ne=new T(".popup-confirm",{handleSubmit:function(e){te.deleteCard(e).then((function(){W.deleteCardElem()})).then((function(){W=null,ne.close()})).catch((function(e){console.log(e)}))}}),oe=function(e){var t=new i(e,".photo-template",X,z,{handleCardClick:function(){Y.open(e)},handleDeleteCard:function(){W=t,ne.open(e)},handleLikeClick:function(){te.setLike(e).then((function(e){t.setLikeCount(e)})).catch((function(e){console.log(e)}))},deleteLikeClick:function(){te.deleteLike(e).then((function(e){t.setLikeCount(e)})).catch((function(e){console.log(e)}))}});return t},re=new w(".popup-add",{handleSubmit:function(e){re.renderLoading(!0),te.postCard(e).then((function(e){$(e)})).catch((function(e){console.log(e)})).finally((function(){re.renderLoading(!1),re.close()}))}});F.addEventListener("click",(function(){ie.toggleButtonState(),re.open()}));var ie=new n(t,G);ie.enableValidation(),new n(t,V).enableValidation();var ae=new w(".popup-edit",{handleSubmit:function(e){ae.renderLoading(!0),te.setUserInfo(e).then((function(e){Z.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){ae.renderLoading(!1),ae.close()}))}});U.addEventListener("click",(function(){var e=Z.getUserInfo();N.value=e.name,J.value=e.about,ae.open()}));var ue=new w(".popup-avatar",{handleSubmit:function(e){ue.renderLoading(!0),te.setUserAvatar(e).then((function(e){Z.setUserAvatar(e)})).catch((function(e){console.log(e)})).finally((function(){ue.renderLoading(!1),ue.close()}))}});M.addEventListener("click",(function(){ce.toggleButtonState(),ue.open()}));var ce=new n(t,H);ce.enableValidation()})();