/******************************
CSVのデータを取得し、一致した条件に該当するリンク情報をaction先へと置き換える
*/
let array = [];
let listnumber = "10203040";
let Url ="";

/*CSVの取得*/
function getCSV() {
	let request = new XMLHttpRequest();
	request.open("GET", "./csv/CombinResult.csv", true);
	request.send(null);

	request.onload = function () {
		splitCSV(request.responseText)
	}
}

/*CSVを読み込み配列へ*/
function splitCSV(str) {
	let result = [];
	let key = [];
	let tmp = str.split("\n");

	for (var i = 0; i < tmp.length; ++i) {
		key[i] = tmp[i].split(',');

		/*そのまま連想配列へ変換*/
		let num = String(key[i][0]);
		result[num] = key[i][1];
	}
	/*データ突き合わせ*/
	Url = result[listnumber];
	document.form1.action = Url;
	document.form1.submit();
	/*console.log(listnumber);
	console.log(Url);*/
}

/*フォームデータの取得*/
function searchclick(){
    event.preventDefault();//ブラウザ動作の無効化
    
	const area = document.querySelector("select[name=area]");
	if(area.value == ""){area.value = 0}
	const job = document.querySelector("select[name=job]");
	if(job.value == ""){job.value = 10}
	const Employment = document.querySelector("select[name=Employment]");
	if(Employment.value == ""){Employment.value = 20}
	const facility= document.querySelector("select[name=facility]");
	if(facility.value == ""){facility.value = 30}
	const Commitment = document.querySelector("select[name=Commitment]");
	if(Commitment.value == ""){Commitment.value = 40}

    /*
	console.log(area.value);
	console.log(job.value);
	console.log(Employment.value);
	console.log(facility.value);
	console.log(Commitment.value);
    */
    
	listnumber = area.value + job.value + Employment.value + facility.value + Commitment.value;
	listnumber = Number(listnumber); /*連想配列時に0が落ちるため、数値へ変換し調節*/

	getCSV();
}



