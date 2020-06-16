var stream;

function hasUserMedia() {
    //check if the browser supports the WebRTC 
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia);
}

if (hasUserMedia()) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

    //enabling video and audio channels 
    navigator.getUserMedia({
            audio: true,
            video: {
                // width: 1280,
                // height: 720
            }
        },
        function (stream) {
            var video = document.querySelector('video');
            video.srcObject = stream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
        },
        function (err) {
            console.log("The following error occurred: " + err.name);
        }
    );
} else {
    alert("WebRTC is not supported");
}