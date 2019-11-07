str = "UUDDDDUDUDUUUDDDDUU";

function countingValleys(str) {
  const array = str.split("");
  // console.log(array);
  const elevArray = [];
  let elevation = 0;
  array.forEach(ele => {
    if (ele === "U") {
      elevation += 1;
    } else if (ele === "D") {
      elevation -= 1;
    }
    elevArray.push(elevation);
  });
  // console.log(elevArray);
  let inVal = false;
  let valCount = 0;
  for (let i = 0; i < elevArray.length; i++) {
    if (elevArray[i] < 0) {
      //in a valley
      inVal = true;
    }
    if (elevArray[i] === 0 && inVal === true) {
      //out of the valley, count the valley
      inVal = false;
      valCount += 1;
    }
  }
  return valCount;
}

countingValleys(str);
