let color = "black";


document.addEventListener("DOMContentLoaded", function(){
    createContainer(32);

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createContainer(size);
    })
})

function createContainer(size){
    let container = document.querySelector(".container");

    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv) 
        container.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("what is the size of your board?");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "provide a number between 1 and 100";
    }
    else {
        message.innerHTML = "Start the Game!"
        return input;
    }
}

function colorDiv(){
    if (color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else this.style.backgroundColor = `black`;
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetContainer(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
    }