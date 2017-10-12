$(document).ready(function() {
	$(".Open_ended").click(function() {
		$("#questionform").remove();
		$('#question').addClass("form-group");
		$form = $("<form id='questionform'></form>");
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-1" value="Type the question here" style="width:80%"><br>');
		$('#question').append($form);


		$('#answer').addClass("form-group");
		$("#answerform").remove();
		$("#deletequestion").remove();
		$form = $("<form id='answerform'></form>");
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-1" value="Type the answer here" style="width:80%">');
		$form.append('<input id="submitquestion" type="button" class="btn-default btn-default1" value="submit question">');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default1" value="delete question">');
		$('#answer').append($form);
		$("body").on('click', '#submitquestion', function() {
			location.reload();
		});

		$("body").on('click', '#deletequestion', function() {
			location.reload();
		});

	});
});

$(document).ready(function() {
	$(".Dichotomous_Question").click(function() {
		$("#questionform").remove();
		$('#question').addClass("form-group");
		$form = $("<form id='questionform'></form>");
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-1" value="Type the dichotomous question here" style="width:80%">');
		$form.append('<input id="addchoice" type="button" class="btn-default btn-default1 choices" value="Add choices"> </br>');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default1" value="delete question">');
		$('#question').append($form);


		$('#answer').addClass("form-group");
		$("#answerform").empty();
		$form = $("<form id='answerform'></form>");
		$("body").on('click', '#addchoice', function() {
		$("#addchoice").remove();
		$("#submitquestion").remove();
		$("#deletequestion").remove();
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-2" value="Type the choice here" style="width:50%">');
		$form.append('<input type="radio" value="Enter choices"></br>');
		$form.append('<input id="addchoice" type="button" class="btn-default btn-default1 choices" value="Add choices"></br>');
		$form.append('<input id="submitquestion" type="button" class="btn-default btn-default1" value="submit question"></br>');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default1" value="delete question">');
		});
		
		$('#answer').append($form);
		$("body").on('click', '#submitquestion', function() {
			location.reload();
		});
		$("body").on('click', '#deletequestion', function() {
			location.reload();
		});
		
	});
});

$(document).ready(function() {
	$(".Multiple_choice_question").click(function(){
		$("#questionform").remove();
		$('#question').addClass("form-group");
		$form = $("<form id='questionform'></form>");
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-1" value="Type a multiple choice question here" style="width:80%">');
		$form.append('<input id="addchoice" type="button" class="btn-default btn-default1 choices" value="Add choices"> </br>');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default1" value="delete question">');
		$('#question').append($form);


		$("#answerform").empty();
		$('#answer').addClass("form-group");
		$form = $("<form id='answerform'></form>");
		$("body").on('click', '#addchoice', function() {
		$("#addchoice").remove();
		$("#submitquestion").remove();
		$("#deletequestion").remove();
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-2" value="Type a multiple choice here" style="width:50%">');
		$form.append('<input type="checkbox" value="Enter choices"></br>');
		$form.append('<input id="addchoice" type="button" class="btn-default btn-default1 choices" value="Add choices"></br>');
		$form.append('<input id="submitquestion" type="button" class="btn-default btn-default1" value="submit question"></br>');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default1" value="delete question">');
		});

		$('#answer').append($form);
		$("body").on('click', '#submitquestion', function() {
			location.reload();
		});
		$("body").on('click', '#deletequestion', function() {
			location.reload();
		});

	});

});

$(document).ready(function() {
	$(".Rating_scale_question").click(function(){
		$("#questionform").remove();
		$('#question').addClass("form-group");
		$form = $("<form id='questionform'></form>");
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-1" value="Type a rating scale question here" style="width:80%">');
		$form.append('<input id="addchoice" type="button" class="btn-default btn-default1 choices" value="Add choices"> </br>');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default1" value="delete question">');
		$('#question').append($form);


		$('#ratinganswer').addClass("form-group");
		$("#answerform").empty();
		$form = $("<form id='answerform'></form>");
		$("body").on('click', '#addchoice', function() {
		$("#addchoice").remove();
		$("#submitquestion").remove();
		$("#deletequestion").remove();
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-2" value="Type a rating choice here" style="width:50%">');
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-1" value="Rate" style="width:8%"></br>');
		$form.append('<input id="addchoice" type="button" class="btn-default btn-default1 choices" value="Add choices"></br>');
		$form.append('<input id="submitquestion" type="button" class="btn-default btn-default1" value="submit question"></br>');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default1" value="delete question">');
		});

		$('#ratinganswer').append($form);
		$("body").on('click', '#submitquestion', function() {
			location.reload();
		});
		$("body").on('click', '#deletequestion', function() {
			location.reload();
		});

	});

});

$(document).ready(function() {
	$(".Bipolar_question").click(function(){
		$("#questionform").remove();
		$('#question').addClass("form-group");
		$form = $("<form id='questionform'></form>");
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-1" value="Type a bipolar question here" style="width:80%">');
		
		$('#question').append($form);


		$('#bipolaranswer').addClass("form-group");
		$("#answerform").empty();
		$form = $("<form id ='answerform' class= 'in-line'></form>");
		$form.append('<input type="text" class="form-control  col-md-4 col-md-offset-3" value="One extreme" style="width:42%"></br>');
		
		$form.append('<input id="bianswer" type="text" class="form-control col-md-4 col-md-offset-3" value="Other extreme" style="width:42%">');
		$form.append('<input id="addchoice" type="button" class="btn-default btn-default2 choices" value="Add choices"> </br>');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default2" value="delete question">');

		$("body").on('click', '#addchoice', function() {
		$("#addchoice").remove();
		$("#submitquestion").remove();
		$("#deletequestion").remove();
		$("#bianswer").remove();
		$form.append('<input type="checkbox" class = "col-md-4 col-md-offset-6" style ="margin-left: 275px;"> </br>');
		$form.append('<input id="bianswer" type="text" class="form-control col-md-4 col-md-offset-3" value="Other extreme" style="width:42%">');
		$form.append('<input id="addchoice" type="button" class="btn-default btn-default2 choices" value="Add choices" >');
		$form.append('<input id="submitquestion" type="button" class="btn-default btn-default2" value="submit question">');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default2" value="delete question">');
		});

		$('#bipolaranswer').append($form);
		$("body").on('click', '#submitquestion', function() {
			location.reload();
		});
		$("body").on('click', '#deletequestion', function() {
			location.reload();
		});

	});

});

$(document).ready(function() {
	$(".Likert_question").click(function(){
		$("#questionform").remove();
		$('#question').addClass("form-group");
		$form = $("<form id='questionform'></form>");
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-1" value="Type a rating scale question here" style="width:80%">');
		$form.append('<input id="addchoice" type="button" class="btn-default btn-default1 choices" value="Add choices"> </br>');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default1" value="delete question">');
		$('#question').append($form);


		$('#ratinganswer').addClass("form-group");
		$("#answerform").empty();
		$form = $("<form id='answerform'></form>");
		$("body").on('click', '#addchoice', function() {
		$("#addchoice").remove();
		$("#submitquestion").remove();
		$("#deletequestion").remove();
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-2" value="Type a likert choice here" style="width:50%">');
		$form.append('<input type="text" class="form-control col-md-6 col-md-offset-1" value="Rate" style="width:8%"></br>');
		$form.append('<input id="addchoice" type="button" class="btn-default btn-default1 choices" value="Add choices"></br>');
		$form.append('<input id="submitquestion" type="button" class="btn-default btn-default1" value="submit question"></br>');
		$form.append('<input id="deletequestion" type="button" class="btn-default btn-default1" value="delete question">');
		});

		$('#ratinganswer').append($form);
		$("body").on('click', '#submitquestion', function() {
			location.reload();
		});
		$("body").on('click', '#deletequestion', function() {
			location.reload();
		});

	});

});


$(document).ready(function() {
	$("body").on('click', '.question', function(){
		$("button.question").attr("disabled", true);
		$('#deletequestion, #submitquestion, #null').click(function () {
		    if (this.id == 'deletequestion') {
		    	// alert('Question has been deleted')
		         $("button.question").attr("disabled", false);
		    }
		    else if (this.id == 'submitquestion') {
		    	// alert('Question has been submitted')
		         $("button.question").attr("disabled", false);
		    }

		});
	});
});


// $(document).on('submit', '#surveyNameForm' function(e){
// 	alert('I ameking the post request');
// 	e.preventDefault();
// 	$.ajax({
// 		type:'POST',
// 		url:'view_dashboard/create_survey/',
// 		data:{
// 			survey_name: $('#surveyName').val(),
// 			csrfmiddlewaretoken:$('input[survey_name=csrfmiddlewaretoken]').val()
// 		},
// 		sucess: function(){
// 		alert(survey_name)

// 		}
// 	});
// });