function nav() {
    var x = document.getElementById("nav");
    if (x.className === "navbar") {
      x.className += " responsive";
      $('.icon>img').attr('src','images/icon-close.svg');
      $('.dropbtn>img').attr('src','images/icon-arrow-dark.svg');
    } else {
      x.className = "navbar";
      $('.icon>img').attr('src','images/icon-hamburger.svg');
      $('.dropbtn>img').attr('src','images/icon-arrow-light.svg');
    }
  }