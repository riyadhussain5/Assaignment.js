//kilometerToMeter

function kilometerToMeter (kilometer){
    var meter= kilometer*1000;
    return meter;
}
var meter =kilometerToMeter(20);


//megaFriend

function megaFriend(friend){
    for(var i= 0; i< friend.length;i++){
        var highestName = friend[0];
        var nam = friend[i];
        
        if(nam < highestName){
            highestName=nam;
        }  
    }return highestName;
} 
var notun = megaFriend[("riyad","himel", "kamal", "ab", "moklesssss", "aaaaaaaaaaaaa", "aa")];
console.log(notun);

//budgetCalculator
   function budgetCalculator (w,p,l){
       var watch = w*50;
       var phone = p*100;
       var laptop= l*500;
       var result =watch+phone+laptop;
       return result;
   }
  var cal = budgetCalculator (10,10,10);
  
  
//hotelCost

 function hotelCost(n){
     if(n==0){return 0;}
     if(n==1){return 100;}
     else if(n<=10) {
     return hotelCost(n-1)+100;
    }
    else if(n>10 && n<=20){
        return hotelCost(n-1)+80
    }
    return hotelCost(n-1)+50
    
 }
 var result =hotelCost(21);
 