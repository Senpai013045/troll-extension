chrome.runtime.onInstalled.addListener(() => {
  console.log("installed");
});

chrome.bookmarks.onCreated.addListener((args) => {
  alert("Bookmarked");
  console.log(args);
});
