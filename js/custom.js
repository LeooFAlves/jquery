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
  
  $('.featured-item h4').click( function(){
    $(this).css({
      'color': '#f00',
      'background': '#ff0',
      'font-weight': '100'
    })
  });
  
  // Manipulação de eventos
  //$('.featured-item a').on('blur',function(event){
    //event.preventDefault();
    //alert('Produto esgotado');
    //})
  
  //Callback
  //$('.featured-item:nth(1)')
  //.hide(500, function(){
  // este é o Callback
  // console.log( $(this).find('h4').text() + 'Esgotado')
  // })
  //.show(500, function(){
  //console.log($(this).find('h4').text() + 'Em Estoque')
  // })
  
  //Animações
  const duracao = 1000
  
  //$('.featured-item:nth(0)')
  //.hide(duracao)
  //.show(duracao)
  //.fadeOut(duracao)
  //.fadeIn(duracao)
  //.toggle(duracao)
  //.toggle(duracao)
  
  $('#form-submit').on('click', function(e){
    e.preventDefault()
    
    if($('#email').val() != '' ){
      $('#email').animate({
        opacity: "toggle",
        top: "-50"
      }, duracao, function(){
        console.log($(this).val())
      })
    }
    
  });

  // Event Listener .nav-modal-open
  $('.nav-modal-open').on('click', function(e){

    e.preventDefault();

    let elem = $(this).attr('rel')

    $('.modal-body').html($('#'+elem).html())
    $('.modal-header h5.modal-title').html($(this).text())

    let myModal = new bootstrap.Modal($('#modelId'))

    myModal.show()


  })

  // Validação Formulário

  function validate( elem ) {
    if ( elem.val() == '') {
      console.log('O campo de '+ elem.attr('name') + ' é obrigatório')

      elem.addClass('invalid')

      return false
    } else {
      elem.removeClass('invalid')
    }
  }

  $('body').on('submit', '.modal-body .form', function(e){

    e.preventDefault();

    const inputName = $('#nome')
    const inputEmail = $('#email')

    validate(inputName)
    validate(inputEmail)

    if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
      console.log('Verificar campos obrigatórios')
      return false
    } else {
      $(this).submit()
    }

  })

  $('body').on('blur', '#nome', function(){
    validate($(this))

  })

    $('body').on('blur', '#email', function () {
      validate($(this))
    })



})




