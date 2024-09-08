let row = null;
var createRow = true;

function square_coloring(square) {
    square.style.backgroundColor = "#F6D6D6";
    square.style.transform = "scale(1)";
}

function hovering_event(squares_list) {
    squares_list.forEach((square) => {
        square.removeEventListener('mouseout', painting_event);
        square.addEventListener("mouseout", () => {
            square.style.transition = "background-color 0.5s ease";
            square.style.backgroundColor = "#353535";  // Revert color on mouseout
            square.style.transform = "scale(1)";  // Revert transform on mouseout
        });
    });
}

function painting_event(squares_list) {
    squares_list.forEach((square) => {
        square.removeEventListener('mouseout', hovering_event);
        square.addEventListener("mouseout", () => {
            square_coloring(square);
        });
    });
}

function default_color_behavior() {
    const squares_list = document.querySelectorAll(".square");
    if (document.querySelector('input[id="hovering-button"]').checked) {
        hovering_event(squares_list);
    } else if(document.querySelector('input[id="painting-button"]').checked) {
        painting_event(squares_list);
    }
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
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.style.transition = "background-color ease, transform 0.3s ease";
            square_coloring(square);
        });
    
        if(createRow == true) {
            row = document.createElement("div");
            row.classList.add("row");
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

    
    default_color_behavior();

}

load_grid(16);

//  Add radio button listener
const radio_buttons = document.querySelectorAll('input[type="radio"]');
radio_buttons.forEach((radio) => {
    radio.addEventListener('change', () => {
        console.log("Button changed.");
        const squares_list = document.querySelectorAll(".square");
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
    let new_size = +(prompt('Enter a number for the grid size. Note that the grid is always square. E.g., if you input "16" it wil form a 16x16 grid (max size is 100x100). '));
    if(new_size != null && Number.isInteger(new_size) && new_size <= 100) {
        load_grid(new_size, true);
    }
});