(function () {
	var $items = $('.job-list__item');
	var $simditorBody = $('.simditor-body');
	var $jobTitle = $('.job__title');
	$items.click(function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		$items.removeClass('selected');
		$(this).addClass('selected');
		$.get(url, function(res){
			if (res.state) {
				$jobTitle.text(res.job.title);
				$simditorBody.html(res.job.content);
			}
		})
	});
})();
