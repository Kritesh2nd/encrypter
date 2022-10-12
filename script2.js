/*
var inputpassword = document.querySelector(".inputpassword");
var inrgmblock = document.querySelectorAll(".inrgmblock");
*/
var textareainput = document.querySelector(".textareainput");
var inputpassword = document.querySelector(".inputpassword");
var encryptbtn = document.querySelector(".encryptbtn");
var decryptbtn = document.querySelector(".decryptbtn");
console.log("script 2");


var aplha1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alpha2 = "abcdefghijklmnopqrstuvwxyz";
var capitalLetter = aplha1.split("");
var smallLetter = alpha2.split("");
const symbols = ['<','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','|',';',':',',','.','/','~','>','?'];
const allSymbols = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[',']','{','}','\\','|',';',':',"'",'"',',','.','/','<','>','?'];
const spaces = [" ","  "];
const password = "abcdefgh";
var codeCount=0;

var allCharacters = capitalLetter.concat(smallLetter).concat(allSymbols).concat(spaces);
const allCharCount = allCharacters.length;

console.log(allCharacters.length);
inputpassword.addEventListener('input',()=>{
  // password = inputpassword.value;
  console.log("works",inputpassword.value);
})
encryptbtn.addEventListener('click',()=>{
  clickEncrypt();
});

function clickEncrypt(){
  var item1 = JSON.stringify(textareainput.value).split("");
  var item2 = item1.slice(1,item1.length-1);
  var item3 = checkTypes(item2);
  codeCount=0;
  // console.log(item1);
  // console.log(item2);
  // console.log(item3);
}

function checkTypes(item){
  var cat = item.map(checkLetterPosition);
  var cat1 = cat.join("");
  console.log(cat,cat1.length,cat1)
  return cat.join("");
}

function checkLetterPosition(item){
  var a,position=99;
  for(a=0;a<allCharacters.length;a++){
    // console.log(a,allCharacters[a])
    if(allCharacters[a]==item){position=a;break;}
  }
  var dog = encryptThis(item,position,passwordCode());
  return dog;
}
function passwordCode(){
  var a,b,c,d;
  var code = password.split("");
  var newCode=[],count=0;
  for(a=0;a<password.length;a++){
    for(b=0;b<allCharacters.length;b++){
      if(password[a]==allCharacters[b]){
        newCode[count]=b;
        count++;
        break;
      }
    }
    
  }
  return newCode;
}
function encryptThis(item,pos,code){
  var newcodeCount=codeCount<password.length-1?++codeCount:0;
  var newCode=pos+code[newcodeCount]+86;
  newCode=newCode<allCharCount?newCode:newCode-allCharCount;
  var newItem = allCharacters[newCode];
  console.log(codeCount,item,newcodeCount,newItem);
  return newItem;
}




decryptbtn.addEventListener('click',()=>{
  clickDecrypt();
});

function clickDecrypt(){
  var item1 = JSON.stringify(textareainput.value).split("");
  var item2 = item1.slice(1,item1.length-1);
  var item3 = checkTypes(item2);
  codeCount=0;
  // console.log(item1);
  // console.log(item2);
  // console.log(item3);
}
function decryptThis(){
  codeCount=0;
  var newcodeCount=codeCount<password.length-1?++codeCount:0;
  var newCode=pos+code[newcodeCount];
  newCode=newCode<allCharCount?newCode:newCode-allCharCount;
  var newItem = allCharacters[newCode];
  console.log(codeCount,item,newcodeCount,newItem);
  return newItem;
}
