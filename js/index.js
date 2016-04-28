/*function for transition between navbars*/

/*
$(window).scroll(function() {
  var navbarColor = "62,195,246";//color attr for rgba
  var smallLogoHeight = $('.small-logo').height();
  var bigLogoHeight = $('.big-logo').height();
  var navbarHeight = $('.navbar').height(); 
  
  var smallLogoEndPos = 0;
  var smallSpeed = (smallLogoHeight / bigLogoHeight);
  
  var ySmall = ($(window).scrollTop() * smallSpeed); 
  
  var smallPadding = navbarHeight - ySmall;
  if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
  if (smallPadding < 0) { smallPadding = 0; }
  
  $('.small-logo-container ').css({ "padding-top": smallPadding});
  
  var navOpacity = ySmall / smallLogoHeight; 
  if  (navOpacity > 1) { navOpacity = 1; }
  if (navOpacity < 0 ) { navOpacity = 0; }
  var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
  $('.navbar').css({"background-color": navBackColor});
  
  var shadowOpacity = navOpacity * 0.4;
  if ( ySmall > 1) {
    $('.navbar').css({"box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"});
  } else {
    $('.navbar').css({"box-shadow": "none"});
  }
  
  
  
});
*/

/*dynamic search bar in index page*/
$(function () {
  function closeSearch() {
    var $form = $('.navbar-collapse form[role="search"].active')
    $form.find('input').val('');
    $form.removeClass('active');
  }

  // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
  $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
    event.preventDefault();
    var $form = $(this).closest('form'),
        $input = $form.find('input');
    $form.addClass('active');
    $input.focus();
  });
  // ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
  // if your form is ajax remember to call `closeSearch()` to close the search container
  $(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
    event.preventDefault();
    var $form = $(this).closest('form'),
        $input = $form.find('input');
    $('#showSearchTerm').text($input.val());
    closeSearch()
  });
    /*Corousel */
    <script src="../../dist/js/bootstrap.min.js"></script>

    $('.carousel').carousel({
        interval: 200
    });
    <script>
    $(document).ready(function(){
        $('.carousel').carousel()
        });
    </script>
});