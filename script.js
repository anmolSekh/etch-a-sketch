//Use script to add 16 square divs
//onmouseover, highlight
//
function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`
}

function createGrid(n) {
    const content = document.querySelector("#content");
    
    for(i = 0; i < n; i++) {
        let div = document.createElement("div");
        div.classList.add("row");
        // div.classList.add("flex");
        for(j = 0; j < n; j++) {
            let div2 = document.createElement("div");
            div2.classList.add("box");
            div2.addEventListener("mouseover", function(e) {
                e.target.style.background = "gray";
            })
            div2.addEventListener("mouseout", function(e) {
                e.target.style.background = randomRGB();
            })
            div.appendChild(div2);
        }
        
        content.appendChild(div);
    }
}
//get it to work on 2x2 then scale to 16x16

// const input = document.querySelector("#size");
const set = document.querySelector("#set");
let n = 16;
set.addEventListener("click", ()=> {
    content.innerHTML="";
    let newn = prompt("Enter size for grid");
    if(newn > 100) {
        n = n;
        alert("Maximum size: 100");
    } else {
        n = newn;
    }
    createGrid(n);
    // n = newn;
    // input.value="";
    // console.log(n);
    
})

createGrid(n);

const reset = document.querySelector("#reset");
reset.id = "reset";
reset.addEventListener("click", ()=> {
    const box = document.querySelectorAll('.box');
    box.forEach(item => item.style.background = "white");
})

reset.textContent= "Reset";

// content.prepend(reset)