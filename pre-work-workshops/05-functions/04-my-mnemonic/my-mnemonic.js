// YOUR CODE BELOW
function myMnemonic (first) {
  if (!first) return first;
  let result = ''

  for (let i = 0; i < arguments.length; i++) {
    let argument = arguments[i];
    result += argument[0];
  }

  return result;
}
