chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === 'scrollStarted') {
    sendResponse({ message: 'scrollStarted' });
  } else if (request.message === 'scrollStopped') {
    sendResponse({ message: 'scrollStopped' });
  }
});
