/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************/
// author: Henrique Colaco Cruz               04/09/2014
// Open box-edit-cep
/*******************************************************/
$(document).ready(function(){
    $('.header > .header-top-bar > .center > .center-left > .box-edit').click(function(){
        $('.header > .header-top-bar > .center > .center-left > .box-cep > .box-edit-cep').slideToggle();
    });
    $('.header > .header-top-bar > .center > .center-left > .box-cep > .box-edit-cep > .box-content > button').click(function(){
        $('.header > .header-top-bar > .center > .center-left > .box-cep > .box-edit-cep').slideUp();
    });
    $('.header > .header-top-bar > .center > .center-left > .box-cep > .box-edit-cep > .box-content > a').click(function(){
        $('.header > .header-top-bar > .center > .center-left > .box-cep > .box-edit-cep').slideUp();
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               12/09/2014
// Placeholder footer - field mail register
/*******************************************************/
$(document).ready(function(){
    $('.footer > .wrap-register-mail > .center .placeholder').click(function(){
        $(this).prev().focus();
        $(this).hide();
    });
    $('.footer > .wrap-register-mail > .center input').focusin(function(){
        $(this).next().hide();
    });  
    $('.footer > .wrap-register-mail > .center input').focusout(function(){
        var fieldText = $(this).val();
        
        if(fieldText == ''){
            $(this).next().show();
        }
    });    
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               12/09/2014
// Breadcrumb behavior
/*******************************************************/
$(document).ready(function(){
    $('.wrap-breadcrumb > ul > li').prepend('<span>></span>');
    $('.wrap-breadcrumb > ul > li:last-child > span').remove();
    $('.wrap-breadcrumb > ul > li:last-child').prepend('<span>></span>');
    $('.wrap-breadcrumb > ul > li:last-child').addClass('active');
    $('.wrap-breadcrumb > ul > li:first-child > span').remove();
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               15/09/2014
// Placeholder search box - fixed bar
/*******************************************************/
$(document).ready(function(){
    $('.wrap-fixed-bar > .center > .box-search > .placeholder').click(function(){
        $(this).prev().prev().focus();
        $(this).hide();
    });
    $('.wrap-fixed-bar > .center > .box-search > input').focusin(function(){
        $('.wrap-fixed-bar > .center > .box-search > .placeholder').hide();
    });
    $('.wrap-fixed-bar > .center > .box-search > input').focusout(function(){
        var fieldText = $(this).val();
        
        if(fieldText == ''){
            $(this).next().next().show();
        }
    });    
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               17/09/2014
// Placeholder search box - fixed bar
/*******************************************************/
$(document).ready(function(){
    $('.header > .header-content > .box-search > .placeholder').click(function(){
        $(this).prev().prev().focus();
        $(this).hide();
    });
    $('.header > .header-content > .box-search > input').focusin(function(){
        $('.header > .header-content > .box-search > .placeholder').hide();
    });
    $('.header > .header-content > .box-search > input').focusout(function(){
        var fieldText = $(this).val();
        
        if(fieldText == ''){
            $(this).next().next().show();
        }
    });    
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               16/09/2014
// Fixed Bar Behavior
/*******************************************************/
$(document).ready(function(){
    $(window).scroll(function () {

    $x = $(window).scrollTop();
    if ($x >= 100) {
        $(".wrap-fixed-bar").fadeIn("slow");
    } else {
        $(".wrap-fixed-bar").fadeOut("slow");
    }
}); 
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               16/09/2014
// Nav drop arrow position
/*******************************************************/
$(document).ready(function(){
    $('.header > nav > ul > li').hover(function(){
        var liWidth = $(this).width();
        var arrowPosition = liWidth/2+2;
        
        $(this).find('.liArrow').css('left', arrowPosition+'px');
    });
    $('.header > nav > ul > li').hover(function(){
        var liWidth = $(this).width();
        var arrowPosition = liWidth/2+2;
        
        $(this).find('.cat-content.invert .liArrow').css('left', 'auto');
        $(this).find('.cat-content.invert .liArrow').css('right', arrowPosition+'px');
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               17/09/2014
// Add class 'invert' on li, content box
/*******************************************************/
$(document).ready(function(){
    $('.header > nav > ul > li').eq(7).children('.cat-content').addClass('invert');
    $('.header > nav > ul > li').eq(6).children('.cat-content').addClass('invert');
    $('.header > nav > ul > li').eq(5).children('.cat-content').addClass('invert');
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               17/09/2014
// Active the first LI element
/*******************************************************/
$(document).ready(function(){
    $('.header > nav > ul > li').eq(0).addClass('active');
});
/*******************************************************/


