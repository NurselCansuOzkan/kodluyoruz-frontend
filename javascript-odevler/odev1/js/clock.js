let username = prompt("Adınız nedir?");
// let username = "Nursel";
let nameDOM = document.querySelector('#myName');
nameDOM.innerHTML = username;

let clockDom = document.querySelector('#myClock');

function showTime(){
    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    var date = new Date();
    var dayName = days[date.getDay()];
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    if(h == 0){
        h = 12;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + dayName ;
    clockDom.innerText = time;
    clockDom.textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

