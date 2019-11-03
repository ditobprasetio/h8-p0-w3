function hitungJumlahKata(kalimat) {
//   // you can only write your code here!
//   var kata = kalimat.split(" ");
//   return kata.length
// }

var hasil = "";
var jumlah = 0;
if(kalimat != "" && kalimat != " " ) {
  jumlah = jumlah + 1;
}
for(i = 0; i < kalimat.length; i++) {
  if(kalimat[i] != " ") {
    hasil += kalimat[i];
  }
  else if(kalimat[i] === " " && hasil != "") {
    jumlah = jumlah + 1
  }
} 

return jumlah
}



// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5