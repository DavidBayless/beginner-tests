

function arraySmasher(arr1, arr2) {
  // Your code here! You may need to add in parameters in the parenthesis above!
   function flatten(arr){
      var result = [];

          for (var i = 0; i < arr.length; i++){
              var ele = arr[i];
              if (Array.isArray(ele)){
                 result = result.concat(flatten(ele));
              } else if (typeof ele === 'number' || typeof ele === 'string'){
                 result.push(ele);
              }
          }
      return result;
  }
  if (arr2){
    return flatten(arr1).concat(flatten(arr2));
  } else {
    return flatten(arr1);
  }
}

module.exports = arraySmasher;
