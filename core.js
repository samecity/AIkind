var ai = new (_class(){
	tweak_amount:0.01,
	      
	init:function(){
		return this;
	},
	forward_multiply_gate:function(x,y){
		return x*y;
	},
	derivative:function(){
		var out_xmy = this.forward_multiply_gate(x,y);
		
		var xph = x + this.tweak_amount;
		var out_xphmy = this.forward_multiply_gate(xph,y); 
		var x_derivative = (out_xphmy - out_xmy)/this.tewak_amount;
		
		var yph = y + this.tweak_amount;
		var out_yphmx = this.forward_multiply_gate(xph,x);
		var y_derivative = (out_yphmx - out_xmy)/this.tewak_amount;
		
		x = x + this.tweak_amount * x_derivative;
		y = y + this.tweak_amount * y_derivative;
		var out = this.forward_multiply_gate(x,y);
				
		return {'x_derivative':x_derivative,'y_derivative':y_derivative};
	}
	gradient
	
})();
