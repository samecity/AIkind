function $class(obj){
	var _class = obj.init;
	for(let key in obj){
		_class.prototype[key] = obj[key];
	}
	return _class;
}

var _ = new $class({
	element:'',
	ids:[],
	tags:[],
	nodes:[],
	doms:[],
	cls:[],
	init:function(ele){
		var op = ele.split(1);
		switch(ele.split(0,1)){
			case '.': 
				this.element = (typeof this.cls[op] == 'undefinded') ? this.cls[op]	= document.getElementByClass(op) ? this.cls[op];
			case '#':
				this.element = (typeof this.ids[op] == 'undefinded') ? this.ids[op] = document.getElementById(op) ? this.ids[op];
		}
	}	
})();

var $ = function(){
};
