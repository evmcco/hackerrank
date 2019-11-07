arr = [2, 3, 4, 1, 5];
ar2 = [1, 2, 3, 4, 5];
ans = 3;

function minimumSwaps(arr) {
  // let finalArr = [...Array(10).keys()].map(ele => ele + 1);
  let swaps = 0;
  arr.forEach((val, ind) => {
    ind += 1;
    if (val !== ind) {
      //if a number is out of place
      swaps += 1;
    }
    if (ind == arr[val - 1] && ind !== val) {
      //if a single swap puts 2 numbers back in place
      console.log(`Double swap at ${ind} and ${val}`);
      swaps -= 0.5;
    }
  });
  swaps -= 1;
  console.log(swaps);
  return swaps;
}

// minimumSwaps(arr);

function minimumSwaps2(arr) {
  let i = 0;
  let j = 0;
  let swaps = 0;
  arr.forEach((val, ind) => {
    if (val !== ind + 1) {
      i = val - 1;
      j = ind;
      arr[i] = val;
      arr[j] = arr[i];
      swaps++;
      console.log(arr);
    }
  });
  console.log(swaps);
}

minimumSwaps2(arr);
