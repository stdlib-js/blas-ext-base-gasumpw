"use strict";var E=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var B=E(function(z,I){
var S=require('@stdlib/math-base-special-floor/dist'),n=require('@stdlib/math-base-special-abs/dist'),Z=128;function O(v,r,u,o){var a,e,p,m,l,y,b,g,w,C,q,c,f;if(v<=0)return 0;if(v===1||u===0)return n(r[o]);if(a=o,v<8){for(q=0,f=0;f<v;f++)q+=n(r[a]),a+=u;return q}if(v<=Z){for(e=n(r[a]),p=n(r[a+u]),m=n(r[a+2*u]),l=n(r[a+3*u]),y=n(r[a+4*u]),b=n(r[a+5*u]),g=n(r[a+6*u]),w=n(r[a+7*u]),a+=8*u,C=v%8,f=8;f<v-C;f+=8)e+=n(r[a]),p+=n(r[a+u]),m+=n(r[a+2*u]),l+=n(r[a+3*u]),y+=n(r[a+4*u]),b+=n(r[a+5*u]),g+=n(r[a+6*u]),w+=n(r[a+7*u]),a+=8*u;for(q=e+p+(m+l)+(y+b+(g+w)),f;f<v;f++)q+=n(r[a]),a+=u;return q}return c=S(v/2),c-=c%8,O(c,r,u,a)+O(v-c,r,u,a+c*u)}I.exports=O
});var M=E(function(A,L){
var K=require('@stdlib/math-base-special-abs/dist'),h=B();function i(v,r,u){var o,a,e;if(v<=0)return 0;if(v===1||u===0)return K(r[0]);if(u<0?o=(1-v)*u:o=0,v<8){for(a=0,e=0;e<v;e++)a+=K(r[o]),o+=u;return a}return h(v,r,u,o)}L.exports=i
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=M(),k=B();j(R,"ndarray",k);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
