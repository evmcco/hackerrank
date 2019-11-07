q = [2, 5, 1, 3, 4];
a = [1, 2, 3, 4, 5, 6, 7, 8];

function minimumBribes(q) {
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    let diff = q[i] - i - 1;
    if (diff > 2) {
      console.log("Too chaotic");
      bribes = 0;
      break;
    }
    bribes += Math.abs(diff);
  }
  bribes /= 2;
  if (bribes !== 0) {
    console.log(bribes);
  }
}

// minimumBribes(q);

function minimumBribes2(q) {
  let totalBribes = 0;
  let bribes = 0;
  for (let j = 0; j < q.length; j++) {
    for (let i = j; i < j + 10; i++) {
      if (q[j] > q[i]) {
        bribes += 1;
      }
    }
    if (bribes > 2) {
      return "Too chaotic";
    }
    totalBribes += bribes;
    bribes = 0;
  }
  return totalBribes;
}

console.log(minimumBribes2(q));
