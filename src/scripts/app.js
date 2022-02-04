import '../styles.css';
// import '../../assets/images/Arrow-down-white-2.svg';
import '../../assets/videos/STSCI-H-v1953a-f-1148x952.mp4';
import { Scroller } from './Scroller.js';
import bgVideoFile from '../../assets/videos/STSCI-H-v1953a-f-1148x952.mp4';
import internalScrollerImage from '../../assets/images/Arrow-down-white-2.svg';

const s = new Scroller();

const bgVideo = document.getElementById('video-source');
bgVideo.src = bgVideoFile;

const imgScroller = document.getElementById('img-scroller');
imgScroller.src = internalScrollerImage;
