const symbols = ['<','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','|',';',':',',','.','/','~','>','?'];
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const symbolx = []
var vowel = ['a','e','i','o','u'];
var textareainput = document.querySelector(".textareainput");
var encryptbtn = document.querySelector(".encryptbtn");

var cat = "im a cat";
encryptbtn.addEventListener('click',()=>{
  let val1 = JSON.stringify(textareainput.value);
  let val2 = val1.split("");
  
  let val3 = val2.map(alphabetEncrypt1);
  let val4= val3.join("");
  console.log(val1,val4)
});

function removeComma(item){
  console.log(item)
  var val=item;
  if(item==","){val=""}
  return val;
}
function alphabetEncrypt1(item){
  // console.log(item,alphabetMatch(item))
  return symbols[alphabetMatch(item)];
}
console.log(alphabetMatch(';'))
function alphabetMatch(letter){
  var a,returnVal=27;
  for(a=0;a<alphabet.length;a++){
    if(letter==alphabet[a]){
      returnVal=a;
      break;
    }
  }
  return returnVal;
}

