const isSubsequence = require('../isSubsequence/isSubsequence_solution.js');

// naive solution
// for each word, iterate string to check if it is a subsequence
// O(n*m)
// function countMatchingSubsequences(string, subsequences) {
//   let count = 0;
//   for (let subsequence of subsequences) {
//     if(isSubsequence(string, subsequence)) {
//       count++;
//     }
//   }
//   return count;
// }

// use a library where key-value pairs are the subsequence waiting to be found and the number of times that subsequence appears
// still pretty bad - iterating through whole library each time to check the first character of each key
// function countMatchingSubsequences(string, subsequences) {
//   let count = 0;
//   let library = {};
//   // fill library with all subsequences, accounting for some subsequences appearing more than once
//   for (let subsequence of subsequences) {
//     if (subsequence === '') {
//       // empty strings can increment count immediately
//       count++;
//     } else {
//       library[subsequence] = library[subsequence] + 1 || 1;
//     }
//   }
//   for (let char of string) {
//     // check every subsequence remaining in the library
//     for (let subsequence in library) {
//       // if the first character of a subsequence matches the current letter of the string there are two possibilities
//       if (subsequence[0] === char) {
//         let slice = subsequence.slice(1);
//         // first possibility - this is the last letter of the subsequence (the slice will be undefined)
//         if (!slice.length) {
//           // add the number of times this subsequence was in the library to the total count of matching subsequences
//           count += library[subsequence];
//           // check if all subsequences have been matched and return immediately if all have been found
//           if (count === subsequences.length) {
//             return count;
//           }
//         // second possibility - there are still characters left in the subsequence
//         } else {
//           // move the subsequence count to a new entry in the library for the sliced portion
//           library[slice] = library[slice] + library[subsequence] || library[subsequence];
//         }
//         // in both cases, delete the old entry
//         delete library[subsequence];
//       }
//       // (if first character doesn't match the current subsequence, move to next subsequence in library)
//     }
//   }
//   return count;
// };

// use a library where key-value pairs are the next character required by a given subsequence, and an array of all subsequences waiting on that letter
// this is much better - makes for constant time access as parent string is iterated (constant time access is the point of using a hash)
// using a String Iterator object also makes for very convenient pattern matching
function countMatchingSubsequences(string, subsequences) {
  let count = 0;
  let library = {};
  // create library skeleton - an empty array for every letter of the alphabet
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    library[String.fromCharCode(i)] = [];
  }
  // fill the library with the subsequences
  for (let subsequence of subsequences) {
    if (subsequence === '') {
      // empty strings can increment count immediately
      count++;
    } else {
      // create iterator object
      let subsequenceIterator = subsequence[Symbol.iterator]();
      // set up iterator for future iteration calls
      subsequenceIterator.next();
      // add iterator object to appropriate array in library
      library[subsequence[0]].push(subsequenceIterator);
    }
  }
  for (let char of string) {
    // copy list of subsequences waiting on the current letter
    let toAdvance = library[char].slice();
    // reset entry in library
    library[char] = [];
    // for each subsequence waiting on the current char to advance
    for (let subsequence of toAdvance) {
      // move iterator object to next position and store its value
      let nextChar = subsequence.next().value;
      // if the iterator is done, increment the count
      if (nextChar === undefined) {
        count++;
        // if all subsequences have been found, can return count immediately
        if (count === subsequences.length) {
          return count;
        }
      } else {
        // otherwise, add subsequence back to library
        library[nextChar].push(subsequence);
      }
    }
  }
  return count;
}

// use a library constructed similarly to the previous solution
// this time, however, store subsequences as a tuple with the following format: [originalSubsequence, indexOfNextCharaterToBeFound]
// this is quite useful in case the list of subsequences found, rather than a count, is desired
// function countMatchingSubsequences(string, subsequences) {
//   let count = 0;
//   let found = [];
//   let library = {};
//   // create library skeleton - an empty array for every letter of the alphabet
//   for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
//     library[String.fromCharCode(i)] = [];
//   }
//   for (let subsequence of subsequences) {
//     if (subsequence === '') {
//       // empty strings can increment count immediately
//       count++;
//       found.push('');
//     } else {
//       // otherwise add tuple to the library
//       // this format indicates: 'the subsequence is waiting for the character at index 0 to be matched'
//       library[subsequence[0]].push([subsequence, 0]);
//     }
//   }
//   for (let char of string) {
//     // copy list of subsequences waiting on the current letter
//     let toAdvance = library[char].slice();
//     // reset entry in library
//     library[char] = [];
//     // for each subsequence waiting on the current char to advance
//     for (let tuple of toAdvance) {
//       // if the char that was just matched is the last char of the subsequence
//       if (tuple[1] === tuple[0].length - 1) {
//         // increment the count and add the subsequence to the list of found subsequences
//         count++;
//         found.push(tuple[0]);
//         if (count === subsequences.length) {
//           return count;
//         }
//       } else {
//         // otherwise, add the tuple back to the library in the bucket of the next character to be matched
//         library[tuple[0][tuple[1] + 1]].push([tuple[0], tuple[1] + 1]);
//       }
//     }
//   }
//   return count;
// }


console.log(countMatchingSubsequences('', [])); // 0
console.log(countMatchingSubsequences('', ['', ''])); // 2
let string = 'thisisareallylongstringfortestinganumberofsubsequences';
let subsequences = ['ooo', 'llll', 'lrsi', 'super', 'tiarlsftanos', 'notanumber', 'iiaeayoioeiaueoueuee', 'whowouldexpctthis', 'iwouldnt', 'thisisastringtest'];
console.log(countMatchingSubsequences(string, [''])); // 1
console.log(countMatchingSubsequences(string, subsequences)); // 6
subsequences.push('', '', '');
console.log(countMatchingSubsequences(string, subsequences)); // 9
subsequences = ['this', 'is', 'a', 'really', 'long', 'string', 'for', 'testing', 'a', 'number', 'of', 'subsequences'];
console.log(countMatchingSubsequences(string, subsequences)); // 12