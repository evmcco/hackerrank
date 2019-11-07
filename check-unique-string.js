str = "abcdhjd";

function checkStr(str) {
  strArr = str.split("");
  let checkArr = [];
  strArr.forEach((val, ind) => {
    checkArr = strArr.splice(ind, 1);
  });
}
