$(function () {
    const $imageList = $("#image-list");

    // 画像リストを動的に生成
    function loadImages() {

        // TODO: items を繰り返し
        // map → forEach でも可能
        items.map((data) => {
            console.log(data);
            // --- ここから（繰り返し） ---
            // ``を使えばHTMLがかけて、その中にJSの変数を入れられる
            const listItem = `
            <li class="relative group">
                <div class="loading absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div class="loader border-4 border-gray-300 border-t-blue-500 rounded-full w-8 h-8 animate-spin"></div>
                </div>
                <img src="${data.image}" class="item w-full h-auto rounded-lg shadow-md hidden">
                <div class="caption hidden absolute inset-0 bg-teal-600 rounded-lg p-3 bg-opacity-85 flex items-center justify-center text-white">
                    <div class="name p-4">${data.name}</div>
                    <div class="caption p-4">${data.caption}</div>
                </div>
            </li>`;
            // TODO: listItem を $imageList に追加
            $imageList.append(listItem);
            // --- ここまで（繰り返し） ---
        });
        
        // 画像が読み込みイベント
        $('.item').on('load', function () {
            // TODO: ローディングフェードアウト＆削除
            $(this).siblings('.loading').fadeOut(200, function () {
                $(this).remove();
            });
            // 画像フェードイン
            $(this).fadeIn(200);
        });
    }

    // マウスオーバーイベントの設定（イベントデリゲーション: li）
    $imageList.on({
        mouseenter: function () {
            // TODO: マウスオーバーでキャプション表示: class=caption
            $(this).find('.caption').fadeIn(200);
        },
        mouseleave: function () {
            // TODO: マウスアウトでキャプション非表示: class=caption
            $(this).find('.caption').fadeOut(200);
        }
    }, 'li');

    loadImages();
});
