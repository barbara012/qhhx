(function () {
	var editor = new Simditor({
		textarea: $('#post__content'),
		toolbar: [
			'title',
			'bold',
			'italic',
			'underline',
			'fontScale',
			'color',
			'ol'  ,
			'ul'   ,
			'blockquote',
			'table',
			'link',
			'image',
			'hr'   ,
			'indent',
			'outdent',
			'alignment'
		]
		//optional options
	});
})();
