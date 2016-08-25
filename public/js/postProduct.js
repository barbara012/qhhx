(function () {
    var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
	$('#product-picture').on('change', function() {
        var $this = $(this);
        if ($this[0].files.length === 0) { return; }
        var imgFile = $this[0].files[0];
        if (!rFilter.test(imgFile.type)) { alert("你选择的不是一张图片，请重新选择"); return; }
        var fR = new FileReader();
        fR.readAsDataURL(imgFile);
        fR.onload=function(){
            var img = new Image();
            img.src = fR.result;
            $('.product__preview').addClass('hasImg').empty().append(img);
            $('#defaultPic').val('');
        }
	});

    var editor = new Simditor({
        textarea: $('#post__desc'),
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
