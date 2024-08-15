(self.webpackChunk_2_fetchdata_components_storybook=self.webpackChunk_2_fetchdata_components_storybook||[]).push([[888],{"./app/components/UI/CartProduct.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CartProduct_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_link=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/next/link.js")),link_default=__webpack_require__.n(next_link);function cov_c043z0xmv(){var path="/Users/smey/Documents/SABAICODE-BOOTCAMP-5/Sabai-Code-Exercise/5-NextJS/2-fetchdata-components-storybook/app/components/CardProduct.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"0613b47597dd281f53c2cc46a2a60c70298d11ab"===coverage[path].hash||(coverage[path]={path:"/Users/smey/Documents/SABAICODE-BOOTCAMP-5/Sabai-Code-Exercise/5-NextJS/2-fetchdata-components-storybook/app/components/CardProduct.tsx",statementMap:{0:{start:{line:3,column:20},end:{line:78,column:1}},1:{start:{line:4,column:4},end:{line:77,column:19}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:20},end:{line:3,column:21}},loc:{start:{line:3,column:35},end:{line:78,column:1}},line:3}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},inputSourceMap:{version:3,sources:["/Users/smey/Documents/SABAICODE-BOOTCAMP-5/Sabai-Code-Exercise/5-NextJS/2-fetchdata-components-storybook/app/components/CardProduct.tsx"],sourcesContent:['import { FC } from "react";\nimport Link from "next/link";\n\nexport interface Product {\n  id: string;\n  name: string;\n  model: string;\n  brand: string;\n  price: number;\n  description: string;\n  about: string;\n  image: string;\n}\n\nexport interface CartProductProps {\n  product: Product;\n}\n\nconst CartProduct: FC<CartProductProps> = ({ product }) => {\n  return (\n    <li\n      key={product.id}\n      className=" text-black mb-4 p-4 border rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200"\n    >\n      <div className="flex justify-center mb-4">\n        <Link href={`/screen/learnUI/${product.id}`}>\n          <img\n            className="h-60 w-full rounded transform transition-transform duration-300 ease-in-out hover:scale-105"\n            src={product.image}\n            alt={product.name}\n          />\n        </Link>\n      </div>\n      <div className="p-2">\n        <h2 className="text-xl font-semibold">\n          <Link href={`/screen/learnUI/${product.id}`}>{product.name}</Link>\n        </h2>\n        <p>\n          <strong>Model:</strong> {product.model}\n        </p>\n        <p>\n          <strong>Brand:</strong> {product.brand}\n        </p>\n        <p className="text-blue-600">\n          <strong>Price:</strong> ${product.price.toFixed(2)}\n        </p>\n        <p>\n          <strong>Description:</strong> {product.description}\n        </p>\n        <p>\n          <strong>About:</strong> {product.about}\n        </p>\n      </div>\n    </li>\n  );\n};\n\nexport default CartProduct;\n'],names:["Link","CartProduct","product","li","className","div","href","id","img","src","image","alt","name","h2","p","strong","model","brand","price","toFixed","description","about"],mappings:";AACA,OAAOA,UAAU,YAAY;AAiB7B,MAAMC,cAAoC,CAAC,EAAEC,OAAO,EAAE;IACpD,qBACE,MAACC;QAECC,WAAU;;0BAEV,KAACC;gBAAID,WAAU;0BACb,cAAA,KAACJ;oBAAKM,MAAM,CAAC,gBAAgB,EAAEJ,QAAQK,EAAE,CAAC,CAAC;8BACzC,cAAA,KAACC;wBACCJ,WAAU;wBACVK,KAAKP,QAAQQ,KAAK;wBAClBC,KAAKT,QAAQU,IAAI;;;;0BAIvB,MAACP;gBAAID,WAAU;;kCACb,KAACS;wBAAGT,WAAU;kCACZ,cAAA,KAACJ;4BAAKM,MAAM,CAAC,gBAAgB,EAAEJ,QAAQK,EAAE,CAAC,CAAC;sCAAGL,QAAQU,IAAI;;;kCAE5D,MAACE;;0CACC,KAACC;0CAAO;;4BAAe;4BAAEb,QAAQc,KAAK;;;kCAExC,MAACF;;0CACC,KAACC;0CAAO;;4BAAe;4BAAEb,QAAQe,KAAK;;;kCAExC,MAACH;wBAAEV,WAAU;;0CACX,KAACW;0CAAO;;4BAAe;4BAAGb,QAAQgB,KAAK,CAACC,OAAO,CAAC;;;kCAElD,MAACL;;0CACC,KAACC;0CAAO;;4BAAqB;4BAAEb,QAAQkB,WAAW;;;kCAEpD,MAACN;;0CACC,KAACC;0CAAO;;4BAAe;4BAAEb,QAAQmB,KAAK;;;;;;OA7BrCnB,QAAQK,EAAE;AAkCrB;AAEA,eAAeN,YAAY"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0613b47597dd281f53c2cc46a2a60c70298d11ab"});var actualCoverage=coverage[path];return cov_c043z0xmv=function(){return actualCoverage},actualCoverage}cov_c043z0xmv(),cov_c043z0xmv().s[0]++;const components_CardProduct=({product})=>(cov_c043z0xmv().f[0]++,cov_c043z0xmv().s[1]++,(0,jsx_runtime.jsxs)("li",{className:" text-black mb-4 p-4 border rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200",children:[(0,jsx_runtime.jsx)("div",{className:"flex justify-center mb-4",children:(0,jsx_runtime.jsx)(link_default(),{href:`/screen/learnUI/${product.id}`,children:(0,jsx_runtime.jsx)("img",{className:"h-60 w-full rounded transform transition-transform duration-300 ease-in-out hover:scale-105",src:product.image,alt:product.name})})}),(0,jsx_runtime.jsxs)("div",{className:"p-2",children:[(0,jsx_runtime.jsx)("h2",{className:"text-xl font-semibold",children:(0,jsx_runtime.jsx)(link_default(),{href:`/screen/learnUI/${product.id}`,children:product.name})}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Model:"})," ",product.model]}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Brand:"})," ",product.brand]}),(0,jsx_runtime.jsxs)("p",{className:"text-blue-600",children:[(0,jsx_runtime.jsx)("strong",{children:"Price:"})," $",product.price.toFixed(2)]}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Description:"})," ",product.description]}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"About:"})," ",product.about]})]})]},product.id));try{CardProduct.displayName="CardProduct",CardProduct.__docgenInfo={description:"",displayName:"CardProduct",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/CardProduct.tsx#CardProduct"]={docgenInfo:CardProduct.__docgenInfo,name:"CardProduct",path:"app/components/CardProduct.tsx#CardProduct"})}catch(__react_docgen_typescript_loader_error){}const CartProduct_stories={component:components_CardProduct},Default=(args=>(0,jsx_runtime.jsx)(components_CardProduct,{...args})).bind({});Default.args={product:{id:"1",name:"Sample Product",model:"XYZ123",brand:"Sample Brand",price:99.99,description:"This is a sample product description.",about:"Details about the product.",image:"https://via.placeholder.com/150"}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CartProduct {...args} />",...Default.parameters?.docs?.source}}}},"./node_modules/next/dist/client/components/router-reducer/router-reducer-types.js":(module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{ACTION_FAST_REFRESH:function(){return ACTION_FAST_REFRESH},ACTION_NAVIGATE:function(){return ACTION_NAVIGATE},ACTION_PREFETCH:function(){return ACTION_PREFETCH},ACTION_REFRESH:function(){return ACTION_REFRESH},ACTION_RESTORE:function(){return ACTION_RESTORE},ACTION_SERVER_ACTION:function(){return ACTION_SERVER_ACTION},ACTION_SERVER_PATCH:function(){return ACTION_SERVER_PATCH},PrefetchCacheEntryStatus:function(){return PrefetchCacheEntryStatus},PrefetchKind:function(){return PrefetchKind},isThenable:function(){return isThenable}});const ACTION_REFRESH="refresh",ACTION_NAVIGATE="navigate",ACTION_RESTORE="restore",ACTION_SERVER_PATCH="server-patch",ACTION_PREFETCH="prefetch",ACTION_FAST_REFRESH="fast-refresh",ACTION_SERVER_ACTION="server-action";var PrefetchKind,PrefetchCacheEntryStatus;function isThenable(value){return value&&("object"==typeof value||"function"==typeof value)&&"function"==typeof value.then}!function(PrefetchKind){PrefetchKind.AUTO="auto",PrefetchKind.FULL="full",PrefetchKind.TEMPORARY="temporary"}(PrefetchKind||(PrefetchKind={})),function(PrefetchCacheEntryStatus){PrefetchCacheEntryStatus.fresh="fresh",PrefetchCacheEntryStatus.reusable="reusable",PrefetchCacheEntryStatus.expired="expired",PrefetchCacheEntryStatus.stale="stale"}(PrefetchCacheEntryStatus||(PrefetchCacheEntryStatus={})),("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/get-domain-locale.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}});const _normalizetrailingslash=__webpack_require__("./node_modules/next/dist/client/normalize-trailing-slash.js"),basePath=process.env.__NEXT_ROUTER_BASEPATH||"";function getDomainLocale(path,locale,locales,domainLocales){if(process.env.__NEXT_I18N_SUPPORT){const normalizeLocalePath=__webpack_require__("./node_modules/next/dist/client/normalize-locale-path.js").normalizeLocalePath,detectDomainLocale=__webpack_require__("./node_modules/next/dist/client/detect-domain-locale.js").detectDomainLocale,target=locale||normalizeLocalePath(path,locales).detectedLocale,domain=detectDomainLocale(domainLocales,void 0,target);if(domain){const proto="http"+(domain.http?"":"s")+"://",finalLocale=target===domain.defaultLocale?"":"/"+target;return""+proto+domain.domain+(0,_normalizetrailingslash.normalizePathTrailingSlash)(""+basePath+finalLocale+path)}return!1}return!1}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/link.js":(module,exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_jsxruntime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_react=_interop_require_default._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_resolvehref=__webpack_require__("./node_modules/next/dist/client/resolve-href.js"),_islocalurl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/is-local-url.js"),_formaturl=__webpack_require__("./node_modules/next/dist/shared/lib/router/utils/format-url.js"),_utils=__webpack_require__("./node_modules/next/dist/shared/lib/utils.js"),_addlocale=__webpack_require__("./node_modules/next/dist/client/add-locale.js"),_routercontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/router-context.shared-runtime.js"),_approutercontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js"),_useintersection=__webpack_require__("./node_modules/next/dist/client/use-intersection.js"),_getdomainlocale=__webpack_require__("./node_modules/next/dist/client/get-domain-locale.js"),_addbasepath=__webpack_require__("./node_modules/next/dist/client/add-base-path.js"),_routerreducertypes=__webpack_require__("./node_modules/next/dist/client/components/router-reducer/router-reducer-types.js"),prefetched=new Set;function prefetch(router,href,as,options,appOptions,isAppRouter){if("undefined"==typeof window)return;if(!isAppRouter&&!(0,_islocalurl.isLocalURL)(href))return;if(!options.bypassPrefetchedCheck){const locale=void 0!==options.locale?options.locale:"locale"in router?router.locale:void 0,prefetchedKey=href+"%"+as+"%"+locale;if(prefetched.has(prefetchedKey))return;prefetched.add(prefetchedKey)}(async()=>isAppRouter?router.prefetch(href,appOptions):router.prefetch(href,as,options))().catch((err=>{0}))}function formatStringOrUrl(urlObjOrString){return"string"==typeof urlObjOrString?urlObjOrString:(0,_formaturl.formatUrl)(urlObjOrString)}const _default=_react.default.forwardRef((function LinkComponent(props,forwardedRef){let children;const{href:hrefProp,as:asProp,children:childrenProp,prefetch:prefetchProp=null,passHref,replace,shallow,scroll,locale,onClick,onMouseEnter:onMouseEnterProp,onTouchStart:onTouchStartProp,legacyBehavior=!1,...restProps}=props;children=childrenProp,!legacyBehavior||"string"!=typeof children&&"number"!=typeof children||(children=(0,_jsxruntime.jsx)("a",{children}));const pagesRouter=_react.default.useContext(_routercontextsharedruntime.RouterContext),appRouter=_react.default.useContext(_approutercontextsharedruntime.AppRouterContext),router=null!=pagesRouter?pagesRouter:appRouter,isAppRouter=!pagesRouter,prefetchEnabled=!1!==prefetchProp,appPrefetchKind=null===prefetchProp?_routerreducertypes.PrefetchKind.AUTO:_routerreducertypes.PrefetchKind.FULL;const{href,as}=_react.default.useMemo((()=>{if(!pagesRouter){const resolvedHref=formatStringOrUrl(hrefProp);return{href:resolvedHref,as:asProp?formatStringOrUrl(asProp):resolvedHref}}const[resolvedHref,resolvedAs]=(0,_resolvehref.resolveHref)(pagesRouter,hrefProp,!0);return{href:resolvedHref,as:asProp?(0,_resolvehref.resolveHref)(pagesRouter,asProp):resolvedAs||resolvedHref}}),[pagesRouter,hrefProp,asProp]),previousHref=_react.default.useRef(href),previousAs=_react.default.useRef(as);let child;legacyBehavior&&(child=_react.default.Children.only(children));const childRef=legacyBehavior?child&&"object"==typeof child&&child.ref:forwardedRef,[setIntersectionRef,isVisible,resetVisible]=(0,_useintersection.useIntersection)({rootMargin:"200px"}),setRef=_react.default.useCallback((el=>{previousAs.current===as&&previousHref.current===href||(resetVisible(),previousAs.current=as,previousHref.current=href),setIntersectionRef(el),childRef&&("function"==typeof childRef?childRef(el):"object"==typeof childRef&&(childRef.current=el))}),[as,childRef,href,resetVisible,setIntersectionRef]);_react.default.useEffect((()=>{router&&isVisible&&prefetchEnabled&&prefetch(router,href,as,{locale},{kind:appPrefetchKind},isAppRouter)}),[as,href,isVisible,locale,prefetchEnabled,null==pagesRouter?void 0:pagesRouter.locale,router,isAppRouter,appPrefetchKind]);const childProps={ref:setRef,onClick(e){legacyBehavior||"function"!=typeof onClick||onClick(e),legacyBehavior&&child.props&&"function"==typeof child.props.onClick&&child.props.onClick(e),router&&(e.defaultPrevented||function linkClicked(e,router,href,as,replace,shallow,scroll,locale,isAppRouter){const{nodeName}=e.currentTarget;if("A"===nodeName.toUpperCase()&&(function isModifiedEvent(event){const target=event.currentTarget.getAttribute("target");return target&&"_self"!==target||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.nativeEvent&&2===event.nativeEvent.which}(e)||!isAppRouter&&!(0,_islocalurl.isLocalURL)(href)))return;e.preventDefault();const navigate=()=>{const routerScroll=null==scroll||scroll;"beforePopState"in router?router[replace?"replace":"push"](href,as,{shallow,locale,scroll:routerScroll}):router[replace?"replace":"push"](as||href,{scroll:routerScroll})};isAppRouter?_react.default.startTransition(navigate):navigate()}(e,router,href,as,replace,shallow,scroll,locale,isAppRouter))},onMouseEnter(e){legacyBehavior||"function"!=typeof onMouseEnterProp||onMouseEnterProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onMouseEnter&&child.props.onMouseEnter(e),router&&(!prefetchEnabled&&isAppRouter||prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0},{kind:appPrefetchKind},isAppRouter))},onTouchStart:process.env.__NEXT_LINK_NO_TOUCH_START?void 0:function onTouchStart(e){legacyBehavior||"function"!=typeof onTouchStartProp||onTouchStartProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onTouchStart&&child.props.onTouchStart(e),router&&(!prefetchEnabled&&isAppRouter||prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0},{kind:appPrefetchKind},isAppRouter))}};if((0,_utils.isAbsoluteUrl)(as))childProps.href=as;else if(!legacyBehavior||passHref||"a"===child.type&&!("href"in child.props)){const curLocale=void 0!==locale?locale:null==pagesRouter?void 0:pagesRouter.locale,localeDomain=(null==pagesRouter?void 0:pagesRouter.isLocaleDomain)&&(0,_getdomainlocale.getDomainLocale)(as,curLocale,null==pagesRouter?void 0:pagesRouter.locales,null==pagesRouter?void 0:pagesRouter.domainLocales);childProps.href=localeDomain||(0,_addbasepath.addBasePath)((0,_addlocale.addLocale)(as,curLocale,null==pagesRouter?void 0:pagesRouter.defaultLocale))}return legacyBehavior?_react.default.cloneElement(child,childProps):(0,_jsxruntime.jsx)("a",{...restProps,...childProps,children})}));("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/normalize-locale-path.js":(module,exports,__webpack_require__)=>{"use strict";var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"normalizeLocalePath",{enumerable:!0,get:function(){return normalizeLocalePath}});const normalizeLocalePath=(pathname,locales)=>process.env.__NEXT_I18N_SUPPORT?__webpack_require__("./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js").normalizeLocalePath(pathname,locales):{pathname,detectedLocale:void 0};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/use-intersection.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});const _react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_requestidlecallback=__webpack_require__("./node_modules/next/dist/client/request-idle-callback.js"),hasIntersectionObserver="function"==typeof IntersectionObserver,observers=new Map,idList=[];function observe(element,callback,options){const{id,observer,elements}=function createObserver(options){const id={root:options.root||null,margin:options.rootMargin||""},existing=idList.find((obj=>obj.root===id.root&&obj.margin===id.margin));let instance;if(existing&&(instance=observers.get(existing),instance))return instance;const elements=new Map,observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{const callback=elements.get(entry.target),isVisible=entry.isIntersecting||entry.intersectionRatio>0;callback&&isVisible&&callback(isVisible)}))}),options);return instance={id,observer,elements},idList.push(id),observers.set(id,instance),instance}(options);return elements.set(element,callback),observer.observe(element),function unobserve(){if(elements.delete(element),observer.unobserve(element),0===elements.size){observer.disconnect(),observers.delete(id);const index=idList.findIndex((obj=>obj.root===id.root&&obj.margin===id.margin));index>-1&&idList.splice(index,1)}}}function useIntersection(param){let{rootRef,rootMargin,disabled}=param;const isDisabled=disabled||!hasIntersectionObserver,[visible,setVisible]=(0,_react.useState)(!1),elementRef=(0,_react.useRef)(null),setElement=(0,_react.useCallback)((element=>{elementRef.current=element}),[]);(0,_react.useEffect)((()=>{if(hasIntersectionObserver){if(isDisabled||visible)return;const element=elementRef.current;if(element&&element.tagName){return observe(element,(isVisible=>isVisible&&setVisible(isVisible)),{root:null==rootRef?void 0:rootRef.current,rootMargin})}}else if(!visible){const idleCallback=(0,_requestidlecallback.requestIdleCallback)((()=>setVisible(!0)));return()=>(0,_requestidlecallback.cancelIdleCallback)(idleCallback)}}),[isDisabled,rootMargin,rootRef,visible,elementRef.current]);const resetVisible=(0,_react.useCallback)((()=>{setVisible(!1)}),[]);return[setElement,visible,resetVisible]}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/link.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/client/link.js")}}]);