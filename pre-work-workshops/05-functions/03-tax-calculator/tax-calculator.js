// YOUR CODE BELOW
const taxCalculator = (num, state) => {
  if(state === 'NY') return num + num * .04;
  else return num + num * .06625;
}
