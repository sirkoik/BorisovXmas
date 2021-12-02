export class ImageHandler {
  constructor() {}

  // image loader with ability to measure download progress
  // https://javascript.info/fetch-progress
  async load(url) {
    const response = await fetch(url);
    const reader = response.body.getReader();

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const length = +response.headers.get('Content-Length');
    let loaded = 0;

    const loadingBar = document.getElementById('loading-bar');

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      loaded += value.length;
      const loadPercent = (100 * loaded) / length;
      loadingBar.style.width = `${loadPercent}%`;
    }

    loadingBar.style.animation = 'hidebar 1s forwards';
    // added animationDelay of 2s (the same length as loading-bar's transition takes to complete).
    // https://stackoverflow.com/questions/33004919/chaining-multiple-css-animations#33006488
    loadingBar.style.animationDelay = '2s';
  }

  replaceImg(url) {
    document.querySelector('body').style.backgroundImage = 'url("' + url + '")';
    document.querySelector('body').style.backgroundSize = 'cover';
    document.querySelector('body').style.backgroundPosition = 'center';
  }
}
