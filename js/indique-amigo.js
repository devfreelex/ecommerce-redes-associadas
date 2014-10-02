
/*******************************************************/
// author: Henrique Colaco Cruz               19/09/2014
// Product options behavior
/*******************************************************/
$(document).ready(function(){
    $('.option-square').click(function(){
        
        if($(this).hasClass('unavailable')){
            
        }else{
            $(this).siblings().removeClass('select');
            $(this).addClass('select');
        }
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               22/09/2014
// Description tabs Behavior
/*******************************************************/
$(document).ready(function(){
    $('.wrap-description > ul > li').click(function(){
        var posIndex = $(this).index();
        
        $('.wrap-description > .content-tabs').hide();
        $('.wrap-description > ul > li').removeClass('active');
        $(this).addClass('active');
        
        if($('.wrap-description > ul > li').eq(posIndex).hasClass('active')){
            $('.wrap-description > .content-tabs').eq(posIndex).show();
        }
    });
    
    $('.wrap-description > .content-tabs').hide();
    $('.wrap-description > ul > li').removeClass('active');
    $('.wrap-description > ul > li').eq(0).addClass('active');
    $('.wrap-description > .content-tabs').eq(0).show();
    
    
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               23/09/2014
// Avaliation open button
/*******************************************************/
$(document).ready(function(){
    $('.wrap-comments > .row > ul > li.g > button').click(function(){
        $('.wrap-comments > .avaliationComment').slideDown();
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               24/09/2014
// Placeholer unavailable product form
/*******************************************************/
$(document).ready(function(){
    $('.product-unavailable > form > .input-box > .placeholder').click(function(){
        $(this).prev().focus();
        $(this).hide();
    });
    $('.product-unavailable > form > .input-box > input').focusin(function(){
        $(this).next().hide();
    });
    $('.product-unavailable > form > .input-box > input').focusout(function(){
        var inputText = $(this).val();
        if(inputText == ''){
            $(this).next().show();
        }
    });
});
/*******************************************************/