// instancia jquery e evita conflitos com outras bibliotecas 
// jQuery( function($){
$(document).ready(function(){

  $('.owl-carousel').owlCarousel()

  let titulos = $('h4') // tag

  let items = $('.featured-item') // class

  let destaques = $('#featured') // id

  console.log(titulos.first());

  // Configuração de Produtos

  $('.featured-item a').addClass('btn btn-dark stretch-link')

  $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')

  $('.featured-item h4')

})
