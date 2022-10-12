  /*
  var textInput = document.querySelector(".textInput");
  var inrgmblock = document.querySelectorAll(".inrgmblock");
  */
  const textInput = document.querySelector(".textInput"),
  textOutput = document.querySelector(".textOutput"),
  passwordInput = document.querySelector(".passwordInput"),
  encryptBtn = document.querySelector(".encryptBtn"),
  decryptBtn = document.querySelector(".decryptBtn");
  // iconBoxAbbr = document.querySelector(".iconBoxAbbr");
  console.log("script 4");
  const char1="ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  char2="abcdefghijklmnopqrstuvwxyz",
  char3="`~!@#$%^&*()-_=+[]{}|;:',./<>?"+'"',
  char4=" "+"\n"+"\t"+"\\"+"\""+"\'";
  const char1Arr=char1.split(""),char2Arr=char2.split(""),char3Arr=char3.split(""),char4Arr=char4.split("");
  const allChars = char1Arr.concat(char2Arr).concat(char3Arr).concat(char4Arr);
  var textInputVal="",textOutputVal="",passInputVal="",codeCount=0;

  var word = JSON.stringify(textInput.value),newWord1="",newWord2="";

  console.log("tik",'#include <stdio.h>\n\nint main() {\n  printf("I C\\");\n}')


  encryptBtn.addEventListener('click',()=>{
    word = JSON.stringify(textInput.value).split("");
    word=word.slice(1,word.length-1);
    newWord1=word.map((ltr,num,arr)=>remakeArray(ltr,num,arr,"n"))
    newWord1=newWord1.map((ltr,num,arr)=>remakeArray(ltr,num,arr,"t"))
    newWord1=newWord1.map((ltr,num,arr)=>remakeArray(ltr,num,arr,"\\"))
    newWord1=newWord1.map((ltr,num,arr)=>remakeArray(ltr,num,arr,"\""))
    newWord1=newWord1.map((ltr,num,arr)=>remakeArray(ltr,num,arr,"\'"))
    newWord2 = newWord1.filter(ltr => ltr!="rmv")
    var xx= newWord2.join("");
    textOutput.value=xx;
    console.log(word,newWord1,newWord2,xx)
  })

  function remakeArray(letter,num,arr,exc){
    var returnVal = letter;
    console.log(letter,num,arr[num])
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