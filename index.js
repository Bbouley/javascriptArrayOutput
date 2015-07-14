var total = 0
var array = [1,2,3,4,5]

function mean(){
//cycle through array
  for (i=0; i<array.length; i++){
    //puts in calculation to add each nuber in array
    var newTotal = (total += array[i])/array.length;
     }
  //returns variable created above
  return newTotal;
}
console.log(mean(array))


var largestNum = array[0]

function largest(){
  //cycle through array
  for (i=0; i<array.length; i++){
    // if statement to check if number at that position in array
    //is larger than largestnum variable
    if (array[i] > largestNum){
      //if number at that position in array is larger than num at position [0]
       largestNum = array[i]
       //sets largestNum variable to the number at that position in array
      }
   } return largestnum
}
console.log(largest(array))
