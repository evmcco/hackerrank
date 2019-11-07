a = [1, 2, 3, 4, 5];
d = 3;

function rotate(a, d) {
  const splitArr = a.splice(d);
  const resultArr = splitArr.concat(a);
  return resultArr;
}

rotate(a, d);
