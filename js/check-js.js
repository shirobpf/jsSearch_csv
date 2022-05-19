

/*標準時はsubmit無効*/
$("#feas-submit-button-0").prop('disabled', true);

/********
検索ボックスのチェックで色が変わるシステム
**********/

let hantei = parseInt(0);

$('[name=area]').change(function() {
    let val1 = $('[name=area]').val();

    if(val1 !== ""){
        $('.btn-1').change(function () {

            if($('.btn-1').hasClass('active')){

            }else{
                    $(this).toggleClass('active');
                    $('[name=area]').css({
                    'background-color': '#f2e0ed',
                    'color':'#191919',
                    'font-weight':'bold'
                    });
                    hantei += parseInt(1);
                    btn_true();
            }
        });
    }else{
        $('.btn-1').change(function () {
            if($('.btn-1').hasClass('active')){

                    $(this).toggleClass('active');
                    $('[name=area]').css({
                        'background-color': 'white',
                        'color':'red',
                        'font-weight':'bold'
                    });

                    hantei -= parseInt(1);
                    btn_true();
                }
            });
    }
});

$('[name=job]').change(function() {
    let val2 = $('[name=job]').val();

    if(val2 !== ""){
        $('.btn-2').change(function () {
            if($('.btn-2').hasClass('active')){
                 //
             }else{
                 $(this).toggleClass('active');
                 $('[name=job]').css({
                    'background-color': '#f2e0ed',
                    'color':'#191919',
                    'font-weight':'bold'
                 });
                 hantei += parseInt(1);
                 btn_true();
               }
         });
    }else{
            $('.btn-2').change(function () {
                if($('.btn-2').hasClass('active')){

                        $(this).toggleClass('active');
                        $('[name=job]').css({
                            'background-color': 'white',
                            'color':'red',
                            'font-weight':'bold'
                        });

                        hantei -= parseInt(1);
                        btn_true();
                    }
            });
    }
});
$('[name=Employment]').change(function() {
    let val3 = $('[name=Employment]').val();

    if(val3 !== ""){
        $('.btn-3').change(function () {
            if($('.btn-3').hasClass('active')){
                 //
             }else{
                 $(this).toggleClass('active');
                 $('[name=Employment]').css({
                    'background-color': '#f2e0ed',
                    'color':'#191919',
                    'font-weight':'bold'
                 });
                 hantei += parseInt(1);
                 btn_true();
               }
         });
    }else{
        $('.btn-3').change(function () {
            if($('.btn-3').hasClass('active')){

                    $(this).toggleClass('active');
                    $('[name=Employment]').css({
                        'background-color': 'white',
                        'color':'red',
                        'font-weight':'bold'
                    });

                    hantei -= parseInt(1);
                    btn_true();
                }
        });
    }
});
$('[name=facility]').change(function() {
    let val4 = $('[name=facility]').val();

    if(val4 !== ""){
        $('.btn-4').change(function () {
            if($('.btn-4').hasClass('active')){
                 //
             }else{
                 $(this).toggleClass('active');
                 $('[name=facility]').css({
                    'background-color': '#f2e0ed',
                    'color':'#191919',
                    'font-weight':'bold'
                 });
                 hantei += parseInt(1);
                 btn_true();
               }
         });
    }else{
            $('.btn-4').change(function () {
                if($('.btn-4').hasClass('active')){

                        $(this).toggleClass('active');
                        $('[name=facility]').css({
                            'background-color': 'white',
                            'color':'red',
                            'font-weight':'bold'
                        });

                        hantei -= parseInt(1);
                        btn_true();
                    }
            });
    }
});
$('[name=Commitment]').change(function() {
    let val5 = $('[name=Commitment]').val();

    if(val5 !== ""){
        $('.btn-5').change(function () {
            if($('.btn-5').hasClass('active')){
                 //
             }else{
                 $(this).toggleClass('active');
                 $('[name=Commitment]').css({
                    'background-color': '#f2e0ed',
                    'color':'#191919',
                    'font-weight':'bold'
                 });
                 hantei += parseInt(1);
                 btn_true();
            }
        });
    }else{
        $('.btn-5').change(function () {
            if($('.btn-5').hasClass('active')){

                    $(this).toggleClass('active');
                    $('[name=Commitment]').css({
                        'background-color': 'white',
                        'color':'red',
                        'font-weight':'bold'
                    });

                    hantei -= parseInt(1);
                    btn_true();
                }
        });
    }
});

/********
  haitei が 5 以上になったらsubmit解除し有効へ変更
**********/

function btn_true() {

    if(hantei > 4 ){
        $("#feas-submit-button-0").prop('disabled',false);
        $("#feas-submit-button-0").attr('value',"上記の条件で検索");
        $("#feas-submit-button-0").css({
            'background-color': '#FF6F00',
            'color':'white'
         });

    }else{
        $("#feas-submit-button-0").prop('disabled', true);
        $("#feas-submit-button-0").attr('value',"条件を選択して下さい");
        $("#feas-submit-button-0").css({
            'background-color': '#cccccc',
            'color':'white'
         });
    }
}
