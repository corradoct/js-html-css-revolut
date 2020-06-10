$(document).ready(
  function() {
    // Quando il mouse entra nell'area dell'li apro il menù a tendina e inverto la freccia dell'li delle lingue.
    $('.withDropdown').mouseenter(
      function() {
        $(this).children('.dropdown').addClass('displayFlex');
        if ($(this).find('i').hasClass('fa-angle-down')) {
          $('i').removeClass('fa-angle-down');
          $('i').addClass('fa-angle-up');
        }
      }
    )
    // Quando il mouse esce dall'area dell'li chiudo il menù a tendina e inverto la freccia dell'li delle lingue.
    $('.withDropdown').mouseleave(
      function() {
        $(this).children('.dropdown').removeClass('displayFlex');
        if ($(this).find('i').hasClass('fa-angle-up')) {
          $('i').removeClass('fa-angle-up');
          $('i').addClass('fa-angle-down');
        }
      }
    )
    // Quando clicco sugli li chiudo il menù a tendina e inverto la freccia dell'li delle lingue.
    $('.withDropdown').click(
      function() {
        $(this).children('.dropdown').removeClass('displayFlex');
        if ($(this).find('i').hasClass('fa-angle-up')) {
          $('i').removeClass('fa-angle-up');
          $('i').addClass('fa-angle-down');
        }
      }
    )
  }
);
