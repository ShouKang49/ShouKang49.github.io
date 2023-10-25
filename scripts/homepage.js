$(document).ready(function(){

    $('.btn').click(function(){

        var buttonId = $(this).attr('id');

        $('.btn').removeClass('active');
        $(this).addClass('active');

        if(buttonId === 'all'){
            $('.card').show();
            $('#codingSet').css('padding', '2%');
            $('.portfolioHeader').show();
        }
        else{
            var setId = buttonId + 'Set';
            var setHeader = buttonId + 'Header';
            console.log("header", setHeader);

            $('.portfolioHeader').hide();
            $('.card').hide();
            $('#' + setId).find('.card').show();
            $('#' + setHeader).show();

            if(setId === 'designSet'){
                $('#codingSet').css('padding', '0');
            }
            else{
                $('#codingSet').css('padding', '2%');
            }
        }
    });
});