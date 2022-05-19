/****************
セカンドビューの
タブ切り替え用コード
*****************/

/*初期設定ではs0を表示*/

document.getElementById("s0").style.display ="block";

let radioChecked = document.getElementsByName("cp-tab01__item");
let CheckedID = 0;
let afterChecked = "";

/*チェックを確認*/

function clickBtn(){

	if(afterChecked !== ""){
		beforeChecked = afterChecked;
	}else{
		beforeChecked = CheckedID;
	}

	for (let i = 0; i < radioChecked.length; i++) {
		if (radioChecked[i].checked) {//(color1[i].checked === true)と同じ
			afterChecked = i;
		  break;
		}
	}

	let afterID = "s" + afterChecked;
	let beforeID = "s" + beforeChecked;

	document.getElementById(afterID).style.display = "block";
	document.getElementById(beforeID).style.display = "none";

}