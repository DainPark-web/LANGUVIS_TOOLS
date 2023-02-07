const textArea = document.querySelector(".tool-textArea");
const textAreaBtn = document.querySelector("#textAarea-btn");
const toolResult = document.querySelector(".tool-result");

const textL = document.querySelector("#tool-result-textL");
const wordL = document.querySelector("#tool-result-wordL")
const senL = document.querySelector("#tool-result-senL")

function createCharacter(text) {
  const getTextLength = text.split("").filter((e) => {
    if (e !== " ") {
      if (e !== ".") {
        return e;
      }
    }
  }).length;
  return getTextLength;
}

function createWord(text){
    const getTextLength= text.split(" ").filter((e) => {
        if(e !== " "){
            if(e !== "."){
                return e
            }
        }
    }).length;
   
    return getTextLength;

}

function createSentence(text, index){
   
    const getSentenceLength= text.split(".").filter((e) => {
        if(e !== " "){
            return e
        }
    }).length;
    
   
    return getSentenceLength;
  

}

let off = false;

textAreaBtn.addEventListener("click", (e) => {
  textAreaBtn.innerHTML = "";
  if (!off) {
    console.log(textArea.value);
    const chLength = createCharacter(textArea.value);
    const wordsLength = createWord(textArea.value);
    const senLength = createSentence(textArea.value);
    textL.innerHTML = chLength;
    wordL.innerHTML = wordsLength;
    senL.innerHTML = senLength;

    console.log(chLength, wordsLength, senLength);
    textArea.value = "";
    textArea.style.display = "none";
    toolResult.style.display = "flex";
    textAreaBtn.innerHTML = "Reset";
  } else {
    textArea.style.display = "block";
    toolResult.style.display = "none";
    textAreaBtn.innerHTML = "Submit";
  }

  off = !off;
});
