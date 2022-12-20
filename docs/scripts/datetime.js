var today = new Date();
var mins = today.getMinutes();
if (today.getMinutes() < 10) {
    mins = '0' + today.getMinutes();
}
var time;
if (today.getHours() > 12) {
    time = (today.getHours() - 12) + ":" + mins + 'pm';
}
else {
    time = today.getHours() + ":" + mins + 'am';
}
var day = today.getDay();
var daylist = ["sunday", "monday", "tuesday", "wednesday ", "thursday", "friday", "saturday"];
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
document.getElementById("datetime").innerHTML = daylist[day] + ' ' + date + ' ' + time;