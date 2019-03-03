function longestPalindromicSubstring(string) {
  let maxLength = 0;
  let start = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j <= 1; j++) {
      // set starting window boundaries (i and j will start with same value half of the time)
      let left = i;
      let right = i + j;
      // if the window is in bounds and the bounds are equal
      while(string[left] && string[right] && string[left] === string[right]) {
        // if there is a new longest palindrome
        if (right - left + 1 > maxLength) {
          // update the maxLength and starting point
          maxLength = right - left + 1;
          start = left;
        }
        // expand window
        left--;
        right++;
      }
    }
  }
  // return the longest palindrome
  return string.slice(start, start + maxLength);
};


console.log(longestPalindromicSubstring('')); // ''
console.log(longestPalindromicSubstring('abcdefg')); // a
console.log(longestPalindromicSubstring('aaaaaa')); // aaaaaa
console.log(longestPalindromicSubstring('racecar')); // racecar
console.log(longestPalindromicSubstring('eecabachggh')); // cabac