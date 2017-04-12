var mySwiper = new Swiper('.swiper-container',{
    initialSlide: 1,            // 初始化时索引
    direction: 'horizontal',    // 轮播方向 horizontal水平默认，vertical垂直
    speed: 300,                 // 滑动速度
    loop: true,                 // 循环切换
    autoplay: 1000,             // 自动切换的时间间隔，默认0不切换
    autoplayDisableOnInteraction: false,    // 操作后切换不停止
    grabCursor: true,           // 鼠标变成手掌形状
    parallax: true,
    autoHeight: true,

    
    watchSlidesProgress : true,
    watchSlidesVisibility : true,


    // 分页器
    pagination: '.swiper-pagination',
    
    // 前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 滚动条
    scrollbar: '.swiper-scrollbar',
})