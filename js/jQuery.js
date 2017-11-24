


//Intro list effect

$('.key').hover(
  function(){
    $(this).addClass('over-key');
  }, function(){
    $(this).removeClass('over-key');
  });



// Hovering effect for education

$('#education').hover(
  function() {
    $(this).addClass('darker-theme');
  }, function() {
    $(this).removeClass('darker-theme');
  }
);

// on hover on education add i tag to span class: pun to display

let pun = '<span class="getIt"> (Get it?) <i class="em em-wink"></i></span>';


$('#education').hover(
  function() {
    $(this).find('.for-pun').append(pun);
  }, function() {
    $(".getIt").remove();
  }
);





// To see more projects

// $(function(){ /* to make sure the script runs after page load */

//     $('a.see_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

//         event.preventDefault(); /* prevent the a from changing the url */
//         $(this).hide(); /* hide the read more button */
//         $(this).parents('.item').find('.more_projects').show(); /* show the .more_projects span */
//     });

// });