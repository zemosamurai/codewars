function distinct(a) {
   uniqueArray = a.filter(function(item, pos) {
     return a.indexOf(item) == pos;
   })
   return uniqueArray;
 }