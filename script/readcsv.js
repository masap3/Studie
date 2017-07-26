//csvファイル指定とオープン処理
function loadTextFile(){
    httpObj = createXMLHttpRequest(displayData);
    if (httpObj){
        //ファイル名の指定
        httpObj.open("GET","whatsnew.csv",true);
        httpObj.send(null);
    }
}
 
//WebKit（KHTML）におけるXMLHttpRequestのresponceText文字化け防止処理
var ajax_filter = function(t){return t};
if(navigator.appVersion.indexOf( "KHTML" ) > -1){
    ajax_filter = function(t){
        var esc = escape(t);
        return(esc.indexOf("%u") < 0 && esc.indexOf("%") > -1) ? decodeURIComponent(esc) : t
    }
}
 
//HTML出力処理
function displayData(){
    if ((httpObj.readyState == 4) && (httpObj.status == 200)){
        var text = ajax_filter(httpObj.responseText);
        document.getElementById("result").innerHTML = parseText(text);
    }
}
 
//CSVデータの配列化とHTML化処理
function parseText(str){
    var resultText="<table border=1>";
 
    //改行コードを変数にし分割処理をする
    var CR = String.fromCharCode(13);
    var LF = String.fromCharCode(10);
    lineData = str.split(CR);
    var ldLength = lineData.length;
    var wqRank = new Array( ldLength);
    for (var h=0; h<lineData.length; h++){
        var wqCount = 0; var etcCount = 0;
        var wqAnalyse = 0; var etcAnalyse = 0;
        var wqArray = new Array();
 
        //各行のダブルクォートの個数カウント
        for (s=0; s<lineData[h].length; s++){
            wqAnalyse = wqCount;
            etcAnalyse = etcCount;
            if (lineData[h].charAt(s) == "\""){
                //ダブルクォートのカウントを１つ増やす
                wqCount++;
            } else {
                //その他文字列のカウントを１つ増やす
                etcCount++;
            }
            //連続してあるクォートを認識するための初期化処理
            if ((wqAnalyse != wqCount) && (etcAnalyse == etcCount)){
                etcCount = 0;
            }
            if ((wqAnalyse == wqCount) && (etcAnalyse != etcCount)){
                wqCount = 0;
            }
            wqArray[s] = wqCount;
        }
 
        //Math.max関数でダブルクォートの最大値解析
        wqRank[h] = Math.max.apply(Math,wqArray);
        wqMaxCount = Math.max.apply(Math,wqRank);
 
        //置換用にRegExpインスタンスを作成
        for (l=1; l<=wqMaxCount; l++){
            eval( "var repWq"+l+"= new RegExp('\"{"+l+",}','g');");
        }
        repWqRe = new RegExp('変換ダブルクォート',"g");
        repCm = new RegExp('\,',"g");
        repCmRe = new RegExp('変換カンマ',"g");
 
    }
 
    for (var i=0; i<lineData.length; i++){
        //ダブルクォートの個数に応じて置換
        matStr = lineData[i].replace(eval("repWq"+wqMaxCount),'\"');
        for (var n=wqRank.length-1; n>=2; n--){
            if (n != 2){
                matStr = matStr.replace(eval("repWq"+wqRank[n]),'\"');
            } else {
                matStr = matStr.replace(repWq2,'変換ダブルクォート');
            }
        }
 
        //正規表現で半角ダブルクォートに囲まれる文字列を取得
        matStr = matStr.match(/"(\\["ntr\\]|[^"])*"|[^,]+/g);
 
        //各文字列に含まれるカンマを「変換カンマ」に一時置換、その後半角ダブルクォートを取り除き、再びカンマで結合
        for (var h=0; h<matStr.length; h++){
            matStr[h] = matStr[h].replace(repCm,"変換カンマ");
            matStr[h] = matStr[h].replace(repWq1,"");
            lineData[i] = matStr.join();
        }
 
        //カンマで分割
        strText = lineData[i].split(",");
        resultText += "<tr>";
 
        //HTMLのtableを繰り返し処理で作成し、セルにデータを入れていく
        for (var j=0; j<strText.length; j++){
 
            //変換カンマと変換ダブルクォートを元の半角に戻す
            strText[j] = strText[j].replace(repCmRe,"\,");
            strText[j] = strText[j].replace(repWqRe,"\"");
            if (i < ldLength){
                if(j == 0){
                    resultText += "<td>"+strText[j]+"</td>";
                }
                if(j == 1){
                    if (i == 0){
                        resultText += "<td>";
                    }else{
                        resultText += "<td><a href="+strText[j]+">";
                    }
                }
                if(j == 2){
                    if (i == 0){
                        resultText += strText[j]+"</td>";
                    }else{
                        resultText += strText[j] +"</a></td>";
                    }
                }
            }
        }
        resultText += "</tr>";
    }
    resultText += "</table>";
    return resultText;
}
