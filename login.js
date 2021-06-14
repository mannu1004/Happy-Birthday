function logIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  event.preventDefault();
  console.log("Hello");
  if (username == " ") {
    alert("please enter username.");
  } else if (password == "") {
    alert("enter the password");
  } else {
    if (username == "15/06/2001" && password == "sree1517") {
      window.location.replace("home.html");
    } else {
      alert("Error");
    }
  }
  return false;
}
document.getElementById("submit").addEventListener("click",logIn())