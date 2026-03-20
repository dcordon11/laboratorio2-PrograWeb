// app.js
import { addSong } from "./playlist.js";

const songInput = document.getElementById("songInput");
const addBtn = document.getElementById("addBtn");
const songList = document.getElementById("songList");
const songCount = document.getElementById("songCount");

addBtn.addEventListener("click", () => {
  addSong(songInput, songList, songCount);
});