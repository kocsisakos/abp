function responsive() {
  var nav = document.getElementById("topnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

function toggleDrop() {
  var content = document.getElementById("dropdown-content");
  var btn = document.getElementById("dropbtnbtn");

  if (content.className === "hide") {
    content.className += " show";
  } else {
    content.className = "hide";
  }
  
  if (btn.className === "normal") {
    btn.className = "rotate";
    btn.src = "arrow.png";
  } else {
    btn.className = "normal";
    btn.src = "x.png";
  }
}