function fetchWorkspaceData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 3000);
  });
}

const loadButton = document.getElementById("load-button");
const dataContainer = document.getElementById("data-container");

loadButton.addEventListener("click", async () => {
  loadButton.disabled = true;
  dataContainer.textContent = "Loading...";

  const data = await fetchWorkspaceData();
  dataContainer.textContent = data;
  loadButton.disabled = false;
});
