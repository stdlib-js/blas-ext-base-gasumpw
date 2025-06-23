"use strict";var I=function(o,v){return function(){return v||o((v={exports:{}}).exports,v),v.exports}};var Z=I(function(V,S){
var R=require('@stdlib/math-base-special-floor/dist'),f=require('@stdlib/math-base-special-abs/dist'),h=128;function K(o,v,r,E){var a,n,u,b,g,m,w,O,B,C,p,l,e,q,y;if(a=v.data,n=v.accessors[0],u=E,r===0)return o*f(n(a,u));if(o<8){for(e=0,y=0;y<o;y++)e+=f(n(a,u)),u+=r;return e}if(o<=h){for(b=f(n(a,u)),g=f(n(a,u+r)),m=f(n(a,u+2*r)),w=f(n(a,u+3*r)),O=f(n(a,u+4*r)),B=f(n(a,u+5*r)),C=f(n(a,u+6*r)),p=f(n(a,u+7*r)),u+=8*r,l=o%8,y=8;y<o-l;y+=8)b+=f(n(a,u)),g+=f(n(a,u+r)),m+=f(n(a,u+2*r)),w+=f(n(a,u+3*r)),O+=f(n(a,u+4*r)),B+=f(n(a,u+5*r)),C+=f(n(a,u+6*r)),p+=f(n(a,u+7*r)),u+=8*r;for(e=b+g+(m+w)+(O+B+(C+p)),y;y<o;y++)e+=f(n(a,u)),u+=r;return e}return q=R(o/2),q-=q%8,K(q,v,r,u)+K(o-q,v,r,u+q*r)}S.exports=K
});var M=I(function(W,j){
var z=require('@stdlib/array-base-arraylike2object/dist'),A=require('@stdlib/math-base-special-floor/dist'),c=require('@stdlib/math-base-special-abs/dist'),D=Z(),F=128;function L(o,v,r,E){var a,n,u,b,g,m,w,O,B,C,p,l,e,q;if(o<=0)return 0;if(e=z(v),e.accessorProtocol)return D(o,e,r,E);if(a=E,r===0)return o*c(v[a]);if(o<8){for(p=0,q=0;q<o;q++)p+=c(v[a]),a+=r;return p}if(o<=F){for(n=c(v[a]),u=c(v[a+r]),b=c(v[a+2*r]),g=c(v[a+3*r]),m=c(v[a+4*r]),w=c(v[a+5*r]),O=c(v[a+6*r]),B=c(v[a+7*r]),a+=8*r,C=o%8,q=8;q<o-C;q+=8)n+=c(v[a]),u+=c(v[a+r]),b+=c(v[a+2*r]),g+=c(v[a+3*r]),m+=c(v[a+4*r]),w+=c(v[a+5*r]),O+=c(v[a+6*r]),B+=c(v[a+7*r]),a+=8*r;for(p=n+u+(b+g)+(m+w+(O+B)),q;q<o;q++)p+=c(v[a]),a+=r;return p}return l=A(o/2),l-=l%8,L(l,v,r,a)+L(o-l,v,r,a+l*r)}j.exports=L
});var s=I(function(Y,k){
var G=require('@stdlib/strided-base-stride2offset/dist'),H=M();function J(o,v,r){return H(o,v,r,G(o,r))}k.exports=J
});var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=s(),T=M();Q(P,"ndarray",T);module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
