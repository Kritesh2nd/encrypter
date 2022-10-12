/*
var iconBox = document.querySelector(".iconBox");
var inrgmblock = document.querySelectorAll(".inrgmblock");
*/
const textInput = document.querySelector(".textInput"),
textOutput = document.querySelector(".textOutput"),
passwordInput = document.querySelector(".passwordInput"),
encryptBtn = document.querySelector(".encryptBtn"),
decryptBtn = document.querySelector(".decryptBtn"),
iconBtn = document.querySelector(".iconBtn"),
iconBoxAbbr = document.querySelector(".iconBoxAbbr");
// textInput = document.querySelector(".textInput");
// console.log("script 5");
const char1="ABCDEFGHIJKLMNOPQRSTUVWXYZ",
char2="abcdefghijklmnopqrstuvwxyz",
char3="`~!@#$%^&*()-_=+[]{}|;:',./<>?"+'"',
char4=" "+"\n"+"\t"+"\\"+"\""+"\'";
const char1Arr=char1.split(""),char2Arr=char2.split(""),char3Arr=char3.split(""),char4Arr=char4.split("");
const allChars = char1Arr.concat(char2Arr).concat(char3Arr).concat(char4Arr);
var textInputVal="",textOutputVal="",passInputVal="",codeCount=0;
printAllChar();
textInput.addEventListener('input',()=>{textInputManager();});
textOutput.addEventListener('input',()=>{textOutputManager();});
passwordInput.addEventListener('input',()=>{passwordManager();});
passwordManager();
textInputManager();
textOutputManager();
function textInputManager(){
  textInputVal=JSON.stringify(textInput.value).split("");
  textInputVal=textInputVal.slice(1,textInputVal.length-1);
  textInputVal=textInputVal.map((ltr,num,arr)=>remakeArray(ltr,num,arr,"n"))
  textInputVal=textInputVal.map((ltr,num,arr)=>remakeArray(ltr,num,arr,"t"))
  textInputVal=textInputVal.map((ltr,num,arr)=>remakeArray(ltr,num,arr,"\\"))
  textInputVal=textInputVal.map((ltr,num,arr)=>remakeArray(ltr,num,arr,"\""))
  textInputVal=textInputVal.map((ltr,num,arr)=>remakeArray(ltr,num,arr,"\'"))
  textInputVal=textInputVal.filter(ltr => ltr!="rmv")
  textInputVal=textInputVal.join("");
  // console.log(textInputVal);
}
function textOutputManager(){
  textOutputVal=JSON.stringify(textOutput.value).split("");
  textOutputVal=textOutputVal.slice(1,textOutputVal.length-1);
  // console.log(textOutputVal);
}
function passwordManager(){
  var a,b;
  passInputVal=JSON.stringify(passwordInput.value).split("");
  passInputVal=passInputVal.slice(1,passInputVal.length-1);
  for(a=0;a<passInputVal.length;a++){for(b=0;b<allChars.length;b++){if(passInputVal[a]==allChars[b]){passInputVal[a]=b;break;}}}
  // console.log(passInputVal);
}
encryptBtn.addEventListener('click',()=>{
  codeCount=0;
  encryptThis();
});
decryptBtn.addEventListener('click',()=>{
  codeCount=0;
  decryptThis();
});
iconBtn.addEventListener('click',()=>{
  copyPaste();
});
function encryptThis(){
  var a,b,c=[],d,e;
  var txtInpValCode=[],outValCode=[],shiftCode=99;
  for(a=0;a<textInputVal.length;a++){
    for(b=0;b<allChars.length;b++){
      if(textInputVal[a]==allChars[b]){
        txtInpValCode[a]=b;
        shiftCode=txtInpValCode[a]+passInputVal[codeCount];
        shiftCode=shiftCode<allChars.length?shiftCode:shiftCode-allChars.length;
        outValCode[a]=allChars[shiftCode];
        codeCount=codeCount<passInputVal.length-1?++codeCount:0;
        // console.log("shiftCode",shiftCode,outValCode[a])
        break;
      }
    }
  }
  textOutput.value = outValCode.join("");
  // console.log(outValCode,outValCode.join(""))
}
function decryptThis(){
  var a,b,c;
  var txtInpValCode=[],outValCode=[],shiftCode=99;
  for(a=0;a<textInputVal.length;a++){
    for(b=0;b<allChars.length;b++){
      if(textInputVal[a]==allChars[b]){
        txtInpValCode[a]=b;
        shiftCode=txtInpValCode[a]-passInputVal[codeCount];
        shiftCode=shiftCode>0?shiftCode:shiftCode+allChars.length;
        shiftCode=shiftCode<allChars.length?shiftCode:shiftCode-allChars.length;
        outValCode[a]=allChars[shiftCode];
        codeCount=codeCount<passInputVal.length-1?++codeCount:0;
        // console.log("shiftCode",shiftCode,outValCode[a])
        break;
      }
    }
  }
  textOutput.value = outValCode.join("");
  // console.log(textInputVal,outValCode)
}
function printAllChar(item){
  for(var a=0;a<allChars.length;a++){
    // console.log(a,allChars[a]);
  }
}
function remakeArray(letter,num,arr,exc){
  var returnVal = letter;
  // console.log(letter,num,arr[num])
  if(letter=="\\"&&arr[num+1]==exc){
    switch(exc){
      case "n":returnVal="\n";break;
      case "t":returnVal="\t";break;
      case "\\":returnVal="\\";break;
      case "\"":returnVal='\"';break;
      case "\'":returnVal="\'";break;
    }
  }
  if(letter==exc&&arr[num-1]=="\\"){returnVal="rmv";}
  return returnVal;
}
function copyPaste(){
  textOutput.select();
  textOutput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textOutput.value);
  iconBoxAbbr.titel = "Copied";
}