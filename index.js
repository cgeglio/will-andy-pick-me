
var answer = Array(
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
)

var question = document.querySelector('h3');
var typedQ = document.getElementById('ask');
var ball = document.getElementById('eight');
var inputter = document.querySelector('input');
var tryAgain = document.getElementById('error')

function randomAnswer () {
  event.preventDefault();
  if (inputter.value.length<1) {
    tryAgain.innerText = "Please enter a question!"
  } else {
  var randomAnswer =
  answer[Math.floor(Math.random() * answer.length)];
  document.getElementById("randomAnswer").innerText = randomAnswer;

  question.innerText = typedQ.value;
  ball.style.visibility = "hidden";
   if (ball.style.visibility = "hidden") {
     inputter.value = "";
   }
 }
}


var reset = document.getElementById('clear');

function doOver () {
  if (question.innerText = typedQ.value) {
    ball.style.visibility = "visible";
    inputter.innerText = "hi";
  }
  // } else {
  //   reset.disabled = true;
  // }
}

reset.addEventListener('click', doOver);

// function validate {
//
//   if (inputter.value.length<1) {
//     tryAgain.innerText = "Please enter a question!"
//   }
//   else {
//
//   }
// }
