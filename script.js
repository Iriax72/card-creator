const typeSelect = document.querySelector("#typeOfCard-select");

// une variable qui contient la derniere valeur de typeSelect pour s'il fait revenir en arriere
let memoryValue = typeSelect.value;

const confirmButton = document.querySelector("#confirm-btn");

const forms = [
    document.querySelector("#unit-form"),
    document.querySelector("#event-form"),
    document.querySelector("#amelio-form")
];

confirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(confirm("Attention, si vous changer de carte, les données acutelles seront effacées. Voulez vous tout de meme continuer ?")) {
        memoryValue = typeSelect.value;
        alert(memoryValue)
        afficher(typeSelect.value);
        alert("afficher() effectué")
    } else {
        typeSelect.value = memoryValue;
    }
})

function afficher(formName) {
    const formId = "#" + formName + "-form";
    alert(formId)
    forms.forEach(form => {
        if (form.id = formId) {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    })
}