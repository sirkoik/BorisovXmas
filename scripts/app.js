import { ImageHandler } from './ImageHandler.js';
import { Scroller } from './Scroller.js';
import { populateData } from './DataHandler.js';

const BG = 'images/STSCI-H-v1953a-f-1148x952.gif';

window.onload = () => {
  const i = new ImageHandler();
  i.load(BG).then(() => {
    i.replaceImg(BG);
  });

  //const s = new Scroller();

  populateData();
};
