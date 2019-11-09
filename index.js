function findMin(arr){
  // find minimum value in arr
  var min = arr[0];
  for(i=1; i<arr.length; i++){
    if(arr[i]<min){
      min = arr[i];
    }
  }
  return min
}

findMin([34,23,56,76,0, -1]);
