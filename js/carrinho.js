/*******************************************************/
// author: Henrique Colaco Cruz               25/09/2014
// Present Check Box
/*******************************************************/
$(document).ready(function(){
    //on click input, active icons
    $('ul.product-list > li > .present > form > input').click(function(){
        if($(this).is(':checked')){
            $(this).parent().next().addClass('active');
            $(this).next().addClass('active');
        }else{
            $(this).parent().next().removeClass('active');
            $(this).next().removeClass('active');
        }
    });
    //on load the page, active icons
    $('ul.product-list > li > .present > form > input').each(function(){
        if($(this).is(':checked')){
            $(this).parent().next().addClass('active');
            $(this).next().addClass('active');
        }else{
            $(this).parent().next().removeClass('active');
            $(this).next().removeClass('active');
        }
    });
    //on click icon, check checkbox
    $('ul.product-list > li > .present > form > i').click(function(){
        if($(this).prev().is(':checked')){
            $(this).prev().prop('checked', false);
            $(this).removeClass('active');
            $(this).parent().next().removeClass('active');
        }else{
            $(this).prev().prop('checked', true);
            $(this).addClass('active');
            $(this).parent().next().addClass('active');
        }
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               26/09/2014
// Box delivery form
/*******************************************************/
$(document).ready(function(){
    $('.line-frete > .wrap-delivery > .delivery-type').last().addClass('no-border');
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               26/09/2014
// Box delivery form
/*******************************************************/
$(document).ready(function(){
    //on load the page, active icons
    $('.line-frete > .wrap-delivery > .delivery-type > form > input').each(function(){
        if($(this).is(':checked')){
            $(this).prev().addClass('active');
        }else{
            $(this).prev().removeClass('active');
        }
    });
    //on click icon, check checkbox
    $('.line-frete > .wrap-delivery > .delivery-type > form > i').click(function(){
        if($(this).next().is(':checked')){
            $(this).next().prop('checked', false);
            $(this).removeClass('active');
        }else{
            $(this).next().prop('checked', true);
            $(this).addClass('active');
        }
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               29/09/2014
// Placeholder line-desc and line-frete
/*******************************************************/
$(document).ready(function(){
    $('.line-desc > .input-box > .placeholder').click(function(){
        var inputValue = $(this).next().val();
        
        if(inputValue == ''){
            $(this).hide();
            $(this).next().focus();
        }
    });
    $('.line-desc > .input-box > input').focusin(function(){
        var inputValue = $(this).val();
        
        if(inputValue == ''){
            $(this).prev().hide();
        }
    });
    $('.line-desc > .input-box > input').focusout(function(){
        var inputValue = $(this).val();
        
        if(inputValue == ''){
            $(this).prev().show();
        }
    });
    //Placeholder LINE FRETE
        $('.line-frete > .input-box > .placeholder').click(function(){
        var inputValue = $(this).next().val();
        
        if(inputValue == ''){
            $(this).hide();
            $(this).next().focus();
        }
    });
    $('.line-frete > .input-box > input').focusin(function(){
        var inputValue = $(this).val();
        
        if(inputValue == ''){
            $(this).prev().hide();
        }
    });
    $('.line-frete > .input-box > input').focusout(function(){
        var inputValue = $(this).val();
        
        if(inputValue == ''){
            $(this).prev().show();
        }
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               30/09/2014
// Box delivery form OPEN CLOSE
/*******************************************************/
$(document).ready(function(){
    $('.line-frete > button').click(function(){
        $(this).siblings('.wrap-delivery').slideDown();
    });
    $('.line-frete > .wrap-delivery > .delivery-type > form > i').click(function(){
        $('.line-frete > .wrap-delivery').slideUp();
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               30/09/2014
// Box cupom Show Alert
/*******************************************************/
$(document).ready(function(){
    $('.line-desc > button').click(function(){
        $(this).next().fadeIn();
    });
});
/*******************************************************/


    