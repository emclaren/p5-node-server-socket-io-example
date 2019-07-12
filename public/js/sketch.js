var socket;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255,0, 255);
  socket = io.connect('https://secure-sierra-92770.herokuapp.com/')
  socket.on('mouse', newDrawing)
}


function newDrawing(data){
	fill(100, 255,120);
	ellipse(data.x, data.y, 36, 36);
}
function mouseDragged(){

	console.log('sending :'+mouseX +","+ mouseY)
	 ellipse(mouseX,mouseY,50,50)

	 var data={
	 	x: mouseX,
	 	y: mouseY
	 }
	 socket.emit('mouse',data)
}
function draw() {
  // put drawing code here
 

}