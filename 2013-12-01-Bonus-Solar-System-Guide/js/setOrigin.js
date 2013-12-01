function setOrigin(time, progress) {
    $(document).ready(function() {
        $('html, body').animate({
            scrollTop: $('#origin').offset().top
        },time);
    });
    $('#progress').height(progress + '%');
}