// Your code will go here
// open up your console - if everything loaded properly you should see 0.3.0

var mobileNet;
var video;
var label = '';

function modelReady() {
    console.log('Model is Ready!');
    mobileNet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        label = results[0].label;
        mobileNet.predict(gotResults);
    }
}

function setup() {
    createCanvas(640, 550);
    //Capture the live feed
    video = createCapture(VIDEO);
    video.hide();
    background(0);

    mobileNet = ml5.imageClassifier('MobileNet', video, modelReady);

}

function draw() {
    background(0);
    image(video, 0, 0);
    fill(200);
    textSize(32);
    text(label, 10, height - 20);
}
