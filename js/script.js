// Richiamo le variabili
const container = document.getElementById("container");
const button = document.getElementById("button");
const listNumbers = [];
let difficolta = document.getElementById("difficolta");


button.addEventListener("click",function(){
  console.log(difficolta.value);
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


/////////////////////////////////////
function init(tot){
    for(let i = 0; i < tot; i++){

        // creo l'elemento square e lo aggiungo al container
        const sq = createSquare(container);
    
        sq.addEventListener('click',function(){
          //  console.log(this);
            this.classList.add('clicked');
        })
    
    }
    
}

function createSquare(target){
    const sq = document.createElement('div');
    const numRandom = generateUniqueRandomInt(listNumbers,tot);

    // even o odd con la funzione
    //const classes = ['square',getEvenOdd(numRandom)]

    // even o odd con operatore ternario
    const classes = ['square', (numRandom % 2) ? 'odd' : 'even'];

    sq.innerHTML = `<span>${numRandom}</span>`;
    sq.classList.add(...classes);
    target.append(sq);
    return sq;
}

function generateUniqueRandomInt(list, min, max){
    // devo generare un numero random, verificare se esiste, Se non c'è lo aggiungo allelenco altrimenti ne estraggo un'altro
    let number = null, valid = false;

     // controllo di unicità
    while(!valid){
       // console.log(number);
        number = generateRandomInt(min,max);
        if(!list.includes(number)) {
            valid = true;
            list.push(number);
        }
    }
    return number;
}

function generateRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getEvenOdd(n){
    if(n % 2) return 'odd';
    return 'even';
}
