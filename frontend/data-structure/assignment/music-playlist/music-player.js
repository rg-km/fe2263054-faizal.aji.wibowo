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
    let result = "";

    if (this.playlist.songs.length === 0) {
      return result;
    } else if (this.playlist.songs.length === 1 && !this.playlist.isRepeatable) {
      return result += "Now Playing " + this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title;
    } else if (this.playlist.songs.length === 1 && this.playlist.isRepeatable) {
      return result += "Now Playing " + this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title;
    } else if (this.playlist.songs.length > 1 && !this.playlist.isRepeatable) {
      const result = "Now Playing " + this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title 
      this.playlist.songs.shift()
      return result
    } else if (this.playlist.songs.length > 1 && this.playlist.isRepeatable) {
      const result = "Now Playing " + this.playlist.songs[0].singer + " - " + this.playlist.songs[0].title 
      this.playlist.songs.push(this.playlist.songs.shift())
      return result
    }
  }
};
