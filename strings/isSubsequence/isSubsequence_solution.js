// O(n) time, O(1) space
function isSubsequence(string, sub) {
  let i = 0;
  let j = 0;
  // move through string
  while(i < string.length) {
    // each time the character in the string matches the next character in the subsequence
    if (sub[j] === string[i]) {
      // increment the subsequence pointer
      j++;
      // check if the whole subsequence has been traversed
      if (j === sub.length) {
        return true;
      }
    }
    i++;
  }
  // return true if the subsequence is empty (empty string is a subsequence of all strings)
  // (also return true if the subsequence AND string are both empty)
  // return false if string is empty but subsequence is NOT empty
  return j === sub.length;
}


let string = 'thisisareallylongstringfortestinganumberofsubsequences'
console.log(isSubsequence('', '')); // true
console.log(isSubsequence('', 'stringisempty')); // false
console.log(isSubsequence(string, '')); // true
console.log(isSubsequence(string, 'ooo')); // true
console.log(isSubsequence(string, 'llll')); // false
console.log(isSubsequence(string, 'lrsi')); // true
console.log(isSubsequence(string, 'super')); // false
console.log(isSubsequence(string, 'tiarlsftanos')); // true
console.log(isSubsequence(string, 'notanumber')); // true
console.log(isSubsequence(string, 'iiaeayoioeiaueoueuee')); // true
console.log(isSubsequence(string, 'whowouldexpctthis')); // false
console.log(isSubsequence(string, 'iwouldnt')); // false
console.log(isSubsequence(string, 'thisisastringtest')); // true