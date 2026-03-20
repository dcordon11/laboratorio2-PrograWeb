// Playlist.js

export let songs = [];

// Función para actualizar el contador
export function updateCounter(songCount) {
  songCount.textContent = songs.length;
}

// Función principal para agregar canciones
export function addSong(songInput, songList, songCount) {
  const songName = songInput.value.trim();

  // Validación básica
  if (songName === "") {
    alert("Ingresa el nombre de una canción. No puede estar vacío.");
    return;
  }

  // Evitar duplicados
  if (songs.includes(songName)) {
    alert("La canción ya existe en la playlist.");
    return;
  }

  songs.push(songName);

  // Crear elemento de lista
  const li = document.createElement("li");
  li.textContent = songName;

  // liminar al hacer click
  li.addEventListener("click", () => {
    
    songList.removeChild(li);

    const index = songs.indexOf(songName);
    if (index > -1) {
      songs.splice(index, 1);
    }

    updateCounter(songCount);
  });

  songList.appendChild(li);

  updateCounter(songCount);

  songInput.value = "";
  songInput.focus();
}