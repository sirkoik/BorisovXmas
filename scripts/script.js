const BG = 'images/STSCI-H-v1953a-f-1148x952.gif';

window.onload = function() {
//    let i = new ImageHandler();
//    i.load(BG);
    
    let s = new Scroller();
}

class ImageHandler {
    constructor() {
        
    }
    
    load(url) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
                resolve(url)
            }
            img.onerror = function() {
                reject(url)
            }
            img.src = url;
        })
    }
}

class Scroller {
    constructor() {
        this.switchToBottom = false;
        let _self = this;
        
        let conts = document.querySelectorAll('.container');
        
        conts.forEach(function(cont) {
            cont.onclick = function(e) {
                let nextTop = 0;
                
                try {
                    nextTop = this.nextSibling.nextSibling.getBoundingClientRect().top;
                } catch(e) {
                    nextTop = (this.scrollTop + this.clientHeight >= this.scrollHeight)? -document.querySelector('.outer-container').scrollHeight : this.getBoundingClientRect().top;
                }
                
                document.querySelector('.outer-container').scrollBy({top: nextTop, behavior: 'smooth'});

            }
        });
        
        let links = document.querySelectorAll('a');
        links.forEach(function(link) {
            link.onclick = function(e) {
                e.stopPropagation();
            }
        });
        
        document.querySelector('.scroll-button img').onclick = function(e) {
            //alert('clicked');
        }
        
        document.querySelector('.outer-container').onscroll = function(e) {
            // if at bottom, reverse the pip.
            if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
                document.getElementById('img-scroller').style.animation = 'scrollButtonAnim 1s infinite alternate, rotateScroll 1s forwards';
                this.switchToBottom = true;
            } else {
                if (this.switchToBottom) {
                    document.getElementById('img-scroller').style.animation = 'scrollButtonAnim 1s infinite alternate, rotateScrollRev 1s forwards';
                }
                
                this.switchToBottom = false;
            }
        }
                      
    }
}