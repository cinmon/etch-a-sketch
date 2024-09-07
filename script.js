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