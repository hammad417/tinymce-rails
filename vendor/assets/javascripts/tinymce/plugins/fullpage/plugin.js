/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.2.0 (2020-02-13)
 */
!function(m){"use strict";function f(t){return n({validate:!1,root_name:"#document"}).parse(t,{format:"xhtml"})}function g(t){return t.replace(/<\/?[A-Z]+/g,function(t){return t.toLowerCase()})}var i=function(t){function e(){return n}var n=t;return{get:e,set:function(t){n=t},clone:function(){return i(e())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),e=function(){return(e=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var l in e=arguments[n])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t}).apply(this,arguments)},p=tinymce.util.Tools.resolve("tinymce.util.Tools"),n=tinymce.util.Tools.resolve("tinymce.html.DomParser"),y=tinymce.util.Tools.resolve("tinymce.html.Node"),h=tinymce.util.Tools.resolve("tinymce.html.Serializer"),v=function(t){return t.getParam("fullpage_hide_in_source_view")},r=function(t){return t.getParam("fullpage_default_xml_pi")},o=function(t){return t.getParam("fullpage_default_encoding")},a=function(t){return t.getParam("fullpage_default_font_family")},c=function(t){return t.getParam("fullpage_default_font_size")},s=function(t){return t.getParam("fullpage_default_text_color")},u=function(t){return t.getParam("fullpage_default_title")},d=function(t){return t.getParam("fullpage_default_doctype","<!DOCTYPE html>")},_=f,b=function(t,e){var n,i,l=f(e),r={};function o(t,e){return t.attr(e)||""}return r.fontface=a(t),r.fontsize=c(t),7===(n=l.firstChild).type&&(r.xml_pi=!0,(i=/encoding="([^"]+)"/.exec(n.value))&&(r.docencoding=i[1])),(n=l.getAll("#doctype")[0])&&(r.doctype="<!DOCTYPE"+n.value+">"),(n=l.getAll("title")[0])&&n.firstChild&&(r.title=n.firstChild.value),p.each(l.getAll("meta"),function(t){var e,n=t.attr("name"),i=t.attr("http-equiv");n?r[n.toLowerCase()]=t.attr("content"):"Content-Type"===i&&(e=/charset\s*=\s*(.*)\s*/gi.exec(t.attr("content")))&&(r.docencoding=e[1])}),(n=l.getAll("html")[0])&&(r.langcode=o(n,"lang")||o(n,"xml:lang")),r.stylesheets=[],p.each(l.getAll("link"),function(t){"stylesheet"===t.attr("rel")&&r.stylesheets.push(t.attr("href"))}),(n=l.getAll("body")[0])&&(r.langdir=o(n,"dir"),r.style=o(n,"style"),r.visited_color=o(n,"vlink"),r.link_color=o(n,"link"),r.active_color=o(n,"alink")),r},x=function(t,r,e){var o,n,i,a,l,c=t.dom;function s(t,e,n){t.attr(e,n||undefined)}function u(t){n.firstChild?n.insert(t,n.firstChild):n.append(t)}o=f(e),(n=o.getAll("head")[0])||(a=o.getAll("html")[0],n=new y("head",1),a.firstChild?a.insert(n,a.firstChild,!0):a.append(n)),a=o.firstChild,r.xml_pi?(l='version="1.0"',r.docencoding&&(l+=' encoding="'+r.docencoding+'"'),7!==a.type&&(a=new y("xml",7),o.insert(a,o.firstChild,!0)),a.value=l):a&&7===a.type&&a.remove(),a=o.getAll("#doctype")[0],r.doctype?(a||(a=new y("#doctype",10),r.xml_pi?o.insert(a,o.firstChild):u(a)),a.value=r.doctype.substring(9,r.doctype.length-1)):a&&a.remove(),a=null,p.each(o.getAll("meta"),function(t){"Content-Type"===t.attr("http-equiv")&&(a=t)}),r.docencoding?(a||((a=new y("meta",1)).attr("http-equiv","Content-Type"),a.shortEnded=!0,u(a)),a.attr("content","text/html; charset="+r.docencoding)):a&&a.remove(),a=o.getAll("title")[0],r.title?(a?a.empty():u(a=new y("title",1)),a.append(new y("#text",3)).value=r.title):a&&a.remove(),p.each("keywords,description,author,copyright,robots".split(","),function(t){var e,n,i=o.getAll("meta"),l=r[t];for(e=0;e<i.length;e++)if((n=i[e]).attr("name")===t)return void(l?n.attr("content",l):n.remove());l&&((a=new y("meta",1)).attr("name",t),a.attr("content",l),a.shortEnded=!0,u(a))});var d={};return p.each(o.getAll("link"),function(t){"stylesheet"===t.attr("rel")&&(d[t.attr("href")]=t)}),p.each(r.stylesheets,function(t){d[t]||((a=new y("link",1)).attr({rel:"stylesheet",text:"text/css",href:t}),a.shortEnded=!0,u(a)),delete d[t]}),p.each(d,function(t){t.remove()}),(a=o.getAll("body")[0])&&(s(a,"dir",r.langdir),s(a,"style",r.style),s(a,"vlink",r.visited_color),s(a,"link",r.link_color),s(a,"alink",r.active_color),c.setAttribs(t.getBody(),{style:r.style,dir:r.dir,vLink:r.visited_color,link:r.link_color,aLink:r.active_color})),(a=o.getAll("html")[0])&&(s(a,"lang",r.langcode),s(a,"xml:lang",r.langcode)),n.firstChild||n.remove(),(i=h({validate:!1,indent:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"}).serialize(o)).substring(0,i.indexOf("</body>"))},l=function(i,l){var r=b(i,l.get()),t=e(e({},{title:"",keywords:"",description:"",robots:"",author:"",docencoding:""}),r);i.windowManager.open({title:"Metadata and Document Properties",size:"normal",body:{type:"panel",items:[{name:"title",type:"input",label:"Title"},{name:"keywords",type:"input",label:"Keywords"},{name:"description",type:"input",label:"Description"},{name:"robots",type:"input",label:"Robots"},{name:"author",type:"input",label:"Author"},{name:"docencoding",type:"input",label:"Encoding"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:t,onSubmit:function(t){var e=t.getData(),n=x(i,p.extend(r,e),l.get());l.set(n),t.close()}})},k=function(t,e){t.addCommand("mceFullPageProperties",function(){l(t,e)})},C=function(t,e){return p.each(t,function(t){e=e.replace(t,function(t){return"\x3c!--mce:protected "+escape(t)+"--\x3e"})}),e},A=function(t){return t.replace(/<!--mce:protected ([\s\S]*?)-->/g,function(t,e){return unescape(e)})},w=p.each,P=function(t){var e,n="",i="";if(r(t)){var l=o(t);n+='<?xml version="1.0" encoding="'+(l||"ISO-8859-1")+'" ?>\n'}return n+=d(t),n+="\n<html>\n<head>\n",(e=u(t))&&(n+="<title>"+e+"</title>\n"),(e=o(t))&&(n+='<meta http-equiv="Content-Type" content="text/html; charset='+e+'" />\n'),(e=a(t))&&(i+="font-family: "+e+";"),(e=c(t))&&(i+="font-size: "+e+";"),(e=s(t))&&(i+="color: "+e+";"),n+="</head>\n<body"+(i?' style="'+i+'"':"")+">\n"},T=function(e,n,i){e.on("BeforeSetContent",function(t){!function(t,e,n,i){var l,r,o,a,c="",s=t.dom;if(!(i.selection||(o=C(t.settings.protect,i.content),"raw"===i.format&&e.get()||i.source_view&&v(t)))){0!==o.length||i.source_view||(o=p.trim(e.get())+"\n"+p.trim(o)+"\n"+p.trim(n.get())),-1!==(l=(o=o.replace(/<(\/?)BODY/gi,"<$1body")).indexOf("<body"))?(l=o.indexOf(">",l),e.set(g(o.substring(0,l+1))),-1===(r=o.indexOf("</body",l))&&(r=o.length),i.content=p.trim(o.substring(l+1,r)),n.set(g(o.substring(r)))):(e.set(P(t)),n.set("\n</body>\n</html>")),a=_(e.get()),w(a.getAll("style"),function(t){t.firstChild&&(c+=t.firstChild.value)});var u=a.getAll("body")[0];u&&s.setAttribs(t.getBody(),{style:u.attr("style")||"",dir:u.attr("dir")||"",vLink:u.attr("vlink")||"",link:u.attr("link")||"",aLink:u.attr("alink")||""}),s.remove("fullpage_styles");var d=t.getDoc().getElementsByTagName("head")[0];if(c)s.add(d,"style",{id:"fullpage_styles"}).appendChild(m.document.createTextNode(c));var f={};p.each(d.getElementsByTagName("link"),function(t){"stylesheet"===t.rel&&t.getAttribute("data-mce-fullpage")&&(f[t.href]=t)}),p.each(a.getAll("link"),function(t){var e=t.attr("href");if(!e)return!0;f[e]||"stylesheet"!==t.attr("rel")||s.add(d,"link",{rel:"stylesheet",text:"text/css",href:e,"data-mce-fullpage":"1"}),delete f[e]}),p.each(f,function(t){t.parentNode.removeChild(t)})}}(e,n,i,t)}),e.on("GetContent",function(t){!function(t,e,n,i){i.selection||i.source_view&&v(t)||(i.content=A(p.trim(e)+"\n"+p.trim(i.content)+"\n"+p.trim(n)))}(e,n.get(),i.get(),t)})},O=function(t){t.ui.registry.addButton("fullpage",{tooltip:"Metadata and document properties",icon:"document-properties",onAction:function(){t.execCommand("mceFullPageProperties")}}),t.ui.registry.addMenuItem("fullpage",{text:"Metadata and document properties",icon:"document-properties",onAction:function(){t.execCommand("mceFullPageProperties")}})};!function D(){t.add("fullpage",function(t){var e=i(""),n=i("");k(t,e),O(t),T(t,e,n)})}()}(window);