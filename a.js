function toggleDrop1() {
  var content1 = document.getElementById("dropdown-content1");
  var btn1 = document.getElementById("dropbtnbtn1");
  var content2 = document.getElementById("dropdown-content2");
  var btn2 = document.getElementById("dropbtnbtn2");

  if (content1.className === "hide") {
    content1.className = "show";
  } else {
    content1.className = "hide";
  }
  
  if (btn1.className === "normal") {
    btn1.className = "rotate";
  } else {
    btn1.className = "normal";
  }

  if (content2.className === "show") {
    content2.className = "hide";
  }

  if (btn2.className === "normal") {
    btn2.className = "rotate";
  }
}

function toggleDrop2() {
  var content1 = document.getElementById("dropdown-content1");
  var btn1 = document.getElementById("dropbtnbtn1");
  var content2 = document.getElementById("dropdown-content2");
  var btn2 = document.getElementById("dropbtnbtn2");

  if (content2.className === "hide") {
    content2.className = "show";
  } else {
    content2.className = "hide";
  }
  
  if (btn2.className === "normal") {
    btn2.className = "rotate";
  } else {
    btn2.className = "normal";
  }

  if (content1.className === "show") {
    content1.className = "hide";
  }

  if (btn1.className === "normal") {
    btn1.className = "rotate";
  }
}