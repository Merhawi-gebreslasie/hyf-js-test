//exercise 1
function logFunction(num){
  for(let i=0;i<101;i++){

    if(i%3==0&&i%5==0){
     console.log("Jackpot!");
   }
   else if(i%3==0){
     console.log("This is divisible    by 3");
   }
   else if(i%5==0){
     console.log("This is divisibleby 5");
   }
  }
}
logFunction()