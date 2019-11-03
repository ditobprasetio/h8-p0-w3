function angkaPalindrome(num) {
  // you can only write your code here!
  var cek = true;
  while(cek) {
    num++;
    var numStr = num.toString();
    var hasil = '';
    for(var j = numStr.length-1; j>=0; j--) {
      hasil += numStr[j];
    }
    if(hasil === numStr) {
      // cek = false;
      return num;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001