
	/* Start Canvas Initialization */
	
	frame = document.getElementById('frame'); 
	var context = frame.getContext('2d');
	
	/* End Canvas Initialization */
	
	xOffset = 0;
	yOffset = 0;
	
	followID = 0;	
	leaveTrace = true;
	
	gConstant = 10;

	var body = new Image();
	body.src = 'planet.png';
	
	
	window.onload = function(){
		pagesToLoad = ["entities","game"];	
		for (iteration = 0; iteration < pagesToLoad.length; iteration ++){
			var element = document.createElement("script");
			element.src = pagesToLoad[iteration] + ".js";
			document.body.appendChild(element);
		}
	}