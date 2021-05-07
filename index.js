/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))

}
function greet() {
    var greetingone;
    var time = new Date().getHours();
    if (time < 12) {
        greeting = "Good morning";
    } else if (time < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good evening";
    }
document.getElementById("greeting").innerHTML = greeting;
console.log(greet);
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
