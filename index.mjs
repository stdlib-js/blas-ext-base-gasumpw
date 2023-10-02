// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.0-esm/index.mjs";function n(r,s,i,f){var a,o,d,m,u,l,p,j,h,v,b,c,x;if(r<=0)return 0;if(1===r||0===i)return e(s[f]);if(a=f,r<8){for(b=0,x=0;x<r;x++)b+=e(s[a]),a+=i;return b}if(r<=128){for(o=e(s[a]),d=e(s[a+i]),m=e(s[a+2*i]),u=e(s[a+3*i]),l=e(s[a+4*i]),p=e(s[a+5*i]),j=e(s[a+6*i]),h=e(s[a+7*i]),a+=8*i,v=r%8,x=8;x<r-v;x+=8)o+=e(s[a]),d+=e(s[a+i]),m+=e(s[a+2*i]),u+=e(s[a+3*i]),l+=e(s[a+4*i]),p+=e(s[a+5*i]),j+=e(s[a+6*i]),h+=e(s[a+7*i]),a+=8*i;for(b=o+d+(m+u)+(l+p+(j+h));x<r;x++)b+=e(s[a]),a+=i;return b}return c=t(r/2),n(c-=c%8,s,i,a)+n(r-c,s,i,a+c*i)}function s(r,t,s){var i,f,a;if(r<=0)return 0;if(1===r||0===s)return e(t[0]);if(i=s<0?(1-r)*s:0,r<8){for(f=0,a=0;a<r;a++)f+=e(t[i]),i+=s;return f}return n(r,t,s,i)}r(s,"ndarray",n);export{s as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
