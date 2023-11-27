let navbar = document.getElementById("navbar");

const toggle = () => {
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
        navbar.style.textAlign = "left";
    } else {
        navbar.style.display = "none";
    }
};

function carousel() {
    let carouselSlider = document.querySelector(".carousel-slider");
    let list = document.querySelector(".carousel-list");
    let item = document.querySelector(".carousel-item");
    let list2;
    const speed = 1;
    const width = list.offsetWidth; // Corrected typo from offsetwidth to offsetWidth
    let x = 0;
    let x2 = width;

    function clone() {
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);
        list2.style.left = `${width}px`;
    }

    function moveFirst() {
        x -= speed;
        if (x <= -width) {
            x = 0;
            list.style.left = `${x}px`;
        } else {
            list.style.left = `${x}px`;
        }
    }

    function moveSecond() {
        x2 -= speed;
        if (x2 <= -width) {
            x2 = width;
            list2.style.left = `${x2}px`;
        } else {
            list2.style.left = `${x2}px`;
        }
    }

    function hover() {
        clearInterval(a);
        clearInterval(b);
    }

    function unhover() {
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
    }

    clone();
    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10); // Changed speed to 10 for consistency

    carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover); // Changed to mouseleave

}

document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('uploadForm');
    const videoInput = document.getElementById('videoInput');

    uploadForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const file = videoInput.files[0];
        if (file) {
            window.location.href = 'videos.html?video=' + encodeURIComponent(file.name);
        } else {
            alert('Please select a video file to upload.');
        }
    });
});
// document.addEventListener('DOMContentLoaded', function () {
//     const uploadForm = document.getElementById('uploadForm');
//     const videoInput = document.getElementById('videoInput');
//     const uploadedVideoContainer = document.getElementById('uploadedVideoContainer'); // Add this line

//     uploadForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const file = videoInput.files[0];
//         if (file) {
//             // Redirect to videos.html
//             window.location.href = 'videos.html?video=' + encodeURIComponent(file.name);
//         } else {
//             alert('Please select a video file to upload.');
//         }
//     });

//     function displayUploadedVideo(file) {
//         const videoElement = createMediaElement(file);
//         uploadedVideoContainer.innerHTML = ''; // Clear previous content
//         uploadedVideoContainer.appendChild(videoElement);
//     }

//     function createMediaElement(file) {
//         const videoElement = document.createElement('video');
//         videoElement.src = URL.createObjectURL(file);
//         videoElement.width = 300; // Set a width for better display (adjust as needed)
//         videoElement.controls = true; // Show controls for the video
//         videoElement.autoplay = true; // Autoplay the video
//         videoElement.loop = true; // Loop the video
//         videoElement.muted = true; // Mute the video
//         return videoElement;
//     }

//     // Get the video file name from the URL parameters
//     const urlParams = new URLSearchParams(window.location.search);
//     const videoFileName = urlParams.get('video');

//     if (videoFileName) {
//         const file = new File([videoFileName], videoFileName, { type: 'video/mp4' });
//         displayUploadedVideo(file);
//     }
// });


carousel();
