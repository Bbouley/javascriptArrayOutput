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

var array = [11,4,1,7,2,14]
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
    console.log("largestNum", largestNum);
    console.log("array value", array[i]);
    console.log("");
   }
   return largestNum;
}

var array = [4,3,7,9,8,6]
console.log(largest(array))



// var array = [4,3,7,9,8,6]
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i])
// }
