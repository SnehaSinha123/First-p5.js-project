function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    image(video, 0, 0, 640, 480);
     fill("red");
     stroke("red"),
     rect(350, 350, 600, 20);

     fill("green");
     stroke("green")
     circle(350, 50, 70);
     
}

function take_snapshot(){
    save('student_name.png');
}

function apply_filter(){
    tint_color= document.getElementById("color_name").value;
}