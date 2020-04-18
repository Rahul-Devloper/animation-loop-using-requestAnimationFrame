var myDonut=document.querySelector("#donut");
/**var requestAnimationFrame= window.requestAnimationFrame || window.mozRequestAnimationFrame ||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;
**/
var currentPos= 0;
function moveThing(){
    currentPos += 5;
    myDonut.style.left= currentPos + "px";
    window.requestAnimationFrame(moveThing);
}


moveThing();