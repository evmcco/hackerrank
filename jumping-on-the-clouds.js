let arr = [0, 0, 1, 0, 1, 0, 0, 1, 0];

function jumping(arr) {
  let jumps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 2] === 0) {
      i++;
      jumps += 1;
    } else if (arr[i + 1] === 0) {
      jumps += 1;
    }
  }
  return jumps;
}

console.log(jumping(arr));
