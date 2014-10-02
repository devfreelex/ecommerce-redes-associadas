/*Redirect*/

/*******************************************************/
// author: Henrique Colaco Cruz               01/10/2014
// Unavailable product redirect
/*******************************************************/
$(document).ready(function(){
    var pathName = window.location.pathname;
    var arrayUrl = pathName.split('/');
    var theUrl = '/'+arrayUrl[1]+'/'+arrayUrl[2]+'/'+'detalhe-produto-indisponivel.html';
    $('.wrap-product-info > .select-options .option-square.unavailable').click(function(){
        window.location.href=theUrl;  
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               01/10/2014
// Redirect Cart
/*******************************************************/
$(document).ready(function(){
    var pathName = window.location.pathname;
    var arrayUrl = pathName.split('/');
    var theUrl = '/'+arrayUrl[1]+'/'+arrayUrl[2]+'/'+'carrinho.html';
    $('.header > .header-content > .wrap-cart').click(function(){
        window.location.href=theUrl;       
    });
    $('.wrap-fixed-bar > .center > .cart-button').click(function(){
       window.location.href=theUrl;  
    });
    $('.wrap-fixed-bar > .center > .cart-button > .box-cart > .bottom-table > .left > button').click(function(){
       window.location.href=theUrl;  
    });
    $('.header > .header-content > .wrap-cart > .box-cart > .bottom-table > .left > button').click(function(){
       window.location.href=theUrl;  
    });
    

});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               01/10/2014
// Redirect Product Detail
/*******************************************************/
$(document).ready(function(){
    var pathName = window.location.pathname;
    var arrayUrl = pathName.split('/');
    var theUrl = '/'+arrayUrl[1]+'/'+arrayUrl[2]+'/'+'detalhe-produto.html';
    $('.box-content ul > .wrap-product').click(function(){
        window.location.href=theUrl;       
    });
    $('.wrap-buy-box > ul > .wrap-product').click(function(){
        window.location.href=theUrl;       
    });
    $('ul.product-list > li > .product > a').click(function(){
        window.location.href=theUrl;       
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               01/10/2014
// Redirect Home Header
/*******************************************************/
$(document).ready(function(){
    var pathName = window.location.pathname;
    var arrayUrl = pathName.split('/');
    var theUrl = '/'+arrayUrl[1]+'/'+arrayUrl[2]+'/'+'home.html';
    $('.wrap-fixed-bar > .center > a > img').click(function(){
        window.location.href=theUrl;       
    });
    $('.header > .header-content > a > img').click(function(){
        window.location.href=theUrl;       
    });
});
/*******************************************************/

/*******************************************************/
// author: Henrique Colaco Cruz               02/10/2014
// Search Behavior
/*******************************************************/
$(document).ready(function(){
    $('.header > .header-content > .box-search > button').click(function(){
        var searchText = $(this).prev().val();
        
        if(searchText == ''){
            var pathName = window.location.pathname;
            var arrayUrl = pathName.split('/');
            var theUrl = '/'+arrayUrl[1]+'/'+arrayUrl[2]+'/'+'busca-sem-resultado.html';
            window.location.href=theUrl;
        }else{
            var pathName = window.location.pathname;
            var arrayUrl = pathName.split('/');
            var theUrl = '/'+arrayUrl[1]+'/'+arrayUrl[2]+'/'+'busca-com-resultado.html';
            window.location.href=theUrl;
        }
    });
});
/*******************************************************/

