const activities = [
  { text: "Coden", icon: "💻" },
  { text: "Zocken", icon: "🎮" },
  { text: "Schlafen", icon: "😴" },
  { text: "Kaffee holen", icon: "☕" }
];

let currentIndex = 0;
const activityEl = document.getElementById("activity");
const nextBtn = document.getElementById("next");

// Funktion, um Aktivität zu wechseln
function changeActivity(index) {
  activityEl.style.opacity = 0; // Fade Out
  setTimeout(() => {
    activityEl.textContent = `${activities[index].icon} ${activities[index].text}`;
    activityEl.style.opacity = 1; // Fade In
  }, 300);
}

// Automatisch alle 5 Sekunden wechseln
setInterval(() => {
  currentIndex = (currentIndex + 1) % activities.length;
  changeActivity(currentIndex);
}, 5000);

// Manuell wechseln
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % activities.length;
  changeActivity(currentIndex);
});
