document.getElementById("goToProjekte").addEventListener("click", () => {
  document.getElementById("projekte-section").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
