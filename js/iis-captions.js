!function(t){"use strict";return t.Slider.prototype.addCaptions=function(){t._addClass(this._attributes.container,"iis-has-captions"),Array.prototype.forEach.call(this._attributes.slides,function(i,e){var n=document.createElement("div");t._addClass(n,"iis-caption");var a="";if(i.getAttribute("title")&&(a+='<div class="iis-caption-title">'+i.getAttribute("title")+"</div>"),i.getAttribute("data-caption")){var s=i.getAttribute("data-caption");if("#"==s.substring(0,1)||"."==s.substring(0,1)){var r=document.querySelector(s);r&&(a+='<div class="iis-caption-content">'+r.innerHTML+"</div>")}else a+='<div class="iis-caption-content">'+i.getAttribute("data-caption")+"</div>"}else i.innerHTML&&(a+='<div class="iis-caption-content">'+i.innerHTML+"</div>");i.innerHTML="",a&&(n.innerHTML=a,i.appendChild(n))}.bind(this))},t}(IdealImageSlider);
//# sourceMappingURL=iis-captions.min.js.map