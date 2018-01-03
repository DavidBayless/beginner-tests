// A leap year occurs on every year that is divisible by 4
// but is not divisible by 100
// unless it is also divisible by 400

function isLeapYear(year) {
  var isLeapYear = false;
  // Your code here! You may need to add in parameters in the parenthesis above!

  if ((year%4 === 0 && year%100 !== 0) || (year%400 === 0)){
      return true;
  }
  return false;
}
module.exports = isLeapYear;
