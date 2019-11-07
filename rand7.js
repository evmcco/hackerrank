//if you have a function rand5() that returns a random int 0>5, create rand7()

let rand5 = () => {
  return Math.floor(Math.random() * 6);
};

let rand7 = () => {
  let result1 = rand5();
  let result2 = rand5();
  while ([4, 5].includes(result2)) {
    result2 = rand5();
  }
  if ([0, 1, 2].includes(result1)) {
    return result2; //0, 1, 2, 3
  } else if ([3, 4, 5].includes(result1)) {
    return result2 + 4; //4, 5, 6, 7
  }
};

let check1000 = () => {
  let obj = {};
  for (let i = 0; i < 1000; i++) {
    let random = rand7();
    random in obj ? (obj[random] += 1) : (obj[random] = 1);
  }
  console.log(obj);
};

check1000();
