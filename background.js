chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.subtitle) {
      // Use Chrome's TTS API
      chrome.tts.speak(message.subtitle, {
          'lang': 'en-US',
          'rate': 1.0
      }, function() {
          if (chrome.runtime.lastError) {
              console.error("Error in tts.speak:", chrome.runtime.lastError.message);
          }
      });
      sendResponse({ status: 'Subtitle read aloud' });
  }
});
