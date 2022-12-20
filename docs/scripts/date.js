var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
document.getElementById("data").innerHTML = date + ' ' + time + '<br>' + daylist[day];