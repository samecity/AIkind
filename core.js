var ai = new (_class(){
	tweak_amount:0.01,
	x:-2,
	y:3,
    out_xmy: 0,
	init:function(){
		this.out_xmy = this.forward_multiply_gate(this.x,this.y);
		return this;
	},
	forward_multiply_gate:function(x,y){
		return x * y;
	},
	forward_add_gate:function(x,y){
		return x + y;
	},
	forward:function(x,y,z){
		return this.forward_multiply_gate(this.forward_add_gate(x,y),z);
	},
	derivative:function(){	
		var xph = this.x + this.tweak_amount;
		var out_xphmy = this.forward_multiply_gate(xph,this.y); 
		var x_derivative = (out_xphmy - this.out_xmy)/this.tewak_amount;
		
		var yph = this.y + this.tweak_amount;
		var out_yphmx = this.forward_multiply_gate(xph,this.x);
		var y_derivative = (out_yphmx - this.out_xmy)/this.tewak_amount;
		
		this.x = this.x + this.tweak_amount * x_derivative;
		this.y = this.y + this.tweak_amount * y_derivative;
		var out = this.forward_multiply_gate(this.x,this.y);
				
		return {'x_derivative':x_derivative,'y_derivative':y_derivative};
	},
	gradient:function(){
		var x_gradient = this.y;
		var y_gradient = this.x;
		
		this.x += this.tweak_amount * y_gradient;
		this.y += this.tweak_amount * x_gradient;
		
		var out = this.forward_multiply_gate(this.x,this.y);
		
		return out;
	},
	backward:function(x,y,z){
		var derivative_z = this.forward_add_gate(x,y);
		var derivative_x = this.forward(x,y,z)/derivative_z;
		var derivative_y = this.forward(x,y,z)/derivative_z;
		
		var $x += this.tweak_amount * derivative_z;
		var $y += this.tweak_amount * derivative_y;
		var $z += this.tweak_amount * derivative_z;
		
		return this.forward(x,y,z);
	}
	
})();
