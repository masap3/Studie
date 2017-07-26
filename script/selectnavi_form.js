var jpURL = new Array(
	"",
	"http://localhost:81/testpage/testpage_1.html",
	"http://localhost:81/testpage/testpage_2.html",
	"http://localhost:81/testpage/testpage_3.html",
	"https://www.yahoo.co.jp",
	"https://www.google.com",
	"https://translate.google.com"

);

//リンク先へジャンプさせる関数
function selectNavi(){
	var num;
  
	//何番目のoptionが選択されたか調べる
	num = document.navi.contents.selectedIndex;

	//該当するリンク先へジャンプさせる（最初の項目が選択された場合以外で実行）
	if ( num != 0 ) location.href = jpURL[num];
}

function formWrite(){
	document.write('<br>');
	document.write('<form name="navi">');
	document.write('<select name="contents" onchange="selectNavi()">');
	document.write('<option>━━コンテンツ一覧━━</option>');
	document.write('<option>テストページNo1</option>');
	document.write('<option>テストページNo2</option>');
	document.write('<option>テストページNo3</option>');
	document.write('<option>Yahoo!</option>');
	document.write('<option>Google</option>');
	document.write('<option>Google翻訳</option>');
	document.write('</select></form>');
}

