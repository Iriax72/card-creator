const submitBtns = [
    document.querySelector("#unit-submit"),
    document.querySelector("#event-submit"),
    document.querySelector("#amelio-submit")
];

const baseImg = [...document.querySelectorAll("img")].find(img => img.offsetParent !== null) || document.querySelector("img");
if (!baseImg) {
    console.error("Aucune image de carte trouvée.");
} else {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = baseImg.naturalWidth || baseImg.width;
    canvas.height = baseImg.naturalHeight || baseImg.height;
    ctx.drawImage(baseImg, 0, 0);
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";

    submitBtns.forEach(btn => {
        btn.addEventListener("click", async (e) => {
            e.preventDefault();

            if (!confirm("Voulez-vous télécharger votre carte ?")) {
                return;
            }

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
}