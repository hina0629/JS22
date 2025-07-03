/* ハンバーガーメニュー */
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("side-menu").classList.toggle("open");
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