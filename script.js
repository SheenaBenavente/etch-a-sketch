document.addEventListener("DOMContentLoaded", function(){
    createContainer(32);
    console.log("second")
})

function createContainer(size){
    console.log("third");
    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat (${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat (${size}, 1fr)`;

    let numDivs = size * size
    
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        container.insertAdjacentElement("beforeend", div);
    }
    console.log("fourth")

}