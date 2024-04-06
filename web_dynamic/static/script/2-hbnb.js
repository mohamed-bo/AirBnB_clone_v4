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
