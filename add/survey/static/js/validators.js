//I am trying to use the jquery from validator to validate the nmae of a survey.
//currently, the validator is not working so i decided to validate for
// white spaces and minimum length from the backend.


// $.validator.addMethod("nowhitespace",function(value,element){
//   return this.optional( element ) || /^\S+$/i.test( value );
// }, "No white space please" );

// $(document).ready(function() {
//   $("body").on('click', '#surveyNameButton', function() {
//       $("#surveyNameForm").validate({
//         rules:{
//            surveyName: {
//             required: true,
//             minlength: 5,
//             nowhitespace: true
//           }
//         }
//         messages{
//           surveyName: {
//             required: "You must name your surver.",
//             minlength: "A minimum of five chaacters is required.",
//             nowhitespace: "The name cannot contain white spaces"
//           }
//         }
//       });
//   });
// });


// https://github.com/jquery-validation/jquery-validation/blob/master/src/additional/nowhitespace.js


// // Wait for the DOM to be ready
// $.validate({
//   form : '#surveyNameForm'
//   modules : 'date, security',
//    onModulesLoaded : function() {
//     alert('All modules loaded!');
//   }


//   $('#container form').get(0).reset();
// });
// $(function() {
//   // Initialize form validation on the registration form.
//   // It has the name attribute "registration"
//   $("form[name='name-survey']").validate({
//     // Specify validation rules
//     rules: {
//       // The key name on the left side is the name attribute
//       // of an input field. Validation rules are defined
//       // on the right side
//       surveyName: "required",
      
//     },
//     // Specify validation error messages
//     messages: {
//       surveyName: "You cannot use spaces when naming your survey",
//     },
//     // Make sure the form is submitted to the destination defined
//     // in the "action" attribute of the form when valid
//     submitHandler: function(form) {
//       form.submit();
//     }
//   });
// });