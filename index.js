var catSay = function(max){
   var catMessage = "";
   for(var i = 0; i < max; i++){
      catMessage += "meow";
   }
   return catMessage;
}
function helloCats (callbacKFunc){
   return "hello " + callbacKFunc(3);
}
console.log(helloCats(catSay));
