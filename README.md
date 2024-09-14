#Real-Time Pose Detection using PoseNet
This project demonstrates real-time human body detection using PoseNet and the ml5.js library, built on top of TensorFlow. The project captures video through a webcam, detects human body keypoints, and displays the skeleton along with listing visible keypoints on the screen.

#Project Overview
Technology Stack: JavaScript, PoseNet (ml5.js), p5.js
Pose Detection: The PoseNet model is used to detect human body keypoints such as eyes, ears, shoulders, knees, etc.
Real-Time Visualization: Draws the keypoints and skeleton in real-time over the captured video.
Interactive Keypoints: Lists visible keypoints with their x, y coordinates.
#Features
Real-time body pose detection from a webcam.
Displays detected body keypoints and skeleton.
Lists keypoints visible with a confidence score above 0.5.
Responsive canvas for video and keypoints visualization.
#Files
index.html: The main HTML structure, including the canvas for video display, keypoints list, and styling.
sketch.js: The JavaScript file that handles video capture, pose detection, and drawing of keypoints and skeleton.
ml5.js & p5.js: JavaScript libraries for machine learning (PoseNet) and rendering on the canvas.
#How to Run
Clone this repository.
Open index.html in a browser.
Ensure your webcam is accessible, and the camera feed will appear on the screen.
The detected body keypoints and skeleton will be displayed over the video feed.
#Usage
The system will automatically start detecting the human pose once the camera feed is available.
The keypoints will be shown as green dots over the detected areas.
The skeleton is drawn as yellow lines connecting the keypoints.
A list of detected keypoints with their x, y coordinates will be displayed on the right side.


#Requirements
A modern web browser (Google Chrome, Firefox, etc.)
Webcam access
#Acknowledgements
This project uses PoseNet for pose detection, via ml5.js.
More details can be found on the TensorFlow blog.
