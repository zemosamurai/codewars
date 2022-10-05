function pillars(numPill, dist, width) {
   if (numPill === 1) {
      return 0;
   } else if (numPill === 2) {
      return dist * 100;
   } else {
      return dist * 100 * (numPill - 1) + width * (numPill - 2);
   }
}
