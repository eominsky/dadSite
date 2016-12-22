$(document).ready(function(){
   var scroll_start = 0;
   var titleSectOffSetHeight = $('.titleSection').outerHeight(true);
   var navBarOffSetHeight = $('.titleSection .nav_bar').outerHeight(true); /*returns element height + height of padding + height of border + height of margin*/
   $(document).scroll(function() { 
      scroll_start = $(window).scrollTop();
      if(scroll_start > titleSectOffSetHeight - navBarOffSetHeight) {
          $('.nav_bar').css('background-color', '#071F82'); /*must do .titleSection .nav_bar to specify nav_bar on home page b/c changing color of nav_bar only applies to home page nav_bar*/
          $('.nav_bar').css('box-shadow', '1px 1px rgba(200,200,200,1)'); /*offset shadow by 1px to right, by 1px below nav bar, color*/
       } else {
          $('.nav_bar').css('background-color', 'rgba(230, 16, 10, 0)');
          $('.nav_bar').css('box-shadow', '1px 1px transparent');
       }
   });

})


function initMap() {
  var gBuilding = {lat: 39.9515566, lng: -75.168043};
  var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 16,
    center: gBuilding
  });
  var marker = new google.maps.Marker({
    position: gBuilding,
    map: map
  });
}
