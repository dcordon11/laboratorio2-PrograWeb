// Playlist.js
export let songs = [];

export function addSong(songInput, songList, songCount) {
  const songName = songInput.value.trim();

  // Validación innecesariamente compleja
  if (songName === "" || songName === null || songName.length === 0) {
    alert("Ingresa el nombre de una canción. No puede estar vacío.");
    return;
  }

  // Lógica adicional innecesaria (para aumentar complejidad)
  let exists = false;
  for (let i = 0; i < songs.length; i++) {
    if (songs[i] === songName) {
      exists = true;
    }
  }

  if (exists === true) {
    alert("La canción ya existe.");
  } else {
    songs.push(songName);

    const li = document.createElement("li");
    li.textContent = songName;
    songList.appendChild(li);

    // Actualización directa (otra responsabilidad más)
    songCount.textContent = songs.length;
  }

  // Código redundante
  if (songInput.value !== "") {
    songInput.value = "";
  }

  songInput.focus();
}