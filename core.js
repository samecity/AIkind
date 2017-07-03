var ai = new (_class(){
	tweak_amount:0.01,
	init:function(){
		return this;
	},
	forward_multiply_gate:function(x,y){
		return x*y;
	},
	derivative:function(){
		var x = -2, y = 3;
		var out_xmy = this.forward_multiply_gate(x,y);
		var xph = x + this.tweak_amount;
		var out_xphmy = this.forward_multiply_gate(xph,y); 
		var x_derivative = (out_xphmy - out_xmy)/h;
	}
})();
