$(function () {
    var mySwiper = new Swiper('.banner-threed', {
        effect: 'coverflow',    // 切换效果：3d流
        spaceBetween: 100,    // slide之间设置距离
        slidesPerView: '4',  // 设置slider容器能够同时显示的slides数量
        loop: true,     // 循环
        centeredSlides: true,   // 设定为true时，active slide会居中
        autoplay: {     // 自动切换
            delay: 5000,    // 时间间隔
            stopOnLastSlide: false,     // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
            disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        },
        grabCursor: true, // 小手
        coverflowEffect: {      // 3D界面的形式显示出来的方式
            rotate: 0,      // 旋转角度
            stretch: 0,     // 每个slide之间的拉伸值，越大slide靠得越紧
            depth: 250,     // slide的位置深度。值越大z轴距离越远，看起来越小
            modifier: 1,    // depth和rotate和stretch的倍率
            slideShadows: false,    //是否开启slide阴影
        },
        pagination: {       // 分页器导航
            el: '.swiper-pagination',   // 挂载的类
            type: 'bullets', // 类型：原点
            clickable: 'true',
            renderBullet: function (index, className) {
                return `<span class="${className}" style="background-color: #4d4d4f;height: 3px;width: 36px; opacity: 1;border-radius: 0;margin: 0 5px;"></span>`;
            },
            bulletActiveClass: 'my-bullet-active',
        },
        on: {
            //回调函数，swiper从一个slide过渡到另一个slide结束时执行
            slideChangeTransitionEnd: function () {
                //this.slides   // 所有元素盒子
                //this.activeIndex 拿到当前索引
                $(this.slides).css('filter', 'grayscale(100%)')
                this.slides[this.activeIndex].style.filter = 'none'

            },
            // 触摸结束时触发  ， 双层保险更安全
            touchEnd: function () {
                //this.slides   // 所有元素盒子
                //this.activeIndex 拿到当前索引
                $(this.slides).css('filter', 'grayscale(100%)')
                this.slides[this.activeIndex].style.filter = 'none'
            }
        }
    })
    $(document).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.pifu .pifu-main').css({
                'left': '0',
                'transition': 'all 1.5s',
            })
            $('.pifu .pifu-main .pifu-main-left').css({
                'left': '0',
                'transition': 'all 1.5s',
            })
        } else {
            $('.pifu .pifu-main').css({
                'left': '1400px',
                'transition': 'all 1.5s',
            })
            $('.pifu .pifu-main .pifu-main-left').css({
                'left': '-1900px',
                'transition': 'all 1.5s',
            })
        }
        if ($(window).scrollTop() > 1650) {
            $('.yinxio .pifu-main').css({
                'left': '0',
                'transition': 'all 1.5s',
            })
            $('.yinxio .pifu-main .pifu-main-left').css({
                'left': '0',
                'transition': 'all 1.5s',
            })
        } else {
            $('.yinxio .pifu-main').css({
                'left': '1400px',
                'transition': 'all 1.5s',
            })
            $('.yinxio .pifu-main .pifu-main-left').css({
                'left': '-1900px',
                'transition': 'all 1.5s',
            })
        }
        console.log($(window).scrollTop());
    })
    let pifuOn = false
    let yinxioOn = false
    $('.yinxio .chakan').click(function () {
        if (yinxioOn) {
            $('.yinxio .gifbox').css({
                'transform': 'scale(1)',
                'transition': 'all 1.5s',
            })
            yinxioOn = false
        } else {
            $('.yinxio .gifbox').css({
                'transform': 'scale(2)',
                'transition': 'all 1.5s',
            })
            yinxioOn = true
        }
    })
    $('.pifu .chakan').click(function () {
        if (pifuOn) {
            $('.pifu .gifbox').css({
                'transform': 'scale(1)',
                'transition': 'all 1.5s',
            })
            pifuOn = false
        } else {
            $('.pifu .gifbox').css({
                'transform': 'scale(2)',
                'transition': 'all 1.5s',
            })
            pifuOn = true
        }

    })
})