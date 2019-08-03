import "./jsQR.js";
var video = document.createElement("video");
var output = document.getElementById("output");
video.setAttribute('autoplay', true);
video.setAttribute('playsinline', true);
video.setAttribute('class', "col-8")
var canvasElement = document.getElementById("canvas");
var canvas = canvasElement.getContext("2d");
var button = document.getElementById("scan");

const constraints = {audio:false, video:{facingMode:"environment"}}

//stream function
function stream(){
	navigator.mediaDevices.getUserMedia(constraints)
		.then(function(stream) {
  			video.srcObject = stream;
  			video.play();
		})
		.catch(function(err) {
  			console.log( 'error: ', err );
		})
};
document.body.appendChild(video);
function detect(){
	canvasElement.height = video.videoHeight;
	canvasElement.width = video.videoWidth;
	canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
	var imageData = canvas.getImageData = (0, 0, canvasElement.width, canvasElement.height);
	code = jsQR(imageData.data, imageData.width, imageData.height, {inversionAttempts: "dontInvert",});
	output.innerHTML = code.data;

};

//onload
document.onload = stream();
button.addEventListener("click", detect());
