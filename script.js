$(function(){
    $('button.btn-menu-tahu-walik').on('click', function(){
      $('.tahu-walik').slideToggle();
      $('.card-tahu-bakso').slideToggle();
      $('.card-bakso').slideToggle();
      $('.card-kentang').slideToggle();
      $('.card-nugget').slideToggle();
      $('.card-otak').slideToggle();
  
    });
    $('button.btn-menu-tahu-bakso').on('click', function(){
      $('.tahu-bakso').slideToggle();
      $('.card-tahu-walik').slideToggle();
      $('.card-kentang').slideToggle();
      $('.card-bakso').slideToggle();
      $('.card-nugget').slideToggle();
      $('.card-otak').slideToggle();
    });
    $('button.btn-menu-kentang').on('click', function(){
      $('.kentang').slideToggle();
      $('.card-tahu-walik').slideToggle();
      $('.card-tahu-bakso').slideToggle();
      $('.card-bakso').slideToggle();
      $('.card-nugget').slideToggle();
      $('.card-otak').slideToggle();
    });
    $('button.btn-menu-bakso').on('click', function(){
      $('.bakso').slideToggle();
      $('.card-tahu-walik').slideToggle();
      $('.card-tahu-bakso').slideToggle();
      $('.card-kentang').slideToggle();
      $('.card-nugget').slideToggle();
      $('.card-otak').slideToggle();
    });
    $('button.btn-menu-nugget').on('click', function(){
      $('.nugget').slideToggle();
      $('.card-tahu-walik').slideToggle();
      $('.card-tahu-bakso').slideToggle();
      $('.card-bakso').slideToggle();
      $('.card-kentang').slideToggle();
      $('.card-otak').slideToggle();
    });
    $('button.btn-menu-otak').on('click', function(){
      $('.otak').slideToggle();
      $('.card-tahu-walik').slideToggle();
      $('.card-tahu-bakso').slideToggle();
      $('.card-bakso').slideToggle();
      $('.card-kentang').slideToggle();
      $('.card-nugget').slideToggle();
    });
    
  });
  
  function runningTotal() {
    var quantity = document.getElementsByName("quantity");
    var price = document.getElementsByName("price");
    var total = 0;
    for (var i = 0; i < price.length; i++) {
      total += parseInt(quantity[i].value || 0, 10) * parseInt(price[i].value || 0, 10);
    }
    document.getElementById("runtotal").innerHTML = total;
  }
  
  function subTotal() {}