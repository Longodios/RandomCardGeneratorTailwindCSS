let selectedCardHeader = document.querySelector("#card-Header");
let selectedCardBody = document.querySelector("#card-Body");
let selectedCardFooter = document.querySelector("#card-Footer");



const randomSuitPoker = () => {
    // ♣,  ♥,  ♠,  ♦
    let randomSuit = Math.floor(Math.random()*4);
    let suit;

    if (randomSuit === 0){
        suit = "♣";
        selectedCardHeader.style.color = "green";
        selectedCardBody.style.color = "green";
        selectedCardFooter.style.color = "green";
    } else if (randomSuit === 1 ){
        suit = "♥";
        selectedCardHeader.style.color = "red";
        selectedCardBody.style.color = "red";
        selectedCardFooter.style.color = "red";
    } else if (randomSuit === 2){
        suit = "♠"   
        selectedCardHeader.style.color = "black";
        selectedCardBody.style.color = "black";
        selectedCardFooter.style.color = "black";
    } else{
         suit = "♦"
        selectedCardHeader.style.color = "blue";
        selectedCardBody.style.color = "blue";
        selectedCardFooter.style.color = "blue";
    }

    selectedCardHeader.innerHTML = suit;
    selectedCardFooter.innerHTML = suit;   

}

const randomNumbersPoker = () => {

    let randomNumber = Math.floor(Math.random()* 13 + 1);
    
    if (randomNumber === 10){
        randomNumber = "T";
    } else if(randomNumber === 11){
        randomNumber = "J";
    } else if (randomNumber === 12){
        randomNumber = "Q";
    } else if (randomNumber === 13){
        randomNumber = "K";
    } else if (randomNumber === 1){
        randomNumber = "A";
    }


     selectedCardBody.innerHTML = randomNumber

}


const countDown = () => {
    let contador = 10;
    let count10Seconds = document.querySelector("#countDownToTen");
    setInterval(() => {
        
        count10Seconds.textContent = contador;
        contador--;
        if(contador < 0 ){
            contador = 10;
            initFunctions();
            
        }
    }, 1000);
}

const setDimensionsCard = () => {
    
    let selectedWithInput = document.querySelector("#setWidth").value;
    let selectedHeightInput = document.querySelector("#setHeight").value;
    let selectedCard = document.querySelector(".card");

    selectedCard.style.width = selectedWithInput + "rem";
    selectedCard.style.height = selectedHeightInput + "rem";
     //TODO
//   Resetear inputs
    // Hacer fork al proyecto
}



const resetDimensionsCard = () => {
    let resetCard = document.querySelector(".card");
    if (resetCard.style.width != 300 + "px" && resetCard.style.height != 360 + "px"){
        resetCard.style.width = 300 + "px";
        resetCard.style.height = 360 + "px";
    } 
}



const initFunctions = () => {
    randomSuitPoker()
    randomNumbersPoker()
    countDown();
    
}


