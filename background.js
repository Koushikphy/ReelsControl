// create the context menu
chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
        id: "1",
        title: "ReelsControl",
        contexts: ["page"]
    });
})

// On context menu click notify the frontend js 
chrome.contextMenus.onClicked.addListener((word, tab) => {
    chrome.tabs.sendMessage(tab.id, "enableReelControl");
});