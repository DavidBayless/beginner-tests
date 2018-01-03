function lithp(str) {
  // Your code here! You may need to add in parameters in the parenthesis above!
  var result = [];

  for (var i = 0; i < str.length; i++){
    if (str[i].toLowerCase() === "s"){
      result.push("th");
    } else {
      result.push(str[i]);
    }
  }

  return result.join("");
}

module.exports = lithp;
