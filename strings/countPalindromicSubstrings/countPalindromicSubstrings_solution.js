// O(n) time
function countPalindromicSubstrings(string) {
  // every character is a palindrome, start count with this value
  let count = string.length;
  for (let i = 0; i < string.length - 1; i++) {
    // do not need to investigate i as a potential palindrome, as it is already counted
    // instead, investigate palindrome centered around [i, i+1] and [i, i+1, i+2]
    for (let j = 1; j <= 2; j++) {
      // set boundaries of current window accordingly
      let left = i;
      let right = i + j;
      // if the window is in bounds and the bounds are equal
      while(string[left] && string[right] && string[left] === string[right]) {
        // add to count and expand window
        count++;
        left--;
        right++;
      }
    }
  }
  return count;
}


console.log(countPalindromicSubstrings('')); // 0
console.log(countPalindromicSubstrings('a')); // 1
console.log(countPalindromicSubstrings('racecar')); // 10
console.log(countPalindromicSubstrings('eecabachggh')); // 16
console.log(countPalindromicSubstrings('aaaaaa')); // 21