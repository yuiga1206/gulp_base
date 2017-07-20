$(function(){

// ページトップ フェードインアウト＆スムーススクロール
    var $scroll  = 100; // ページトップアイコン表示開始位置
    var $speed   = 300; // スクロール速度
    var $pagetop = $('#pagetop');

    // フェードインアウト
    $(window).on('scroll', function () {
        if($(this).scrollTop() > $scroll) {
            $pagetop.fadeIn();
            return false;
        }
        else {
            $pagetop.fadeOut();
            return false;
        }
    });

    // スムーススクロール
    $pagetop.on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        }, $speed);
        return false;
    });

    // ページトップ要素が初期位置に来た時に固定(static,fixedクラスを操作)
    $(window).on('load', function () {
        var $footerOffset = $('#footer').offset().top;
        $(window).on('scroll', function () {
            if($(window).scrollTop() + $(window).height() < $footerOffset) {
                $pagetop.removeClass('static');
                $pagetop.addClass('fixed');
            } else {
                $pagetop.removeClass('fixed');
                $pagetop.addClass('static');
            }
        });
    });

    // ページ内リンクのスムーススクロール
    $('a[href^=#]').click(function() {
         // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= jQuery(this).attr("href");
      // 移動先を取得
      var target = jQuery(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });







});
