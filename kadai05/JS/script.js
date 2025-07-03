/* ハンバーガーメニュー */
const togglebutton = document.getElementById("menu-toggle");
const menu = document.getElementById("side-menu");
const icon = togglebutton.querySelector("i");

togglebutton.addEventListener("click", function () {
    menu.classList.toggle("open");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
})

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