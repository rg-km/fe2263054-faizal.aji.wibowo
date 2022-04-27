const Stack = require("./stack");

function IsValidParentheses(s) {
  // TODO: answer here
  const stack = [];
  
  // cek empty string
  if (s.length == 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    let temp = stack[stack.length - 1];

    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
        stack.push(s[i]);
    } else if (temp === "(" && s[i] === ")" || temp === "{" && s[i] === "}" || temp === "[" && s[i] === "]") {
        stack.pop();
    } else {
        return false;
    }
  }
  return stack.length === 0;
}

console.log(IsValidParentheses(''));
console.log(IsValidParentheses('()[]{}'));
console.log(IsValidParentheses('[)]}'));
console.log(IsValidParentheses('[}'));

module.exports = {
  IsValidParentheses,
};
