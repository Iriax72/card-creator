const typeSelect = document.querySelector("#typeOfCard-select");

// une variable qui contient la derniere valeur de typeSelect pour s'il fait revenir en arriere
let memoryValue = typeSelect.value;

const confirmButton = document.querySelector("#confirm-btn");

const divs = [
    document.querySelector("#unit"),
    document.querySelector("#event"),
    document.querySelector("#amelio")
];

afficher('unit');

confirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(confirm("Attention, si vous changez de carte, les données acutelles seront effacées. Voulez vous tout de meme continuer ?")) {
        memoryValue = typeSelect.value;
        afficher(typeSelect.value);
    } else {
        typeSelect.value = memoryValue;
    }
})

function afficher(divName) {
    divs.forEach(div => {
        if (div.id === divName) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    })
}