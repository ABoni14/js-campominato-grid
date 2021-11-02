// Richiamo le variabili
const container = document.getElementById("container");
const button = document.getElementById("button");
const listNumbers = [];
let difficolta = document.getElementById("difficolta");

button.addEventListener("click",function(){
  console.log(difficolta.value);
  container.innerHTML = "";
  let boxNumber = 0;
  if(difficolta.value == "facile"){
    alert(difficolta.value);
    boxNumber = 100;
    console.log("prova facile", boxNumber);
  } else if(difficolta.value == "normale"){
    alert(difficolta.value);
    boxNumber = 81;
    console.log("prova normale", boxNumber);
  } else {
    boxNumber = 49;
    alert(difficolta.value);
    console.log("prova difficile", boxNumber);
  }; 
  
  init(boxNumber);

})

function createSquare(target){
    const sq = document.createElement('div');
    sq.classList.add("square");
    if(difficolta == "facile"){
      sq.classList.add("easy");
      sq.classList.remove("normal");
      sq.classList.remove("hard");
    } else if(difficolta == "normale"){
      sq.classList.add("normal");
      sq.classList.remove("easy");
      sq.classList.remove("hard");
    } else{
      sq.classList.add("hard");
      sq.classList.remove("easy");
      sq.classList.remove("normal");
    }
    target.append(sq);
    return sq;
}

function init(tot){
  for(let i = 0; i < tot; i++){
    const sq = createSquare(container);
    sq.innerHTML = i + 1;
  }
}   

