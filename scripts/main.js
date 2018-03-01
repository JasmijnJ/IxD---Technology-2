$({countNum: $('.howmany').text()}).animate({countNum: 40000}, {
    duration: 4000,
    easing:'linear',
    step: function() {
      $('.howmany').text(Math.floor(this.countNum));
    },
    complete: function() {
      $('.howmany').text("40,000");
    }
  });

$({countNum: $('.druppeltekst').text()}).animate({countNum: 65}, {
    duration: 2100,
    easing:'linear',
    step: function() {
      $('.druppeltekst').text(Math.floor(this.countNum));
    },
    complete: function() {
      $('.druppeltekst').text("65"+"%");
    }
  });

$({countNum: $('.fueltekst').text()}).animate({countNum: 51}, {
    duration: 2100,
    easing:'linear',
    step: function() {
      $('.fueltekst').text(Math.floor(this.countNum));
    },
    complete: function() {
      $('.fueltekst').text("51"+"%");
    }
  });