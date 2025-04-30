function fetchWorkspaceData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 3000);
  });
}

const loadButton = document.getElementById("load-button");
const dataContainer = document.getElementById("data-container");

loadButton.addEventListener("click", () => {
  loadButton.disabled = true;
  dataContainer.textContent = "Loading...";

  fetchWorkspaceData().then((data) => {
    dataContainer.textContent = data;
    loadButton.disabled = false;
  });
});
