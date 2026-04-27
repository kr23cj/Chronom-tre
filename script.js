// variables nécessaires
var h,mn,s,ms,t,btn_stop,btn_start,sp;

// Initialisation des variables au chagement complet de la page.
window.addEventListener('load', function(){
    sp = document.getElementsByTagName('span');
/*
    hour = document.getElementById('h');
    min = document.getElementById('mn');
    sec = document.getElementById('s');
    mils = document.getElementById('ms');
*/
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    h = 0,mn = 0,s = 0,ms = 0;
})

// Compteur
function chronoUp(){
    ms += 1;
    if(ms == 10){
        ms = 1;
        s +=1;
    }
    if(s == 60){
        s = 0;
        mn += 1;
    }
    if(mn == 60){
        mn = 0;
        h += 1;
    }

    //insertion des valeur dans les span
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min"
    sp[2].innerHTML = s + "s"
    sp[3].innerHTML = ms + "ms"
}

function start(){
    t = setInterval(chronoUp, 100);
    btn_start.disabled = true;
}

function stop(){
    clearInterval(t);
    btn_start.disabled = false;
}

function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    h = 0,mn = 0,s = 0,ms = 0;

    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min"
    sp[2].innerHTML = s + "s"
    sp[3].innerHTML = ms + "ms"
}