arr = [10, 10, 20, 30, 45, 20, 10, 45, 50];

function findPairs(array, pairs) {
  console.log(`Starting array: ${array}`);
  for (let i = 0; i < array.length; i++) {
    array.splice(0, 1);
    console.log(`Looking for ${array[0]} in ${array}`);
    let matchIndex = array.indexOf(array[0]);
    if (matchIndex >= 0) {
      array.splice(matchIndex, 1);
      findPairs(array, pairs++);
      break;
    }
  }
  console.log(pairs);
}

function findPairs2(array) {
  let pairsObj = {};
  array.forEach((v, i) => {
    if (!pairsObj[v]) {
      pairsObj[v] = 1;
    } else {
      pairsObj[v] += 1;
    }
  });
  objKeys = Object.keys(pairsObj);
  let pairs = 0;
  objKeys.forEach(ele => {
    pairs += Math.floor(pairsObj[ele] / 2);
  });
}
findPairs2(arr);
