const textArea = document.querySelector(".tool-textArea");
const textAreaBtn = document.querySelector("#textAarea-btn");
const toolResult = document.querySelector(".tool-result");

const textL = document.querySelector("#tool-result-textL");
const wordL = document.querySelector("#tool-result-wordL")
const senL = document.querySelector("#tool-result-senL")


const textResult = document.querySelector(".tool-result-text");

const toolResultContainer = document.querySelector(".tool-01-resultContainer")

function toolResultFn(){
  toolResultContainer.innerHTML=""
    const newResult = JSON.parse(localStorage.getItem("textResult"));
    if(newResult !== null){
      console.log(newResult)
      for(let i = 0; i < newResult.length; i++){
        const box = document.createElement("div");
        const boxSub = document.createElement("div");
        const textDiv = document.createElement("div");
        const chLDiv = document.createElement("div");
        const wordLDiv = document.createElement("div");
        const senLDiv = document.createElement("div");
        textDiv.innerText = newResult[i].text.trim().replace(/(\r\n|\n|\r)/gm, "");
        chLDiv.innerText = newResult[i].textL;
        wordLDiv.innerText = newResult[i].wordL;
        senLDiv.innerText = newResult[i].senL;
        box.appendChild(textDiv)
        boxSub.appendChild(chLDiv)
        boxSub.appendChild(wordLDiv)
        boxSub.appendChild(senLDiv)
        box.appendChild(boxSub)
  
        box.classList.add("tool-result-box")
        boxSub.classList.add("tool-result-boxSub")
  
        toolResultContainer.appendChild(box)
  
  
      }
    }
   
}

toolResultFn()
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
    textResult.innerHTML = textArea.value.trim();
    textL.innerHTML = chLength;
    wordL.innerHTML = wordsLength;
    senL.innerHTML = senLength;

    

// localStorage
    const getResult = JSON.parse(localStorage.getItem("textResult"))
  
    if(getResult == null){
      localStorage.setItem("textResult",JSON.stringify([]))
    }

    const group = {
      text: textArea.value,
      textL: chLength,
      wordL : wordsLength,
      senL : senLength,
    }
    const updateResult = JSON.parse(localStorage.getItem("textResult"))
    if(updateResult !== null){
      localStorage.setItem("textResult", JSON.stringify([group, ...updateResult]))
      
    }
      //reset
    toolResultFn()
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



  if(!off){
  
  }
  off = !off;
});
