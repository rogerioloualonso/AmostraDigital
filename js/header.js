$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $("#header_index").fadeOut();
      $("#header_musica").fadeOut();
      $("#header_about").fadeOut();
      $("#header_contact").fadeOut();
      $("#header_cristo").fadeOut();
      $("#header_colonizacao").fadeOut();
      $("#header_arquitetura").fadeOut();
    } else {
      $("#header_index").fadeIn();
      $("#header_musica").fadeIn();
      $("#header_about").fadeIn();
      $("#header_contact").fadeIn();
      $("#header_cristo").fadeIn();
      $("#header_colonizacao").fadeIn();
      $("#header_arquitetura").fadeIn();
    }
  });