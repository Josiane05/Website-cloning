function makeLine(length){
   var line = "";
   for(var j = 0; j <= length; j++){
      line += "*";
   }
   return line + "\n";
}
function buildTriangle(length) {
   var triangle = "";
   var lineNumber = 1;
   for(var lineNumber = 1; lineNumber <= length; lineNumber++){
      triangle  = triangle + makeLine(lineNumber);
   }
   return triangle;
}
console.log(buildTriangle(10));