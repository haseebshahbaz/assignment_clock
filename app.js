var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

setInterval(function(){
   var current_date = new Date();
    var currentHour = current_date.getHours();
    hours.innerText = String(current_date.getHours()).padStart(2, '0');
    minutes.innerText = String(current_date.getMinutes()).padStart(2, '0');
    seconds.innerText = String(current_date.getSeconds()).padStart(2, '0');
    timeString = `${hours}:${minutes}:${seconds}`;
      
    
}, 1000);


