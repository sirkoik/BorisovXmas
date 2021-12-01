export class ImageHandler {
  constructor() {}

  load(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve(url);
      };
      img.onerror = () => {
        reject(url);
      };
      img.src = url;
    });
  }

  replaceImg(url) {
    document.querySelector('body').style.backgroundImage = 'url("' + url + '")';
    document.querySelector('body').style.backgroundSize = 'cover';
    document.querySelector('body').style.backgroundPosition = 'center';
  }
}
