//Use script to add 16 square divs
//onmouseover, highlight
//

//get it to work on 2x2 then scale to 16x16
const content = document.querySelector("#content");
const input = document.querySelector("#size");
const set = document.querySelector("#set");
let n = 16;
set.addEventListener("click", ()=> {
    content.innerHTML="";
    n = input.value;
    input.value="";
    console.log(n);
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
                e.target.style.background = "black";
            })
            div.appendChild(div2);
        }
        
        content.appendChild(div);
    }
})
// console.log(n);


const reset = document.querySelector("#reset");
reset.id = "reset";
reset.addEventListener("click", ()=> {
    const box = document.querySelectorAll('.box');
    box.forEach(item => item.style.background = "white");
})

reset.textContent= "Reset";

// content.prepend(reset)