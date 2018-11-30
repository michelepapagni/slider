$('.next').click(function() {
    nextImage();
});
$('.prev').click(function() {
    prevImage();
});

$(document).keypress(function(event) {
    if (event.which == 97)
    {
        prevImage();
    }
    else if (event.which == 100)
    {
        nextImage();
    }
});

function nextImage()
{
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');

    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    var nextImage = activeImage.next('img');

    if (nextImage.length != 0)
    {
        nextImage.addClass('active');
        activeCircle.next('i').addClass('active');
    }
    else {
        $('.images img').first().addClass('active');
        $('.nav i').first().addClass('active');
    }
}

function prevImage()
{
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');

    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    var prevImage = activeImage.prev('img');

    if (prevImage.length != 0)
    {
        prevImage.addClass('active');
        activeCircle.prev('i').addClass('active');
    }
    else {
        $('.images img').last().addClass('active');
        $('.nav i').last().addClass('active');
    }
}
