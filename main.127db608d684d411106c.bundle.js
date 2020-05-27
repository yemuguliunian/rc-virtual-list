(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1249:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(441);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1272)],module)}.call(this,__webpack_require__(1250)(module))},1272:function(module,exports,__webpack_require__){var map={"./demo/VirtualList.stories.mdx":1278};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1272},1278:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"basic",(function(){return basic}));__webpack_require__(1),__webpack_require__(11),__webpack_require__(22),__webpack_require__(48),__webpack_require__(38),__webpack_require__(70),__webpack_require__(9),__webpack_require__(29),__webpack_require__(15),__webpack_require__(10),__webpack_require__(43),__webpack_require__(30),__webpack_require__(16),__webpack_require__(3),__webpack_require__(72),__webpack_require__(40),__webpack_require__(1273),__webpack_require__(1274),__webpack_require__(5),__webpack_require__(13),__webpack_require__(35),__webpack_require__(17),__webpack_require__(39),__webpack_require__(18);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(41),blocks=__webpack_require__(100),throttle=__webpack_require__(442),throttle_default=__webpack_require__.n(throttle);class src_VirtualList extends react_default.a.Component{constructor(props){super(props),this.cache=[],this.getRef=name=>this[name],this.saveRef=name=>node=>{node&&(this[name]=node)},this.state={visibleRows:[]},this.visibleCount=0,this.startIndex=0,this.endIndex=0,this.handleScroll=this.handleScroll.bind(this),this._updateBoundaryIndex=this._updateBoundaryIndex.bind(this)}componentDidMount(){const{height:height,rowHeight:rowHeight}=this.props;this.visibleCount=Math.ceil(height/rowHeight)+5,this.endIndex=this.startIndex+this.visibleCount,this._calculateCache(),this._updatevisibleRows()}_calculateCache(){const{rowCount:rowCount,rowHeight:rowHeight}=this.props;for(let i=0;i<rowCount;i++){const top=i*rowHeight;this.cache.push({index:i,top:top,bottom:top+rowHeight,style:{position:"absolute",top:top,width:"100%"}})}}_updatevisibleRows(){const{cache:cache,startIndex:startIndex,endIndex:endIndex}=this,visibleRows=cache.slice(startIndex,endIndex);this.setState({visibleRows:visibleRows})}_updateBoundaryIndex(scrollTop){const{rowHeight:rowHeight}=this.props,startIndex=Math.floor(scrollTop/rowHeight);this.startIndex=startIndex,this.endIndex=startIndex+this.visibleCount}handleScroll(){const{scrollTop:scrollTop}=this.getRef("wrapper");this._updateBoundaryIndex(scrollTop),this._updatevisibleRows()}render(){const{height:height,rowCount:rowCount,rowHeight:rowHeight,rowRenderer:rowRenderer}=this.props,{visibleRows:visibleRows}=this.state,wrapperStyle={height:height,overflow:"auto",position:"relative"},innerWrapperStyle={height:rowCount*rowHeight};return react_default.a.createElement("div",{ref:this.saveRef("wrapper"),className:"wrapper",style:wrapperStyle,onScroll:throttle_default()(this.handleScroll,50)},react_default.a.createElement("div",{style:innerWrapperStyle},visibleRows.map(item=>rowRenderer(item))))}}var src=src_VirtualList;function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={},_ref2=Object(esm.mdx)(blocks.Meta,{title:"VirtualList",component:src,mdxType:"Meta"});function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),_ref2,Object(esm.mdx)("h1",{id:"virtuallist"},"VirtualList"),Object(esm.mdx)("h2",{id:"列表项是固定高度，加载-10-万条数据"},"列表项是固定高度，加载 10 万条数据"),Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"basic",height:"400px",mdxType:"Story"},(function(){var data=_toConsumableArray(Array(1e5)).map((function(value,index){return index}));return Object(esm.mdx)(src,{height:300,rowCount:1e5,rowHeight:48,rowRenderer:function renderCell(_ref3){var index=_ref3.index,style=_ref3.style;return Object(esm.mdx)("div",{key:index,style:_objectSpread({display:"flex",alignItems:"center",boxSizing:"border-box",height:"48px",borderBottom:"1px solid #e0e0e0"},style)},"虚拟列表测试数据-".concat(data[index]))},mdxType:"VirtualList"})}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var basic=function(){var data=_toConsumableArray(Array(1e5)).map((function(value,index){return index}));return Object(esm.mdx)(src,{height:300,rowCount:1e5,rowHeight:48,rowRenderer:function renderCell(_ref4){var index=_ref4.index,style=_ref4.style;return Object(esm.mdx)("div",{key:index,style:_objectSpread({display:"flex",alignItems:"center",boxSizing:"border-box",height:"48px",borderBottom:"1px solid #e0e0e0"},style)},"虚拟列表测试数据-".concat(data[index]))}})};basic.displayName="basic",basic.story={},basic.story.name="basic",basic.story.parameters={mdxSource:"() => {\n  const data = [...Array(100000)].map((value, index) => index);\n\n  const renderCell = ({\n    index,\n    style\n  }) => {\n    return <div key={index} style={{\n      display: 'flex',\n      alignItems: 'center',\n      boxSizing: 'border-box',\n      height: '48px',\n      borderBottom: '1px solid #e0e0e0',\n      ...style\n    }}>\n                        {`虚拟列表测试数据-${data[index]}`}\n                    </div>;\n  };\n\n  return <VirtualList height={300} rowCount={100000} rowHeight={48} rowRenderer={renderCell} />;\n}"};var componentMeta={title:"VirtualList",includeStories:["basic"]};componentMeta.parameters=componentMeta.parameters||{};var _ref5=Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:{basic:"basic"},mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null));componentMeta.parameters.docs=_objectSpread(_objectSpread({},componentMeta.parameters.docs||{}),{},{page:function page(){return _ref5}});__webpack_exports__.default=componentMeta;basic.__docgenInfo={description:"",methods:[],displayName:"basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/demo/VirtualList.stories.mdx"]={name:"basic",docgenInfo:basic.__docgenInfo,path:"src/demo/VirtualList.stories.mdx"})},443:function(module,exports,__webpack_require__){__webpack_require__(444),__webpack_require__(586),__webpack_require__(587),__webpack_require__(1238),__webpack_require__(1239),module.exports=__webpack_require__(1249)},506:function(module,exports){}},[[443,1,2]]]);
//# sourceMappingURL=main.127db608d684d411106c.bundle.js.map