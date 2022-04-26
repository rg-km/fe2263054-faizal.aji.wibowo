const Song = require("./song");
const Playlist = require("./playlist");

module.exports = class MusicPlayer {
  constructor(playlist) {
    this.playlist = playlist;
  }

  addSong(song) {
    // TODO - answer here
    this.playlist.songs.push(song);
  }

  play() {
    // TODO - answer here
    let temp = [];
    for (let i = 0; i < this.playlist.songs.length; i++) {
        temp.push(this.playlist.songs[i].play());
    }

    if (this.playlist.songs.length === 0) {
      return "";
    } else if (this.playlist.songs.length === 1) {
      return (this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title);
    } else if (this.playlist.songs.length === 2) {
      return (this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title + " " + this.playlist.songs[1].singer + " - " + this.playlist.songs[1].title);
    }
  }
};
