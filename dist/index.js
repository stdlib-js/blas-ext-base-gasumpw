"use strict";var B=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var O=B(function(A,C){
var M=require('@stdlib/math-base-special-floor/dist'),u=require('@stdlib/math-base-special-abs/dist'),R=128;function w(n,r,v,L){var a,q,c,p,y,m,g,l,s,b,o,e,f;if(n<=0)return 0;if(a=L,v===0)return n*u(r[a]);if(n<8){for(o=0,f=0;f<n;f++)o+=u(r[a]),a+=v;return o}if(n<=R){for(q=u(r[a]),c=u(r[a+v]),p=u(r[a+2*v]),y=u(r[a+3*v]),m=u(r[a+4*v]),g=u(r[a+5*v]),l=u(r[a+6*v]),s=u(r[a+7*v]),a+=8*v,b=n%8,f=8;f<n-b;f+=8)q+=u(r[a]),c+=u(r[a+v]),p+=u(r[a+2*v]),y+=u(r[a+3*v]),m+=u(r[a+4*v]),g+=u(r[a+5*v]),l+=u(r[a+6*v]),s+=u(r[a+7*v]),a+=8*v;for(o=q+c+(p+y)+(m+g+(l+s)),f;f<n;f++)o+=u(r[a]),a+=v;return o}return e=M(n/2),e-=e%8,w(e,r,v,a)+w(n-e,r,v,a+e*v)}C.exports=w
});var I=B(function(D,E){
var S=require('@stdlib/strided-base-stride2offset/dist'),Z=O();function h(n,r,v){return Z(n,r,v,S(n,v))}E.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),K=I(),k=O();j(K,"ndarray",k);module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
