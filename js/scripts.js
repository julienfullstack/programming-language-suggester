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

    if (ans >= 5 && ans <= 8) {
      document.getElementById("js").classList.remove("hidden");
    } else if (ans >= 9 && ans <= 10) {
      document.getElementById("python").classList.remove("hidden");
    } else if (ans >= 11 && ans <= 15) {
      document.getElementById("csharp").classList.remove("hidden");
    }
  });

  resetBtn.addEventListener("click", function() {
    document.getElementById("experience").value = "";
    document.getElementById("interests").value = "";
    document.getElementById("tools").value = "";
    document.getElementById("platform").value = "";
    document.getElementById("learner").value = "";
  });

  function hideResultsAndError() {
    document.getElementById("js").classList.add("hidden");
    document.getElementById("csharp").classList.add("hidden");
    document.getElementById("python").classList.add("hidden");
  }
});