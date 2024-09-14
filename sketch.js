let capture;
let posenet;
let singlePose, skeleton;

function setup(){
    let canvas = createCanvas(865, 605);
    canvas.parent('canvas-container');  // Attach the canvas to the right div
    background(173, 216, 230);
    capture = createCapture(VIDEO);
    capture.size(865, 605);  // Set video capture size to match the canvas size
    capture.hide();  // Hide the default video element

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses);
}

function modelLoaded(){
    console.log('PoseNet model has loaded');
}

function receivedPoses(poses) {
    if (poses.length > 0) {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;

        // Get the keypoints container
        const keypointsList = document.getElementById('keypoints-list');
        keypointsList.innerHTML = ''; // Clear the list before adding new keypoints

        // Loop through each keypoint and list the visible ones (with score > 0.5)
        singlePose.keypoints.forEach((keypoint) => {
            if (keypoint.score > 0.5) {  // Only show keypoints that are confidently detected
                let listItem = document.createElement('li');
                listItem.textContent = `${keypoint.part}: X = ${keypoint.position.x.toFixed(2)}, Y = ${keypoint.position.y.toFixed(2)}`;
                keypointsList.appendChild(listItem);
            }
        });
    }
}

function draw(){
    image(capture, 0, 0, 865, 605);  // Draw the video on the canvas
    if (singlePose) {
        // Draw keypoints as ellipses
        singlePose.keypoints.forEach((keypoint) => {
            if (keypoint.score > 0.5) {  // Only draw visible keypoints
                fill(0, 255, 0);
                ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
            }
        });

        // Draw the skeleton
        stroke(255, 255, 0);
        strokeWeight(5);
        skeleton.forEach((joint) => {
            line(joint[0].position.x, joint[0].position.y, joint[1].position.x, joint[1].position.y);
        });
    }
}
