$(document).ready(function() {
	$(".Open_ended").click(function() {
		$('#question').addClass("form-group");
		$('#questionform').append('<input id = "questionText" type="text" class="form-control col-md-6 col-md-offset-1" name = "questionName" value="Type question here" style="width:80%;" required=""></br>');
		$('#questionform').append('<input type="text" class="form-control col-md-6 col-md-offset-1" value="Type the answer here" style="width:80%; margin-top: 35px; margin-bottom: 15px;">');
		$('#questionform').append('<input name="surveyName" type="submit" class="btn-default btn-default1" value="{{ surveys}}" hidden>');
		$('.submitDelete').css('display','block');

		// $("body").on('click', '#submitquestion', function() {
		// 	location.reload();
		// });

		$("body").on('click', '#deletequestion', function() {
			location.reload();
		});

	});
});
$(document).ready(function() {
	$("body").on('click', '.addQuestion', function(e){
		$('.chooseQuestionType').css('display','block');
	});
});



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
		$.ajax({
			type:'POST',
			url:'/view_dashboard/display_survey/delete_question/',
			data: cleanData,
			dataType: 'json',
			success: function(data) { 
				var questionid = data.id
				$('#'+ questionid).remove();
				alert("Question Deleted"); 
			},
    		error: function(jqXHR, textStatus, errorThrown) {alert(errorThrown)}        
		});
		return
	});
});

 $(document).ready(function() {
    $("#questionText").on("click", function() {
        $("#questionText").val("");
    });
});