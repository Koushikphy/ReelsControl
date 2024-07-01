// check if the video is visible on the screen
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// capture the click event
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request == "enableReelControl") {
        // go through all the videos, if its visible then enable controls and 
        // move all the overlays to background
        [...document.getElementsByTagName('video')].forEach(e => {
            if (isInViewport(e)) {
                if (! e.hasAttribute('controls')) {
                    e.parentNode.childNodes[1].childNodes[0].style.zIndex = -99;
                    e.setAttribute('controls', true);
                } else{
                    e.parentNode.childNodes[1].childNodes[0].style.zIndex = 'auto';
                    e.removeAttribute('controls');
                }
            }
        })
        // TODO: Once done, all the video details, follow button will be move to background
        // Can we move it to somewhere else without obstructing the controls ?!
    }
});