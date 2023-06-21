window.addEventListener("load", function() {
  let form = document.getElementById("form");
  let submit = document.querySelector("#form button[type='submit']");
  let resetBtn = document.getElementById("reset");

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    hideResultsAndError();

    let expVal = parseInt(document.getElementById("experience").value);
    let interestsVal = parseInt(document.getElementById("interests").value);
    let toolsVal = parseInt(document.getElementById("tools").value);
    let platformVal = parseInt(document.getElementById("platform").value);
    let learnerVal = parseInt(document.getElementById("learner").value);

    document.getElementById("reset").removeAttribute("class");

    let ans = expVal + interestsVal + toolsVal + platformVal + learnerVal;

    if (ans >= 4 && ans <= 7) {
      document.getElementById("js").classList.remove("hidden");
    } else if (ans >= 8 && ans <= 10) {
      document.getElementById("python").classList.remove("hidden");
    } else if (ans >= 11 && ans <= 13) {
      document.getElementById("csharp").classList.remove("hidden");
    } else if (ans >= 14 && ans <= 16) {
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