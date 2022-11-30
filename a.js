/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function openDrop() {
    var y = document.getElementById("dropdown-content")
    if (y.className === "hide") {
        y.className += " show";
    } else {
        y.className = "hide";
    }
}