const targetParagraph = document.getElementById("targetParagraph");
const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
count = 0;
var startTime = 0;

const starttime =()=>{
    if(conut === 0){
         startTime= performance.now();
    }
}
checkButton.addEventListener("click", function() {
  const userText = userInput.value.trim().toLowerCase();
  const targetText = targetParagraph.textContent.trim().toLowerCase();

  

  let isCorrect = true;
  const words = userText.split(' ');
  //words
  targetParagraph.innerHTML = ""; // Clear previous styling

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const span = document.createElement("span");
    span.textContent = word;

    if (word !== targetText.split(' ')[i]) {
      isCorrect = false;
      span.classList.add("incorrect");
    } else {
      span.classList.add("correct");
    }

    targetParagraph.appendChild(span);
  }

  const endTime = performance.now();
  const timeTaken = Math.round((endTime - startTime) / 1000);

  const resultText = isCorrect ? "Correct!" : "Incorrect.";
  result.textContent = `${resultText} Time taken: ${timeTaken} seconds`;
});
