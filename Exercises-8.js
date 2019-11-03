function pasanganTerbesar(num) {
  // you can only write your code here!
  var numStr = num.toString();
  var arr = [];
  for(var i=0; i<numStr.length; i++) {
    arr.push(numStr[i]);
  }
  var arr2 = [];
  for(var j=0; j<arr.length-1; j++) {
    arr2.push(arr[j]+arr[j+1]);
  }
  var maxNum = '';
  for(var k=0; k<arr2.length; k++) {
    if(k===0) {
      maxNum=arr2[k];
    }
    else {
      if(arr2[k]>maxNum) {
        maxNum=arr2[k];
      }
    }
  }
  return maxNum;
}

// // TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99