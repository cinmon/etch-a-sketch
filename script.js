let row = null;
var createRow = true;

for(let i = 1 ; i <= (16 * 16) ; i++) {
    const square = document.createElement("div");
    square.classList.add("square")

    if(createRow == true) {
        row = document.createElement("div");
        row.classList.add("row")
        createRow = false;
    }

    if(row != null) {
        row.appendChild(square);
        console.log("Created square no. " + i);
    }

    square.textContent = i;
    
    if(i % 16 == 0) {
        createRow = true;
        document.querySelector(".container").appendChild(row);
    }

}

const squares_list = document.querySelectorAll(".square")

squares_list.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.transition = "background-color ease";
        console.log("Mouse over square.")
        square.style.backgroundColor = "#F6D6D6";
        square.style.transform = "scale(1.2)";
    });
    square.addEventListener("mouseout", ()=> {
        square.style.transition = "background-color 0.5s ease";
        square.style.backgroundColor = "#353535";
        square.style.transform = "scale(1)";
    });
});
