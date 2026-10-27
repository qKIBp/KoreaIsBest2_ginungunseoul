// fade슬라이더

console.log($('.slide_item'));
// $('.slide_item:first').hide();
// 첫번째 .slide_item만 보이고 나머지는 숨겨라
// 0번째 보다 큰 인덱스의 .slide_item을 숨겨라
$('.slide_item:gt(0)').hide();


// 3초에 한번
setInterval(function(){
    $('.slide_item:first').fadeOut();
    $('.slide_item:first').next().fadeIn();
    $('.slide_item:first').appendTo('.slide_wrap')
}, 3000)


// gnb

// $('.gnb > li').on('mouseenter', function() {})
$('.gnb > li').on('mouseenter', function() {
    $(this).find('.submenu').stop().slideDown();
})

$('.gnb > li').on('mouseleave', function() {
    $(this).find('.submenu').stop().slideUp();
})