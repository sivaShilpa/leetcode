/*1) Code a function named duplicate that
   accepts an array as its only argument and
   returns a new array that contains the 
   original elements followed by duplicates
   of those elements.

   For example:

     duplicate(['🍔', '🍟', '🍺'])

     would return -->
     ['🍔', '🍟', '🍺', '🍔', '🍟', '🍺']
     
     2) Return a new array, do not modify the 
   array passed to the function.
   */

   function duplicate(arr){
    let retVal = []
    retVal.push(...arr)
    retVal.push(...arr)
    return retVal
   }

   console.log(duplicate([1,2,3]))

