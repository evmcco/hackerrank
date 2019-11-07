// const nonDivisibleSubset = function(arr, k) {
//   let pairsArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       pairsArray.push([arr[i], arr[j]]);
//     }
//   }
//   console.log("pairs array:", pairsArray);

//   pairsArray.forEach((array, ind) => {
//     let sum = array[0] + array[1];
//     if (sum % k === 0) {
//       pairsArray.splice(ind, 1);
//     }
//   });

//   console.log("filtered pairs array", pairsArray);

// };

const nonDivisibleSubset = function(arr, k) {
  let result = 0;
  const modArray = arr.map(ele => {
    return ele % k;
  });
  modArray.sort();
  console.log("mod array", modArray);
  let modFreqArray = new Array(k).fill(0);
  modArray.forEach(ele => {
    modFreqArray[ele] += 1;
  });
  console.log("mod freq array", modFreqArray);

  if (modFreqArray[0] > 0) {
    result += 1;
  }
  if (k % 2 === 0 && modFreqArray[k / 2] > 0) {
    result += 1;
  }
  for (let i = 1; i < k / 2; i++) {
    let j = k - i;
    console.log([i, j]);
    if (modFreqArray[i] < modFreqArray[j]) {
      result += modFreqArray[j];
    } else if (modFreqArray[i] >= modFreqArray[j]) {
      result += modFreqArray[i];
    }
  }
  return result;
};

nonDivisibleSubset([1, 2, 4, 7, 9, 14, 16, 21, 28, 34], 10);
