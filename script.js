//Use script to add 16 square divs
//onmouseover, highlight
//

//get it to work on 2x2 then scale to 16x16
const content = document.querySelector("#content");

for(i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.classList.add("row");
    for(j = 0; j < 100; j++) {
        let div2 = document.createElement("div");
        div2.classList.add("box");
        div2.addEventListener("mouseover", function(e) {
            e.target.style.background = "black";
        })
        div.appendChild(div2);
    }
    
    content.appendChild(div);
}