window.onload = function() {
    let s = new Scroller();
}

class Scroller {
    constructor() {
        var conts = document.querySelectorAll('.container > div');
        
        conts.forEach(function(cont) {
            cont.onclick = function() {
                alert('clicked');
            }
        });
                      
                      
    }
}