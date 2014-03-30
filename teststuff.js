document.addEventListener('DOMContentLoaded', function(){
    alert("hey there");
    chrome.tabs.executeScript(null, {file: "script.js"});
});
