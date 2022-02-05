//exercise 1
function logFunction(num1,num2){
  for(let i = 1;i < 100;i++){

    if(i % num1== 0 && i % num2 == 0){
     console.log("Jackpot!");
   }
   else if(i%num1==0){
     console.log("This is divisible    by 3");
   }
   else if(i % num2 == 0){
     console.log("This is divisibleby 5");
   }
  }
}
logFunction(5,8);
