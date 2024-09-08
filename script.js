let row = null;
var createRow = true;

function hovering_event(squares_list) {
    squares_list.forEach((square) => {
        square.addEventListener("mouseout", () => {
            square.style.transition = "background-color 0.5s ease";
            square.style.backgroundColor = "#353535";  // Revert color on mouseout
            square.style.transform = "scale(1)";  // Revert transform on mouseout
        });
    });
}

function painting_event(squares_list) {
    squares_list.forEach((square) => {
        square.addEventListener("mouseout", () => {
            square.style.backgroundColor = "#F6D6D6";
            square.style.transform = "scale(1.2)";
        });
    });
}

// MAIN
for(let i = 1 ; i <= (16 * 16) ; i++) {
    const square = document.createElement("div");
    square.classList.add("square")
    square.addEventListener("mouseover", () => {
        square.style.transition = "background-color ease, transform 0.3s ease";
        square.style.backgroundColor = "#F6D6D6";
        square.style.transform = "scale(1.2)";
    });

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




const squares_list = document.querySelectorAll(".square");


// Default selection behavior
if (document.querySelector('input[id="hovering-button"]').checked) {
    // When the radio button with id 'hovering-button' is checked,
    // we update the behavior of mouseout for all squares
    hovering_event(squares_list);
}

//  Add radio button listener
const radio_buttons = document.querySelectorAll('input[type="radio"]');
radio_buttons.forEach((radio) => {
    radio.addEventListener('change', () => {
        console.log("Button changed.");
        if (document.querySelector('input[id="hovering-button"]').checked) {
           hovering_event(squares_list);
        }
        else if(document.querySelector('input[id="painting-button"]').checked) {
            painting_event(squares_list);
        }
    });
});