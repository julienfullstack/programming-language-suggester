window.addEventListener("load", function() {
  let form = document.getElementById("form");
  let submit = document.querySelector("#form button[type='submit']");
  let resetBtn = document.getElementById("reset");

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    hideResultsAndError();

    let colorVal = parseInt(document.getElementById("color").value);
    let beverageVal = parseInt(document.getElementById("beverage").value);
    let locationVal = parseInt(document.getElementById("location").value);
    let hobbyVal = parseInt(document.getElementById("hobby").value);

    document.getElementById("reset").removeAttribute("class");

    let ans = colorVal + beverageVal + locationVal + hobbyVal;

    if (ans >= 4 && ans <= 7) {
      document.getElementById("cat").classList.remove("hidden");
    } else if (ans >= 8 && ans <= 10) {
      document.getElementById("elephant").classList.remove("hidden");
    } else if (ans >= 11 && ans <= 13) {
      document.getElementById("monkey").classList.remove("hidden");
    } else if (ans >= 14 && ans <= 16) {
      document.getElementById("dog").classList.remove("hidden");
    } else if (ans >= 17 && ans <= 20) {
      document.getElementById("owl").classList.remove("hidden");
    }
  });

  resetBtn.addEventListener("click", function() {
    document.getElementById("color").value = "";
    document.getElementById("beverage").value = "";
    document.getElementById("location").value = "";
    document.getElementById("hobby").value = "";
  });

  function hideResultsAndError() {
    document.getElementById("cat").classList.add("hidden");
    document.getElementById("elephant").classList.add("hidden");
    document.getElementById("monkey").classList.add("hidden");
    document.getElementById("owl").classList.add("hidden");
    document.getElementById("dog").classList.add("hidden");
  }
});