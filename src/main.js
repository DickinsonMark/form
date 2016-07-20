$(document).ready(function() {
  console.log('test');
  $('#signup-form').on('submit', function(event) {
      event.preventDefault();
      console.log('This is working!');
      var formFields = $(this).serializeArray();
      console.log(formFields);
  })
});
