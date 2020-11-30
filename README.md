# Caesar Cipher

freeCodeCamp JavaScript Algorithms and Data Structure project

## Description

Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' <-> 'N', 'B' <-> 'O' and so on.

*Function which takes a ROT13 encoded string as input and returns a decoded string.* *All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*

## Example

```JavaScript
// Caesar Cipher
const rot13 = (str) => {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    /[A-M]/.test(str[i])
      ? (arr[i] = str.charCodeAt(i) + 13)
      : /[N-Z]/.test(str[i])
      ? (arr[i] = str.charCodeAt(i) - 13)
      : (arr[i] = str.charCodeAt(i));
  }

  return String.fromCharCode.apply(null, arr);
};

// Input/Output
console.log(rot13('FGENJOREEL')); // STRAWBERRY
console.log(rot13('SERR CVMMN!')); // FREE PIZZA!
console.log(rot13('FHA')); // SUN
```
