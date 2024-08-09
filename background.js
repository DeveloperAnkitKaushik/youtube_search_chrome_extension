chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchYouTube",
    title: "Search on YouTube",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchYouTube") {
    const query = encodeURIComponent(info.selectionText);
    const url = `https://www.youtube.com/results?search_query=${query}`;
    chrome.tabs.create({ url });
  }
});
