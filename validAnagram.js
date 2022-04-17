// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase or name formed by rearraning the letters of another, such as cinema, formed from iceman.

//Examples;
/*
    vaildAnagram(" ", " "); => true;
    validAnagram("aaz", "zza") => false;
    validAnagram("anagram", "nagaram") => true;
    validAnagram("rat", "car"); => false;
*/


function vaildAnagram(str1, str2) {

    // 1. when strings not the same length, no chance for an anagram
    if(str1.length !== str2.length){
        return false;
    }

    // 2. save chars and amount of chars from str1 to an object, (no double keys allowed in obj)
    let charAndAmountStr1 = {};

    for(let i = 0; i < str1.length; i++) {
   
       let char = str1[i];
   
       // when object does not contain the char, add it and set value to one
       if(!charAndAmountStr1[char]) {
        charAndAmountStr1[char] = 1;    
       } else {
        charAndAmountStr1[char] += 1; //when it is in the object, increment the amount by one
       }
    }

    // check each char of str2 if it is in the obj
    for(let char of str2) {
    
        if(!charAndAmountStr1[char]){
            //anagram is not possible when no key in object exists
            return false;
        }
    }
    return true;
}



//true
console.log("TRUE");
console.log(vaildAnagram(" ", " "));
console.log(vaildAnagram("anagram", "nagaram"));
console.log(vaildAnagram("qwerty", "qeywrt"));


//false
console.log("FALSE");
console.log(vaildAnagram("aaz", "zza"));
console.log(vaildAnagram("rat", "car"));
console.log(vaildAnagram("awesome", "awesom"));


