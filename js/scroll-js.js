window.onscroll = () => {

	scroll_position = window.pageYOffset;
	// デバッグ用
	console.log( scroll_position );

};

window.addEventListener('DOMContentLoaded', function(){

	document.getElementById('contact_bottombtn_link').style.visibility = 'hidden';

	document.getElementById('contact_bottombtn_link').addEventListener('transitionend', function(){

		if( document.getElementById('contact_bottombtn_link').className !== 'view' ) {
			document.getElementById('contact_bottombtn_link').style.visibility = 'hidden';
		}
	});

	window.addEventListener('scroll', function(){
		if( 300 < scroll_position) {
			document.getElementById('contact_bottombtn_link').style.visibility = 'visible';
			document.getElementById('contact_bottombtn_link').classList.add('view');

		}else {
			document.getElementById('contact_bottombtn_link').style.visibility = 'hidden';
			document.getElementById('contact_bottombtn_link').classList.remove('view');
		}
	});
});