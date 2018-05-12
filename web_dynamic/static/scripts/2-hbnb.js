$(document).ready(() => {
	let check = []
	let names = []
	$("input[type=checkbox]").click(function () {
		if (this.checked) {
			console.log(check);
			names.push($(this).data("name"));
			check.push($(this).data("id"));
			console.log(names)
		} else {
			console.log(check);
			check.splice(check.indexOf($(this).data("id")), 1);
			names.splice(check.indexOf($(this).data("name")), 1);
		}
		$("#amenities").text(names.toString());
	});

	$.getJSON('http://0.0.0.0:5001/api/v1/status/', (data) => {
		console.log(data.status);
		if (data.status === "OK") {
			console.log("WOW");
			$('#api_status').addClass('available');
		} else {
			console.log('NO');
			$('#api_status').removeClass('available');
		}
	});
});
