"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[100],{6100:function(t,i,e){e.r(i),e.d(i,{default:function(){return p}});var s=e(7314),n=e(3698),a=e(2938),o=e(9991),r=e(174),l=e(1034),d=e(7112),h=function(){var t=this,i=t._self._c;return i(o.A,{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[i(n.A,[i(a.ri,[i("span",{staticClass:"headline"},[t._v("Edit Student")])]),i(a.OQ,[i(r.A,[i(d.A,{attrs:{label:"Name",required:"",disabled:t.loading},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}})],1)],1),i(a.SL,[i(l.A),i(s.A,{attrs:{color:"blue darken-1",text:""},on:{click:t.closeModal}},[t._v("Cancel ")]),i(s.A,{attrs:{color:"blue darken-1",text:"",loading:t.loading},on:{click:t.editStudent}},[t._v("Save ")])],1)],1)],1)},c=[],u=e(5353),v={data(){return{name:"",dialog:!0,loading:!1}},computed:{...(0,u.aH)(["currentGroup","students"])},mounted(){let t;t=this.$route.params.groupId?this.currentGroup.Students.find((t=>t.id===Number(this.$route.params.studentId))):this.students.find((t=>t.id===Number(this.$route.params.studentId))),this.name=t.name},methods:{closeModal(){this.dialog=!1,this.$router.go(-1)},editStudent(){this.loading=!0,this.$store.dispatch("groupEditStudent",{student:{id:this.$route.params.studentId,name:this.name},groupId:this.$route.params.groupId}).then((()=>{this.loading=!1,this.closeModal()}))}}},m=v,g=e(1656),f=(0,g.A)(m,h,c,!1,null,"1926b958",null),p=f.exports},2938:function(t,i,e){e.d(i,{OQ:function(){return r},SL:function(){return a},ri:function(){return l}});var s=e(3698),n=e(4152);const a=(0,n.Gn)("v-card__actions"),o=(0,n.Gn)("v-card__subtitle"),r=(0,n.Gn)("v-card__text"),l=(0,n.Gn)("v-card__title");s.A},9991:function(t,i,e){e.d(i,{A:function(){return g}});var s=e(4596),n=e(5030),a=e(2031),o=e(7631),r=e(8171),l=e(7198),d=e(5648),h=e(4598),c=e(5803),u=e(6988),v=e(4152);const m=(0,c.A)(a.A,o.A,r.A,l.A,d.A,n.A);var g=m.extend({name:"v-dialog",directives:{ClickOutside:h.A},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var i;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(i=this.previousActiveElement)||void 0===i||i.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,u.rq)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const i=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(i)||this.overlay&&i&&!this.overlay.$el.contains(i))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r.A.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,i;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(i=this.$refs.dialog)||void 0===i||i.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===v.uP.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const i=t.target;if(i&&this.$refs.dialog&&![document,this.$refs.dialog].includes(i)&&!this.$refs.dialog.contains(i)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(i)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),i=[...t].find((t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')));i&&i.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(s.A,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,v.Dg)(this.maxWidth),width:(0,v.Dg)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},174:function(t,i,e){e(4114);var s=e(5803),n=e(7717),a=e(7540),o=e(4152);i.A=(0,s.A)(n.A,(0,a.G)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const i=Object.values(t).includes(!0);this.$emit("input",!i)},deep:!0,immediate:!0}},methods:{watchInput(t){const i=t=>t.$watch("hasError",(i=>{this.$set(this.errorBag,t._uid,i)}),{immediate:!0}),e={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?e.shouldValidate=t.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(e.valid=i(t)))})):e.valid=i(t),e},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const i=this.inputs.find((i=>i._uid===t._uid));if(!i)return;const e=this.watchers.find((t=>t._uid===i._uid));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==i._uid)),this.inputs=this.inputs.filter((t=>t._uid!==i._uid)),this.$delete(this.errorBag,i._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},(0,o.$c)(this))}})}}]);
//# sourceMappingURL=100.8c3d858c.js.map