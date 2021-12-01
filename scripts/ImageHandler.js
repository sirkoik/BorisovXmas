export class ImageHandler {
  constructor() {}

  // image loader with ability to measure download progress
  // https://javascript.info/fetch-progress
  async load(url) {
    const response = await fetch(url);
    const reader = response.body.getReader();

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

      // console.log(
      //   'Bytes:',
      //   value.length,
      //   loaded,
      //   length,
      //   (100 * loaded) / length
      // );
    }

    loadingBar.style.animation = 'hidebar 2s forwards';

    // setTimeout(() => {
    //   loadingBar.style.animation = 'hidebar 2s forwards';
    // }, 2000);
  }

  replaceImg(url) {
    document.querySelector('body').style.backgroundImage = 'url("' + url + '")';
    document.querySelector('body').style.backgroundSize = 'cover';
    document.querySelector('body').style.backgroundPosition = 'center';
  }
}
