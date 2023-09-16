const img_path = "static/img/{0}.webp"

if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
    };
}

function switch_img(vaule){
  $('#pay_img').attr('src', img_path.format(vaule))
  $('#pay_zfb_img').attr('src', img_path.format(vaule + 'zfb'))
}