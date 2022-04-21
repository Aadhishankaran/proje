function preload() { 
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video,100, 80 , 300, 250);
    
    stroke(168 , 10 , 10)
    fill (168, 10 , 10)

    square(40,40,50)
    square(460,40,50)
    square(40,360,50)
    square(460,360,50)

    stroke(50, 168, 82)
    fill (50, 168, 82)

    
    circle(63,27,375,25)
    circle(63,347,375,25)
    circle(27,63,25,275)
    circle(448,63,25,275)
}

function take_snapshot(){
    save('student_name.png');
}

