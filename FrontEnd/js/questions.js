let addQuestionText = '<div class = "added container-fluid">'+
							'<div class = "row">'+
								'<input id = "questionText" type="text"'+
								' class="form-control col-md-6" name = "questionName"'+
								' value="Type question here" style="width:80%;" required=""></br>'+
							'</div>'+
						'</div>';


let addOpenEnded = '<div class = "added container-fluid">'+
							'<div class = "row">'+
								'<input type="text" class="form-control'+
										' col-md-6" value="Type the answer here" style="width:80%;'+
										' margin-top: 15px; margin-bottom: 15px;">'
								'</div>'+
						'</div>';


let addMultipleChoice ='<div class = "added container-fluid">'+
							'<div class = "row">'+
								'<div class = "col-md-8">'+
									'<input type="text" class="uncheckedChoices form-control col-md-6 pull-left" value="Type a choice here" style= "margin-top: 15px; margin-right: 0px;">'+
								'</div>'+
								'<div class = "col-md-2">'+
									'<input type="checkbox" value="Enter choices" class = "pull-left" style="margin-top: 25px;  transform: scale(2.0)">'+
									'<i style="margin-top: 18px; margin-left: 20px;" class="addMultipleChoice fa fa-plus-square fa-2x pull-left" aria-hidden="true"></i>'+
									'<i style="margin-top: 18px; margin-left: 20px;" class="removeMultipleChoice fa fa-minus-square fa-2x" aria-hidden="true"></i>'
								'</div>'+
							'</div>'+
						'</div>';
let createMultipleChoiceForm = '<form class = "answerGroup">'+
							   '</form>'


$(document).ready(function() {
	$("body").on('click', ".Open_ended", function(e){
		$('.chooseQuestionType').css('display','none');
		$('#question').addClass("form-group");
		$('#questionform').append(addQuestionText);
		$('#questionform').append(addOpenEnded);
		$('.submitDelete').css('display','block');

		$("body").on('click', '#deletequestion', function() {
			location.reload();
		});
		return
	});});
	

$(document).ready(function() {
	$("body").on('click', ".Multiple_choice", function(e){
		$('.chooseQuestionType').css('display','none');
		$('#question').addClass("form-group");
		$('#questionform').append(addQuestionText);
		$('#questionform').append(addMultipleChoice);
		$('.submitDelete').css('display','block');

		$("body").on('click', '#deletequestion', function() {
			location.reload();
		});
		return
	});});


$(document).ready(function() {
	$("body").on('click', '.addQuestion', function(e){
		$('.hiddenQuestion').css('display','block');
		$('.chooseQuestionType').css('display','block');
		$('.added').remove();
	});});

$(document).ready(function() {
	$("body").on('click', '.addMultipleChoice', function(e){
		$('#questionform').append(addMultipleChoice);		
	});});


$(document).ready(function() {
	$("body").on('click', '.removeMultipleChoice', function(e){
		 $(this).parents('.container-fluid:first').remove();		
	});});


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
    return cookieValue;}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }});

// The code below is used to remove a question from the front end after 
// the question is deleted in the backend. A post request is sent to the
// delete question view the succes and error callbacks are not working
//but the complete callback is working. So I decided to remove the the 
// question from the front end in the complete call back.

$(document).ready(function() {
	$("body").on('click', '.realQuestion', function(e){
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
	});});

// The code below declare the type of question as a global variable
var questionTypeChosen; 
$(document).on('click', '.question_type', function(e){
			questionTypeChosen = $(this).val();
			alert(questionTypeChosen);});


$(document).ready(function() {
	$("body").on('click', '#submitquestion', function(e){
		e.preventDefault();
		$('.hiddenQuestion').css('display','none');
		$('.submitDelete').css('display','none');
		var choices = $('.uncheckedChoices').map(function() {
						    return $(this).val();
						}).get();
		var data = {
					question_type: questionTypeChosen, 
					surveyName: $('#surveyName').val(),
					question_name: $('#questionText').val(),
					question_choices: choices,
					};
		var cleanData = JSON.stringify(data);
		$.ajax({
			type:'POST',
			url:'/view_dashboard/display_survey/save_question/',
			data: cleanData,
			dataType: 'json',
			success: function(data) {
				console.log(data);
				var currentChoices = data.question_choices;
				var currentChoices = currentChoices.replace(/'/g, '"');
				currentChoices = JSON.parse(currentChoices);
				$('#changeFormId').prop("id", data.id);
				$('#appendQuestion').append(data.question);
				$('#appendQuestion').append(createMultipleChoiceForm);
				$('.answerGroup').attr("value", "aF"+data.id);
				for (i = 0; i < currentChoices.length; ++i) {
					  $('#appendQuestion').append('<input type="checkbox" value="'+currentChoices[i]+
					  	'"><span>'+currentChoices[i]+'</span><br>')
					}
				$('#deleteAddedQuestion').attr("value", data.question);
				$('#appendSurvey').attr("value", data.surveys);
				$('.addQuestionToList').css('display','block');
				// $('#appendQuestion').attr("value", "aQ"+data.id);

				// $('#questionList').append(data.id data.question data.question);
			},
    		error: function(jqXHR, textStatus, errorThrown) {alert(errorThrown)}        
		});
		return
	});
});


