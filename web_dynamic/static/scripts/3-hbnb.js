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
    $.ajax({
	type: "POST",
	url: "http://0.0.0.0:5001/api/v1/places_search/",
	data: '{}',
	contentType: 'application/json',
	dataType: 'json',
	error: alert("some error"),
	success: printdata
    });

function printdata(data){
    for (i = 0; i < data.length; i++){
	<article>
	        <div class="title">

	      <h2>${data[i].name}</h2>

	      <div class="price_by_night">${data[i].price_by_night}</div>
	        </div>
	        <div class="information">
	          <div class="max_guest">
	    <i class="fa fa-users fa-3x" aria-hidden="true"></i>

	<br />

	

	      </div>
	          <div class="number_rooms">
	    <i class="fa fa-bed fa-3x" aria-hidden="true"></i>

	<br />

	{{ place.number_rooms }} Bedrooms
	      </div>
	          <div class="number_bathrooms">
	    <i class="fa fa-bath fa-3x" aria-hidden="true"></i>

	<br />

	{{ place.number_bathrooms }} Bathroom

	      </div>
	        </div>
	    </article>
    }
}
});
