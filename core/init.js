function $(element,obj){
	this.element = document.createElement(element);
	return this;
}
//HTML DOM element Operator;
$.prototype = {
	element: NULL,
	ids:[],
	tags:[],
	id:function(id){
		this.ids[] = this.element = document.getElementById(id);
		return this;
	},
	tag:function(tag){
		this.tags[] = this.element = document.getElementByTagName(tag);
		return this;
	}
	set:function(obj){
		for(let type in obj){
			this.element.setAttribute(type,obj[type]);
		}
		return this;
	}
}

function request(path){
	var script = $('script').set({'type':'text/javascript','src':path});
	$.tag('head').element[0].appendChild(script);
}

function js_debug(){
	
}
js_debug.prototype = {
	
}
