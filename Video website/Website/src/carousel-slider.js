// carousel-slider.js

document.addEventListener('DOMContentLoaded', function () {
    const uploadedVideoContainer = document.getElementById('uploadedVideoContainer');

    function displayUploadedVideo(file) {
        const videoElement = createMediaElement(file);
        uploadedVideoContainer.innerHTML = ''; // Clear previous content
        uploadedVideoContainer.appendChild(videoElement);
    }

    function createMediaElement(file) {
        const videoElement = document.createElement('video');
        videoElement.src = URL.createObjectURL(file);
        videoElement.width = 300; // Set a width for better display (adjust as needed)
        videoElement.controls = true; // Show controls for the video
        videoElement.autoplay = true; // Autoplay the video
        videoElement.loop = true; // Loop the video
        videoElement.muted = true; // Mute the video
        return videoElement;
    }

    // Get the video file name from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const videoFileName = urlParams.get('video');

    if (videoFileName) {
        const file = new File([videoFileName], videoFileName, { type: 'video/mp4' });
        displayUploadedVideo(file);
    }
});
