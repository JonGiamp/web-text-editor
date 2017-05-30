let isEnable = false;

const changeIcons = (id, fileName = '') => {
  chrome.browserAction.setIcon({
    path: `icons/icons16${fileName}.png`,
    tabId: id,
  });
};

const toggleEditMode = (id) => {
  chrome.tabs.executeScript(id, { file: 'main.js' });
  isEnable = !isEnable;
  return isEnable;
};

chrome.browserAction.onClicked.addListener(({ id }) => {
  const fileName = toggleEditMode(id) ? '_enable' : '';
  changeIcons(id, fileName);
});
