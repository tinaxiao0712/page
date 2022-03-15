let rollerOr = true;
let TrY = 0;
let banner_con = document.querySelector(".banner_con");
document.onmousewheel = function (ev) {
    ev = ev || window.event
    if(rollerOr) {
        if(ev.wheelDelta < 0){
            setTimeout(function () {
                if(TrY < 2){
                    TrY++;
                    banner_con.style.transform = 'translateY('+-100*TrY+'vh)'
                }
                rollerOr = true
            },500)
        }else {
            setTimeout(function () {
                if(TrY > 0){
                    TrY--;
                    banner_con.style.transform = 'translateY('+-100*TrY+'vh)'
                }
                rollerOr = true
            },500)
        }
    }
    rollerOr = false

}