const { remote } = require('electron');

class Titlebar {
  constructor() {
    this.titlebar = document.querySelector('#app-titlebar');
    this.minimizeBtn = document.querySelector('#win-minimize');
    this.settingsBtn = document.querySelector('#win-settings');
    this.closeBtn = document.querySelector('#win-close');

    this.setEventListeners();
  }

  setEventListeners() {
    const win = remote.getCurrentWindow();
    const { minimizeBtn, closeBtn } = this;

    // Add listeners to all the buttons in title bar
    minimizeBtn.addEventListener('click', () => win.minimize());
    closeBtn.addEventListener('click', () => win.close());
  }
}

module.exports = new Titlebar();