const songInput = document.getElementById("songInput");
const addBtn = document.getElementById("addBtn");
const songList = document.getElementById("songList");
const songCount = document.getElementById("songCount");

let songs = [];

function updateCounter() {
  songCount.textContent = songs.length;
}

function addSong() {
  const songName = songInput.value.trim();

  if (songName === "") {
    alert("Ingresa el nombre de una canción. No puede estar vacío.");
    return;
  }

  songs.push(songName);

  const li = document.createElement("li");
  li.textContent = songName;
  songList.appendChild(li);

  updateCounter();

  songInput.value = "";
  songInput.focus();
}

addBtn.addEventListener("click", addSong);

