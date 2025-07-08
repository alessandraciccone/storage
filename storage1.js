document.addEventListener("DOMContentLoaded", () => {
  const KEY = "userName";
  const savedNameEl = document.getElementById("savedName");
  const inputEl = document.getElementById("nameInput");
  const saveBtn = document.getElementById("saveBtn");
  const clearBtn = document.getElementById("clearBtn");

  // Funzione per aggiornare la visualizzazione
  function refreshDisplay() {
    const name = localStorage.getItem(KEY);
    if (name) {
      savedNameEl.textContent = `Nome salvato: ${name}`;
      savedNameEl.classList.remove("d-none");
    } else {
      savedNameEl.classList.add("d-none");
    }
  }

  // Carica all'avvio
  refreshDisplay();

  // Salva in localStorage
  saveBtn.addEventListener("click", () => {
    const nome = inputEl.value.trim();
    if (!nome) return alert("Inserisci prima un nome.");
    localStorage.setItem(KEY, nome);
    refreshDisplay();
  });

  // Rimuove da localStorage
  clearBtn.addEventListener("click", () => {
    localStorage.removeItem(KEY);
    refreshDisplay();
  });
});
