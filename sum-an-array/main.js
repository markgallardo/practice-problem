function sumArray(numbersArray){
  var sum = 0
  for(var x = 0; x < numbersArray.length; x++){
  sum += numbersArray[x];
  }
  return sum
}
console.log(sumArray([10,5,3,7,2]));
console.log(sumArray([1,2,3,4,5]))
console.log(sumArray([5,3,7,4]))
