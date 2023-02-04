function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
  
  setInterval(updateTime, 1000);

function setDarkMode(isDark){
  if(isDark){
    document.body.setAttribute('id','darkMode')
  }else{
    document.body.setAttribute('id','')
  }
}
