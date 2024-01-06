$(document).ready(function(){

    $('.deckSwitch').click(function(){

        var buttonId = $(this).attr('id');

        $('.deckSwitch').removeClass('active');
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

    const images = ['images/Wave 1.png', 'images/Wave 2.png'];
    const interval = 500;
    let index = 0;
    function changeImage(){
        $('#wave').attr('src', images[index]);

        index = (index + 1) % images.length;
    }

    setInterval(changeImage, interval)
});
