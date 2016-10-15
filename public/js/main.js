
$(document).ready(function() {
	$('#currency_form').on('submit', currFormSubmit);
});

function myFunction() {
  document.getElementById("demo").innerHTML = "A HAPPY 2-YEAR ANNIVERSARY! <3";
}

function currFormSubmit(e) {
	var form = document.getElementById("currency_form");
	var curr2 = form.elements[0].value;
	console.log("CUR" + curr2);
	getXchgRate(curr2);
	e.preventDefault();
}

function getXchgRate(curr2) {
	console.log(curr2);
	var url = 'http://apilayer.net/api/live?access_key=' + apiKey + '&currencies=' + curr2;
	$.ajax(url, {
		success: function(data) {
			$('.curr1').text(data.source);
			$('.curr2').text(curr2);
			$('.xchgRate').text(data.quotes[data.source + curr2]);
		}
	});
}