function saiten(){

	var seikai=0; //正解数を入れる変数

	//答えの番号を配列に入れる
	var trueAns = new Array
	(
		0,
		5,
		8,
		10,
		14,
		15,
		19,
		23,
		24,
		28
	);

	//正解のラジオボタンがチェックされているか確認
	for (i=0 ; i<10 ; i++)
	{
		if( document.radioB.elements[trueAns[i]].checked )
		seikai++;
	}

	alert("あなたは"+seikai*10+"点でした！");
}
