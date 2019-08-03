var video = document.getElementById("video");
var canvasElement = document.getElementById("canvas");
var canvas = canvasElement.getContext("2d");
var button = getElementById("scan");

const constraints = {audio:false, video:{facingMode:"environment"}}

//stream function
function stream(){
	navigator.mediaDevices.getUserMedia(constraints)
		.then(function(stream) {
  			video.srcObject = stream;
  			video.play();
		})
		.catch(function(err) {
  			return error;
});

canvasElement.height = video.videoHeight;
canvasElement.width = video.videoWidth;
canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

button.onclick(){
	stream();
}