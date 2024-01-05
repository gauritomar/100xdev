const value = "hi, my, name, is, gauri";
const words = value.split(',').map(word => word.trim());
console.log(words);