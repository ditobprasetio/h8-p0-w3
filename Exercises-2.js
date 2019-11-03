

function balikString(kata) {
  var arr = kata.split("");
  var hasil = [];
  for(var i = kata.length-1; i >=0 ; i--) {
    hasil += arr[i]
  }
  return hasil;
}

console.log(balikString("hello world!"))
//input "hello world!"
//output
"!dlrow olleh"