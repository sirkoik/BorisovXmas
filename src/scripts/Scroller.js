export class Scroller {
  constructor() {
    this.switchToBottom = false;

    const conts = document.querySelectorAll('.container');

    conts.forEach(cont => {
      cont.onclick = function (e) {
        let nextTop = 0;

        try {
          nextTop = this.nextSibling.nextSibling.getBoundingClientRect().top;
        } catch (e) {
          nextTop =
            this.scrollTop + this.clientHeight >= this.scrollHeight
              ? -document.querySelector('.outer-container').scrollHeight
              : this.getBoundingClientRect().top;
        }

        document
          .querySelector('.outer-container')
          .scrollBy({ top: nextTop, behavior: 'smooth' });
      };
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.onclick = e => {
        e.stopPropagation();
      };
    });

    document.querySelector('.outer-container').onscroll = function (e) {
      // if at bottom, reverse the pip.
      if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
        document.getElementById('img-scroller').style.animation =
          'scrollButtonAnim 1s infinite alternate, rotateScroll 1s forwards';
        this.switchToBottom = true;
      } else {
        if (this.switchToBottom) {
          document.getElementById('img-scroller').style.animation =
            'scrollButtonAnim 1s infinite alternate, rotateScrollRev 1s forwards';
        }

        this.switchToBottom = false;
      }
    };
  }
}
