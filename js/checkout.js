/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        if($("#agenda").is(":checked")){
            $(".box-calendar").slideDown('slow');
            $('.container-fluid').animate({ scrollTop: 500 }, 800);  
        }else{
            $(".box-calendar").slideUp('slow');
        };
    });
});
    
