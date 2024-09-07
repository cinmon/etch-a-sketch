for(let i = 0 ; i < 16 * 16 ; i++) {
    const square = document.createElement("div");
    square.textContent = "I'm a square";
    document.querySelector(".container").appendChild(square);
}