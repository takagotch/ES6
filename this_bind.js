document.addEventListener('DOMContentLoaded', function(){
  var data = {
    title: '',
    price: 1000,
    show: function(){
      console.log(this.title + ' / ' + this.price + 'YEN');
    }
  };

  document.getElementById().addEventListener(
//  'click', data.show, false);
    'click', data.show.bind(data), false);

}, false);


