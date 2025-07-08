document.addEventListener("DOMContentLoaded", () => {
  const KEY = "sessionTimer";
  const display = document.getElementById("timer");

  // Recupera il valore iniziale o imposta a zero
  let seconds = parseInt(sessionStorage.getItem(KEY), 10);
  if (isNaN(seconds)) seconds = 0;

  // Aggiorna la UI
  function updateDisplay() {
    display.textContent = seconds;
  }

  // Incrementa, salva e aggiorna ogni secondo
  updateDisplay();
  setInterval(() => {
    seconds++;
    sessionStorage.setItem(KEY, seconds);
    updateDisplay();
  }, 1000);
});
