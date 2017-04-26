let toggle = false;

const changeIcons = (id, fileName = '') => {
  chrome.browserAction.setIcon({
    path: `icons/pen16${fileName}.png`,
    tabId: id
  });
};

const toggleEditMode = (id) => {
  (toggle = !toggle) ?
    changeIcons(id, '_enable') :
    changeIcons(id);
  chrome.tabs.executeScript(id, {file: "main.js"});
};

chrome.browserAction.onClicked.addListener( ({ id }) => {
  toggleEditMode(id);
});
