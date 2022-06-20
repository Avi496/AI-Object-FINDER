statuss="";
textinput="";
function setup(){
    canvas=createCanvas(600, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector("cocoSSD", modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    textinput=document.getElementById("textinputha").value;
}
function modelloaded(){
    console.log("model loaded!")
    statuss="True";
}
function draw(){
    image(video, 0, 0, 600, 400);
}