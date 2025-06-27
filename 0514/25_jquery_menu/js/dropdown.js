$(function () {
    //TODO: class=menu の a リンクでアンカーを含むもの
    // .menu a[href^="#"]
    // クラスがmenuのなかのaリンクで、#を含むもの
    const $menuLink = $('.menu a[href^="#"]');

    // メニュー取得: class=menu
    const $navMenus = $(".menu");

    // ---------- ホバーでサブメニュー表示・非表示 ---------- //
    // hover(合わせたとき, 離したとき)
    $navMenus.hover(
        function () {
            // ----- マウスを合わせた時 ----- //
            // TODO: 親メニューの子要素 ul を slideDown() アニメーション
            // TODO: アニメーションは一旦停止 → stop()
            // 親メニューは4つあるからthisを使う
            $(this).children('ul').stop().slideDown(200)
        },
        function () {
            // ----- マウスを離した時 ----- //
            // TODO: 親メニューの子要素 ul を slideUp() アニメーション
            // TODO: アニメーションは一旦停止
            $(this).children('ul').stop().slideUp(200)
        }
    );
    // ----- 別のところに飛ばされるから今回は書かなくてもいいけど、親メニューをクリックしたときに子メニューを消す ----- //
    $navMenus.on('click', function () {
        // TODO: 親メニューの子要素 ul を slideUp() アニメーション
        // TODO: アニメーションは一旦停止
        $(this).children('ul').stop().slideUp(200)
    });

    // ---------- スムーススクロール ---------- //
    // クリックしたらスムーズに移動する
    // .menu内の#がついてるリンクをクリックしたら発動
    $menuLink.on('click', function (e) {
        // 今後の操作を止める
        // 誤動作防止のおまじない
        e.preventDefault();

        // アンカーに設定された値を取得
        // this クリックされたリンク
        // const anchor = this.getAttribute('href'); → バニラJS
        const anchor = $(this).attr('href');
        if (anchor) {
            // TODO: アンカーのY座標取得: offset().top 上からどのくらい
            const targetOffset = $(anchor).offset().top;
            // TODO: アンカーにアニメーションでスクロール: scrollTop: targetOffset
            $('html, body').stop().animate({ scrollTop: targetOffset }, 500);
        }
    });
});