// O(n) time, O(1) space
function checkDelimiters(string) {
  // create our delimiter library
  const pairs = {'(': ')', '{': '}', '[': ']'};
  // create a library of closing delimiters for constant time reference, values can be anything
  // (vs using an array and searching with .includes())
  const closers = {')': true, '}': true, ']' : true}
  let stack = [];
  for (let char of string) {
    // if character is an opening delimiter
    if (char in pairs) {
      // add to the stack
      stack.push(char);
      // otherwise check if character is a closing delimiter
      // if not using 'closers' library, could check: if ([')', '}', ']'].includes(char))
      // or write out: if ((char === ')' || char === '}' || char === ']'))
    } else if (char in closers) {
      // pull delimiter off top of stack - this is what needs to be closed
      // if the pair to the popped off opening delimiter does not match the character
      if (pairs[stack.pop()] !== char) {
        // delimiters are not valid
        return false;
      }
    }
    // otherwise, character is a letter, space, or punctuation - can continue to next character
  }
  // need to ensure that the stack is empty - no unmatched delimiters
  return !stack.length

}


console.log(checkDelimiters('')); // true
console.log(checkDelimiters('[{}]')); // true
console.log(checkDelimiters('{}[]((')); // false
console.log(checkDelimiters('([{())}]')); // false
console.log(checkDelimiters('{[([{((((()))))}])]}')); // true
console.log(checkDelimiters('ca{ncont([ain[[letter((s(as{we{ll}}not))ju)s]t]delimi]te)rs}')); // true
console.log(checkDelimiters('  {can also [include spaces (and) other ] punctuation!!!}     ')); // true
console.log(checkDelimiters('how[ever,{ if the brackets a(r(e(n(o(t)r)i)g)h)t}, it will not pass...')); // false