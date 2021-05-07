/* Given Code, don't edit */

function greet(timeAll){
  let nowTime = timeAll.split(':');
  let nowHour = parseInt(nowTime[0]);
  if (nowHour<12){
    return "Good Morning";
  } else if (nowHour>17){
    return "Good Evening";
  }
  return "Good Afternoon";
}
function displayMessage(Message){
  document.getElementById("greeting").innerText = Message;
}
