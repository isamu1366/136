$(function () {
    // けんさくぼっくすとむしめがね
    $('.search-button').on('click', function (e) {
        e.preventDefault();

        $('body').addClass('animate').toggleClass('focus');
    });


    // けんさくした時の処理
    $('.search-input').on('change', function () {
       
        $('.article').addClass('shadow');
        let box = $(this).val();
        

        if (box == 'Agile開発') {
            $('#agile').removeClass('shadow');
            console.log(123);
        } else if (box == '2020年のトレンド') {
            console.log(456);
            $('#trend').removeClass('shadow');

        } else if (box == 'IT必要スキル'){
            $('#skill').removeClass('shadow');
        } else {
            alert('ごめんなさい_(:3 」∠)_');
        }
    })
})