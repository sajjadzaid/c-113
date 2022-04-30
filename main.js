function preload(){

};function setup(){
    canvas=createcanvas(640,480);
    canvas.position(110,250);
    video=createcapture(VIDEO);
    video.hide();

    tint_color=""


}

function take_snapshot(){
    save("Student_name.png");
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}

function draw()
{
var canvas = document. getElementById('circle');
if (canvas. getContext)
{
var ctx = canvas. getContext('2d');
var X = canvas. width / 2;
var Y = canvas. height / 2;
}

function draw()
 { var canvas = document.getElementById('canvas');
  if (canvas.getContext)
   { var context = canvas.getContext('2d');
   context.fillRect(20,20,100,100); context.clearRect(40,40,60,60);
    context.strokeRect(45,45,50,50);
