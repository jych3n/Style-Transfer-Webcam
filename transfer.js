let style;
let video;
let result;

function setup() {
  createCanvas(640, 480).parent('canvas');
  video = createCapture(VIDEO);
  video.hide();
  result = createImg('');
  result.hide();
  var model = 'models/wave';
  document.getElementById("wave").onclick = function () {style = ml5.styleTransfer('models/wave', video, modelLoaded);};
  document.getElementById("fuji").onclick = function () {style = ml5.styleTransfer('models/fujichoco', video, modelLoaded);};
  document.getElementById("muse").onclick = function () {style = ml5.styleTransfer('models/la_muse', video, modelLoaded);};
  document.getElementById("rain").onclick = function () {style = ml5.styleTransfer('models/rain_princess', video, modelLoaded);};
  document.getElementById("pollock").onclick = function () {style = ml5.styleTransfer('models/pollock', video, modelLoaded);};
  document.getElementById("mathura").onclick = function () {style = ml5.styleTransfer('models/mathura', video, modelLoaded);};
  document.getElementById("fuchun").onclick = function () {style = ml5.styleTransfer('models/fuchun', video, modelLoaded);};
  document.getElementById("udnie").onclick = function () {style = ml5.styleTransfer('models/udnie', video, modelLoaded);};
  style = ml5.styleTransfer(model, video, modelLoaded);
}

function draw(){
  image(result, 0, 0, 640, 480);
}

function modelLoaded() {
  select('#status').html('Model Loaded');
  style.transfer(gotResult);
}

function gotResult(err, img) {
  result.attribute('src', img.src);
  style.transfer(gotResult);
}
