// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

!function(d){var f=function(b,c){this.el=d(b);this.options=d.extend({},d.fn.typed.defaults,c);this.isInput=this.el.is("input");this.attr=this.options.attr;this.showCursor=this.isInput?!1:this.options.showCursor;this.elContent=this.attr?this.el.attr(this.attr):this.el.text();this.contentType=this.options.contentType;this.typeSpeed=this.options.typeSpeed;this.startDelay=this.options.startDelay;this.backSpeed=this.options.backSpeed;this.backDelay=this.options.backDelay;this.stringsElement=this.options.stringsElement;
this.strings=this.options.strings;this.stopNum=this.arrayPos=this.strPos=0;this.loop=this.options.loop;this.loopCount=this.options.loopCount;this.curLoop=0;this.stop=!1;this.cursorChar=this.options.cursorChar;this.shuffle=this.options.shuffle;this.sequence=[];this.build()};f.prototype={constructor:f,init:function(){var b=this;b.timeout=setTimeout(function(){for(var c=0;c<b.strings.length;++c)b.sequence[c]=c;b.shuffle&&(b.sequence=b.shuffleArray(b.sequence));b.typewrite(b.strings[b.sequence[b.arrayPos]],
b.strPos)},b.startDelay)},build:function(){var b=this;!0===this.showCursor&&(this.cursor=d('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor));if(this.stringsElement){b.strings=[];this.stringsElement.hide();var c=this.stringsElement.find("p");d.each(c,function(a,c){b.strings.push(d(c).html())})}this.init()},typewrite:function(b,c){if(!0!==this.stop){var a=this;a.timeout=setTimeout(function(){var g=0,e=b.substr(c);if("^"===e.charAt(0)){var d=1;/^\^\d+/.test(e)&&(e=
/\d+/.exec(e)[0],d+=e.length,g=parseInt(e));b=b.substring(0,c)+b.substring(c+d)}if("html"===a.contentType&&(e=b.substr(c).charAt(0),"<"===e||"&"===e)){for(var f=d="",f="<"===e?">":";";b.substr(c).charAt(0)!==f;)d+=b.substr(c).charAt(0),c++;c++;d+=f}a.timeout=setTimeout(function(){if(c===b.length){a.options.onStringTyped(a.arrayPos);if(a.arrayPos===a.strings.length-1&&(a.options.callback(),a.curLoop++,!1===a.loop||a.curLoop===a.loopCount))return;a.timeout=setTimeout(function(){a.backspace(b,c)},a.backDelay)}else{0===
c&&a.options.preStringTyped(a.arrayPos);var d=b.substr(0,c+1);a.attr?a.el.attr(a.attr,d):a.isInput?a.el.val(d):"html"===a.contentType?a.el.html(d):a.el.text(d);c++;a.typewrite(b,c)}},g)},Math.round(70*Math.random())+this.typeSpeed)}},backspace:function(b,c){if(!0!==this.stop){var a=this;a.timeout=setTimeout(function(){if("html"===a.contentType&&">"===b.substr(c).charAt(0)){for(var d="";"<"!==b.substr(c).charAt(0);)d-=b.substr(c).charAt(0),c--;c--}d=b.substr(0,c);a.attr?a.el.attr(a.attr,d):a.isInput?
a.el.val(d):"html"===a.contentType?a.el.html(d):a.el.text(d);c>a.stopNum?(c--,a.backspace(b,c)):c<=a.stopNum&&(a.arrayPos++,a.arrayPos===a.strings.length?(a.arrayPos=0,a.shuffle&&(a.sequence=a.shuffleArray(a.sequence)),a.init()):a.typewrite(a.strings[a.sequence[a.arrayPos]],c))},Math.round(70*Math.random())+this.backSpeed)}},shuffleArray:function(b){var c,a,d=b.length;if(d)for(;--d;)a=Math.floor(Math.random()*(d+1)),c=b[a],b[a]=b[d],b[d]=c;return b},reset:function(){clearInterval(this.timeout);var b=
this.el.attr("id");this.el.after('<span id="'+b+'"/>');this.el.remove();"undefined"!==typeof this.cursor&&this.cursor.remove();this.options.resetCallback()}};d.fn.typed=function(b){return this.each(function(){var c=d(this),a=c.data("typed"),g="object"==typeof b&&b;a||c.data("typed",a=new f(this,g));if("string"==typeof b)a[b]()})};d.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,
backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);
