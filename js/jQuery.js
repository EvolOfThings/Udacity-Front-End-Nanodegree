

$('#education').hover(
  function() {
    $(this).addClass('darker-theme');
  }, function() {
    $(this).removeClass('darker-theme');
  }
);



$(function(){ /* to make sure the script runs after page load */

    $('a.see_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).hide(); /* hide the read more button */
        $(this).parents('.item').find('.more_projects').show(); /* show the .more_projects span */
    });

});