const Player = require("../11-oop-steal-gold-cp/index");

class Thief extends Player {
  constructor(name) {
    super(name);
    this.job = "Thief";
  }
  // `robbedBlind` memiliki efek mengubah stealChance menjadi 75% dengan membayar 10 gold. 
  //  - Apabila gold player (sendiri) kurang dari 10 gold, kembalikan message "Aku terlalu miskin"
  robbedBlind() {
    // TODO: answer here
    if(this.getGold() < 10) {
      return "Aku terlalu miskin";
    } else {
      this.setStealChance(0.75);
      this.setGold(this.getGold() - 10);
    }
  }

  steal(player) {
    // TODO: answer here
    if(player.getGold() < 5){
      return "Lawan terlalu miskin";
    }

    if(this.randomizer() > this.getStealChance()){
      return "Gagal mencuri, coba lain kali";
    } 
    
    player.setGold(player.getGold() - 5);
    this.setGold(this.getGold() + 5);
    
    if(player.job === 'Thief' || player.job === 'Trickster'){
      return player.distractionPurse(this);
    } 

    return "Berhasil mencuri 5 gold";
  }
}

class Trickster extends Player {
  constructor(name) {
    super(name);
    this.distractionPurseChance = 0.25;
    this.job = "Trickster";
  }

  setDistractionPurseChance(chance) {
    // TODO: answer here
    this.distractionPurseChance = chance;
  }

  getDistractionPurseChance() {
    // TODO: answer here
    return this.distractionPurseChance;
  }

  distractionPurse(player) {
    const rng = this.randomizer();
    // TODO: answer here
    if (rng > this.distractionPurseChance) {
      return 'Gagal mencuri balik';
    }

    if(player.getGold() > 10){
      player.setGold(player.getGold() - 10);
      this.gold = this.getGold() + 10;
      return 'Berhasil mencuri balik 10 gold';
    }

    if(player.getGold() < 10){
      this.gold = player.getGold() + this.getGold();
      player.setGold(0);
      return 'Berhasil mencuri balik semua uang lawan';
    }
  }

  steal(player) {
    // TODO: answer here
    if(player.job === 'Thief' || player.job === 'Trickster'){
      return player.distractionPurse(this);
    }
    
    if (this.stealChance > player.randomizer() || player.getGold() < 5) {
      if (player.getGold() < 5) {
        return "Lawan terlalu miskin";
      } else {
        player.setGold(this.getGold() - 5);
        this.setGold(this.getGold() + 5);
        return "Berhasil mencuri 5 gold";
      }
    } else {
      return "Gagal mencuri, coba lain kali";
    }
  }
}

// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};
