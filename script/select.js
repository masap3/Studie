// URLを配列指定
var jpURL = new Array
	(
		"",
		"secret.html",
		"pw1.html",
		"pw.html",
		"func.html",
		"func2.html",
		"func3.html",
		"quiz.html",
		"input.html",
		"subwindow.html",
		"textbox.html",
		"chkbox.html",
		"radio.html",
		"selectbox.html",
		"quiztop.html",
		"https://www.google.com",
		"http://www.yahoo.co.jp"
	);

//リンク先へジャンプさせる関数
function selectNavi()
{
	var num;

	//何番目のoptionが選択されたか調べる
	num = document.navi.contents.selectedIndex;

	//最初の項目以外が選択された時にジャンプする
	if ( num != 0 ) location.href = jpURL[num];
	location.href = jpURL[num];
}

function formWrite()
{
	document.write('<form name="navi">');
	document.write('<div align="center">');
	document.write('<select name="contents" onchange="selectNavi()">');
	document.write('<option>Home Page</option>');
	document.write('<option>Secret Page</option>');
	document.write('<option>PW1 Page</option>');
	document.write('<option>PW Page</option>');
	document.write('<option>Func Page</option>');
	document.write('<option>Func2 Page</option>');
	document.write('<option>Func3 Page</option>');
	document.write('<option>Quiz Page</option>');
	document.write('<option>Name Input Page</option>');
	document.write('<option>Sub Window Page</option>');
	document.write('<option>Textbox Page</option>');
	document.write('<option>Checkbox Page</option>');
	document.write('<option>Radiobox Page</option>');
	document.write('<option>Selectbox Page</option>');
	document.write('<option>Quiz Top Page</option>');
	document.write('<option>Google Web Site</option>');
	document.write('<option>Yahoo Japan Web Site</option>');
	document.write('</select></div></form><br>');
}