// Playlist.js
export let songs = [];

export function updateCounter(songCount) {
  songCount.textContent = songs.length;
}

export function addSong(songInput, songList, songCount) {
  const songName = songInput.value.trim();

  if (songName === "") {
    alert("Ingresa el nombre de una canción. No puede estar vacío.");
    return;
  }

  songs.push(songName);

  const li = document.createElement("li");
  li.textContent = songName;
  songList.appendChild(li);

  updateCounter(songCount);

  songInput.value = "";
  songInput.focus();
}