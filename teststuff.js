/*
document.addEventListener('DOMContentLoaded', function(){
    chrome.browserAction.getTitle(details, function(result){alert(result);});
    var blownup = (chrome.browserAction.getTitle() === "Chromesplosion");
    alert(blownup);
    if (!blownup){
        chrome.browserAction.setTitle("Chromesploded");
        chrome.browserAction.setIcon({
            "path": chrome.extension.getURL("icon/icon38.png")
        });
        chrome.tabs.executeScript(null, {file: "script.js"});
    }
    else{
        chrome.browserAction.setTitle("Chromesplosion");
        chrome.browserAction.setIcon({
            "path": chrome.extension.getURL("icons2/icon38.png")
        });
        chrome.tabs.executeScript("location.reload();");
    }
});
*/

var stat = false;

function toggle(tab){
    if (!stat){
        chrome.browserAction.setIcon({"path" : chrome.extension.getURL("icon/icon38.png")});
        chrome.tabs.executeScript(null, {file: "script.js"});
        stat = !stat;
    }
    else{
        stat = !stat;
        chrome.browserAction.setIcon({"path" : chrome.extension.getURL("icons2/icon38.png")});
        chrome.tabs.executeScript(tab.id, {code: "window.location.reload();"});
    }
}
chrome.browserAction.onClicked.addListener(function(tab){
    toggle(tab);
});
