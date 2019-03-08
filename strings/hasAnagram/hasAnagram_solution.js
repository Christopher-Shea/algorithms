function hasAnagram(string, anagram) {
  // set up library with charater counts for anagram
  let hash = {};
  for (let char of anagram) {
    hash[char] = hash[char] + 1 || 1;
  }
  // toMatch will be used to ascertain when all characters(and their counts) of the anagram have been matched
  let toMatch = Object.keys(hash).length;
  let start = 0;
  let end = 0;
  // use a sliding window as long as the target anagram
  while(end < anagram.length){
    let char = string[end];
    // as each character in the string is seen
    if (char in hash) {
      // if the character is in the anagram, subtract 1 from that character's count in the library
      // (there is one less ocurrence of this character to match)
      hash[char] -= 1;
      // if the library count hits zero, all occurrences of that character have been matched, update toMatch
      if (hash[char] === 0) {
        toMatch--;
      }
      // if the library count hits negative zero, there are now more characters in the window than in the anagram
      // update toMatch accordingly
      if (hash[char] === -1) {
        toMatch++;
      }
    }
    end++;
  }
  // check if the initial window is already a target anagram
  if (toMatch === 0) {
    return true;
  }
  // otherwise, slide the window down the string
  while(end < string.length){
    // account for the new end character and update toMatch if necessary
    let newChar = string[end];
    if (newChar in hash) {
      hash[newChar] -= 1;
      if (hash[newChar] === 0) {
        toMatch--;
      }
      if (hash[newChar] === -1) {
        toMatch++;
      }
    }
    // account for the loss of the old start character and update toMatch if necessary
    let oldChar = string[start];
    if (oldChar in hash) {
      hash[oldChar] += 1;
      if (hash[oldChar] === 0) {
        toMatch--;
      }
      if (hash[oldChar] === 1) {
        toMatch++;
      }
    }
    // check if the current window is a target anagram
    if (toMatch === 0) {
      return true;
    }
    end++;
    start++;
  }
  return false;
}


console.log(hasAnagram('doesnotmatter', '')); // true
console.log(hasAnagram('abcdefghi', 'zzzz')); // false
console.log(hasAnagram('interesting', 'rent')); // true
console.log(hasAnagram('algorithms', 'hit')); // true
console.log(hasAnagram('notquite', 'nosir')); // false
console.log(hasAnagram('exactmatch', 'hctamtcaxe')); // true