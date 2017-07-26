function datetimeweek()
{

//曜日取得用変数

	var date = new Date();
	var week  = date.getDay();
	var year = date.getFullYear();
	var month1keta = date.getMonth()+1;
	var day1keta = date.getDate();
	var hour1keta = date.getHours();
	var minute1keta = date.getMinutes();
	var second1keta = date.getSeconds();
	var thisYear= new Date(year + "/12/31" );
	var day2 = Math.ceil( thisYear-date );
	
//二ケタ表示用変数（1桁の場合は、前に「0」を追加）

	var month = ("0" + (date.getMonth()+1)).slice(-2);
	var day = ("0" + date.getDate()).slice(-2);
	var hour = ("0" + date.getHours()).slice(-2);
	var minute = ("0" + date.getMinutes()).slice(-2);
	var second = ("0" + date.getSeconds()).slice(-2);

//条件分岐

switch (week) {
	case 0: str="日"; break;
	case 1: str="月"; break;
	case 2: str="火"; break;
	case 3: str="水"; break;
	case 4: str="木"; break;
	case 5: str="金"; break;
	default : str="土"; break;
	}

//取得した日時時間、曜日番号を表示

document.write( "<br><strong>今日の日付は、<span style = 'color:red; font-size:120%; font-weight:bold; font-family: serif;'>「" + year + "年" + month + "月" + day + "日（" + str + "曜日）」</span>です。</strong></br>");
document.write("<br><strong>今年は残り、<span style = 'color:red; font-size:120%; font-weight:bold; font-family: serif;'>「" + Math.ceil(day2 / 60 / 60 / 24 / 1000) + "日」</span>です。</strong><br>");
document.write( "<br><strong>スクリプトが実行された時間は、<span style = 'color:red; font-size:120%; font-weight:bold; font-family: serif;'>「" + hour + "時" + minute + "分" + second + "秒」</span>です。</strong></br>");
//document.write("今日は「" + str + "曜日」です。</br></br>");
//document.write( thisYear - date + "<br>");
//document.write( day2 + "<br>");
}