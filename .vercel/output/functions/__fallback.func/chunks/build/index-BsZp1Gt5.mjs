import { _ as __nuxt_component_0$2 } from './nuxt-link-CTeVOPrr.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, createCommentVNode, resolveDirective, unref, watch, resolveDynamicComponent, useAttrs, useTemplateRef, isRef, reactive, useSSRContext, toRefs, toValue, toRef as toRef$1, readonly, customRef } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import __nuxt_component_0$3 from './index-Dw9nC4BS.mjs';
import { useForwardProps } from 'reka-ui';
import { f as publicAssetsURL, H as defu, A as hasProtocol, K as withLeadingSlash, q as joinURL, L as parseURL, M as encodeParam, O as encodePath } from '../_/nitro.mjs';
import { u as useHead, a as useNuxtApp, b as useRuntimeConfig } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'unhead/server';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "MotionTabs",
  __ssrInlineRender: true,
  props: {
    initialIndex: {}
  },
  setup(__props) {
    const items = [
      { label: "Home", to: "/", hasDropdown: true },
      { label: "Pages", to: "#", hasDropdown: true },
      { label: "Services", to: "#" },
      { label: "Blogs", to: "#" },
      { label: "Contact Us", to: "#" }
    ];
    const props = __props;
    const activeIndex = ref(props.initialIndex ?? 0);
    const hoverIndex = ref(null);
    const itemRefs = ref([]);
    const setItemRef = (el, index2) => {
      if (el) itemRefs.value[index2] = el.$el || el;
    };
    const activeStyle = computed(() => {
      const el = itemRefs.value[activeIndex.value];
      if (!el) return { opacity: 0 };
      return {
        width: `${el.offsetWidth}px`,
        left: `${el.offsetLeft}px`,
        opacity: 1
      };
    });
    const hoverStyle = computed(() => {
      if (hoverIndex.value === null || hoverIndex.value === activeIndex.value) return { opacity: 0 };
      const el = itemRefs.value[hoverIndex.value];
      if (!el) return { opacity: 0 };
      return {
        width: `${el.offsetWidth}px`,
        left: `${el.offsetLeft}px`,
        opacity: 1
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))} data-v-771b78f1><nav class="relative flex items-center px-3" data-v-771b78f1><div class="absolute top-1/2 -translate-y-1/2 h-10 bg-white/10 border border-white/10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0" style="${ssrRenderStyle(activeStyle.value)}" data-v-771b78f1></div><div class="absolute top-1/2 -translate-y-1/2 h-9 bg-white/5 rounded-full transition-all duration-300 ease-out z-0 pointer-events-none" style="${ssrRenderStyle(hoverStyle.value)}" data-v-771b78f1></div><!--[-->`);
      ssrRenderList(items, (item, index2) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.label,
          to: item.to,
          ref_for: true,
          ref: (el) => setItemRef(el, index2),
          onMouseenter: ($event) => hoverIndex.value = index2,
          onClick: ($event) => activeIndex.value = index2,
          class: ["relative px-5 py-4 text-[14px] font-bold transition-colors duration-300 rounded-full whitespace-nowrap z-10 flex items-center gap-1.5 no-underline font-jakarta", activeIndex.value === index2 ? "text-white" : "text-white/60 hover:text-white"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)} `);
              if (item.hasDropdown) {
                _push2(`<svg width="10" height="6" viewBox="0 0 10 6" fill="none" class="${ssrRenderClass([hoverIndex.value === index2 ? "translate-y-0.5" : "", "mt-0.5 opacity-60 transition-transform duration-300"])}" data-v-771b78f1${_scopeId}><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-771b78f1${_scopeId}></path></svg>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createTextVNode(toDisplayString(item.label) + " ", 1),
                item.hasDropdown ? (openBlock(), createBlock("svg", {
                  key: 0,
                  width: "10",
                  height: "6",
                  viewBox: "0 0 10 6",
                  fill: "none",
                  class: ["mt-0.5 opacity-60 transition-transform duration-300", hoverIndex.value === index2 ? "translate-y-0.5" : ""]
                }, [
                  createVNode("path", {
                    d: "M1 1L5 5L9 1",
                    stroke: "currentColor",
                    "stroke-width": "1.2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ], 2)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MotionTabs.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["__scopeId", "data-v-771b78f1"]]), { __name: "MotionTabs" });
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const noop = () => {
};
function toRef(...args) {
  if (args.length !== 1) return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({
    get: r,
    set: noop
  }))) : ref(r);
}
function toReactive(objectRef) {
  if (!isRef(objectRef)) return reactive(objectRef);
  return reactive(new Proxy({}, {
    get(_, p, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value)) objectRef.value[p].value = value;
      else objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  }));
}
function reactiveComputed(fn) {
  return toReactive(computed(fn));
}
function reactivePick(obj, ...keys) {
  const flatKeys = keys.flat();
  const predicate = flatKeys[0];
  return reactiveComputed(() => typeof predicate === "function" ? Object.fromEntries(Object.entries(toRefs(obj)).filter(([k, v]) => predicate(toValue(v), k))) : Object.fromEntries(flatKeys.map((k) => [k, toRef(obj, k)])));
}
const _sfc_main$8 = {
  __name: "UIcon",
  __ssrInlineRender: true,
  props: {
    name: { type: null, required: true },
    mode: { type: String, required: false },
    size: { type: [String, Number], required: false },
    customize: { type: Function, required: false }
  },
  setup(__props) {
    const props = __props;
    const iconProps = useForwardProps(reactivePick(props, "name", "mode", "size", "customize"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$3;
      if (typeof __props.name === "string") {
        _push(ssrRenderComponent(_component_Icon, mergeProps(unref(iconProps), _attrs), null, _parent));
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.name), _attrs, null), _parent);
      }
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/assets/hero-finance.png");
const _imports_1 = publicAssetsURL("/assets/hero-video.mp4");
const line1 = "data:image/svg+xml,%3csvg%20width='299'%20height='353'%20viewBox='0%200%20299%20353'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M82.8994%20299.957C1.6656%20202.325%20-35.6931%20344.357%2074.3868%20347.838C184.467%20351.319%20385.434%20265.915%20246.722%200.984375'%20stroke='%23B2EDA1'%20stroke-width='10'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
const line2 = "data:image/svg+xml,%3csvg%20width='275'%20height='605'%20viewBox='0%200%20275%20605'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.71289%20599.989C1.71289%20599.989%20468.069%20436.813%20169.913%202.97119'%20stroke='%23B2EDA1'%20stroke-width='10'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const words = ["Easier", "Accountable", "Unbeatable"];
    const currentIndex = ref(0);
    const isPlaying = ref(false);
    ref(null);
    const shapes = [
      "data:image/svg+xml,%3csvg%20width='39'%20height='45'%20viewBox='0%200%2039%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.35993%208.12197C-0.593748%2013.8731%20-1.08911%2028.1803%202.52242%2035.9656C7.8417%2047.1326%2027.7987%2047.1679%2033.3327%2036.604C37.5794%2028.3821%2036.4727%2017.5359%2038.6821%200.572389C22.3362%203.68367%209.16665%202.37763%204.35993%208.12197Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e",
      "data:image/svg+xml,%3csvg%20width='52'%20height='41'%20viewBox='0%200%2052%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.6144%200.0465448C13.3054%20-0.784969%201.64645%209.71291%200.397269%2016.469C-1.99699%2029.5653%206.64316%2041.5183%2020.5923%2040.8947C28.816%2040.4789%2036.6234%2031.2283%2051.9258%2021.2502C36.4152%2010.7523%2028.0873%201.81351%2018.6144%200.0465448Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e",
      "data:image/svg+xml,%3csvg%20width='46'%20height='36'%20viewBox='0%200%2046%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.4394%203.70549C-0.531861%2010.5655%20-4.38354%2021.3752%206.75495%2035.7188C18.3098%2031.2494%2030.3852%2026.5721%2046%2020.5437C36.3188%202.66613%2026.3254%20-5.0254%2011.4394%203.70549Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e",
      "data:image/svg+xml,%3csvg%20width='43'%20height='42'%20viewBox='0%200%2043%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.8398%200C-0.443787%2011.5373%20-4.19132%2022.8667%205.48979%2033.5724C16.7324%2045.9412%2029.0159%2042.8229%2042.2364%2027.4399C30.6815%2017.046%2021.5209%208.73089%2011.8398%200Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e",
      "data:image/svg+xml,%3csvg%20width='22'%20height='12'%20viewBox='0%200%2022%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.87043%2011.9367C9.11631%2010.5855%2015.5704%209.1303%2021.8163%207.77909C21.3999%205.28455%2021.0876%202.89395%2020.6712%200.399414C14.0089%201.02305%207.34665%201.64669%200.892578%202.27032C1.51717%205.59638%202.24584%208.71455%202.87043%2011.9367Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e",
      "data:image/svg+xml,%3csvg%20width='49'%20height='47'%20viewBox='0%200%2049%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.82762%207.31652C-2.25929%2015.2616%20-1.57861%2029.3022%208.24752%2039.1752C17.8521%2048.9776%2031.6961%2050.2641%2039.7268%2038.9026C45.4458%2031.1026%2044.49%2018.684%2048.0973%200.246201C29.4497%203.29007%2016.6336%201.84265%208.82762%207.31652Z'%20fill='%23B2EDA1'%20fill-opacity='0.3'/%3e%3c/svg%3e"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UIcon = _sfc_main$8;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section6 relative bg-hero-navy text-white overflow-hidden pt-[247px] pb-[212px] flex items-center min-h-[900px]" }, _attrs))} data-v-5b297750><div class="absolute inset-0 z-0 pointer-events-none select-none" data-v-5b297750><!--[-->`);
      ssrRenderList(shapes, (shape, i) => {
        _push(`<img${ssrRenderAttr("src", shape)} loading="lazy" alt="decorative shape" class="${ssrRenderClass(`absolute banner-vector banner-vector${i + 1}`)}" style="${ssrRenderStyle({
          right: i === 0 ? "30%" : i === 3 ? "40%" : "auto",
          left: i === 1 ? "44%" : i === 2 ? "45%" : i === 4 ? "25%" : i === 5 ? "25%" : "auto",
          top: i === 0 ? "20%" : i === 1 ? "35%" : i === 3 ? "56%" : i === 5 ? "18%" : "auto",
          bottom: i === 2 ? "18%" : i === 4 ? "13%" : "auto"
        })}" data-v-5b297750>`);
      });
      _push(`<!--]--><img${ssrRenderAttr("src", line1)} loading="lazy" alt="decorative line" class="absolute top-[-32px] right-[22.2%] h-[40%]" data-v-5b297750><img${ssrRenderAttr("src", line2)} loading="lazy" alt="decorative line" class="absolute bottom-[3px] right-[31%] h-[70%]" data-v-5b297750></div><div class="container mx-auto px-4 max-w-[1200px] relative z-10" data-v-5b297750><div class="flex flex-col lg:flex-row items-center gap-20" data-v-5b297750><div${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, x: -50 },
        enter: { opacity: 1, x: 0, transition: { duration: 1e3, ease: "easeOut" } },
        class: "flex-1 space-y-10"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-5b297750><div class="space-y-6" data-v-5b297750><div class="cd-intro m-0 loading-bar uig-animate-style" data-v-5b297750><h1 class="cd-headline banner-title text-5xl text-white lg:text-7xl font-bold font-jakarta leading-[1.2] mb-2 tracking-tight text-left" data-v-5b297750> Financial Security Made <span class="cd-words-wrapper relative inline-block text-primary-6 mt-[-11px] ml-[10px] min-w-[200px]" data-v-5b297750><b data-v-5b297750>${ssrInterpolate(words[unref(currentIndex)])}</b></span></h1></div><p class="text-[18px] text-white max-w-xl leading-[36px] font-medium font-dm" data-v-5b297750> Staco is the dedicated platform for human management that helps to grow your startup business quickly </p></div><div class="flex flex-wrap items-center gap-[30px] pt-6" data-v-5b297750>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#",
        class: "group relative overflow-hidden bg-primary-6-deep text-black font-jakarta font-bold text-[16px] px-[35px] py-[18px] rounded-full transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="relative z-10 text-white" data-v-5b297750${_scopeId}>Get Start for Free</span><div class="absolute inset-0 bg-[#FFDA54] translate-y-full group-hover:translate-y-0 transition-transform duration-300" data-v-5b297750${_scopeId}></div>`);
          } else {
            return [
              createVNode("span", { class: "relative z-10 text-white" }, "Get Start for Free"),
              createVNode("div", { class: "absolute inset-0 bg-[#FFDA54] translate-y-full group-hover:translate-y-0 transition-transform duration-300" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#",
        class: "flex items-center gap-2 text-white text-[16px] font-bold font-jakarta hover:text-primary-6 transition-all group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Let&#39;s talk <span class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-6/20 transition-colors" data-v-5b297750${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-chevron-right-20-solid",
              class: "w-5 h-5 group-hover:translate-x-1 transition-transform"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createTextVNode(" Let's talk "),
              createVNode("span", { class: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-6/20 transition-colors" }, [
                createVNode(_component_UIcon, {
                  name: "i-heroicons-chevron-right-20-solid",
                  class: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, x: 50, scale: 0.9 },
        enter: { opacity: 1, x: 0, scale: 1, transition: { duration: 1e3, delay: 300, ease: "easeOut" } },
        class: "flex-1 relative w-full lg:max-w-[470px] mt-12 lg:mt-0"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-5b297750><div class="relative rounded-[40px] overflow-hidden shadow-2xl aspect-video bg-gray-950 group" data-v-5b297750><video preload="none" loop muted playsinline${ssrRenderAttr("poster", _imports_0$1)} class="w-full h-full object-cover" data-v-5b297750><source${ssrRenderAttr("src", _imports_1)} type="video/mp4" data-v-5b297750></video><button class="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center text-black shadow-xl hover:scale-110 active:scale-95 transition-all z-20" aria-label="Toggle Video" data-v-5b297750>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: unref(isPlaying) ? "i-heroicons-pause-20-solid" : "i-heroicons-play-20-solid",
        class: "w-8 h-8"
      }, null, _parent));
      _push(`</button></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Finance/HeroSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["__scopeId", "data-v-5b297750"]]), { __name: "FinanceHeroSection" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FeatureCards",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        delay: 200,
        icon: "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='60'%20height='60'%20rx='18'%20fill='%23004D42'%20fill-opacity='0.1'/%3e%3cpath%20d='M42%2042H36C34.8954%2042%2034%2041.1046%2034%2040C34%2038.8954%2034.8954%2038%2036%2038H42C43.1046%2038%2044%2038.8954%2044%2040C44%2041.1046%2043.1046%2042%2042%2042Z'%20fill='%23004D42'/%3e%3cpath%20d='M28%2042H18C16.8954%2042%2016%2041.1046%2016%2040C16%2038.8954%2016.8954%2038%2018%2038H28C29.1046%2038%2030%2038.8954%2030%2040C30%2041.1046%2029.1046%2042%2028%2042Z'%20fill='%23004D42'/%3e%3cpath%20d='M42%2032H28C26.8954%2032%2026%2031.1046%2026%2030C26%2028.8954%2026.8954%2028%2028%2028H42C43.1046%2028%2044%2029.1046%2044%2030C44%2031.1046%2043.1046%2032%2042%2032Z'%20fill='%23004D42'/%3e%3cpath%20d='M22%2032H18C16.8954%2032%2016%2031.1046%2016%2030C16%2028.8954%2016.8954%2028%2018%2028H22C23.1046%2028%2024%2028.8954%2024%2030C24%2031.1046%23.1046%2032%2022%2032Z'%20fill='%23004D42'/%3e%3crect%20x='16'%20y='16'%20width='28'%20height='8'%20rx='4'%20fill='%23004D42'%20fill-opacity='0.4'/%3e%3c/svg%3e",
        title: "Used advanced technologies",
        description: "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born"
      },
      {
        delay: 250,
        icon: "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.4'%20d='M50%2025C50%2037.6%2040.6499%2048.025%2028.5249%2049.75C27.3749%2049.925%2026.2%2050%2025%2050C18.1%2050%2011.85%2047.2%207.32498%2042.675C2.79998%2038.15%200%2031.9%200%2025C0%2011.2%2011.2%200%2025%200C31.9%200%2038.15%202.8%2042.675%207.325C47.2%2011.85%2050%2018.1%2050%2025Z'%20fill='%2344C486'/%3e%3cpath%20d='M32.0759%2020.5748L25.8758%2026.7748L42.2008%2043.0998C41.3008%2043.9748%2040.3258%2044.7748%2039.3008%2045.4998L23.2258%2029.4248L17.0508%2035.5998L29.8508%2048.4248C30.1258%2048.6998%2030.3009%2049.0498%2030.3759%2049.3998C30.3759%2049.3998%2030.3759%2049.3998%2030.3759%2049.4248C29.7759%2049.5498%2029.1508%2049.6748%2028.5258%2049.7498C27.7258%2049.8748%2026.9258%2049.9498%2026.1008%2049.9748L14.4008%2038.2498L8.70078%2043.9498C8.22578%2043.5498%207.77581%2043.1248%207.32581%2042.6748C6.87581%2042.2248%206.45078%2041.7748%206.05078%2041.2998L41.3009%206.0498C41.7759%206.4498%2042.2258%206.8748%2042.6758%207.3248C43.1258%207.7748%2043.5509%208.2248%2043.9509%208.6998L34.7259%2017.9248L48.9509%2032.1498C48.5509%2033.4748%2048.0508%2034.7248%2047.4508%2035.9498L32.0759%2020.5748Z'%20fill='%2344C486'/%3e%3c/svg%3e",
        title: "Clean design & Typography",
        description: "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born"
      },
      {
        delay: 300,
        icon: "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='60'%20height='60'%20rx='18'%20fill='%23433968'%20fill-opacity='0.1'/%3e%3cpath%20d='M20%2015V45C20%2047.7614%2022.2386%2050%2025%2050H45C47.7614%2050%2050%2047.7614%2050%2045V15C50%2012.2386%2047.7614%2010%2045%2010H25C22.2386%2010%2020%2012.2386%2020%2015Z'%20fill='%23433968'%20fill-opacity='0.4'/%3e%3cpath%20d='M25%2010H35V25L30%2022L25%2025V10Z'%20fill='%23433968'/%3e%3cpath%20d='M42%2032H36C34.8954%2032%2034%2031.1046%2034%2030C34%2028.8954%2034.8954%2028%2036%2028H42C43.1046%2028%2044%2028.8954%2044%2030C44%2031.1046%2043.1046%2032%2042%2032Z'%20fill='%23433968'/%3e%3c/svg%3e",
        title: "Best customer support",
        description: "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-[100px] md:py-[140px] bg-white" }, _attrs))} data-v-1ebbf7c4><div class="container mx-auto px-4 max-w-[1200px]" data-v-1ebbf7c4><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]" data-v-1ebbf7c4><!--[-->`);
      ssrRenderList(features, (feature, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: i,
          initial: { opacity: 0, y: 30 },
          "visible-once": { opacity: 1, y: 0, transition: { delay: feature.delay } },
          class: "p-[50px_40px] rounded-[35px] bg-[#F1F1F1] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-1ebbf7c4><div class="w-16 h-16 mb-[31px]" data-v-1ebbf7c4><img${ssrRenderAttr("src", feature.icon)}${ssrRenderAttr("alt", `${feature.title} icon`)} class="w-full h-full object-contain" data-v-1ebbf7c4></div><h5 class="text-[22px] font-bold mb-[20px] text-[#111111] font-jakarta leading-tight" data-v-1ebbf7c4>${ssrInterpolate(feature.title)}</h5><p class="text-[#444444] text-[16px] leading-relaxed mb-[60px] font-dm opacity-80" data-v-1ebbf7c4>${ssrInterpolate(feature.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "flex items-center justify-between group/link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="font-bold text-[#111111] text-[16px] font-jakarta group-hover/link:text-[#44C486] transition-colors duration-300" data-v-1ebbf7c4${_scopeId}>Learn more</span><div class="w-11 h-11 rounded-full bg-gray-200/80 flex items-center justify-center transition-all duration-500 group-hover/link:bg-[#44C486] group-hover/link:text-white" data-v-1ebbf7c4${_scopeId}><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="transform transition-all duration-500 group-hover/link:rotate-[-45deg] group-hover/link:scale-110" data-v-1ebbf7c4${_scopeId}><path d="M11 1L17 7L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ebbf7c4${_scopeId}></path><path d="M1 7H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1ebbf7c4${_scopeId}></path></svg></div>`);
            } else {
              return [
                createVNode("span", { class: "font-bold text-[#111111] text-[16px] font-jakarta group-hover/link:text-[#44C486] transition-colors duration-300" }, "Learn more"),
                createVNode("div", { class: "w-11 h-11 rounded-full bg-gray-200/80 flex items-center justify-center transition-all duration-500 group-hover/link:bg-[#44C486] group-hover/link:text-white" }, [
                  (openBlock(), createBlock("svg", {
                    width: "18",
                    height: "14",
                    viewBox: "0 0 18 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "transform transition-all duration-500 group-hover/link:rotate-[-45deg] group-hover/link:scale-110"
                  }, [
                    createVNode("path", {
                      d: "M11 1L17 7L11 13",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }),
                    createVNode("path", {
                      d: "M1 7H16",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Finance/FeatureCards.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-1ebbf7c4"]]), { __name: "FinanceFeatureCards" });
const houseSvg = "data:image/svg+xml,%3csvg%20width='372'%20height='250'%20viewBox='0%200%20372%20250'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M120.81%20137.65L15.7733%20235.304L0%20249.943L46.5404%20250L58.3819%20235.35L137.134%20137.65H120.81Z'%20fill='%2395A196'/%3e%3cpath%20d='M149.295%20137.65L90.2023%20235.304L81.3184%20249.943L127.882%20250L132.822%20235.35L165.618%20137.65H149.295Z'%20fill='%2385A088'/%3e%3cpath%20d='M177.781%20137.65L164.622%20235.304L162.627%20249.943L209.225%20250L207.276%20235.35L194.105%20137.65H177.781Z'%20fill='%235C9F63'/%3e%3cpath%20d='M206.268%20137.65L239.052%20235.304L243.947%20249.943L290.579%20250L281.73%20235.35L222.591%20137.65H206.268Z'%20fill='%23439F4D'/%3e%3cpath%20d='M234.754%20137.65L313.471%20235.304L325.267%20249.943L371.922%20250L356.172%20235.35L251.077%20137.65H234.754Z'%20fill='%23019D12'/%3e%3cpath%20d='M137.134%20105.312H120.811V137.65H137.134V105.312Z'%20fill='%2322675D'/%3e%3cpath%20d='M165.62%2086.6959H149.297V137.65H165.62V86.6959Z'%20fill='%2330766C'/%3e%3cpath%20d='M194.105%2066.1309H177.781V137.65H194.105V66.1309Z'%20fill='%233A8A7F'/%3e%3cpath%20d='M222.591%2045.1879H206.268V137.65H222.591V45.1879Z'%20fill='%236CA88B'/%3e%3cpath%20d='M251.077%2023.8549H234.754V137.65H251.077V23.8549Z'%20fill='%2344C486'/%3e%3cpath%20d='M120.81%20137.65L15.7733%20235.304L0%20249.943L46.5404%20250L58.3819%20235.35L137.134%20137.65H120.81Z'%20fill='white'/%3e%3cpath%20d='M149.295%20137.65L90.2023%20235.304L81.3184%20249.943L127.882%20250L132.822%20235.35L165.618%20137.65H149.295Z'%20fill='white'/%3e%3cpath%20d='M177.781%20137.65L164.622%20235.304L162.627%20249.943L209.225%20250L207.276%20235.35L194.105%20137.65H177.781Z'%20fill='white'/%3e%3cpath%20d='M206.268%20137.65L239.052%20235.304L243.947%20249.943L290.579%20250L281.73%20235.35L222.591%20137.65H206.268Z'%20fill='white'/%3e%3cpath%20d='M234.754%20137.65L313.471%20235.304L325.267%20249.943L371.922%20250L356.172%20235.35L251.077%20137.65H234.754Z'%20fill='white'/%3e%3cpath%20d='M127.919%2087.8536L108.764%20114.609H147.085L127.919%2087.8536Z'%20fill='%2322675D'/%3e%3cpath%20d='M157.596%2065.168L138.43%2091.9115H176.751L157.596%2065.168Z'%20fill='%2330766C'/%3e%3cpath%20d='M185.52%2043.0557L166.365%2069.7992H204.687L185.52%2043.0557Z'%20fill='%233A8A7F'/%3e%3cpath%20d='M214.419%2022.1124L195.264%2048.856H233.585L214.419%2022.1124Z'%20fill='%236CA88B'/%3e%3cpath%20d='M242.536%200L223.381%2026.7435H261.702L242.536%200Z'%20fill='%2344C486'/%3e%3c/svg%3e";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BuildingSection",
  __ssrInlineRender: true,
  setup(__props) {
    const y = ref(0);
    const sectionRef = ref(null);
    const parallaxY = ref(0);
    watch(y, (newY) => {
      if (sectionRef.value && false) ;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_UIcon = _sfc_main$8;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: "building-section py-[140px] bg-white"
      }, _attrs))}><div class="container mx-auto px-4 max-w-[1200px]"><div${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
        class: "bg-template-olive rounded-[30px] px-[30px] lg:px-[70px] overflow-hidden"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><div class="grid md:grid-cols-2 items-center"><div class="py-[54px] lg:py-[70px]"><h2 class="text-white text-4xl lg:text-5xl font-bold mb-[34px] leading-tight font-jakarta"> We are building <br> financial foundations </h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#",
        class: "inline-flex items-center gap-2 bg-[#FFDA54] hover:bg-white text-black font-bold px-8 py-4 rounded-full transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Let&#39;s Talk `);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-arrow-long-right",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Let's Talk "),
              createVNode(_component_UIcon, {
                name: "i-heroicons-arrow-long-right",
                class: "w-5 h-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-end justify-center md:justify-end h-full relative min-h-[300px]"><img${ssrRenderAttr("src", houseSvg)} class="w-[372px] transition-transform duration-100 ease-out will-change-transform" style="${ssrRenderStyle({ transform: `translateY(${parallaxY.value}px)` })}" alt="Building illustration"></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Finance/BuildingSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$5, { __name: "FinanceBuildingSection" });
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return ((key) => key !== void 0 ? map[key] || key : map.missingValue);
}
function createOperationsGenerator(config = {}) {
  const formatter = config.formatter;
  const keyMap = config.keyMap && typeof config.keyMap !== "function" ? createMapper(config.keyMap) : config.keyMap;
  const map = {};
  for (const key in config.valueMap) {
    const valueKey = key;
    const value = config.valueMap[valueKey];
    map[valueKey] = typeof value === "object" ? createMapper(value) : value;
  }
  return (modifiers) => {
    const operations = [];
    for (const _key in modifiers) {
      const key = _key;
      if (typeof modifiers[key] === "undefined") {
        continue;
      }
      const value = typeof map[key] === "function" ? map[key](modifiers[key]) : modifiers[key];
      operations.push([keyMap ? keyMap(key) : key, value]);
    }
    if (formatter) {
      return operations.map((entry) => formatter(...entry)).join(config.joinWith ?? "&");
    }
    return new URLSearchParams(operations).toString();
  };
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = ((input, modifiers, options) => getImage(input, defu({ modifiers }, options)).url);
  for (const presetName in globalOptions.presets) {
    $img[presetName] = ((source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options }));
  }
  $img.options = globalOptions;
  $img.getImage = getImage;
  $img.getMeta = ((input, options) => getMeta(ctx, input, options));
  $img.getSizes = ((input, options) => getSizes(ctx, input, options));
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { setup, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const provider = setup();
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  const resolvedOptions = {
    ..._options,
    modifiers: {
      ..._options.modifiers,
      width: _options.modifiers?.width ? parseSize(_options.modifiers.width) : void 0,
      height: _options.modifiers?.height ? parseSize(_options.modifiers.height) : void 0
    }
  };
  const image = provider.getImage(input, resolvedOptions, ctx);
  image.format ||= resolvedOptions.modifiers.format || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  const preset = getPreset(ctx, opts.preset);
  const merged = defu(opts, preset);
  const width = parseSize(merged.modifiers?.width);
  const height = parseSize(merged.modifiers?.height);
  const sizes = merged.sizes ? parseSizes(merged.sizes) : {};
  const _densities = merged.densities?.trim();
  const densities = _densities ? parseDensities(_densities) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: opts.modifiers?.width,
          _cHeight: opts.modifiers?.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant?.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = sizeVariants[i + 1]?.media || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
function defineProvider(setup) {
  let result;
  return () => {
    if (result) {
      return result;
    }
    result = typeof setup === "function" ? setup() : setup;
    return result;
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b",
    position: "pos"
  },
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val.toString())
});
const ipxRuntime$_7Yv5s9YYHszqTU8PEHsOWP1EZb1rjgBJM7MwuAfBgpc = defineProvider({
  validateDomains: true,
  supportsAlias: true,
  getImage: (src, { modifiers, baseURL }, ctx) => {
    if (modifiers.width && modifiers.height) {
      modifiers.resize = `${modifiers.width}x${modifiers.height}`;
      delete modifiers.width;
      delete modifiers.height;
    }
    const params = operationsGenerator(modifiers) || "_";
    if (!baseURL) {
      baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
    }
    return {
      url: joinURL(baseURL, params, encodePath(src))
    };
  }
});
const imageOptions = {
  ...{
    "screens": {
      "sm": 640,
      "md": 768,
      "lg": 1024,
      "xl": 1280,
      "2xl": 1536
    },
    "presets": {},
    "provider": "ipx",
    "domains": [],
    "alias": {},
    "densities": [
      1,
      2
    ],
    "format": [
      "webp",
      "avif",
      "webp"
    ],
    "quality": 80
  },
  /** @type {"ipx"} */
  provider: "ipx",
  providers: {
    ["ipx"]: { setup: ipxRuntime$_7Yv5s9YYHszqTU8PEHsOWP1EZb1rjgBJM7MwuAfBgpc, defaults: {} }
  }
};
const useImage = (event) => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    event: nuxtApp.ssrContext?.event,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const useImageProps = (props) => {
  const $img = useImage();
  const providerOptions = computed(() => ({
    provider: props.provider,
    preset: props.preset
  }));
  const normalizedAttrs = computed(() => ({
    width: parseSize(props.width),
    height: parseSize(props.height),
    crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
    nonce: props.nonce
  }));
  const imageModifiers = computed(() => {
    return {
      ...props.modifiers,
      width: props.width,
      height: props.height,
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return { providerOptions, normalizedAttrs, imageModifiers };
};
const _sfc_main$4 = {
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: {
    custom: { type: Boolean, required: false },
    placeholder: { type: [Boolean, String, Number, Array], required: false },
    placeholderClass: { type: String, required: false },
    src: { type: String, required: false },
    format: { type: String, required: false },
    quality: { type: [String, Number], required: false },
    background: { type: String, required: false },
    fit: { type: String, required: false },
    modifiers: { type: Object, required: false },
    preset: { type: String, required: false },
    provider: { type: null, required: false },
    sizes: { type: [String, Object], required: false },
    densities: { type: String, required: false },
    preload: { type: [Boolean, Object], required: false },
    width: { type: [String, Number], required: false },
    height: { type: [String, Number], required: false },
    crossorigin: { type: [String, Boolean], required: false },
    nonce: { type: String, required: false }
  },
  emits: ["load", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const $img = useImage();
    const { providerOptions, normalizedAttrs, imageModifiers } = useImageProps(props);
    const sizes = computed(() => $img.getSizes(props.src, {
      ...providerOptions.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: imageModifiers.value
    }));
    const placeholderLoaded = ref(false);
    const attrs = useAttrs();
    const imgAttrs = computed(() => ({
      ...normalizedAttrs.value,
      "data-nuxt-img": "",
      ...!props.placeholder || placeholderLoaded.value ? { sizes: sizes.value.sizes, srcset: sizes.value.srcset } : {},
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs
    }));
    const placeholder = computed(() => {
      if (placeholderLoaded.value) {
        return false;
      }
      const placeholder2 = props.placeholder === "" ? [10, 10] : props.placeholder;
      if (!placeholder2) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const [width = 10, height = width, quality = 50, blur = 3] = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2] : [];
      return $img(props.src, {
        ...imageModifiers.value,
        width,
        height,
        quality,
        blur
      }, providerOptions.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, imageModifiers.value, providerOptions.value)
    );
    const src = computed(() => placeholder.value || mainSrc.value);
    if (props.preload) {
      const hasMultipleDensities = sizes.value.srcset.includes("x, ");
      const isResponsive = hasMultipleDensities || !!sizes.value.sizes;
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          crossorigin: normalizedAttrs.value.crossorigin,
          href: isResponsive ? sizes.value.src : src.value,
          ...sizes.value.sizes && { imagesizes: sizes.value.sizes },
          ...hasMultipleDensities && { imagesrcset: sizes.value.srcset },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    useNuxtApp().isHydrating;
    const imgEl = useTemplateRef("imgEl");
    __expose({ imgEl });
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value ? __props.placeholderClass : void 0
        }, imgAttrs.value, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          imgAttrs: imgAttrs.value,
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$4, { __name: "NuxtImg" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WhyChooseUs",
  __ssrInlineRender: true,
  setup(__props) {
    const dynamicWords = ["productivity", "efficiency", "growth"];
    const currentIndex = ref(0);
    const benefits = [
      "99% Survey Report",
      "Trusted by teams",
      "Self-Service"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-[100px] md:py-[140px] bg-white overflow-hidden" }, _attrs))} data-v-0f682507><div class="container mx-auto px-4 max-w-[1240px]" data-v-0f682507><div class="grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[150px] items-center" data-v-0f682507><div class="space-y-10" data-v-0f682507><div class="space-y-6" data-v-0f682507><span${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 20 },
        "visible-once": { opacity: 1, y: 0, transition: { duration: 600 } },
        class: "text-[#44C486] font-bold text-[15px] uppercase tracking-[0.25em] font-jakarta block"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0f682507> Why Choose Us </span><h2${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 30 },
        "visible-once": { opacity: 1, y: 0, transition: { duration: 800, delay: 200 } },
        class: "text-[44px] md:text-[60px] font-bold text-[#111111] leading-[1.05] font-jakarta tracking-tight"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0f682507> Manage team increase <span class="inline-block text-[#44C486] min-w-[200px]" data-v-0f682507><span data-v-0f682507>${ssrInterpolate(dynamicWords[currentIndex.value])}</span></span></h2></div><p${ssrRenderAttrs(mergeProps({
        initial: { opacity: 0, y: 20 },
        "visible-once": { opacity: 1, y: 0, transition: { duration: 800, delay: 400 } },
        class: "text-[#444444] text-[18px] leading-relaxed font-dm opacity-80 max-w-[540px]"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0f682507> We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful nor again is there anyone. </p><div class="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 pt-4" data-v-0f682507><!--[-->`);
      ssrRenderList(benefits, (benefit, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: benefit,
          initial: { opacity: 0, x: -20 },
          "visible-once": { opacity: 1, x: 0, transition: { duration: 500, delay: 600 + i * 100 } },
          class: "flex items-center gap-4 group"
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0f682507><div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CD196]/10 flex items-center justify-center transition-colors group-hover:bg-[#3CD196]/20" data-v-0f682507><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0f682507><path d="M1.5 6L5.5 10L12.5 1.5" stroke="#3CD196" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-0f682507></path></svg></div><span class="text-[#111111] text-[17px] font-jakarta" data-v-0f682507>${ssrInterpolate(benefit)}</span></div>`);
      });
      _push(`<!--]--></div></div><div${ssrRenderAttrs(mergeProps({
        class: "flex gap-4 md:gap-7 items-center",
        initial: { opacity: 0, scale: 0.95 },
        "visible-once": { opacity: 1, scale: 1, transition: { duration: 1e3, delay: 400 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-0f682507><div class="w-1/3 mt-20" data-v-0f682507><div class="rounded-[14px] overflow-hidden aspect-[1/1.8] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] ring-1 ring-black/5 hover:scale-105 transition-transform duration-700" data-v-0f682507>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
        class: "w-full h-full object-cover",
        alt: "Professional project lead managing team tasks and deliverables",
        loading: "lazy",
        width: "400",
        height: "720"
      }, null, _parent));
      _push(`</div></div><div class="w-1/3" data-v-0f682507><div class="rounded-[14px] overflow-hidden aspect-[1/2.2] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.15)] ring-1 ring-black/5 hover:scale-105 transition-transform duration-700" data-v-0f682507>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        class: "w-full h-full object-cover",
        alt: "Team members collaborating on project work in modern office",
        loading: "lazy",
        width: "400",
        height: "880"
      }, null, _parent));
      _push(`</div></div><div class="w-1/3 mt-20" data-v-0f682507><div class="rounded-[14px] overflow-hidden aspect-[1/1.8] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] ring-1 ring-black/5 hover:scale-105 transition-transform duration-700" data-v-0f682507>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
        class: "w-full h-full object-cover",
        alt: "Client manager discussing project requirements with team",
        loading: "lazy",
        width: "400",
        height: "720"
      }, null, _parent));
      _push(`</div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Finance/WhyChooseUs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-0f682507"]]), { __name: "FinanceWhyChooseUs" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIdx = ref(0);
    const testimonials = [
      {
        text: "Making this the first true 😍 generator on the Internet. It uses a dictionary of over words, combined with a handful of model sentence structures, to generate 👏👏",
        author: "Dennis Lail",
        role: "Marketer",
        avatar: "https://staco-react.vercel.app/assets/img/finance/testimonial-user.png"
      },
      {
        text: "I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you a complete account.",
        author: "Roe Smith",
        role: "Director, Growth Marketing",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
      },
      {
        text: "We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pleasure rationally encounter consequences.",
        author: "Aurthoe De",
        role: "CEO - Dorid Co",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
      }
    ];
    const partners = [
      { name: "jQuery", logo: "/assets/brand1.svg" },
      { name: "GitHub", logo: "/assets/brand2.svg" },
      { name: "Portis", logo: "/assets/brand4.svg" },
      { name: "envato", logo: "/assets/brand5.svg" },
      { name: "DAOMAK", logo: "/assets/brand6.svg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center py-[100px] md:py-[140px] bg-[#F3F7F5] p-6 font-jakarta" }, _attrs))} data-v-b6ed569e><div class="w-full max-w-[1100px] bg-white rounded-[50px] shadow-[0_30px_80px_rgba(0,0,0,0.03)] border border-gray-100/50 overflow-hidden flex flex-col" data-v-b6ed569e><div class="grid grid-cols-1 md:grid-cols-2" data-v-b6ed569e><div class="relative bg-white min-h-[450px] lg:min-h-[520px] flex items-end justify-center overflow-hidden" data-v-b6ed569e><div class="absolute inset-0 z-0" data-v-b6ed569e><svg viewBox="0 0 500 500" class="w-full h-full" preserveAspectRatio="none" data-v-b6ed569e><path d="M0,80 C120,80 180,450 500,450 L500,500 L0,500 Z" fill="#004D3F" data-v-b6ed569e></path></svg></div><div class="relative z-10 w-[280px] h-[360px] lg:w-[320px] lg:h-[420px] bg-[#A2E996] rounded-t-full flex items-end overflow-hidden" data-v-b6ed569e><img${ssrRenderAttr("src", testimonials[activeIdx.value]?.avatar)} class="w-full h-full object-cover object-top transform translate-y-2" alt="Client" data-v-b6ed569e></div></div><div class="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative" data-v-b6ed569e><div class="mb-8" data-v-b6ed569e><div class="bg-[#3CD196] w-14 h-14 rounded-full rounded-br-none flex items-center justify-center shadow-lg" data-v-b6ed569e><span class="text-[#002D25] text-2xl font-black leading-none mt-1" data-v-b6ed569e>“</span></div></div><div class="space-y-8" data-v-b6ed569e><p class="text-[#242549] text-[20px] lg:text-[24px] font-medium leading-[1.5] italic decoration-[#3CD196]/30" data-v-b6ed569e>${ssrInterpolate(testimonials[activeIdx.value]?.text)}</p><div class="flex items-center justify-between pt-4" data-v-b6ed569e><div data-v-b6ed569e><h4 class="text-2xl font-bold text-[#242549] tracking-tight" data-v-b6ed569e>${ssrInterpolate(testimonials[activeIdx.value]?.author)}</h4><p class="text-gray-400 font-medium text-base mt-1" data-v-b6ed569e>${ssrInterpolate(testimonials[activeIdx.value]?.role)}</p></div><div class="flex gap-2.5" data-v-b6ed569e><!--[-->`);
      ssrRenderList(testimonials, (_, i) => {
        _push(`<button class="${ssrRenderClass([activeIdx.value === i ? "bg-[#3CD196] w-8" : "bg-gray-100 hover:bg-gray-200", "w-2 h-2 rounded-full transition-all duration-500 ease-in-out"])}" data-v-b6ed569e></button>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="border-t border-gray-100 flex flex-wrap items-center justify-between px-10 py-10 grayscale opacity-40 hover:opacity-100 transition-opacity duration-700" data-v-b6ed569e><!--[-->`);
      ssrRenderList(partners, (partner) => {
        _push(`<img${ssrRenderAttr("src", partner.logo)} class="h-6 w-auto hover:grayscale-0 transition-transform hover:scale-110 cursor-pointer"${ssrRenderAttr("alt", partner.name)} data-v-b6ed569e>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Finance/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-b6ed569e"]]), { __name: "FinanceTestimonials" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footerLinks = [
      {
        title: "Products",
        icon: "🔥",
        items: ["HR Management", "Invoice System", "Email Marketing", "Web Services", "Digital Marketing"]
      },
      {
        title: "Why choose",
        icon: "☀️",
        items: ["Customers", "Why Staco ?", "Book a demo"]
      },
      {
        title: "Resources",
        icon: "💠",
        items: ["Latest Blog", "Supports", "Knowledgebase", "FAQs"]
      },
      {
        title: "Company",
        icon: "💎",
        items: ["About", "What we do", "Contact us", "Careers"]
      }
    ];
    const socialIcons = [
      { name: "fab fa-facebook-f", link: "#" },
      { name: "fab fa-x", link: "#" },
      { name: "fab fa-linkedin-in", link: "#" },
      { name: "fab fa-instagram", link: "#" },
      { name: "fab fa-youtube", link: "#" }
    ];
    useHead({
      link: [
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white font-jakarta pt-10 relative" }, _attrs))} data-v-7e52ddf3><div class="bg-[#1C1E2A] text-white rounded-[40px] md:rounded-[60px] mx-4 md:mx-10 py-16 md:py-24" data-v-7e52ddf3><div class="container mx-auto px-6 max-w-[1200px]" data-v-7e52ddf3><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20" data-v-7e52ddf3><div class="lg:col-span-4 space-y-8" data-v-7e52ddf3><div class="flex items-center gap-3" data-v-7e52ddf3><div class="w-10 h-10 bg-gradient-to-br from-[#44C486] to-[#86efac] rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20" data-v-7e52ddf3><div class="w-6 h-6 bg-white/40 rounded-full blur-[1px]" data-v-7e52ddf3></div></div><span class="font-bold text-3xl text-white uppercase tracking-tighter" data-v-7e52ddf3>Staco</span></div><p class="text-gray-400 text-[16px] leading-relaxed max-w-[300px]" data-v-7e52ddf3> Staco is the dedicated platform for performance management that helps to grow your startup quickly </p><div class="flex gap-3" data-v-7e52ddf3><!--[-->`);
      ssrRenderList(socialIcons, (social) => {
        _push(`<a${ssrRenderAttr("href", social.link)} class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#44C486] hover:border-[#44C486] transition-all duration-300 text-gray-400 hover:text-white" data-v-7e52ddf3><i class="${ssrRenderClass([social.name, "text-[13px]"])}" data-v-7e52ddf3></i></a>`);
      });
      _push(`<!--]--></div></div><div class="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8" data-v-7e52ddf3><!--[-->`);
      ssrRenderList(footerLinks, (group) => {
        _push(`<div data-v-7e52ddf3><h4 class="font-bold text-white text-[14px] uppercase tracking-widest mb-8 flex items-center gap-2" data-v-7e52ddf3>${ssrInterpolate(group.title)} <span class="text-[12px] opacity-80" data-v-7e52ddf3>${ssrInterpolate(group.icon)}</span></h4><ul class="space-y-4" data-v-7e52ddf3><!--[-->`);
        ssrRenderList(group.items, (link) => {
          _push(`<li data-v-7e52ddf3>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "#",
            class: "text-gray-400 hover:text-white transition-colors text-[15px]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div><div class="h-px w-full bg-white/5 mb-10" data-v-7e52ddf3></div><div class="flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-gray-500" data-v-7e52ddf3><p data-v-7e52ddf3>© 2023 Staco. All rights reserved.</p><div class="flex gap-8" data-v-7e52ddf3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms and conditions`);
          } else {
            return [
              createTextVNode("Terms and conditions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cookies`);
          } else {
            return [
              createTextVNode("Cookies")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy policy`);
          } else {
            return [
              createTextVNode("Privacy policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="bg-white py-20 px-4 md:px-10" data-v-7e52ddf3><div class="max-w-[1200px] mx-auto text-[14px] text-black leading-relaxed" data-v-7e52ddf3><h6 class="font-bold mb-4 text-black text-[13px] uppercase tracking-wider" data-v-7e52ddf3>Disclaimer:</h6><p class="mb-4" data-v-7e52ddf3> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#39;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. </p><p data-v-7e52ddf3> Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined handful of model sentence structures, to generate which looks reasonable. The generated Lorem Ipsum is therefore always </p></div></div><button class="absolute bottom-20 right-10 w-12 h-12 rounded-full border border-[#44C486] flex items-center justify-center text-[#44C486] hover:bg-[#44C486] hover:text-white transition-all duration-300" data-v-7e52ddf3><i class="fas fa-arrow-up" data-v-7e52ddf3></i></button></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Finance/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-7e52ddf3"]]), { __name: "FinanceFooter" });
const _imports_0 = publicAssetsURL("/assets/finance-logo.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const y = ref(0);
    const isSticky = computed(() => y.value > 30);
    useHead({
      link: [{ rel: "icon", type: "image/svg+xml", href: "/assets/finance-logo.svg" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MotionTabs = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_FinanceHeroSection = __nuxt_component_2;
      const _component_FinanceFeatureCards = __nuxt_component_3;
      const _component_FinanceBuildingSection = __nuxt_component_4;
      const _component_FinanceWhyChooseUs = __nuxt_component_5;
      const _component_FinanceTestimonials = __nuxt_component_6;
      const _component_FinanceFooter = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#06090F] text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden pt-16" }, _attrs))} data-v-6e67524a><header class="${ssrRenderClass([[isSticky.value ? "pt-0" : "pt-4"], "fixed top-0 left-0 right-0 z-[1000] flex justify-center pointer-events-none transition-all duration-500"])}" data-v-6e67524a><nav class="${ssrRenderClass([[isSticky.value ? "w-full px-8 py-4 rounded-none border-b border-white/10" : "w-[94%] max-w-[1100px] px-8 py-4 rounded-full border border-white/10 shadow-lg"], "flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto glass-effect"])}" data-v-6e67524a><div class="flex items-center gap-3 shrink-0" data-v-6e67524a><img${ssrRenderAttr("src", _imports_0)} alt="Staco Logo" class="w-10 h-10 md:w-9 md:h-9" data-v-6e67524a><span class="font-extrabold text-xl tracking-tighter text-white hidden sm:block font-jakarta" data-v-6e67524a>Staco</span></div><div class="hidden lg:block" data-v-6e67524a>`);
      _push(ssrRenderComponent(_component_MotionTabs, null, null, _parent));
      _push(`</div><div class="flex items-center gap-5" data-v-6e67524a><button class="hidden md:flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/5 transition-all glass-btn" data-v-6e67524a><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-80" data-v-6e67524a><circle cx="12" cy="12" r="10" data-v-6e67524a></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-6e67524a></path><path d="M2 12h20" data-v-6e67524a></path></svg><span class="font-bold text-[16px] tracking-widest text-white/90" data-v-6e67524a>EN</span><svg width="10" height="10" viewBox="0 0 10 6" fill="none" class="opacity-60" data-v-6e67524a><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-6e67524a></path></svg></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#",
        class: "hidden md:block text-[14px] font-bold text-white/70 hover:text-white transition-colors font-jakarta"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign in `);
          } else {
            return [
              createTextVNode(" Sign in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="bg-[#A7F3D0] hover:bg-white text-[#06090F] font-bold px-7 py-3 rounded-full transition-all text-[14px] font-jakarta shadow-md active:scale-95" data-v-6e67524a> Start Free </button></div></nav></header><main class="-mt-16" data-v-6e67524a>`);
      _push(ssrRenderComponent(_component_FinanceHeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FinanceFeatureCards, null, null, _parent));
      _push(ssrRenderComponent(_component_FinanceBuildingSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FinanceWhyChooseUs, null, null, _parent));
      _push(ssrRenderComponent(_component_FinanceTestimonials, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_FinanceFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e67524a"]]);

export { index as default };
//# sourceMappingURL=index-BsZp1Gt5.mjs.map
