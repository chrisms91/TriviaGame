// var time = 15; /* how long the timer runs for */
// var initialOffset = '440';
// var i = 1
// // var timer = setInterval(function() {
// //     $('.circle_animation').css('stroke-dashoffset', initialOffset-(i*(initialOffset/time)));
// //     $('#timer-count').text(i);
// //     if (i == time) {
// //         clearInterval(timer);
// //     }
// //     i++;  
// // }, 1000);
// var timer;
// var timeCount = 0;
// function timer(){
// 	timer = setInterval(function() {
// 	    $('.circle_animation').css('stroke-dashoffset', initialOffset-(i*(initialOffset/time)));
// 	    $('#timer-count').text(i);
// 	    timeCount++;
// 	    console.log(timeCount);
// 	    if (i == time) {
// 	        clearInterval(timer);
// 	    }
// 	    i++;  
// 	}, 1000);
// }

// function clearTimer(timer){
// 	clearInterval(timer);
// }

// timer();

var gameObject = {

	score: 0,
	time: 40,
	correctNumber: 0,
	incorrectNumber: 0,
	answeredQuestion: 0,
	unansweredQuestion: 0,
	questionIndex: 6,
	questionNumber: 1,

	questions: [
		{
			point: 10,
			question: 'Which of the following is a disadvantage of using JavaScript?',
			choices: ['Client-side JavaScript does not allow the reading or writing of files', 'JavaScript can not be used for Networking applications because there is no such support available.', 'JavaScript does not have any multithreading or multiprocess capabilities', 'All of the above'],
			answer: 4
		},
		{
			point: 20,
			question: 'How do you write "Hello World" in an alert box?',
			choices: ['msgBox("Hello Word");', 'alert("Hello Word");', 'alertBox("Hello World");', 'msg("Hello World");'],
			answer: 2
		},
		{
			point: 30,
			question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
			choices: ['if (i != 5)', 'if (i <> 5)', 'if i = ! 5 then', 'if i <> 5'],
			answer: 1
		},
		{
			point: 40,
			question: 'How does a FOR loop start?',
			choices: ['for i = 1 to 5', 'for(i = 0; i <= 5)', 'for(i = 0; i <= 5; i++)', 'for(i <= 5; i++)'],
			answer: 3
		},
		{
			point: 50,
			question: 'How do you round the number 7.25, to the nearest integer?',
			choices: ['round(7.25)', 'Math.rnd(7.25)', 'Math.round(7.25)', 'rnd(7.25)'],
			answer: 3
		},
		{
			point: 60,
			question: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
			choices: ['last( )', 'put( )', 'push( )', 'Non of the above'],
			answer: 2
		},
		{
			point: 70,
			question: 'Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?',
			choices: ['substr( )', 'search( )', 'lastIndexOf( )', 'indexOf( )'],
			answer: 4
		},
		{
			point: 80,
			question: 'Which of the following statements are true for Java script?',
			choices: ['JavaScript is case sensitive', 'JavaScript statements can be grouped together in blocks', 'semicolon at the end of statement is mandatory', 'Both A and B above'],
			answer: 4

		},
		{
			point: 90,
			question: 'Which operator is used to assign a value to a variable?',
			choices: ['*', '===', '+', '='],
			answer: 4
		},
		{
			point: 100,
			question: 'How does a WHILE loop start?',
			choices: ['while (i <= 10)', 'while (i <= 10; i++)', 'while i = 1 to 10', 'while (i = 0; i <= 5; i++)'],
			answer: 1
		}
	],

	generateQuestions: function () {
		$('#quiz-container').empty();
		$('#choice-container').empty();

		//append question
		$('#quiz-container').append(
			'<h3 class="animated fadeIn">' + gameObject.questionNumber + '. ' + gameObject.questions[gameObject.questionIndex].question + '</h3>'
		);

		//append choices
		$('#choice-container').append(
			'<div class="row justify-content-center animated fadeIn">' + 
				'<div class="col-md-6 col-md-offset-3 col-sm-12 text-center">' + 
					'<div id="0" class="choice">' + 'A.   ' + gameObject.questions[gameObject.questionIndex].choices[0] + '</div>' + 
					'<div id="1" class="choice">' + 'B.   ' + gameObject.questions[gameObject.questionIndex].choices[1] + '</div>' +
					'<div id="2" class="choice">' + 'C.   ' + gameObject.questions[gameObject.questionIndex].choices[2] + '</div>' +
					'<div id="3" class="choice">' + 'D.   ' + gameObject.questions[gameObject.questionIndex].choices[3] + '</div>' +
				'</div>' +
			'</div>'
		);

		gameObject.questionNumber++;
	}
}

window.onload = function () {
	gameObject.generateQuestions();
}
