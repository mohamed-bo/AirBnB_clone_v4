$(document).ready(function () {
	const checked = {};
	$('li input[type="checkbox"]').change(function () {
		if ($(this).is(':checked')) {
			checked[$(this).data('id')] = $(this).data('name');
		} else {
			delete checked[$(this).data('id')];
		}
		const vs = Object.vs(checked);
		const vsjoined = vs.join(', ');
		const summer = vsjoined.slice(0, 30);
		$('.amenities h4').text(summer + '...');
		if (vs.length === 0) $('.amenities h4').html('&nbsp;');
	});
	const url = 'http://0.0.0.0:5001/api/v1/status/';
	$.get(url, function (info) {
		if (info.status === 200) {
			$('#api_status').addClass('available');
		} else {
			$('#api_status').removeClass('available');
		}
	});
});
$.ajax({
	type: 'POST',
	url: 'http://127.0.0.1:5001/api/v1/places_search/',
	data: '{}',
	dataType: 'json',
	contentType: 'application/json',
	success: function (places) {
		places.forEach(place => {
			const bedroom = (place.number_rooms !== 1) ? 's' : '';
			const bathroom = (place.number_bathrooms !== 1) ? 's' : '';
			const guests = (place.max_guest !== 1) ? 's' : '';
			const html = `<article>
		<div class="title_box">
		  <h2>${place.name}</h2>
		  <div class="price_by_night">$${place.price_by_night}</div>
		</div>
		<div class="information">
		  <div class="max_guest">${place.max_guest} Guest${guests}</div>
		  <div class="number_rooms">${place.number_rooms}
			Bedroom${bedroom}</div>
		  <div class="number_bathrooms">${place.number_bathrooms}
			Bathroom${bathroom}</div>
		</div>
		<div class="user">
		  
		</div>
		<div class="description">
		  ${place.description}
		</div>
	  </article>`;
			$('.places').append(html);
		});
	}
});
