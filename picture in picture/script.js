const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const buttonShare = document.getElementById('button-share');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}

buttonShare.addEventListener('click', selectMediaStream);
button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})
