// Needs latest version of jQuery to run
$(function(){
  $('body').removeClass('noscript');

  $('.toggle-btn, .close-btn').click(function(){
    toggleNav();
  });
});


function toggleNav(){
  if($('.site-wrapper').attr('data-state') == 'slide-closed'){
    // Show Nav when closed
    $('.site-wrapper').attr('data-state', 'slide-open');
  }else{
    // Hide Nav when open
    $('.site-wrapper').attr('data-state', 'slide-closed');
  }
}
$(function(){
  $('.subsites').toggleClass('hidden');
});

$(function(){
  $('.subsite-parent').click(function(){
    $('.subsites').toggleClass('hidden');
  });
});




