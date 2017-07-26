//リンク先へジャンプさせる関数
function noch()
	{
	//「この中には無い」がチェックされているか確認
	if( document.chkbox.elements[5].checked )
		{
    	//チェックされていたら、他の項目のチェックを外す
			for( i=0 ; i<5 ; i++)
		{
			document.chkbox.elements[i].checked=false;
		}
	}
}

function boxCheck()
	{
	noch();
	
		//チェックされた項目を記録する変数
		var str="";

		//for文でチェックボックスを１つずつ確認
		for( i=0; i<6; i++ )
		{
			//チェックされているか確認する
			if( document.chkbox.elements[i].checked )
		{
			//変数strが空でない時、区切りのコンマを入れる
			if( str != "" ) str=str+",";

			//チェックボックスのvalue値を変数strに入れる
			str=str+document.chkbox.elements[i].value;
		}
	}
		//strが空の時、警告を出す
		if( str=="" )
		{
			alert( "どれか選択してください。" );
		}
		else
	{
		alert( str + "が選択されました。" );
	}
}

function formWrite2()
{
	document.write2('<form name="chkbox">');
	document.write2('<p>あなたの好きな動物は？（複数可）</p>');
	document.write2('<input type="checkbox" value="イヌ">イヌ<br>');
	document.write2('<input type="checkbox" value="ネコ">ネコ<br>');
	document.write2('<input type="checkbox" value="ウサギ">ウサギ<br>');
	document.write2('<input type="checkbox" value="ハムスター">ハムスター<br>');
	document.write2('<input type="checkbox" value="ライオン">ライオン<br>');
	document.write2('<input type="checkbox" value="他">この中には無い<br>');
	document.write2('<input type="button" value="確認" onclick="boxCheck()">');
	document.write2('</form><br>');
}



