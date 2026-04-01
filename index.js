var catSay = function(max){
   var catMessage = "";
   for(var i = 0; i < max; i++){
      catMessage += "meow";
   }
   return catMessage;
}
console.log(catSay(3));