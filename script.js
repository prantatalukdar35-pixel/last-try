function submitProblem() {
  const subject = document.getElementById("subject").value;
  const problem = document.getElementById("problem").value;

  if (problem.trim() === "") {
    alert("Please write a problem!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = subject + " : " + problem;

  document.getElementById("problemList").appendChild(li);
  document.getElementById("problem").value = "";
}
