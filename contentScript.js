var scrollIntervalId;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startScrolling') {
    if (!scrollIntervalId) {
      scrollIntervalId = setInterval(function() {
        window.scrollBy(0, 10);
      }, 100);
      sendResponse({ message: 'scrollStarted' });
    }
  } else if (request.action === 'stopScrolling') {
    clearInterval(scrollIntervalId);
    scrollIntervalId = null;
    sendResponse({ message: 'scrollStopped' });
  }
});
