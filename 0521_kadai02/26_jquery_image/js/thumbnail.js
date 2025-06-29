$(function () {
    // TODO: サムネイルクリック
    // TODO: img から 画像パス src を取得
    // TODO: メイン画像の img をフェードアウト
    // TODO: コールバックで、メイン画像の img にパスを設定してフェードイン

    // サムネイル画像をクリックすると起きるイベント作成 
    $(".thumbnail").on("click", function () {
        console.log("サムネイルクリック");
        // クリックした画像のパス（src）を取得
        const src = $(this).attr("src");
        // メイン画像の img をフェードアウト
        $("#main-image").fadeOut(300, function () {
            // フェードアウトがおわったらここが実行される
            // メイン画像の img にパスを指定してフェードイン
            $("#main-image").attr("src", src).fadeIn(300);
        });
    }); 
});


// バニラJSの場合
// document.addEventListener("DOMContentLoaded", function () {
//     // サムネイルクリック
//     const thumbnails = document.querySelectorAll(".thumbnail");
//     const mainImage = document.getElementById("main-image");
//     thumbnails.forEach(thumbnail => {
//         thumbnail.addEventListener("click", function () {
//             // img から 画像パス src を取得
//             const src = thumbnail.getAttribute("src");
//             // メイン画像の img をフェードアウト
//             mainImage.style.transition = "opacity 0.3s";
//             mainImage.style.opacity = "0";
//             setTimeout(() => {
//                 // コールバックで、メイン画像の img にパスを設定してフェードイン
//                 mainImage.setAttribute("src", src);
//                 mainImage.style.opacity = "1";
//             }, 300); // フェードアウトに合わせてタイミング調整
//         });
//     });
// });