
	vVel = Math.sqrt(0.00125);
	new Entity(400,200,3*vVel,0,0.1,5);
	new Entity(400,400,-vVel,0,0.3,5);
	new Entity(0,100,0.5,0,0.6,5);

setInterval(function () {run()}, 1);
function run() {
		if(leaveTrace == false){
			context.clearRect(0,0,frame.width, frame.height);
		}
		for (a = 0; a < entityPool.length; a++){
				entityPool[a].move();
				entityPool[a].forceCalculation();
				entityPool[a].draw();
				entityPool[a].collision();
		}
}