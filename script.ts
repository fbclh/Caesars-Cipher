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

