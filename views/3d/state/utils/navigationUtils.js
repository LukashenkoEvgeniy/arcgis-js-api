// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../lib/gl-matrix","./primitiveIntersectionUtils","../../support/earthUtils","../../support/mathUtils"],function(e,t,r,a,c,n){function i(e,t,r){return r[0]=t[0]/e.fullWidth,r[1]=t[1]/e.fullHeight,r}function d(e,t,c,n,i){void 0===i&&(i=!1);var d=q;if(a.createRay(t,c,d,i),!a.intersectSphere(e,d,n))return m(e,d,n),!1;if(r.vec3d.dist2(e.center,d.origin)<e.radius*e.radius){var v=o(e,d.origin),s=-l(d.origin,n,U),u=s-v;if(u>0){var h=G;return r.mat4d.identity(h),r.mat4d.rotate(h,-u,U),r.vec3d.subtract(n,e.center),r.mat4d.multiplyVec3(h,n,n),r.vec3d.add(n,e.center),!1}}return!0}function o(e,t){var a=U;r.vec3d.subtract(t,e.center,a);var c=Math.abs(r.vec3d.length(a)-e.radius);return Math.acos(e.radius/(c+e.radius))}function v(e,t,r,c){var n=q;return a.createRay(t,r,n,!0),a.intersectSphere(e,n,c)}function l(e,t,a){r.vec3d.cross(e,t,a);var c=r.vec3d.dot(e,t)/(r.vec3d.length(e)*r.vec3d.length(t));return-n.acos(c)}function s(e,t,a){var c=U,n=Z,i=_;r.vec3d.set(e,n),r.vec3d.set(t,i);var d=r.vec3d.dot(n,a),o=r.vec3d.dot(i,a);r.vec3d.scale(a,d,c),r.vec3d.subtract(n,c),r.vec3d.normalize(n),r.vec3d.scale(a,o,c),r.vec3d.subtract(i,c),r.vec3d.normalize(i);var v=r.vec3d.dot(n,i);r.vec3d.cross(a,n,c);var l=r.vec3d.dot(i,c);return Math.atan2(l,v)}function u(e,t,a){r.vec3d.set(t,a.normal),a.d=-r.vec3d.dot(t,e)}function h(e,t){t.d=-r.vec3d.dot(t.normal,e)}function f(e){for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e}function p(e,t,a,c){var n=G;r.mat4d.identity(n),r.mat4d.rotate(n,c,a),r.vec3d.subtract(e.eye,t),r.mat4d.multiplyVec3(n,e.eye,e.eye),r.vec3d.add(e.eye,t),r.vec3d.subtract(e.center,t),r.mat4d.multiplyVec3(n,e.center,e.center),r.vec3d.add(e.center,t),r.mat4d.multiplyVec3(n,e.up,e.up),e.markViewDirty()}function m(e,t,a){var c=U,i=Z,d=w;r.vec3d.subtract(t.origin,e.center,i),r.vec3d.cross(i,t.direction,c),r.vec3d.cross(c,i,a),r.vec3d.scale(a,1/r.vec3d.length(a)*e.radius);var o=-n.asin(e.radius/r.vec3d.length(t.origin));r.mat4d.identity(d),r.mat4d.rotate(d,o,c),r.mat4d.multiplyVec3(d,a)}function P(e,t,a,c){return W.radius=e,r.vec3d.set3(0,0,0,W.center),r.vec3d.set(t,q.origin),r.vec3d.set(a,q.direction),m(W,q,c)}function y(e,t,r,c){var n=q;return a.createRay(t,r,n),a.intersectPlane(e,n,c)}function g(e,t,a,n,i){e.intersectManifold(t,a,n,i)||"global"!==e.type||(P(n+c.earthRadius,t,a,j),r.vec3d.add(t,r.vec3d.scale(a,r.vec3d.dist(t,j),j),i))}function b(e,t,a,c){var n=C,i=1-a;r.vec3d.subtract(t,e.eye,n);var d=r.vec3d.length(n),o=d*(1-i);i>=0&&o<c&&(o=c,i=-(o-d)/d),Math.abs(d-o)<1e-6||(r.vec3d.scale(n,i),r.vec3d.add(e.eye,n),r.vec3d.lerp(e.center,t,i))}function M(e,t,a){r.vec2d.set2(t.padding[3]+t.width/2,t.padding[2]+t.height/2,H),v(e,t,H,t.center),r.vec3d.subtract(t.center,t.eye,C);var c=r.vec3d.length(C),n=c*a;Math.abs(c-n)<1e-6||(r.vec3d.scale(C,a),r.vec3d.subtract(t.center,C,t.eye),t.markViewDirty())}function S(e,t,a){r.vec2d.set2(t.x,e.fullHeight-t.y,a)}function V(e,t,a){z(t,a),r.vec3d.normalize(a),r.vec3d.scale(a,e)}function z(e,t){r.vec3d.set3(0,0,0,t);for(var a=0,c=e;a<c.length;a++){var n=c[a];r.vec3d.add(t,n)}r.vec3d.scale(t,1/e.length)}function I(e,t,a){return Math.sin(e/r.vec3d.length(t))*(a+c.earthRadius)}function T(e,t,r){return I(Math.PI/2,t,r)+(e-Math.PI/2)}function A(e,a,c,n){var i=r.vec3d.create(),o={center:r.vec3d.create(),radius:0},l=!0;return e.pickPointInScreen(c,i)?o.radius=r.vec3d.length(i):(a.aboveGround?o.radius=Math.max(r.vec3d.length(a.center),.9*t.Earth.radius):o.radius=r.vec3d.length(a.eye)-a.relativeElevation,n?d(o,a,c,i):l=v(o,a,c,i)),{sphere:o,scenePickPoint:l?i:null}}function E(e,a,c){var n=r.vec3d.length(e.eye),i=n-t.Earth.radius;if(Math.abs(i)>t.VerticalPanTresholds.Elevation)return O.Horizontal;var d=a.radius>n;return e.aboveGround===d?O.Vertical:(r.vec3d.normalize(r.vec3d.subtract(e.eye,c,x)),Math.abs(.5*Math.PI-Math.acos(r.vec3d.dot(c,x)/r.vec3d.length(c)))<t.VerticalPanTresholds.Angle?O.Vertical:O.Horizontal)}function R(e,t,a){r.vec3d.subtract(a,t,F),r.vec3d.subtract(e.eye,F),r.vec3d.subtract(e.center,F),e.markViewDirty()}function k(e,t,r,a){var c=l(r,a,D);p(t,e.center,D,c)}Object.defineProperty(t,"__esModule",{value:!0}),t.Earth={center:r.vec3d.create(),radius:c.earthRadius},t.normalizeCoordinate=i,t.sphereOrSilhouettePointFromScreenPoint=d,t.computeHorizonSphereCapAngle=o,t.intersectSphereFromScreenPoint=v,t.rotationAndAxisFromPoints=l,t.rotationFromPointsAroundAxis=s,t.setPlane=u,t.setPlaneD=h,t.normalizeRotationDelta=f,t.applyRotation=p,t.closestPointOnSphereSilhouette=m,t.closestPointOnCenteredSphereSilhouette=P,t.intersectPlaneFromScreenPoint=y,t.centerOnManifoldSilhouetteFallback=g,t.applyZoomToPoint=b,t.applyZoomOnSphere=M;var H=r.vec2d.create();t.navPointToScreenPoint=S,t.centroidOnSphere=V,t.centroid=z,t.onSurfaceTiltToEyeTiltGlobal=I,t.offSurfaceTiltToEyeTiltGlobal=T;var O;!function(e){e[e.Vertical=0]="Vertical",e[e.Horizontal=1]="Horizontal"}(O=t.PanMode||(t.PanMode={})),t.VerticalPanTresholds={Elevation:3e4,Angle:8/180*Math.PI},t.pickPointAndInitSphere=A,t.decidePanMode=E;var x=r.vec3d.create();t.applyPanPlanar=R;var F=r.vec3d.create();t.applyPanSpherical=k;var D=r.vec3d.create(),w=r.mat4d.create(),G=r.mat4d.create(),C=r.vec3d.create(),U=r.vec3d.create(),Z=r.vec3d.create(),_=r.vec3d.create(),j=r.vec3d.create(),q={origin:r.vec3d.create(),direction:r.vec3d.create()},W={center:r.vec3d.create(),radius:0}});