class Score {
  constructor(name, correct, wrong, empty) {
    // TODO: answer here
    this.name = name;
    this.correct = correct;
    this.wrong = wrong;
    this.empty = empty;
  }
}

class Scores {
  constructor(scores) {
    // TODO: answer here
    this.scores = scores;
  }

  topStudents() {
    // TODO: answer here
  }
}

module.exports = {
  Score,
  Scores,
};
