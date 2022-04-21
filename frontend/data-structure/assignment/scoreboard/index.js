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
    let result = [];
    let scores = this.scores;
    scores.sort((a, b) => {
      if (a.correct > b.correct) {
        return -1;
      } else if (a.correct < b.correct) {
        return 1;
      } else {
        if (a.wrong < b.wrong) {
          return -1;
        } else if (a.wrong > b.wrong) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    for (let i = 0; i < scores.length; i++) {
      result.push(scores[i].name);
    }
    return result;
  }
}

module.exports = {
  Score,
  Scores,
};
