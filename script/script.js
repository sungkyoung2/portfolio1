$(document).ready(function(){
    let header_age = 0;
    let main_work_age = 0;
    let pc_mobile_age = 0;
    let pc_work_age = 0;
    let about_me1_age = 0;
    let about_me2_age = 0;

    $(window).scroll(function(){
        sc = $(window).scrollTop()
        

        
        if(sc >= $('#main_work').offset().top-50){
            $('header').css({'position':'fixed','z-index':'999999','top':'0'})
        }
        else{
            $('header').css({'position':'static'})
        }
        if(sc >= $('#main_work').offset().top-300){
            main_work_age = main_work_age + 1
            if(main_work_age == 1){
                $('#main_work_title>h3').animate({'marginTop':'0','opacity':'1'},300)
                $('#main_work_title>p').delay(150).animate({'marginTop':'20px','opacity':'1'},300)
                $('#main_work_img').delay(300).animate({'marginTop':'100px','opacity':'1'},300)
            }
        }
        if(sc >= $('#pc_mobile').offset().top-300){
            pc_mobile_age = pc_mobile_age + 1
            if(pc_mobile_age == 1){
                $('#pc_mobile>h3').animate({'marginTop':'0','opacity':'1'},300)
                $('#pc_mobile>p').delay(150).animate({'marginTop':'20px','opacity':'1'},300)
                $('#pc_mobile>ul').delay(300).animate({'marginTop':'50px','opacity':'1'},300)
            }
        }
        if(sc >= $('#pc_work').offset().top-300){
            pc_work_age = pc_work_age + 1
            if(pc_work_age == 1){
                $('#pc_work>h3').animate({'marginTop':'0','opacity':'1'},300)
                $('#pc_work>p').delay(150).animate({'marginTop':'20px','opacity':'1'},300)
                $('#pc_work>ul').delay(300).animate({'marginTop':'30px','opacity':'1'},300)
            }   
        }
        if(sc >= $('#about_me').offset().top-300){
            about_me1_age = about_me1_age + 1
            if(about_me1_age == 1){
                $('#about_me>h3').stop().animate({'marginTop':'0','opacity':'1'},300)
                $('#about_me_img').stop().delay(150).animate({'marginTop':'0','opacity':'1'},300)
            }   
        }
        if(sc >= $('#about_me').offset().top-100){
            about_me2_age = about_me2_age + 1
            if(about_me2_age == 1){
                $('#skills>ul>li:nth-child(1)>.skills_bg>.skills_box').stop().animate({'width':'90%'},200)
                $('#skills>ul>li:nth-child(2)>.skills_bg>.skills_box').stop().animate({'width':'85%'},300)
                $('#skills>ul>li:nth-child(3)>.skills_bg>.skills_box').stop().animate({'width':'85%'},400)
                $('#skills>ul>li:nth-child(4)>.skills_bg>.skills_box').stop().animate({'width':'75%'},500)
            }  
        }
    })

    $('#main>h1').animate({'top':'-100px','opacity':'1'},300)
    $('#main>p').delay(300).animate({'top':'70px','opacity':'1'},300)
    setInterval(function(){
        $('#wheel').animate({'top':'22px','opacity':'0'},500)
        $('#wheel').animate({'top':'6px','opacity':'1'},0)
    },600)
    $('#menu_popup_menu>li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown()
    })
    $('#menu_popup_menu>li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp()
    })
    $('#close_bt').click(function(){
        $('#menu_popup').fadeOut()
    })
    $('#moblie_menu').click(function(){
        $('#menu_popup').fadeIn()
    })
    $('#main_work2_right>a>img').animate({'top':'-765px'},10000,function(){
        $(this).delay(500).animate({'top':'0'})
    })
})