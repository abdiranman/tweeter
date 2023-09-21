$(document).ready(function() {
    $('textarea[name="text"]').on('input', function() {
      const inputLength = $(this).val().length;
      const remainingChars = 140 - inputLength;
  
      // Update the counter
      $(this).closest('.new-tweet').find('.counter').text(remainingChars);
  
      // Toggle the .counter-red class based on character count
      if (remainingChars < 0) {
        $(this).closest('.new-tweet').find('.counter').addClass('counter-red');
      } else {
        $(this).closest('.new-tweet').find('.counter').removeClass('counter-red');
      }
    });
  });
  