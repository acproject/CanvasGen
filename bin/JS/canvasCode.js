window.onload = function() {
	var canvasId     = "bobId";
	var canvasName   = "bob";
	var canvasWidth  = "200";
	var canvasHeight = "200";
	var canvas = document.createElement('canvas');
	canvas.id  = canvasId;
	canvas.setAttribute("height",canvasWidth);
	canvas.setAttribute("width",canvasHeight);
	document.body.appendChild(canvas);
	var context = canvas.getContext('2d');
	var x0 = "100";
	var y0 = "24";
	context.beginPath();
	context.moveTo(x0,y0);
	var px1 = "24";
	var py1 = "99";
	context.lineTo(px1,py1);
	var px2 = "207";
	var py2 = "84";
	context.lineTo(px2,py2);
	var px3 = "22";
	var py3 = "4";
	context.lineTo(px3,py3);
	var px4 = "50";
	var py4 = "40";
	context.lineTo(px4,py4);
	var px5 = "40";
	var py5 = "55";
	context.lineTo(px5,py5);
	var px6 = "145";
	var py6 = "135";
	context.lineTo(px6,py6);
	var freeDrawStroke7 = "blue";
	var freeDrawColor7  = "1";
	context.lineWidth = freeDrawStroke7;
    context.strokeStyle = freeDrawColor7;
	context.stroke();	
	var x8 = "10";
	var y8 = "22";
	context.beginPath();
	context.moveTo(x8,y8);
	var px9 = "22";
	var py9 = "24";
	context.lineTo(px9,py9);
	var px10 = "33";
	var py10 = "33";
	context.lineTo(px10,py10);
	var px11 = "40";
	var py11 = "47";
	context.lineTo(px11,py11);
	var px12 = "50";
	var py12 = "39";
	context.lineTo(px12,py12);
	var px13 = "60";
	var py13 = "88";
	context.lineTo(px13,py13);
	var px14 = "100";
	var py14 = "100";
	context.lineTo(px14,py14);
	var freeDrawStroke15 = "blue";
	var freeDrawColor15  = "1";
	context.lineWidth = freeDrawStroke15;
    context.strokeStyle = freeDrawColor15;
	context.stroke();	
}
