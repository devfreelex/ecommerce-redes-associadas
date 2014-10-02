/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
  changeImage();
  animaBanner();
});


function changeImage(){


    
    jQuery(".wrap-carousel-marcas > .center > ul > li").hover(function(){

        imgPath = $('img',this).attr('src');  
        imgArr = imgPath.split('1');

        $('img',this).attr('src',imgArr[0]+'2'+imgArr[1]);

    }, function(){

        $('img',this).attr('src',imgArr[0]+'1'+imgArr[1]);

    });   
    
    $('.left-move').click(function(){

       $(".wrap-carousel-marcas > .center > ul > li").animate({
           left:'-=100px',
       });
   
       
    });
    
    $('.right-move').click(function(){

       $(".wrap-carousel-marcas > .center > ul > li").animate({
           left:'+=100px',
       })       
       
    });    
    
}  




function animaBanner(){
    $('.wrap-banner-top').cycle({
        pager:  '.banner-nav > ul > li', 
    });
}