function removeDuplicate(arr) {
  let newArray = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] == arr[i]) {
      continue;
    } else {
      newArray.push(arr[i - 1]);
    }
  }
  return newArray;
}

let arr = [11, 12, 13, 14, 14, 15];
let newArray = removeDuplicate(arr);
console.log(newArray);
