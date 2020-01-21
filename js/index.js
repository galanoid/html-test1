$(document).ready(function() {
    $(".display").click(function(event) {
        $('.display').toggleClass('none')
        $('.none').toggleClass('display')
    })
    $(".none").click(function(event) {
        $('.none').toggleClass('display')
        $('.display').toggleClass('none')
    })
    $('#toggle').click(function(event) {
        $('#circle').toggleClass('anim')
    })
    $('#rand_toggle').click(function(event) {
        $('#random_text').html(Math.floor(Math.random() * (100 - 1) + 1))
    })
})