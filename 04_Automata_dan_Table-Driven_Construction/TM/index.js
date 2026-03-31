const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

const upperButton = document.getElementById("huruf-besar");
const lowerButton = document.getElementById("huruf-kecil");

const darkButton = document.getElementById("mode-gelap");
const lightButton = document.getElementById("mode-terang");
const sepiaButton = document.getElementById("mode-sepia");

/* ================= HITUNG HURUF ================= */
editorElement.addEventListener("input", (event) => {

    const text = event.target.value;
    charCountElement.textContent = text.length;

    let upperCount = 0;
    let lowerCount = 0;

    for (let char of text){
        if (char >= "A" && char <= "Z"){
            upperCount++;
        } 
        else if (char >= "a" && char <= "z"){
            lowerCount++;
        }
    }

    upperCountElement.textContent = upperCount;
    lowerCountElement.textContent = lowerCount;

});

/* ================= KONVERSI ================= */
upperButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
});

lowerButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
});

/* ================= MODE ================= */
darkButton.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("sepia-mode");
});

lightButton.addEventListener("click", () => {
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("sepia-mode");
});

sepiaButton.addEventListener("click", () => {
    document.body.classList.add("sepia-mode");
    document.body.classList.remove("dark-mode");
});