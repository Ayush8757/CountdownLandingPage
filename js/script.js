const launch = new Date(2022, 12, 15);

function comingSoon() {
    var today = new Date().getTime();
    var gap = launch - today;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / day);
    var h = Math.floor((gap%day) / hour);
    var m = Math.floor((gap%hour) / minute);
    var s = Math.floor((gap%minute) / second);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
    
}

setInterval(function(){
    comingSoon();
}, 1000);