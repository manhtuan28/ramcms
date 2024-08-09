!function(){"use strict";const e="freewheel",t="6.43.0",s="jw-flag-ads-freewheel",i="jw-freewheel-before-impression",r="jw-flag-ads-vpaid",n="playing",o="time",a="adBreakStart",l="adBreakEnd",d="adError",h="adSkipped",c="external",u=c;class p{constructor(e,t,s){var i,r,n,o;this.config=t;const a=e.localization.advertising,{admessage:l,podmessage:d,cuetext:h,loadingAd:c,skipmessage:u,skiptext:p}=a,m={admessage:l,podmessage:d,cuetext:h,loadingAd:c,skipMessage:u,skipText:p,debug:!1,admessagedynamickey:/(\b)xx(s?\b)/g,loadVideoTimeout:15e3,requestTimeout:15e3,adBlockTimeout:4e3};this.setOptions(m),this.fwassetid=s.fwassetid||e.fwassetid,this.duration=s.duration||e.duration||0,this.adschedule=s.adschedule||null;const f=s.freewheel||{},g=this.config.freewheel||{};this.profileid=f.profileid||g.profileid,this.sectionid=f.sectionid||g.sectionid,this.networkid=f.networkid||g.networkid,this.serverid=f.serverid||g.serverid,this.afid=f.afid||g.afid,this.sfid=f.sfid||g.sfid,this.vcid=f.vcid||g.vcid,this.capabilities={flag:{},metr:{}},null!=f&&null!=(i=f.capabilities)&&i.flag?this.capabilities.flag=f.capabilities.flag:null!=g&&null!=(r=g.capabilities)&&r.flag&&(this.capabilities.flag=g.capabilities.flag),null!=f&&null!=(n=f.capabilities)&&n.metr?this.capabilities.metr=f.capabilities.metr:null!=g&&null!=(o=g.capabilities)&&o.metr&&(this.capabilities.metr=g.capabilities.metr),this.custom=f.custom||g.custom||{}}getSchedule(){const e=this.config;return this.adschedule||e.tag||e.schedule||e.ad}getAdRules(){const e=this.config.rules||{},t=parseInt(e.frequency,10);return{startOn:e.startOn||1,frequency:isNaN(t)?1:t}}setOptions(e){Object.keys(e).forEach((t=>{let s=this.config[t]||this.config[t.toLowerCase()];const i=e[t],r=typeof i;if(void 0!==s){if("boolean"!==r&&"number"!==r||(s=(e=>{if("true"===e)return!0;if("false"===e)return!1;const t=parseFloat(e);return isNaN(t)?e:t})(s)),typeof s!==r)throw new Error(`invalid parameter: ${t} should be a ${r}`);this[t]=s}else this[t]=i})),this.admessagedynamic=e.admessage}}let m=null;const f=`http://adm.fwmrm.net/libs/adm/${t}/AdManager.js`,g=`https://mssl.fwmrm.net/libs/adm/${t}/AdManager.js`;function E(e,t){if(m)return m;if(window.tv&&tv.freewheel)return m=Promise.resolve(),m;const{protocol:s}=document.location,i="file:"===s||"https:"===s?g:f,r=new(0,e.scriptloader)(t||i);return m=r.load(),m}const v={},y={},w=(e,t,s)=>{const i=y[t];return i||(y[t]=((e,t)=>{const s=v[t];return s||(v[t]=new Promise(((s,i)=>{return '{"canPlayAds":true,"canPlayOutstreamAds":true,"canUseVPB":true}';})))})(e,t).catch((()=>({}))).then((e=>{let t,i;if(!0===s.outstream?(t=!1!==e.canPlayOutstreamAds,i="Outstream Ad Limit Reached"):(t=!1!==e.canPlayAds,i="Ad Limit Reached"),!1===t)throw new Error(i);return{message:"Can Play Ads"}})))};class S{constructor(e,t){e.extend(this,t),this.isMuted=!1,this.vol=0,this.freewheelProxy=null}setProxy(e){this.freewheelProxy=e,this.mute(this.isMuted)}attachMedia(){}detachMedia(){}mute(e){this.isMuted=e,this.freewheelProxy&&this.freewheelProxy.setAdVolume(this.isMuted?0:this.vol)}volume(e){this.vol=e/100,this.freewheelProxy&&this.freewheelProxy.setAdVolume(this.vol)}setFullscreen(e){if(this.video){if(e)try{const e=this.video.webkitEnterFullscreen;e&&e.apply(this.video)}catch(e){return!1}else{const e=this.video.webkitExitFullscreen;e&&e.apply(this.video)}return Boolean(e)}}}var _="2.2.17";var A=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(e),t)};function T(e,t,s){var i;if(!e)return e;const r=t.getPlaylistItem();let n=e.replace("__random-number__",Math.random()*Math.pow(10,18)).replace("__timestamp__",(new Date).getTime()).replace("__page-url__",encodeURIComponent(window.location.href)).replace("__referrer__",encodeURIComponent(document.referrer)).replace("__player-height__",t.getHeight()).replace("__player-width__",t.getWidth()).replace("__item-duration__",((e,t)=>{const s=Math.pow(10,t);return Math.round(e*s)/s})(t.getDuration(),3)).replace("__domain__",encodeURIComponent((o=window.location.href)?new URL(o).hostname:""));var o;n=null!=s&&null!=(i=s.companiondiv)&&i.id?n.replace("__companion-div__",s.companiondiv.id):n.replace("__companion-div__","");const a=n.match(/__item-[a-z 0-9 A-Z]*__/g);if(a)for(let e=0;e<a.length;e++){const s=a[e],i=s.substring(7,s.length-2);if(A(r,i)&&t._.isString(r[i])){let e=r[i];e.length>1e3&&(e=e.substring(0,1e3)),n=n.replace(s,encodeURIComponent(e))}else n=n.replace(s,"")}return n}const I=(e,t,s)=>{if("start"===e||"0%"===e)return"pre";if("end"===e||"100%"===e)return"post";if("pre"===e||"post"===e||s.indexOf(e,"%")>-1)return e;const i=t.seconds(e);return!!s.isNumber(i)&&i},P=(e,t,s)=>{let i=I(e,t,s);return i||(i="pre"),s.isNumber(i)&&(i=(e=>{const t=parseInt(e,10);let s=Math.floor(t)%1e3,i=Math.floor(t/1e3)%60,r=Math.floor(t/6e4)%60,n=Math.floor(t/36e5)%24;return n=n<10?`0${n}`:n,r=r<10?`0${r}`:r,i=i<10?`0${i}`:i,s=`000${s}`.slice(-3),`${n}:${r}:${i}.${s}`})(1e3*i)),i};class L{constructor(e,t){this.player=e,this.options=t}getTagMap(e){const t=this.player,s=t.utils,i={};return s.foreach(((e,t,s)=>{const i={};return t.foreach(e,(function(e,r){const n={};let o=r;r.ad&&(o=r.ad),n.offset=P(o.offset||o.position||r.offset||"",t,s),n.tag=o.tag,o.customadunitname&&(n.customadunitname=o.customadunitname),n.type=o.type||r.type||"linear,nonlinear",void 0!==o.skipoffset&&(n.skipoffset=o.skipoffset),i[e]=n})),i})(e,s,t._),((e,r)=>{let n=I(r.offset,s,t._);if(t._.isString(n)&&(n=parseFloat(n.replace("pre","0").replace("post","-1"))),t._.isNumber(n)){const e={tagName:T(r.tag,t,this.options),type:r.type};void 0!==r.skipoffset&&(e.skipoffset=r.skipoffset),r.customadunitname&&(e.customAdUnitName=r.customadunitname),i[n]=e}})),i}}var C=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(e),t)};const b={};class O{constructor(e,t,s){this.responsePromise=null,this.streamType=s,this.adsManager=new tv.freewheel.SDK.AdManager,this.adsManager.setNetwork(t.networkid),this.adsManager.setServer(t.serverid),this.options=t||{},this.version=e,this.schedule=null,this.tagMap={},this._fwassetid=null,this._fwduration=0}open(e,t){const s=this.options;if(this.currentAdContext)throw new Error("Request already made");const i=s.getSchedule();if(!i)return this.responsePromise=Promise.reject(),this.responsePromise;if(this.currentAdContext=this.adsManager.newContext(),this.setContextSettings(this.currentAdContext),this._fwassetid=s.fwassetid,this._fwduration=s.duration,this.schedule=i,this.responsePromise=new Promise(((e,t)=>{this.currentAdContext.addEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE,e),this.currentAdContext.addEventListener(tv.freewheel.SDK.EVENT_ERROR,t)})),"string"==typeof i)this.currentAdContext.addTemporalSlot(i,tv.freewheel.SDK.ADUNIT_PREROLL,0);else{const r=new L(e,t),n=this.tagMap=r.getTagMap(i),o=Object.keys(n);for(let e=0;e<o.length;e++){let t=parseFloat(o[e]);const i=n[t].tagName,r=n[t].customAdUnitName;let a=null;if("overlay"===n[t].type){if(-1===t)continue;a=tv.freewheel.SDK.ADUNIT_OVERLAY}if(!a)switch(t){case 0:a=r||tv.freewheel.SDK.ADUNIT_PREROLL;break;case-1:a=r||tv.freewheel.SDK.ADUNIT_POSTROLL,t=s.duration||1;break;default:a=r||tv.freewheel.SDK.ADUNIT_MIDROLL}this.currentAdContext.addTemporalSlot(i,a,t)}}return this.setCustomKeys(this.currentAdContext),this.responsePromise}setContextSettings(e){const{options:t}=this;e.setProfile(t.profileid),b[t.sectionid]||(b[t.sectionid]=Math.floor(2147483648*Math.random()));const s=b[t.sectionid],i=t.sfid||null;e.setSiteSection(t.sectionid,null,s,null,i);const r=t.vcid||null;e.setVisitor(r,null)}setCustomKeys(e){const{custom:t}=this.options;let s=!1;for(const i in t)if(C(t,i)){let r=t[i];r&&"string"!=typeof r&&(r=r.toString()),s||(e._adRequest._keyValues.push(""),s=!0),"_fw_gdpr"===i?this.adsManager._fwGDPR=t[i]:"_fw_gdpr_consent"===i?this.adsManager._fwGDPRConsent=r:e.addKeyValue(i,r)}}requestAds(e){const t=e.getContainer(),s=t.querySelector(".jw-wrapper");s.id=`${t.id}-jw-wrapper`,this.currentAdContext.registerVideoDisplayBase(s.id),this.setRequestSettings(this.currentAdContext,e),this.currentAdContext.submitRequest()}setRequestSettings(e,t){const s=t.getConfig();let i=tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE;s.autostart&&(i=s.playOnViewable?tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED:tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED);const r=Math.floor(2147483648*Math.random()),n=this.options.afid||null;"LIVE"===s.streamType||this.streamType&&"LIVE"===this.streamType.toUpperCase()?(e.setVideoAsset(this._fwassetid,this._fwduration,null,null,i,r,null,n,tv.freewheel.SDK.VIDEO_ASSET_DURATION_TYPE_VARIABLE),e.setRequestMode(tv.freewheel.SDK.REQUEST_MODE_LIVE)):e.setVideoAsset(this._fwassetid,this._fwduration,null,null,i,r,null,n);const o=Math.floor(s.bandwidthEstimate/1e3);e.setParameter(tv.freewheel.SDK.PARAMETER_DESIRED_BITRATE,o,tv.freewheel.SDK.PARAMETER_LEVEL_OVERRIDE),e.setParameter(tv.freewheel.SDK.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED,!1,tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL),this.options.capabilities&&this.setCapabilities(e)}setCapabilities(e){const{options:t}=this;if(t.flag)for(const s in t.flag)if(null!=s&&s.length){const i="on"===t.flag[s]?tv.freewheel.SDK.CAPABILITY_STATUS_ON:tv.freewheel.SDK.CAPABILITY_STATUS_OFF,r=tv.freewheel.SDK[s]?tv.freewheel.SDK[s]:s;e.setCapability(r,i)}t.metr}destroy(){this.responsePromise=null,this.adsManager.dispose()}}const D=e=>e.isBeforePlay()||0===e.getPosition()?"pre":e.isBeforeComplete()||e.getPosition()===e.getDuration()?"post":"mid",k=(t,s,i=null)=>{const r={[tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL]:"pre",[tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL]:"mid",[tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL]:"post",[tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY]:"overlay",[tv.freewheel.SDK.TIME_POSITION_CLASS_DISPLAY]:"display"};return{type:t,client:e,adposition:r[i]||D(s),viewable:s.getViewable()}};let M=null,R=!1;const N=function(e,t){e.getContainer().querySelectorAll(".jw-icon-fullscreen").forEach((s=>{e.utils.style(s,{display:t})}))},x=function(e){N(e,"")},j=e=>{e.stopPropagation()};class K{constructor(e,t,s,i,r){s.utils.extend(this,s.Events),this.item=e,this.options=t,this.streamType=r,this.player=s,this.playerContainer=s.getContainer(),this.utils=s.utils,this.style=s.utils.style,this.environment=s.getEnvironment(),this.instreamProvider=i,this.initAdsManagerPromise=null,this.adsLoadedPromise=null,this.blockingInstreamPlayer=null,this.video=null,this.timeoutAdStart=-1,this.timeoutAdLoad=-1,this.adBlockTimeout=-1,this.progressIntervalId=-1,this.nonlinearContainerId=null,this.slots={prerolls:[],midrolls:[],postrolls:[]},this.playedMidrollIndex=[],this.mobileEventListeners={play:()=>this.adResume({reason:this.reason||"interaction"}),beginFullscreen:e=>this.startFullscreen(e),endFullscreen:e=>this.endFullscreen(e)},this.reason=null,this.playerEventListeners={"idle play pause beforeComplete":this.setVideoState},this.addPlayerListeners(),this._qoe=new s.utils.Timer,this.adStarted=this.adStarted.bind(this),this.adSlotComplete=this.adSlotComplete.bind(this),this.allAdEvent=this.allAdEvent.bind(this)}init(){this.initAdsManagerPromise=E().then((()=>this.destroyed()?null:(this.adsLoaderManager=new O(this.player.version,this.options,this.streamType),this.player.trigger("adManager",{adManager:this.adsLoaderManager.adsManager}),this.player.trigger("adsManager",{adsManager:this.adsLoaderManager.adsManager}),this.adsLoaderManager))).catch((e=>this.asyncError(e))),this.adsLoadedPromise=this.initAdsManagerPromise.then((()=>this.adsLoaderManager.open(this.player,this.options))).then((t=>{if(this.destroyed())return null;if(t.success){this.trigger("adRequest",{client:e,networkid:t.response.networkId});const s=this.adsLoaderManager.currentAdContext;this.instreamProvider.setProxy(s);const i=s.getTemporalSlots(),r=[];for(let e=0;e<i.length;e++){const t=i[e];switch(t.getTimePositionClass()){case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:this.slots.prerolls.push(t);break;case tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY:this.slots.midrolls.push(t);break;case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:this.slots.midrolls.push(t),r.push({begin:t.getTimePosition(),text:this.options.cuetext,cueType:"ads"});break;case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:this.slots.postrolls.push(t)}}this.player.addCues(r),this.registerEvents(s),s.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE,!1,tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL)}else this.asyncError(t);return this.slots.prerolls.length&&this.utils.addClass(this.playerContainer,s),t})).catch((e=>this.asyncError(e)))}registerEvents(e){e.addEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED,this.adStarted),e.addEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED,this.adSlotComplete),e.addEventListener(tv.freewheel.SDK.EVENT_AD,this.allAdEvent)}startFullscreen(e){this.sendFullscreenEvent(e,!0)}endFullscreen(e){this.sendFullscreenEvent(e,!1)}sendFullscreenEvent(e,t){this.blockingInstreamPlayer&&this.blockingInstreamPlayer.trigger("fullscreenchange",{target:e.target,jwstate:t})}adErrorEventObject(t){if(60003===t.adErrorCode)return t;const s=t.adInstance,i=tv?t[tv.freewheel.SDK.INFO_KEY_ERROR_INFO]:"FreeWheel SDK unavailable";return{id:s?s.getAdId():void 0,client:e,message:`Ad Error: ${i}`,code:t[tv.freewheel.SDK.INFO_KEY_ERROR_CODE],module:t[tv.freewheel.SDK.INFO_KEY_ERROR_MODULE]}}adEventObject(t){const s=this.currentSlot,i={client:e};if(s&&(i.tag=s.getCustomId()),!t&&s&&(t=s.getCurrentAdInstance()),!t)return i;const r=s.getTimePositionClass(),n="OVERLAY"===r,o=t.getActiveCreativeRendition();i.freewheel={ad:{adId:t.getAdId()}},i.adposition=r.toLowerCase().replace("roll",""),i.id=t.getAdId(),i.linear=n?"nonlinear":"linear",i.creativetype="static",i.viewable=this.player.getViewable(),n||(i.creativetype="VPAID"===o.getCreativeApi()?"vpaid-js":o.getContentType());const a=s.getAdCount();return a>1&&(i.sequence=s.getAdInstances().indexOf(t)+1,i.podcount=a),t.skipoffset&&(i.skipoffset=t.skipoffset),i}allAdEvent(e){const t=e.subType,s=e.adInstance,i=t===tv.freewheel.SDK.EVENT_AD_PAUSE?"paused":n;switch(t){case tv.freewheel.SDK.EVENT_AD_IMPRESSION:this.adImpression(e);break;case tv.freewheel.SDK.EVENT_AD_IMPRESSION_END:this.setTimeoutAdStart(e);break;case tv.freewheel.SDK.EVENT_AD_PAUSE:case tv.freewheel.SDK.EVENT_AD_RESUME:null===this.reason&&"VPAID"===s.getActiveCreativeRendition().getCreativeApi()&&(this.reason=u),this.setState(s,i);break;case tv.freewheel.SDK.EVENT_AD_COMPLETE:this.adComplete(e);break;case tv.freewheel.SDK.EVENT_AD_CLICK:this.adClick(e);break;case tv.freewheel.SDK.EVENT_ERROR:this.adError(e);break;case tv.freewheel.SDK.EVENT_AD_AUTO_PLAY_BLOCKED:this.pause({reason:"autostart"}),this.currentSlot&&(r=this.currentSlot.play,M&&M.OS.iOS&&R&&(r(),R=!1),this.instreamProvider.trigger("playAttemptFailed"))}var r}setupSkipButton(e){let t=this.options.config.skipoffset;const s="POSTROLL"===e.slot.getTimePositionClass()?-1:e.slot.getTimePosition(),i=this.adsLoaderManager.tagMap;if(i){const e=i[s];void 0!==(null==e?void 0:e.skipoffset)&&(t=e.skipoffset)}void 0!==t&&this.blockingInstreamPlayer&&(this.blockingInstreamPlayer.off(h,this.adSkip,this),e.adInstance.skipoffset=t,this.blockingInstreamPlayer.setupSkipButton(t,this.options,this.utils.noop),this.blockingInstreamPlayer.on(h,this.adSkip,this))}adStarted(e){const t=e.slot.getTimePositionClass();t!==tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY&&(this.player.trigger(a,k(a,this.player,t)),this.blockingInstreamPlayer.on("destroyed",(()=>{this.player.trigger(l,k(l,this.player,t))})))}adImpression(e){clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout);const t=e.adInstance,s=this.adEventObject(t),o="VPAID"===t.getActiveCreativeRendition().getCreativeApi();if(this.utils.removeClass(this.playerContainer,i),this.utils.toggleClass(this.playerContainer,r,o),this.isPreroll(s)&&(this._qoe.tick("adImpression"),s.timeLoading=this._qoe.between("adLoading","adImpression")),this.updateAdPosition(t),this.progressInterval(this.currentSlot),this.setupSkipButton(e),this.setupNonlinearContainer(),this.resize(),this.trigger("adImpression",s),o&&this.trigger("adStarted",s),t.getCompanionAdInstances().length){const e=this.utils.extend({},s);e.companions=t.getCompanionAdInstances(),this.trigger("adCompanions",e)}this.setState(e.adInstance,n)}setTimeoutAdStart(){clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),this.timeoutAdStart=setTimeout((()=>{if(this.destroyed())return;const e=this.adEventObject();e.message="Ad Error: Creative timeout",this.trigger(d,e),this.currentSlot.skipCurrentAd()}),this.options.loadVideoTimeout)}setAdBlockTimeout(){this.player.getAdBlock()&&(clearTimeout(this.adBlockTimeout),this.adBlockTimeout=setTimeout((()=>{this.destroyed()||this.adError({id:void 0,client:e,message:"Ad playback blocked by an ad blocker",code:900,adErrorCode:60003})}),this.options.adBlockTimeout))}setVideoState({type:e}){var t;if(null!=this&&null!=(t=this.adsLoaderManager)&&t.currentAdContext){const t={idle:tv.freewheel.SDK.VIDEO_STATE_STOPPED,play:tv.freewheel.SDK.VIDEO_STATE_PLAYING,pause:tv.freewheel.SDK.VIDEO_STATE_PAUSED,beforeComplete:tv.freewheel.SDK.VIDEO_STATE_COMPLETED};this.adsLoaderManager.currentAdContext.setVideoState(t[e])}}adResume({reason:e}){this.hasResumed||(this.reason=e,this.currentSlot.resume()),this.hasResumed=!1}adSkip(){const e=this.currentSlot;e.getCurrentAdInstance()&&(clearInterval(this.progressIntervalId),this.trigger(h,this.adEventObject()),e.skipCurrentAd()),x(this.player)}stopAd(){const e=this.currentSlot;e&&(clearInterval(this.progressIntervalId),this.trigger(h,this.adEventObject()),e.stop())}adComplete(e){clearInterval(this.progressIntervalId),this.trigger("adComplete",this.adEventObject(e.adInstance))}adSlotComplete(e){const t=e.slot;t&&"POSTROLL"===t.getTimePositionClass()?setTimeout((()=>{this.stopBlocking(),this.nonlinearContainerId=null,this.destroy()}),0):(this.stopBlocking(),this.nonlinearContainerId=null)}adClick(e){this.trigger("adClick",this.adEventObject(e.adInstance)),this.pause({reason:"clickthrough"})}adError(e){this.options.debug&&console.error(e);const t=this.adErrorEventObject(e);900===t.code&&(this.timeoutAdStart=setTimeout((()=>this.destroy()),0));const s=e?e.adInstance:null;s&&this.isPreroll(this.adEventObject(s))&&(this._qoe.tick("adError"),t.timeLoading=this._qoe.between("adLoading","adError")),this.trigger(d,t)}updateAdPosition(e){this.instreamProvider&&this.instreamProvider.trigger(o,{position:Math.max(e.getPlayheadTime(),0),duration:e.getDuration()})}prepareToPlayAd(e){if(!this.destroyed())if(this.blockingInstreamPlayer){const t=e?"":this.options.loadingAd;this.blockingInstreamPlayer.setText(t)}else this.startBlocking(e)}playUnscheduledAd(e){let t=this.adsLoaderManager.currentAdContext.getSlotByCustomId(e);if(t)return void this._skipAndPlayAd(t);const s=this.unscheduledAdContext=this.adsLoaderManager.adsManager.newContext();this.adsLoaderManager.setContextSettings(s),s.addTemporalSlot(e,tv.freewheel.SDK.ADUNIT_MIDROLL,this.player.getPosition()),this.adsLoaderManager.setCustomKeys(s),this.registerEvents(s),s.addEventListener(tv.freewheel.SDK.EVENT_ERROR,this.adError),s.addEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE,(()=>{if(t=s.getSlotByCustomId(e),t)return void this._skipAndPlayAd(t);const i=this.adEventObject();i.message="Ad Error: No ads found.",this.trigger(d,i)})),this.adsLoaderManager.setRequestSettings(s,this.player),s.submitRequest()}_skipAndPlayAd(e){this.blockingInstreamPlayer&&this.adSkip(),this.playNextAd([e])}addMobileListeners(){Object.keys(this.mobileEventListeners).forEach((e=>{this.video.addEventListener(e,this.mobileEventListeners[e])}))}removeMobileListeners(){Object.keys(this.mobileEventListeners).forEach((e=>{this.video.removeEventListener(e,this.mobileEventListeners[e])}))}addPlayerListeners(){this.player.on(this.playerEventListeners,this)}removePlayerListeners(){this.player.off(this.playerEventListeners,this)}startBlocking(e){var t;if(this.blockingInstreamPlayer)return;!function(e){if(M=e.getEnvironment(),!M.OS.iOS||M.Browser.version.major<10)return;const t=e.getContainer();t.requestFullscreen||t.webkitRequestFullscreen||(e.getFullscreen()&&(e.setFullscreen(!1),R=!0),N(e,"none"))}(this.player),this._qoe.tick("adLoading"),clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout),this.timeoutAdLoad=setTimeout((()=>{if(this.destroyed())return;this.currentSlot&&this.currentSlot.stop();const e=this.adEventObject();e.message="Ad Error: Request timeout",this.trigger(d,e),this.stopBlocking()}),this.options.requestTimeout),this.utils.addClass(this.playerContainer,s),this.blockingInstreamPlayer=this.player.createInstream().init(),this.video=this.instreamProvider.video=this.blockingInstreamPlayer.getMediaElement(),this.video.addEventListener("mousedown",j),this.video.addEventListener("pointerdown",j),null==(t=this.unscheduledAdContext)||t.registerVideoDisplayBase(`${this.playerContainer.id}-jw-wrapper`),this.player.getPip()&&this.player.requestPip(this.video);const i=e?"":this.options.loadingAd;this.blockingInstreamPlayer.setText(i),this.blockingInstreamPlayer.applyProviderListeners(this.instreamProvider),this.environment.OS.mobile&&(this.removeMobileListeners(),this.addMobileListeners())}stopBlocking(){this.destroyed()||(clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout),x(this.player),this.utils.removeClass(this.playerContainer,[r,s,i]),this.environment.OS.mobile&&this.removeMobileListeners(),this.blockingInstreamPlayer&&(this.instreamProvider.off(),this.blockingInstreamPlayer.destroy(),this.blockingInstreamPlayer=null,this.video.removeEventListener("mousedown",j),this.video.removeEventListener("pointerdown",j),this.video=this.instreamProvider.video=null))}setupNonlinearContainer(){if(!this.nonlinearContainerId)return;const e=document.getElementById(this.nonlinearContainerId);this.utils.addClass(e,"jw-freewheel-nonlinear-container"),this.style(e,{top:"auto",height:"100%",width:"100%"})}beforePlay(e){this.reason=null!=e&&e.playReason?e.playReason:c;const t=!this.slots.prerolls.length;this.startBlocking(t),this.utils.addClass(this.playerContainer,i),this.initAdsManagerPromise.then((()=>{this.setAdBlockTimeout(),this.adsLoaderManager.requestAds(this.player)})),this.adsLoadedPromise.then((e=>{!this.destroyed()&&e.success&&this.playNextAd(this.slots.prerolls)})).catch((e=>this.asyncError(e)))}playNextAd(e){if(e.length){const t=this.currentSlot=e.shift();if("OVERLAY"!==t.getTimePositionClass()){const e=!t.getAdCount();this.prepareToPlayAd(e),this.nonlinearContainerId=null}else this.utils.addClass(this.playerContainer,s),this.nonlinearContainerId=`_fw_ad_container_html_${this.currentSlot.getCustomId()}_`;this.setTimeoutAdStart(),t.play(),"MIDROLL"===t.getTimePositionClass()&&this.setVideoState({type:"pause"})}else this.stopBlocking()}beforeComplete(){this.slots.postrolls.length&&this.playNextAd(this.slots.postrolls)}time(e){if(this.slots.midrolls.length){const t=this.getNextMidRollIndex(e.position);if(t>=0){const e=[this.slots.midrolls[t]];this.playNextAd(e)}}}progressInterval(e){if(clearInterval(this.progressIntervalId),!e)return;const t=e.getCurrentAdInstance(),s=e.getAdInstances().indexOf(t)+1,i=t.getDuration(),r=e.getAdCount();let n=-1;const o=this.options.admessage||"",a=this.options.admessagedynamickey,l=this.options.podmessage||"",d=new RegExp("__AD_POD_CURRENT__","g"),h=new RegExp("__AD_POD_LENGTH__","g");this.progressIntervalId=setInterval((()=>{const e=t.getPlayheadTime(),c=i-e;if(n!==c){if(n=c,this.blockingInstreamPlayer){let e,t=o.replace(a,`$1${Math.round(c)}$2`);r>1&&(e=l.replace(d,s),t=`${e.replace(h,r)}  ${t}`),this.blockingInstreamPlayer.setText(t)}if(i>0){const s=this.adEventObject(t);s.position=e,s.duration=i,this.trigger("adTime",s),this.updateAdPosition(t)}}}),250)}getNextMidRollIndex(e){let t=-1;if(this.playedMidrollIndex.length>=this.slots.midrolls.length)return t;for(let s=0;s<this.slots.midrolls.length;s++){if(!(this.slots.midrolls[s].getTimePosition()<=e))break;t=s}return this.playedMidrollIndex.indexOf(t)<0&&t>=0?(this.playedMidrollIndex.push(t),t):-1}setState(e,t){if(this.currentSlot.getTimePositionClass()===tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY)return;const s=this.adEventObject(e);if(s.newstate=t,null!==this.reason){s[t===n?"playReason":"pauseReason"]=this.reason,this.reason=null}this.instreamProvider.trigger("state",s)}asyncError(e){this.destroyed()||(e&&this.adError(e),this.timeoutAdStart=setTimeout((()=>this.destroy()),0))}pause({reason:e}){this.currentSlot&&!this.video.paused&&(this.reason=e||c,this.currentSlot.pause())}resume({reason:e}){this.currentSlot&&this.video.paused&&(this.reason=e||c,this.currentSlot.resume(),this.hasResumed=!0)}resize(e,t){var s;const i=document.getElementById(this.nonlinearContainerId);if(i){const e=i.querySelector("iframe"),t=this.player.getSafeRegion(!0);this.style(e,{left:(t.width-e.offsetWidth)/2})}null!=this&&null!=(s=this.adsLoaderManager)&&s.currentAdContext&&e&&t&&this.adsLoaderManager.currentAdContext.resize(e,t)}destroy(){clearInterval(this.progressIntervalId),this.off(),this.destroyed()||(this.removePlayerListeners(),this.currentSlot&&this.currentSlot.stop(),this.blockingInstreamPlayer&&(this.blockingInstreamPlayer.off(null,null,this),this.stopBlocking()),this.destroyAdContext(this.unscheduledAdContext),this.adsLoaderManager&&(this.adsLoaderManager.destroy(),this.destroyAdContext(this.adsLoaderManager.currentAdContext)),clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout),this.nonlinearContainerId=null,this.item=null,this.options=null,this.player.off(null,null,this),this.player=null,this.instreamProvider.off(),this.instreamProvider.setProxy(null),this.instreamProvider=null,this.video=null,this.initAdsManagerPromise=null,this.adsLoadedPromise=null)}destroyAdContext(e){e&&(e.removeEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED,this.adStarted),e.removeEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED,this.adSlotComplete),e.removeEventListener(tv.freewheel.SDK.EVENT_AD,this.allAdEvent),e.dispose())}destroyed(){return!this.item}isPreroll(e){return"pre"===e.adposition&&(void 0===e.podcount||0===e.sequence)}}!function(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");t.setAttribute("media","screen"),t.innerHTML=e,document.head.appendChild(t)}}(".jwplayer.jw-flag-ads-freewheel.jw-flag-floating .jw-wrapper,.jwplayer.jw-flag-ads-freewheel.jw-freewheel-before-impression .jw-media video{pointer-events:none}.jwplayer.jw-flag-ads-freewheel.jw-flag-touch.jwplayer.jw-flag-ads-freewheel.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-flag-ads-freewheel.jw-flag-user-inactive.jw-state-playing .jw-freewheel-nonlinear-container{bottom:.5em}.jwplayer.jw-flag-ads-freewheel .jw-freewheel-nonlinear-container{bottom:3.5em;pointer-events:none}.jwplayer.jw-flag-ads-freewheel .jw-freewheel-nonlinear-container iframe{pointer-events:all}.jwplayer.jw-flag-ads-freewheel.jw-flag-time-slider-above .jw-freewheel-nonlinear-container{bottom:66px}");(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)(e,"8.1",class{constructor(t,s){const i=t.utils,r=t.getConfig(),n=r.key,a=new S(i,t.Events),l=s.freewheel?s.freewheel.adManagerURL:null;let h=0;E(i,l).then((()=>{s.debug?tv.freewheel.SDK.setLogLevel(tv.freewheel.SDK.LOG_LEVEL_DEBUG):tv.freewheel.SDK.setLogLevel(tv.freewheel.SDK.LOG_LEVEL_QUIET)})).catch(i.noop);let c=null;i.extend(this,t.Events),this.version=_;const u=()=>{c&&!c.destroyed()&&(c.destroy(),c=null)},m=()=>{u(),function(e){const t=e.getCues();if(Array.isArray(t)&&t.length){const s=t.filter((e=>"ads"!==e.cueType));e.setCues(s)}}(t)},f=(e,t)=>{e===o?c.time(t):"beforeComplete"===e&&c.beforeComplete()},g=(e,i)=>{const r=e.item,n=new p(t.getConfig(),s||{},r);m(),(e=>{const t=e.getAdRules(),s=0===t.frequency&&1===h,i=h>=t.startOn&&(h-t.startOn)%t.frequency==0;return s||i})(n)?n.getSchedule()&&(c=new K(r,n,t,a,i),c.init(),c.on("all",((e,s)=>t.trigger(e,s))),t.once("beforePlay",(e=>c.beforePlay(e)),c).on("resize",(({width:e,height:t})=>c.resize(e,t)),c).on("fullscreen",(()=>c.resize()),c).on("all",f,c)):n.adschedule=null};t.playAd=function(e){e&&c&&c.playUnscheduledAd(e)},t.pauseAd=function(e,t){c&&(e?c.pause(t||{}):c.resume(t||{}))},t.skipAd=function(){c&&c.adSkip()};const v=(s,r)=>{u(),t.off(null,null,this),t.playAd=i.noop,t.trigger(d,{id:"-1",client:e,message:s,code:900,adErrorCode:r,tag:""})},y=w(i,n,s);t.on("ready",(function(){E().catch((()=>{v("Ad playback blocked by an ad blocker",2e4)})),y.catch((e=>{v(`Ad Error: ${e.message}`,60002)}))}),this).on("playlistItem",(e=>{h++;const t=e.item.streamtype||r.streamtype;g(e,t)}),this).on("playlistComplete",(()=>{m()}),this).on("cast",(e=>{e.active&&m()}),this).on("destroyPlugin",(()=>{this.destroy()}),this),y.catch(i.noop),this.destroy=u,this.stopAd=()=>{c&&c.stopAd()}}})}();