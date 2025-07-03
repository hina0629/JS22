/* ハンバーガーメニュー */
const togglebutton = document.getElementById("menu-toggle");
const menu = document.getElementById("side-menu");
const icon = togglebutton.querySelector("i");

togglebutton.addEventListener("click", function () {
    menu.classList.toggle("open");
    
    icon.style.opacity = "0";
    icon.style.transform = "scale(0.8)";

    setTimeout( function () {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");

        icon.style.opacity = "1";
        icon.style.transform = "scale(1)";
    }, 200);
});

/* 検索窓Enterを押して検索 */
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        /* ページのリロード防止 */
        event.preventDefault();
        const keyword = event.target.value;
        /* ここに検索する関数名をかく */
        console.log(keyword)
    }
})

/* ランダム表示 */
const random = document.getElementById("random");

function createPokemonCard(paddedNumber) {
    return `
    <img src="./img/${paddedNumber}.png" alt="">
    `
}

for (let i = 0; i < 5; i++) {
    let No = Math.floor(Math.random() * 151) + 1;
    /* ゼロパディング */
    const paddedNumber = String(No).padStart(3, '0');
    random.innerHTML = createPokemonCard(paddedNumber);
}