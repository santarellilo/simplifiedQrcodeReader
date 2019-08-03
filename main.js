var video = document.getElementById("video");
var canvasElement = document.getElementById("canvas");
var canvas = canvasElement.getContext("2d");

const constraints = {audio:false, video:{facingMode:"environment"}}

//stream function
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  video.srcObject = stream;
})
.catch(function(err) {
  return error;
});