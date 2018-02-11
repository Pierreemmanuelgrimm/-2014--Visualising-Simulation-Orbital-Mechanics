	entityPool = [];
	entityID = 0;
	
	function Entity(x, y, xVel, yVel, mass, diameter){
		this.entityID = entityID;
		this.x = x;
		this.y = y;
		this.xVel = xVel;
		this.yVel = yVel;
		this.xAcc = 0;
		this.yAcc = 0;
	
		this.mass = mass;
		this.diameter = diameter;	
		
		this.xCenter = x + (diameter/2);
		this.yCenter = y + (diameter/2);
		
		entityPool.push(this);
		entityID++;
	}
	Entity.prototype.deleteEntity = function(entityPool){
		if (this.isDead == false){
			var entityIndex = entityPool.indexOf(this);
			entityPool.splice(entityIndex, 1);
			this.isDead = true;
		}
	};
	Entity.prototype.forceCalculation =  function(){
		if (followID != -1){
			if (this.entityID == followID){
				xOffset = this.x - 300;
				yOffset = this.y - 300;
			
			}
		}
		this.xAcc = 0;
		this.yAcc = 0;
		
		for (i = 0; i < entityPool.length; i ++){
			if (entityPool[i] != this){
				deltaX = entityPool[i].xCenter - this.xCenter;
				deltaY = entityPool[i].yCenter - this.yCenter;
				angleOfSeparation = Math.atan2(deltaY,deltaX)
				forceMagnitude = entityPool[i].mass * gConstant /(deltaX*deltaX + deltaY*deltaY)
				this.xAcc += forceMagnitude * Math.cos(angleOfSeparation);
				this.yAcc += forceMagnitude * Math.sin(angleOfSeparation);
			}		
		}	
	};
	Entity.prototype.move = function(){
		this.x += this.xVel;
		this.y += this.yVel;
		
		this.xCenter += this.xVel;
		this.yCenter += this.yVel;
	
		this.xVel += this.xAcc;
		this.yVel += this.yAcc;
	
	}
	Entity.prototype.draw = function(){
		context.drawImage(body,this.x - xOffset, this.y - yOffset, this.diameter, this.diameter);	
	}
	Entity.prototype.collision = function(){
		for (i = 0; i < entityPool.length; i ++){
			if (entityPool[i] != this){
				deltaX = entityPool[i].xCenter - this.xCenter;
				deltaY = entityPool[i].yCenter - this.yCenter;
				distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
				if (distance < (entityPool[i].diameter/2) + (this.diameter/2)){
					this.deleteEntity(entityPool[i]);
				}
			}			
		}
	}
	Entity.prototype.deleteEntity = function(deadEntity){
			var entityIndex = entityPool.indexOf(this);
			entityPool.splice(entityIndex, 1);
			
			var entityIndex = entityPool.indexOf(deadEntity);
			entityPool.splice(entityIndex, 1);
	}