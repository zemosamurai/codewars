function arrayPlusArray(arr1, arr2) {
   let one = 0;
   let twoo = 0;
   for (item of arr1) {
      one += item;
   }
   for (item of arr2) {
      twoo += item;
   }
   return one + twoo;
}
