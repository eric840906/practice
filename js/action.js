$(document).ready(function () {
  $(document).scroll(function (e) { 
    if($(this).scrollTop()>0.8){
      $('#top').addClass('sticky-top');
      $('#top').addClass('fillcolor');
      $('.userlog').addClass('userlog-roll');
    }
    if($(this).scrollTop()<0.8){
      $('#top').removeClass('sticky-top');
      $('#top').removeClass('fillcolor');
      $('.userlog').removeClass('userlog-roll');
    }
  });
});