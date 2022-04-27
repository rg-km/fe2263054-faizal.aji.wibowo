module.exports = class TextEditor {
  constructor() {
    // TODO: answer here
    this.stack = [];
    this.undoStack = [];
    this.redoStack = [];
    this.top = -1;
    this.size = 5;
  }

  write(c) {
    // TODO: answer here
    this.stack.push(c);
    this.top++;
    this.undoStack.push(c);
  }

  read() {
    // TODO: answer here
    let peek = "";

    this.stack.forEach((c) => {
      peek += c;
    });

    if (peek.length === "") {
      return "";
    } else {
      console.log(peek);
    }
    return peek;
  }

  undo() {
    // TODO: answer here
    if (this.undoStack.length === 0) {
      return "";
    } else {
      // hapus elemen terakhir dari undoStack
      let lastUndo = this.undoStack.pop();
      // push ke redo stack
      this.redoStack.push(lastUndo);
      // hapus elemen terakhir dari stack
      this.stack.pop();
    }
  }

  redo() {
    // TODO: answer here
    if (this.redoStack.length === 0) {
      return "";
    } else {
      // hapus elemen terakhir dari redoStack
      let lastRedo = this.redoStack.pop();
      // push ke undo stack
      this.undoStack.push(lastRedo);
      // push ke stack
      this.stack.push(lastRedo);
    }
  }
};
