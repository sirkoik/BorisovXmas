import { ImageHandler } from './ImageHandler.js';
import { Scroller } from './Scroller.js';

const BG_CORRECT = 'images/STSCI-H-v1953a-f-1148x952.gif';
const BG = 'images/STSCI-H-v1953a-f-1148x952.gif1';

window.onload = () => {
  const i = new ImageHandler();
  i.load(BG)
    .then(() => {
      i.replaceImg(BG);
    })
    .catch(error =>
      alert(
        `Failed to load animated image. Try reloading the page.\n\nError message: ${error.message}`
      )
    );

  const s = new Scroller();
};
