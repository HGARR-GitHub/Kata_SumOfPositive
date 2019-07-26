function positiveSum(arr) {
  
  let total = 0;
  
  if (arr === undefined || arr.length == 0) {
    // array empty or does not exist
    return 0
  } 
  
  let posNum = arr.filter(number => {
    return number>0
  })

  if (posNum.length>0){
    total = posNum.reduce((sum, value) => {return sum + value}) 
  }

return total

}

positiveSum([-1,-2,-3,-4,5,8,0,-1,8]) . //output: 21
positiveSum([-1,-2,-3,-4]) //output: 0
positiveSum([]) //output: 0

// Other solutions:
/* 
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}
*/

/*
  function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}
/*

