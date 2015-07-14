function mean(array){
  var total = 0;
  //cycle through array
  for (i=0; i<array.length; i++){
    //puts in calculation to add each number in array
    var newTotal = (total += array[i]);
     }
  //returns variable created above divided by array length
  return newTotal/array.length;
}

var array = [11,4,3,7,8,15]
console.log(mean(array))

function largest(array){
  var largestNum = 0;
  //cycle through array
  for (i=0; i<array.length; i++){
    // if statement to check if number at that position in array
    //is larger than largestNum variable
    if (array[i] > largestNum){
      //if number at that position in array is larger than num at position [0]
       largestNum = array[i];
       //sets largestNum variable to the number at that position in array
      }
   } return largestNum;
}

var array = [9,4,3,7,8,12]
console.log(largest(array))
