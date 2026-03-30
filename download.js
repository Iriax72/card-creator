const submitBtns = [
    document.querySelector("#unit-submit"),
    document.querySelector("#event-submit"),
    document.querySelector("#amelio-submit")
];

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = baseImg.naturalWidth || baseImg.width;
canvas.height = baseImg.naturalHeight || baseImg.height;
ctx.font = "20px Arial";
ctx.fillStyle = "white";

submitBtns.forEach(btn => {
    btn.addEventListener("click", async (e) => {
        e.preventDefault();

        drawCanvas();

        const dataURL = canvas.toDataURL("image/png");
        const blob = await (await fetch(dataURL)).blob();
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.setAttribute("download", "votre-carte.png");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});

function drawCanvas() {
    const baseImage = [...document.querySelectorAll("img")].find(img => img.style.display !== "none");
    if (!baseImage) {
        console.error("Aucune image de base trouvée");
        return;
    }
    ctx.drawImage(baseImage, 0, 0);
}