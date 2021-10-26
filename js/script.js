// run code as soon as window loads
window.onload = function ()
{
// slime parts

// FACE
var face = new Image();
var faceNum = Math.floor( Math.random() * 12 )+1;
var faceName="images/face" + faceNum + ".png";
face.src = faceName;

// HEAD
var head = new Image();
var headNum = Math.floor( Math.random() * 12 )+1;
var headName="images/head" + headNum + ".png";
head.src = headName;

    // Wait until slime part is loaded and then call the function that displays all images

// FACE
face.onload = function () {
    buildRobot();
}

// HEAD
head.onload = function () {
    buildRobot();
}
    // display all images
    function buildRobot()
    {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 1200;

    // HEAD
    ctx.drawImage(head, ((1200-head.width)/2), 0);

    // FACE
    ctx.drawImage(face, ((1200-face.width)/2), 0);

    }

}
