// fade슬라이더

// console.log($('.slide_item'));
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


// TAB

$('.tab_con_item:gt(0)').hide();

// $('.tab_menu a').on('click', function(){})
$('.tab_menu a').on('click', function(e){
    // a의 기본동작을 막기
    e.preventDefault();
    // 인덱스로 구별
    const tabIndex = $(this).index();
    $('.tab_con_item').hide();
    // 클릭한 인덱스에 해당하는 아이템을 보이게
    $('.tab_con_item').eq(tabIndex).show();

    // 활성화표시
    $('.tab_menu a').eq(tabIndex).addClass('on');
    $('.tab_menu a').eq(!tabIndex).removeClass('on');
})


// popup
// $('.open_popup').on('click', function(){})
$('.open_popup').on('click', function(e){
    e.preventDefault();
    // $('.popup').fadeIn();
    $('.popup').addClass('active')
})

$('.close_popup').on('click', function(e){
    e.preventDefault();
    // $('.popup').fadeOut();
    $('.popup').removeClass('active')
})
