function zip(arr1, arr2) {
  // Your code here! You may need to add in parameters in the parenthesis above!
  var result = [];
  var longer = null;

  if (arr1.length > arr2.length){
    longer = arr1;
  } else {
    longer = arr2;
  }

  for (var i = 0; i < longer.length; i++){

    if (arr1[i] !== undefined){
      result.push(arr1[i]);
    }
    if (arr2[i] !== undefined){
      result.push(arr2[i]);
    }

  }
  return result;
}

module.exports = zip;
