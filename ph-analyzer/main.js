function phAnalyer(input){
  if (input <= 6){
    return 'acidic';
  }else if(input == 7) {
    return 'neutral'
   }else if( input <= 14){
     return 'alkaline'
   }else return 'invalid pH value'
}


console.log(phAnalyer(7))
console.log(phAnalyer(4))
console.log(phAnalyer(12))
console.log(phAnalyer(25))
