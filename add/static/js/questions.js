$(document).ready(function() {
	$(".addQuestion").click(function() {
		$('#question').addClass("form-group");
		// $('#questionform').append('<label for="question">Enter question:</label>')
		$('#questionform').append('<input id = "question" type="text" class="form-control col-md-6 col-md-offset-1" name = "questionName" value="Type question here" style="width:80%;" autofocus=""></br>');
		$('#questionform').append('<input id="submitquestion" type="submit" class="btn-default btn-default2" value="submit question">');
		$('#questionform').append('<input id="deletequestion" type="submit" class="btn-default btn-default2" value="delete question">');
		$('#questionform').append('<input name="surveyName" type="submit" class="btn-default btn-default1" value="{{ surveys}}" hidden>');
	
		// $("body").on('click', '#submitquestion', function() {
		// 	location.reload();
		// });

		$("body").on('click', '#deletequestion', function() {
			location.reload();
		});

	});
});



// $(document).ready(function() {
// 	$("body").on('click', '.questionType', function(){
// 		$("button.questionType").attr("disabled", true);
// 		$('#deletequestion, #submitquestion, #null').click(function () {
// 		    if (this.id == 'deletequestion') {
// 		    	// alert('Question has been deleted')
// 		         $("button.questionType").attr("disabled", false);
// 		    }
// 		    else if (this.id == 'submitquestion') {
// 		    	// alert('Question has been submitted')
// 		         $("button.questionType").attr("disabled", false);
// 		    }

// 		});
// 	});
// });


// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

// The code below is used to remove a question from the front end after 
// the question is deleted in the backend. A post request is sent to the
// delete question view the succes and error callbacks are not working
//but the complete callback is working. So I decided to remove the the 
// question from the front end in the complete call back.

$(document).ready(function() {
	$("body").on('click', '#realQuestion', function(e){
		e.preventDefault();
		var question = $(this).val();
		var data = {question_name: $(this).val(), surveyName:$('#surveyName').val()};
		var cleanData = JSON.stringify(data);
		// alert(cleanData)
		$.ajax({
			type:'POST',
			url:'/view_dashboard/display_survey/delete_question/',
			data: cleanData,
			dataType:'text',
			sucess: function(data){
				console.log(data)
				
			},
			error: function () {
		        OnError(error)
		    },
		    complete: function (data) {
				var Qform = question.concat('Form');
		        var questionid = JSON.parse(data.responseText).id;
		        console.log(questionid)
		        $('#'+ questionid).remove();
		        alert('question deleted')

		    }
		});
	});
});

// $(document).on('submit', '#surveyNameForm', function(e){
// 	alert('I ameking the post request');
// 	e.preventDefault();
// 	$.ajax({
// 		type:'POST',
// 		url:'/view_dashboard/create_survey/',
// 		data:{
// 			survey_name: $('#surveyName').val(),
// 			csrfmiddlewaretoken:$('input[survey_name=csrfmiddlewaretoken]').val()
// 		},
// 		sucess: function(){
// 		alert(survey_name)

// 		}
// 	});
// });