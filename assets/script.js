
$(document).ready(function(){

/*click menu-bar, change styling from class navbar to nav-toggle*/
	$('#menu-bar').click(function(){
		$('.navbar').toggleClass('nav-toggle');
	});

	$(window).on('scroll load', function() {

		$('.navbar').removeClass('nav-toggle');

	});

})


/*function to make menus appear full screen*/

$('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
  var src = $(this).attr('src');
  var modal;

  function removeModal() {
    modal.remove();
    $('body').off('keyup.modal-close');
  }

  modal = $('<div>').css({ /*modal with menu picture and styling*/
    background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: '10000',
    top: '0',
    left: '0',
    cursor: 'zoom-out'
  }).click(function() {
    removeModal();
  }).appendTo('body');

  //handling ESC
  $('body').on('keyup.modal-close', function(e) {
    if (e.key === 'Escape') {
      removeModal();
    }
  });
});