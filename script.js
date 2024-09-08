let row = null;
var createRow = true;

function square_coloring(square) {
    square.style.backgroundColor = "#F6D6D6";
    square.style.transform = "scale(1)";
}

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
            square_coloring(square);
        });
    });
}

function load_grid(size, size_changed = false) {

    if(size_changed) {
        const row_lists = document.querySelectorAll(".row");
        row_lists.forEach((row) => {
            document.querySelector(".container").removeChild(row);
        });
    }

    for(let i = 1 ; i <= (size * size) ; i++) {
        const square = document.createElement("div");
        square.classList.add("square")
        square.addEventListener("mouseover", () => {
            square.style.transition = "background-color ease, transform 0.3s ease";
            square_coloring(square);
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
        
        if(i % size == 0) {
            createRow = true;
            document.querySelector(".container").appendChild(row);
        }
    
    }

}

load_grid(16);

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

const change_size_button = document.querySelector(".change-size-button");
change_size_button.addEventListener("click", () => {
    console.log("Button pressed.");
    let new_size = +(prompt('Enter a number for the grid size. Note that the grid is always square. E.g., if you input "16" it wil form a 16x16 grid.'));
    if(new_size != null && Number.isInteger(new_size)) {
        load_grid(new_size, true);
    }
});