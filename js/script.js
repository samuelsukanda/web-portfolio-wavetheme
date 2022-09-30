$('.page-scroll').on('click', function(e) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 70
    }, 1000, 'swing');

    e.preventDefault();
});
