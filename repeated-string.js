//repeat string, split into array, array filter, find length of array

let str = "abc";
let num = 10;

function repeat(str, num) {
  let str1 = str.repeat(Math.floor(num / str.length));
  let str2 = str.slice(0, num % str.length);
  let repStr = str1.concat("", str2);
  let repArr = repStr.split("");
  const filteredRepArr = repArr.filter(ele => ele === "a");
  return filteredRepArr.length;
}

function repeat2(s, n) {
  let sArr = s.split("");
  const filteredSArr = sArr.filter(ele => ele === "a");
  let result = filteredSArr.length * Math.floor(n / s.length);
  let s2 = s.slice(0, n % s.length);
  let s2Arr = s2.split("");
  const filteredS2Arr = s2Arr.filter(ele => ele === "a");
  result += filteredS2Arr.length;
  return result;
}
