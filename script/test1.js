<textarea id="edit_00" style="width:100%; height:50px; margin:0px 0px 5px 0px;">表示テスト</textarea>
<input type="button" id="button_00" style="width:100%; height:50px;" value="出力">

<script type="text/javascript">
<!--
// 匿名関数内で実行
(function (){

	// 各エレメントを取得
	var element = document.getElementById("edit_00");
	var button = document.getElementById("button_00");

	// クリック時に実行されるイベント
	button.onclick = function (){

		// テキストエリアの値をコンソールに文字列を出力
		console.log(element.value);

	};

})();
//-->
</script>