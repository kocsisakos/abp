function toggleDrop1() {
  var content = document.getElementById("dropdown-content1");
  var btn = document.getElementById("dropbtnbtn1");

  if (content.className === "hide") {
    content.className += " show";
  } else {
    content.className = "hide";
  }
  
  if (btn.className === "normal") {
    btn.className = "rotate";
  } else {
    btn.className = "normal";
  }
}

function toggleDrop2() {
  var content = document.getElementById("dropdown-content2");
  var btn = document.getElementById("dropbtnbtn2");

  if (content.className === "hide") {
    content.className += " show";
  } else {
    content.className = "hide";
  }
  
  if (btn.className === "normal") {
    btn.className = "rotate";
  } else {
    btn.className = "normal";
  }
}