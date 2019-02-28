// O(n) time, O(n) space
function longestNoRepeat(string) {
  let start = 0;
  let end = 0;
  let longest = 0;
  // Will use the library to keep track of the most recent appearnce of each character
  let library = {};
  // for the length of the string
  while(end < string.length) {
    let char = string[end];
    if (char in library) {
      // if the character has already been seen, there are two possibilities
      // 1 - the second-most recent appearance occurs before the start of the current substring, can disregard
      // 2 - the second-most recent appearance is contained within the current substring,
          // -> must update start index to exclude second-most recent appearance (1 index ahead)
      start = Math.max(start, library[char] + 1);
    }
    // update the most recent appearance of the character in the library
    library[char] = end;
    // check if there is a new longest substring
    longest = Math.max(longest, end - start + 1);
    end ++;
  }
  return longest;
};


console.log(longestNoRepeat('')); // 0
console.log(longestNoRepeat('a')); // 1
console.log(longestNoRepeat('aaaaaaaaa')); // 1
console.log(longestNoRepeat('aaaaaaaaabbbbbbbbbbbbbbb')); // 2
console.log(longestNoRepeat('abcdefghijklmnopqrstuvwxyz')); // 26
console.log(longestNoRepeat('abacadaeafagahaiajakalamanaoapaqarasatauavawaxayaz')); // 3
console.log(longestNoRepeat('codeodecodoceodocodecodeoedocodeocodhilongestdatatdadtadaatdtadatddtadtadatadata')); // 11