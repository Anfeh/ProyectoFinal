function myFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  }else{
      x.className = "topnav";
  }
}







let layer_1 = document.querySelector('.layer-1')
let layer_2 = document.querySelector('.layer-2')
let layer_3 = document.querySelector('.layer-3')
let layer_4 = document.querySelector('.layer-4')
let layer_5 = document.querySelector('.layer-5')


window.onscroll = function(){
    let y = window.scrollY;
    layer_1.style.transform = 'translateY('+ y/2 +'px)';
    layer_2.style.transform = 'translateY('+ y/2 +'px)';
    layer_3.style.transform = 'translateY('+ y/1.5 +'px)';
    layer_4.style.transform = 'translateY('+ y/2 +'px)';
    layer_5.style.transform = 'translateY('+ y/3 +'px)';
}

function verMas(){
    let boton = document.getElementById("boton")
    boton.addEventListener("click", function(){
        window.location.href = ""
    })
}

$(document).ready(function(){ irArriba(); }); //Hacia arriba
function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}