/**
 * Created by qbt on 2016/8/27.
 */
$(document).ready(function() {
    var $gallery = $('.gallery__form');
    $('.btn-post-new').click(function () {
        if($gallery.is(':visible')) {
            $gallery.hide();
        } else {
            $gallery.show();
        }
        return false;
    });





    function postFormData(url, data, callback) {
        if (typeof FormData === 'undefined') {
            throw new Error ('FormData is not implemented');
        }

        var request = new XMLHttpRequest();
        var formdata = new FormData();

        for (var i = 0; i < data.length; i++) {
            formdata.append('image', data[i]);
        }
        request.onreadystatechange = function () {
            if (request.readyState === 4 && callback)
                callback(request);
        };
        request.open("POST", url);
        request.send(formdata);
    }

   $('.submit').click(function () {
       var $this = $(this);
       if ($this.hasClass('disabled')) {
           return;
       }
       $this.addClass('disabled');
        var imgFiles = document.getElementById('image').files,	//获取文件对象
            data = [],
            url = '/gallery/upload';
        var len = imgFiles.length;
        if (len === 0) return;

       for (var i = 0; i < len; i++) {
           if (imgFiles[i].type.indexOf('image') === -1) alert('请选择图片文件');
           if (imgFiles[i].size > 2097152) { //  2 * 1024 * 1024
               alert('图片尺寸过大！服务器硬盘扛不住！');
               return;
           }
           data.push(imgFiles[i]);
       }


        postFormData(url, data, function (res) {
            res = JSON.parse(res.response);
            if (res.state) {
                var picItem = '<div class="pic-item">'+
                    '<div class="pic-wrapper">' +
                    '<img src="'+ res.url +'" alt="青海恒信融锂业科技有限公司">' +
                    '</div>' +
                    '<div class="pic__url">图片链接：'+ res.url +'</div>'+
                    '</div>';
                $('.list').prepend($(picItem));
                $this.removeClass('disabled');
            }
        });
       $(document).click(function() {
           $gallery.hide();
       });
    });
});