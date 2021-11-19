$( document ).ready(function() {
    $('.color span').hover(function(){
        let rotate = $(this).data('rotate')
        $('img').css('filter','hue-rotate('+rotate+'deg)')
    },
    function(){
        $('img').css('filter','hue-rotate(0deg)')
    })
})