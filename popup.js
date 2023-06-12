document.addEventListener('DOMContentLoaded', function() {
  var startScrollButton = document.getElementById('startScroll');
  var stopScrollButton = document.getElementById('stopScroll');
  var tabId;

  startScrollButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      tabId = tabs[0].id;
      chrome.tabs.executeScript(tabId, { file: 'contentScript.js' }, function() {
        chrome.tabs.sendMessage(tabId, { action: 'startScrolling' });
      });
    });
  });

  stopScrollButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      tabId = tabs[0].id;
      chrome.tabs.sendMessage(tabId, { action: 'stopScrolling' }, function(response) {
        if (response.message === 'scrollStopped') {
          // Stop scrolling confirmation
          console.log('Scrolling stopped');
        }
      });
    });
  });
});
