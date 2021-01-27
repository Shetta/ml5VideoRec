// Your code will go here
// open up your console - if everything loaded properly you should see 0.3.0

var mobileNet;
var video;
var label = '';

function modelReady() {
    console.log('Model is Ready!');
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } 
    else {
        var name = results[0].label;
        mobileNet.predict(gotResults);
    }
}

function setup() {
    createCanvas(640, 550);
    background(0);

    //Capture the live feed
    video = createCapture(VIDEO);
    video.hide();

    mobileNet = ml5.imageClassifier('MobileNet', video, modelReady);
    
}

function draw() {
    background(0);
    createCanvas(video, 0, 0);
    fill(255);
    textSize(32);
    text(label, 10, height - 20);
}
