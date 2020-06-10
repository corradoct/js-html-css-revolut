$(document).ready(
  function() {
    $('.withDropdown').mouseenter(
      function() {
        $('.dropdown').addClass('displayFlex');
      }
    )
    $('.withDropdown').mouseleave(
      function() {
        $('.dropdown').removeClass('displayFlex');
      }
    )
  }
);
