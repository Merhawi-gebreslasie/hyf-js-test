//exercise 1
function logFunction(num){
   if(num%3==0&&num%5==0){
    console.log("Jackpot!");
  }
  else if(num%3==0){
    console.log("This is divisible    by 3");
  }
  else if(num%5==0){
    console.log("This is divisibleby 5");
  }
}
logFunction(15)
logFunction(3)
console.log(5);