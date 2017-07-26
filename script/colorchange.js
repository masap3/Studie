function colorchange(){

var flg; //真偽を入れる変数の宣言

flg = confirm("背景の色を変えてもいいですか？"); //真偽の代入

if (flg == true) document.bgColor = "green"; //真なら背景色変更
}