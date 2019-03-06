// function isAnagram(string, anagram) {
//   // two strings must be the same length if they are to be anagrams
//   if (string.length !== anagram.length) {
//     return false;
//   }
//   let library = {};
//   // fill library with counts of first string's characters
//   for (let char of string) {
//     library[char] = library[char] + 1 || 1;
//   }
//   // make a pass through potential anagram
//   for (let char of anagram) {
//     // if a chatacter in the potential anagram was not in the first string, it cannot be an anagram
//     if (!(char in library)) {
//         return false;
//     }
//     // subtract from the count of first string's characters
//     library[char] = (library[char] || 0) - 1;
//     // if library count falls below 0, the potential anagram cannot be an anagram
//     if (library[char] < 0) {
//         return false;
//     }
//   }
//   // none of the negative tests have been met, second string must be an anagram
//   return true;
// }

// pretty much the same logic but slightly better performance
// especially if length of strings is much longer than 26
function isAnagram(string, anagram) {
  if (string.length !== anagram.length) {
    return false;
  }
  // create an array, where each index will count the occurrences of a letter of the alphabet
  let charCount = new Array(26).fill(0);
  for (let i = 0; i < string.length; i++) {
    // 'a' to 'z' are character codes 97 - 122, mapped to indices 0 - 26
    charCount[string.charCodeAt(i) - 97]++;
    charCount[anagram.charCodeAt(i) - 97]--;
  }
  // make sure that all spots in the array have been balanced out to 0
  for (let i = 0; i < charCount.length; i++) {
    if (charCount[i] !== 0) {
      return false;
    }
  }
  return true;
}


console.log(isAnagram('', '')); // true
console.log(isAnagram('tacocat', 'occtata')); // true
console.log(isAnagram('abcdefg', 'gcedbaf')); // true
console.log(isAnagram('principle', 'principal')); // false
console.log(isAnagram('potato', 'tomato')); // false
console.log(isAnagram('zmxncbvlaksjdhfgpqowieuryt', 'hgjfkdlsayturieowpqbvncmxz')); // true
console.log(isAnagram('deductions', 'discounted')); // true
console.log(isAnagram('almosttherebutnotquite', 'almostthurebutnotquite')); // false