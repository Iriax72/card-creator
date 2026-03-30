const submitBtns = {
    unit: document.querySelector("#unit-submit"),
    event: document.querySelector("#event-submit"),
    amelio: document.querySelector("#amelio-submit")
}

const baseImg = [...document.querySelectorAll("img")].filter(img => img.style.display !== "none");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = baseImg.width;
canvas.height = baseImg.height;

ctx.drawImage(baseImg, 0, 0);
ctx.font = "20px Arial";
ctx.fillStyle = "white";

submitBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const dataURL = canvas.toDataURL("image/png");

        const a = document.createElement("a");
        a.href = dataURL;
        a.setAttribute("download", "votre-carte.png");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    })
})