console.log("Content script loaded!");

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        const subtitles = document.querySelector('.ytp-caption-segment');
        if (subtitles) {
            const subtitleText = subtitles.innerText;
            console.log('Subtitle: ', subtitleText);

            // Ensure chrome.runtime is available
            if (typeof chrome.runtime !== 'undefined' && chrome.runtime.sendMessage) {
                // Send subtitle text to the background script
                chrome.runtime.sendMessage({ subtitle: subtitleText }, function(response) {
                    if (chrome.runtime.lastError) {
                        console.error("Error sending message:", chrome.runtime.lastError.message);
                    } else {
                        console.log("Message sent successfully:", response);
                    }
                });
            } else {
                console.error("chrome.runtime is undefined or sendMessage is not available");
            }
        }
    });
});

// Start observing the body of the document for changes in child elements or text
const config = { childList: true, subtree: true, characterData: true };
observer.observe(document.body, config);
