/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    openMenu();
});

function openMenu(){
    $('.coll-left > ul > li').click(function(){
        
        $('.coll-left > ul > li').removeClass('active');
        $(this).addClass('active');
        
        $('.coll-left > ul > li > ul').stop().slideUp();

      if($('ul', this).length){
          $(this).addClass('active');
        $('ul', this).stop().slideDown();
      }

    });    
    $('.coll-left > ul > li > ul > li').click(function(){
        $('.coll-left > ul > li > ul > li').removeClass('active');
        $(this).addClass('active');
    })
}