<script type="text/javascript">
   // ページの読み込みが完了してから実行
   $(function() {
      // スクロール途中から表示したいメニューバーを指定
      var navBox = $("#headbar");

      // メニューバーは初期状態では消しておく
      navBox.hide();

      // 表示を開始するスクロール量を設定(px)
      var TargetPos = 350;

      // スクロールされた際に実行
      $(window).scroll( function() {
         // 現在のスクロール位置を取得
         var ScrollPos = $(window).scrollTop();
         // 現在のスクロール位置と、目的のスクロール位置を比較
         if( ScrollPos > TargetPos ) {
            // 表示(フェイドイン)
            navBox.fadeIn();
         }
         else {
            // 非表示(フェイドアウト)
            navBox.fadeOut();
         }
      });
   });



$(document).ready(function(){
    $('dl#faq&gt;dd').hide();
    $('dl#faq&gt;dt').click(function(){
        $(this).toggleClass('opened').nextUntil('dl#faq&gt;dt').toggle('slow');
    });
    $('dl#faq&gt;dt.opened').nextUntil('dl#faq&gt;dt').show('slow');
});

  $(function(){
          // #で始まるアンカーをクリックした場合に処理
           $('a[href^=#]').click(function() {
              // スクロールの速度
              var speed = 400; // ミリ秒
             // アンカーの値取得
              var href= $(this).attr("href");
              // 移動先を取得
              var target = $(href == "#" || href == "" ? 'html' : href);
              // 移動先を数値で取得
             var position = target.offset().top;
             // スムーススクロール
             $('body,html').animate({scrollTop:position}, speed, 'swing');
             return false;
           });
        });

// グローバル変数
var syncerTimeout = null ;

// 一連の処理
$( function()
{
	// スクロールイベントの設定
	$( window ).scroll( function()
	{
		// 1秒ごとに処理
		if( syncerTimeout == null )
		{
			// セットタイムアウトを設定
			syncerTimeout = setTimeout( function(){

				// 対象のエレメント
				var element = $( '#page-top' ) ;

				// 現在、表示されているか？
				var visible = element.is( ':visible' ) ;

				// 最上部から現在位置までの距離を取得して、変数[now]に格納
				var now = $( window ).scrollTop() ;

				// 最下部から現在位置までの距離を計算して、変数[under]に格納
				var under = $( 'body' ).height() - ( now + $(window).height() ) ;

				// 最上部から現在位置までの距離(now)が1500以上かつ
				// 最下部から現在位置までの距離(under)が200px以上かつ…
				if( now > 1500 && 200 < under )
				{
					// 非表示状態だったら
					if( !visible )
					{
						// [#page-top]をゆっくりフェードインする
						element.fadeIn( 'slow' ) ;
					}
				}

				// 1500px以下かつ
				// 表示状態だったら
				else if( visible )
				{
					// [#page-top]をゆっくりフェードアウトする
					element.fadeOut( 'slow' ) ;
				}

				// フラグを削除
				syncerTimeout = null ;
			} , 1000 ) ;
		}
	} ) ;

	// クリックイベントを設定する
	$( '#move-page-top' ).click(
		function()
		{
			// スムーズにスクロールする
			$( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
		}
	) ;
} ) ;
</script>