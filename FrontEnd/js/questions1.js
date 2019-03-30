let questionareDesigned = "No";
let surveySent = "No";
let surveyStillOpen = "No";

$(document).ready(function() {
	$("body").on('submit', "#surveyNameForm", function(e){
		event.preventDefault();
		let surveyName = $("input#surveyName[type=text]").val();
		let createSurvey = '<div class="col-md-4">'+
						'<div class="surveys">'+
							'<nav class="navbar navbar-fixed-relative square">'+
								'<p class="surveyName"><a href = "survey101.html">' +surveyName + '</a></p>'+
							'</nav>'+
							'<div class="surveyStatus">'+
								'<div class="row oneRowStatus">'+
									'<!-- <hr class="statusLine"> -->'+
									'<p class="oneStatus">Questionare designed: ' + questionareDesigned + '</p>'+
									'<hr class="statusLine">'+
								'</div>'+
								'<div class="row oneRowStatus">'+
									'<p class="oneStatus">Survey sent: ' + surveySent + '</p>'+
									'<hr class="statusLine">'+
								'</div>'+
								'<div class="row oneRowStatus">'+
									'<p class="oneStatus">Survey still open: ' + surveyStillOpen + '</p>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>';

		let resultLong =$(".survRow:last-child > .col-md-4" ).length;
		if(resultLong == 1 || resultLong == 2){
			// console.log("Just append survey name alone");
			$('.survRow:last-child').append(createSurvey);
		}else{
			$('.surveyHolder').append('<div class="row survRow">' + createSurvey + '</div>');
			// console.log("I need to create a row and survey name");
		};
	});
});
