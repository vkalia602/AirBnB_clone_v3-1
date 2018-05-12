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
});
