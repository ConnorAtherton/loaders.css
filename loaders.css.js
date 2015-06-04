$(function() {

  var addDivs = function(n) {
    var arr = [];
    for (i = 1; i <= n; i++) {
      arr.push('<div></div>');
    }
    return arr;
  };

  $('.loader-inner.ball-pulse').html(addDivs(3));
  $('.loader-inner.ball-grid-pulse').html(addDivs(9));
  $('.loader-inner.ball-clip-rotate').html(addDivs(1));
  $('.loader-inner.ball-clip-rotate-pulse').html(addDivs(2));
  $('.loader-inner.square-spin').html(addDivs(1));
  $('.loader-inner.ball-clip-rotate-multiple').html(addDivs(2));
  $('.loader-inner.ball-pulse-rise').html(addDivs(5));
  $('.loader-inner.ball-rotate').html(addDivs(1));
  $('.loader-inner.cube-transition').html(addDivs(2));
  $('.loader-inner.ball-zig-zag').html(addDivs(2));
  $('.loader-inner.ball-zig-zag-deflect').html(addDivs(2));
  $('.loader-inner.ball-triangle-path').html(addDivs(3));
  $('.loader-inner.ball-scale').html(addDivs(1));
  $('.loader-inner.line-scale').html(addDivs(5));
  $('.loader-inner.line-scale-party').html(addDivs(4));
  $('.loader-inner.ball-scale-multiple').html(addDivs(3));
  $('.loader-inner.ball-pulse-sync').html(addDivs(3));
  $('.loader-inner.ball-beat').html(addDivs(3));
  $('.loader-inner.line-scale-pulse-out').html(addDivs(5));
  $('.loader-inner.line-scale-pulse-out-rapid').html(addDivs(5));
  $('.loader-inner.ball-scale-ripple').html(addDivs(1));
  $('.loader-inner.ball-scale-ripple-multiple').html(addDivs(3));
  $('.loader-inner.ball-spin-fade-loader').html(addDivs(8));
  $('.loader-inner.line-spin-fade-loader').html(addDivs(8));
  $('.loader-inner.triangle-skew-spin').html(addDivs(1));
  $('.loader-inner.pacman').html(addDivs(5));
  $('.loader-inner.ball-grid-beat').html(addDivs(9));
  $('.loader-inner.semi-circle-spin').html(addDivs(1));

});



(function($){

    var defaluts = {
        proportion: 1,
        backgroundcolor: "#000000",
    }

    function getpx(object, pro, proportion){
        var px = object.css(pro);
        if(px == "auto")
        {
            return px;
        }
        var e = px.indexOf("p");
        var num = px.substring(0, e);
        num = num* proportion;
        return num
    }

    $.fn.Loaders =function(options){
        var settings = $.extend(defaluts, options);

        return this.each(function(){
            var $this = $(this);
            $this.css("width",getpx($this, "width",settings.proportion));
            var childrens = $this.children("div");
            childrens.css({
                "background-color":settings.backgroundcolor,
                width: getpx(childrens, "width", settings.proportion),
                height:getpx(childrens, "height", settings.proportion),
                margin: getpx(childrens, "margin", settings.proportion),
            });
            childrens.each(function(){
                var obj = $(this);
                obj.css("top", getpx(obj, "top", settings.proportion));
                obj.css("left", getpx(obj, "left", settings.proportion));
            });
        });

    }

})(jQuery);


