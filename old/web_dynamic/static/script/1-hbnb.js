$(document).ready(function () {
    const checked = {};
    $('li input[type="checkbox"]').change(function () {
      if ($(this).is(':checked')) {
        checked[$(this).data('id')] = $(this).data('name');
      } else {
        delete checked[$(this).data('id')];
      }
      const vs = Object.vs(checked);
      const str = vs.join(', ');
      const summer = str.slice(0, 30);
      $('.amenities h4').text(summer + '...');
      if (vs.length === 0) $('.amenities h4').html('&nbsp;');
    });
  });
