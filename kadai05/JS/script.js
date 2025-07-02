/* ハンバーガーメニュー */
function toggleMenu() {
    const menu = document.getElementById("menu");
    /* activeクラスを付け外し */
    menu.classList.toggle("active");
}

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