function $class(obj){
	var _class = obj.init;
	for(let key in obj){
		_class.prototype[key] = obj[key];
	}
	return _class;
}

var $ = new $class({
	element:'',
	ids:[],
	tags:[],
	nodes:[],
	doms:[],
	init:function(){
		var opra
		switch(){
			case '.': 
			   this.element = (typeof )
		}
	},
	
})();
