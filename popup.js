document.getElementById('start').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Ensure tabs[0] is defined
    if (tabs[0] && tabs[0].id) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: startSubtitleReader  // The function to execute in the tab
      });
    } else {
      console.error("No active tab found.");
    }
  });
});

document.getElementById('stop').addEventListener('click', () => {
  speechSynthesis.cancel(); // Stop any ongoing speech
});

function startSubtitleReader() {
  console.log('Subtitle reader started');
  // Add additional functionality here, like restarting the subtitle extraction
}
