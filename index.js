var total = 0
var array = [1,2,3,4,5]

function mean(){
  for (i=0; i<array.length; i++){
    var newTotal = (total += array[i])/array.length;
     }
  return newTotal;
}
console.log(mean(array))
