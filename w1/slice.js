function cutIt(str, startIndex, endIndex) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= startIndex && i <= endIndex) {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}

value = "harkirat singh";

let ans1 = value.slice(2, 5);
let ans2 = cutIt(value, 2, 5);

console.log(`ans1: ${ans1}, ans2: ${ans2}`);