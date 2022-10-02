function squareSum(numbers) {
   let num = 0;
   for (item of numbers) {
      num += Math.pow(item, 2);
   }
   return num;
}
