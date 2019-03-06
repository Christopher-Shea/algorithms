function hasAnagram(string, anagram) {
  let hash = {};
  for (let char of anagram) {
    hash[char] = hash[char] + 1 || 1;
  }
  let toMatch = Object.keys(hash).length;
  let start = 0;
  let end = 0;
  while(end < anagram.length){
    let char = string[end];
    if (char in hash) {
      hash[char] -= 1;
      if (hash[char] === 0) {
        toMatch--;
      }
      if (hash[char] === -1) {
        toMatch++;
      }
    }
    end++;
  }

  if (toMatch === 0) {
    return true;
  }

  while(end < string.length){
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
    if (toMatch === 0) {
      return true;
    }
    end++;
    start++;
  }
  return false;
}


console.log(hasAnagram('abcdefghi', 'zzzz')); // false
console.log(hasAnagram('interesting', 'rent')); // true
console.log(hasAnagram('algorithms', 'hit')); // true
console.log(hasAnagram('notquite', 'nosir')); // false