let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let sun = document.getElementById("sun");
let mon = document.getElementById("mon");
let tue = document.getElementById("tue");
let wed = document.getElementById("wed");
let thu = document.getElementById("thu");
let fri = document.getElementById("fri");
let sat = document.getElementById("sat");
let am = document.getElementById("am");
let pm = document.getElementById("pm");


function main() {
let date1 = new Date();

let a = date1.getDate() < 10 ? "0" + (date1.getDate()) : (date1.getDate());
let b = date1.getMonth() < 10 ? "0" + (date1.getMonth()+1) : (date1.getMonth()+1);
let c = date1.getHours() < 10 ? "0" + date1.getHours() : date1.getHours();
let d = date1.getMinutes() < 10 ? "0" + date1.getMinutes() : date1.getMinutes();
let e = date1.getSeconds() < 10 ? "0" + date1.getSeconds() : date1.getSeconds();
date.innerHTML = a;
month.innerHTML = b;
year.innerHTML = date1.getFullYear();
hour.innerHTML = c;
minute.innerHTML = d;
second.innerHTML = e;
}
setInterval(main, 1000);

let date2 = new Date();
let days = date2.getDay();
console.log(days);

if (days == 0) {
    sun.setAttribute("checked", "checked");
} else if (days == 1) {
    mon.setAttribute("checked", "checked");
} else if (days == 2) {
    tue.setAttribute("checked", "checked");
} else if (days == 3) {
    wed.setAttribute("checked", "checked");
} else if (days == 4) {
    thu.setAttribute("checked", "checked");
} else if (days == 5) {
    fri.setAttribute("checked", "checked");
} else if (days == 6) {
    sat.setAttribute("checked", "checked");
}

let hours = date2.getHours();

if (hours < 12) {
    am.setAttribute("checked", "checked");
} else {
    pm.setAttribute("checked", "checked");
}