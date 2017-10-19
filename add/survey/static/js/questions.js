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



$(document).ready(function() {
	$("body").on('click', '#realQuestion', function(e){
		e.preventDefault();
		var data = {question_name: $(this).val(), surveyName:$('#surveyName').val()};
		var cleanData = JSON.stringify(data);
		alert(cleanData)
		$.ajax({
			type:'POST',
			url:'/view_dashboard/display_survey/delete_question/',
			data: cleanData,
			sucess: function(data){
				console.log(data.result)
				// var question = $(this).val();
				// var Qform = question.concat('Form')
				// alert(Qform)
			},
			err: function(XMLHttpRequest, textStatus, errorThrown){
				console.log("Status: " + textStatus); console.log("Error: " + errorThrown); 
				// var question = $(this).val();
				// var Qform = question.concat('Form')
				// alert(Qform)
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