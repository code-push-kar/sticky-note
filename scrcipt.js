let btn = document.querySelector("#button");
let textArea = document.querySelector("#textArea");
let color = document.querySelector("#colors");

let rightDiv = document.getElementById("rightContainer");

function addNotes(){
    let newDiv = document.createElement("div");
    let para = document.createElement("p");
    let crossbtn = document.createElement("button");

    newDiv.appendChild(para);
    newDiv.appendChild(crossbtn);

    newDiv.style.width = "150px";
    newDiv.style.height = "150px";
    newDiv.style.backgroundColor = color.value;
    para.innerText = textArea.value;
    crossbtn.innerText = "x";
    
    rightDiv.appendChild(newDiv);

}
btn.addEventListener("click" , addNotes);
clrButton.addEventListener("click", () => {textArea.value=""})
crossbtn.addEventListener("click", function(){newDiv.remove()});


