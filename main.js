img = "";
nose_x = 0 ;
nose_y = 0 ;
mario_x = 325 ;
mario_y = 325 ;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent('game_console');
	posenet = ml5.poseNet(video,modeloaded);
	posenet.on('pose', gotPoses);

	

}

function gotPoses(results)
{
	if(results.length > 0 )
	{
		console.log(results);
		nose_x = results[0].pose.nose.x;
		nose_y = results[0].pose.nose.y;
		
	}
}


function modeloaded(){
	console.log("model is loaded.")
}

function draw() {
	game();
	
}







