//Use script to add 16 square divs
//onmouseover, highlight
//

//get it to work on 2x2 then scale to 16x16
const content = document.querySelector("#content");
let n = 16;
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