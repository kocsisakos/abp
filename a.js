/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
}
}

function openDrop() {
  var y = document.getElementById("dropdown-content")
  var z = document.getElementById("dropbtnbtn")
  if (y.className === "hide") {
    y.className += " show";
  } else {
    y.className = "hide";
  }
  
  if (z.className === "normal") {
    z.className = "rotate";
  } else {
    z.className = "normal";
  }
}

// function rotate() {
  
//   if (z.classname === "normal")
// }