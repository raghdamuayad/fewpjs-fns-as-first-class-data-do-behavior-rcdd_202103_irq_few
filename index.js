/* Given Code, don't edit */

function greet(timeAll){
  let NowTime = timeAll.split(':');
  let NowHour = parseInt(nowTime[0]);
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
