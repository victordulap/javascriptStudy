$(document).ready(function () {
   // Initialize total into the page
   let $total = 0;
   $('<p>Total: </p>').appendTo('.activities');
   $('<p id="total-value"></p>').appendTo('.activities');

   $('.notification').hide();
   $('.cc-notification').hide();
   $('.zip-notification').hide();
   $('.cvv-notification').hide();

   // hide cc info 
   $('.credit-card').hide();

   $('#name').focus();
   $('.other-option').hide();

   $('#job-role').change(function (e) {
      e.preventDefault();

      if ($(this).val() == 'other') {
         $('.other-option').show();
      } else {
         $('.other-option').hide();
      }
   });


   // real time validation
   $('#user-name').on('input', function () {
      validateName($('#user-name'));
   })

   function validateName(name) {
      if (name.val() == '') {
         controlNotification(`Name can't be empty`, true, name);
         name.addClass('input-error');
         return false;
      } else if (!regexName(name)) {
         controlNotification(`Name must contain 5-20 characters`, true, name);
         name.addClass('input-error');
         return false;
      } else {
         controlNotification('', false, name);
         name.removeClass('input-error');
         return true;
      }
   }

   function regexName(name) {
      return (/^[a-zA-Z]{5,20}$/.test(name.val()))
   }

   function controlNotification(message, show, notification) {
      if (show) {
         // console.log(`${message} / ${show} / ${notification}`);
         notification.next().text(message).show();
      } else {
         $(notification).next().text('').hide();
      }
   }

   // validate email
   $('#user-email').on('input', function () {
      validateEmail($('#user-email'));
   })

   function validateEmail(email) {
      if (email.val() == '') {
         controlNotification(`Email can't be empty`, true, email);
         email.addClass('input-error');
         return false;
      } else if (!regexEmail(email)) {
         controlNotification(`Write a valid email`, true, email);
         email.addClass('input-error');
         return false;
      } else {
         controlNotification('', false, email);
         email.removeClass('input-error');
         return true;
      }
   }

   function regexEmail(email) {
      return (/^[a-zA-Z]+@+[a-zA-Z]{2,10}\.[a-zA-Z]{2,3}$/.test(email.val()));
   }


   // validate checkboxes
   $('activities > .form-field > label > input:checkbox').on('change', function (e) {
      validateActivities($(this));
   })

   function validateActivities(elem) {
      if ($('.activities > .form-field > label > input:checkbox:checked').length == 0) {
         $('.activities .notification').text('You must select minumum one activity').show();
         $('.activities > .form-field > label > input:checkbox:checked').removeAttr('disabled');
         $total = 0;
         $('#total-value').text('$' + $total);
         $('.activities > legend').addClass('input-error');
         return false;
      } else if (elem != null) {
         $('.activities > legend').removeClass('input-error');
         if (elem.prop('name') == 'main-conference' && elem.is(':checked')) {
            $total += 200;
            $('#total-value').text('$' + $total);
         } else if (elem.prop('name') == 'main-conference' && !elem.is(':checked')) {
            $total -= 200;
            $('#total-value').text('$' + $total);
         }
      }
   }
});