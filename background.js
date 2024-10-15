chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.subtitle) {
    // Create a text-to-speech utterance with the subtitle text
    const utterance = new SpeechSynthesisUtterance(message.subtitle);
    utterance.lang = 'en-US'; // You can change the language here if needed

    // Use the Web Speech API to read the subtitle aloud
    speechSynthesis.speak(utterance);

    sendResponse({ status: 'Subtitle read aloud' });
  }
});
