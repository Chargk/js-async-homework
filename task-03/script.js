function fetchResource1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resource 1 loaded");
    }, 1000);
  });
}

function fetchResource2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resource 2 loaded");
    }, 3000);
  });
}

function fetchResource3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resource 3 loaded");
    }, 2000);
  });
}

const loadButton = document.getElementById("load-button");
const resultsDiv = document.getElementById("results");

loadButton.addEventListener("click", () => {
  resultsDiv.textContent = "Loading...";
  loadButton.disabled = true;

  Promise.all([fetchResource1(), fetchResource2(), fetchResource3()]).then(
    (results) => {
      resultsDiv.textContent = "";
      results.forEach((result) => {
        const p = document.createElement("p");
        p.textContent = result;
        resultsDiv.appendChild(p);
      });
      loadButton.disabled = false;
    }
  );
});
