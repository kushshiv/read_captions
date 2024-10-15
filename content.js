console.log("Content script loaded!");

document.addEventListener('DOMSubtreeModified', function () {
    const subtitles = document.querySelector('.ytp-caption-segment');
    if (subtitles) {
        const subtitleText = subtitles.innerText;
        console.log('Subtitle: ', subtitleText);

        // Attempt to send the subtitle text to the background script
        chrome.runtime.sendMessage({ subtitle: subtitleText }, function(response) {
            if (chrome.runtime.lastError) {
                console.error("Error sending message:", chrome.runtime.lastError.message);
            } else {
                console.log("Message sent successfully:", response);
            }
        });
    }
}, false);
