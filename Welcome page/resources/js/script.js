$("header").vegas({
    delay: 8000,
    shuffle: true,
    transition: 'fade',
    transitionDuration: 4000,
    animation: 'kenburnsUp',
    slides: [
        { src: "resources/images/1.jpg" },
        { src: "resources/images/2.jpg" },
        { src: "resources/images/3.jpg" },
        { src: "resources/images/4.jpg" },
        { src: "resources/images/5.jpg" },
        { src: "resources/images/6.jpg" }
    ]
});

// Footer 

flag = 0;

$('.open,.close').click(function() {

    var nav = $('footer');

    nav.slideToggle(200);

    if (flag == 0) {
        $('.open').hide(1);
        $('.close').show(1);
        flag = 1;
    }else{
        $('.close').hide(1);
        $('.open').show(1);
        flag = 0;
    }

});