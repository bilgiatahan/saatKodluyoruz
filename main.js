const user = document.getElementsByClassName("user-name")[0]
const clock = document.getElementsByClassName("clock")[0]
const yearBox = document.getElementById("year")
const dayBox = document.getElementById("day")
const hourBox = document.getElementById("hour")

const userName = prompt("Adınız")
if (user) {
    user.innerHTML = userName.toString().toUpperCase()
}
function showTime(){

let year = new Date().getDate() + " "
let hours = ""
let day = ""

if (new Date().getHours() > 10 && new Date().getMinutes() > 10 && new Date().getSeconds() > 10) {
    hours += new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
}
else if (new Date().getHours() < 10) {
    hours += "0" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
}
else if (new Date().getMinutes() < 10) {
    hours += new Date().getHours() + ":0" + new Date().getMinutes() + ":" + new Date().getSeconds()
}
else if (new Date().getSeconds() < 10) {
    hours += new Date().getHours() + ":" + new Date().getMinutes() + ":0" + new Date().getSeconds()
}

switch (new Date().getMonth()) {
    case 0:
        year += 'Ocak ' + new Date().getFullYear()
        break;
    case 1:
        year += 'Subat ' + new Date().getFullYear()
        break;
    case 2:
        year += 'Mart ' + new Date().getFullYear()
        break;
    case 3:
        year += 'Nisan ' + new Date().getFullYear()
        break;
    case 4:
        year += 'Mayıs ' + new Date().getFullYear()
        break;
    case 5:
        year += 'Haziran ' + new Date().getFullYear()
        break;
    case 6:
        year += 'Temmuz ' + new Date().getFullYear()
        break;
    case 7:
        year += 'Ağustos ' + new Date().getFullYear()
        break;
    case 8:
        year += 'Eylül ' + new Date().getFullYear()
        break;
    case 9:
        year += 'Ekim ' + new Date().getFullYear()
        break;
    case 10:
        year += 'Kasım ' + new Date().getFullYear()
        break;
    case 11:
        year += 'Aralık ' + new Date().getFullYear()
        break;
}

switch (new Date().getDay()) {
    case 0:
        day += 'Pazar'
        break;
    case 1:
        day += 'Pazartesi'
        break;
    case 2:
        day += 'Salı'
        break;
    case 3:
        day += 'Çarşamba'
        break;
    case 4:
        day += 'Perşembe'
        break;
    case 5:
        day += 'Cuma'
        break;
    case 6:
        day += 'Cumartesi'
        break;

}
yearBox.innerHTML = year.toString()
dayBox.innerHTML = day.toString()
hourBox.innerHTML = hours.toString()
}
setInterval(function(){
    showTime()
},1000)