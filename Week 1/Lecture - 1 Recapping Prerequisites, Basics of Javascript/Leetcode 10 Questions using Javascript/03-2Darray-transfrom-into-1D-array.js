function convertedONEArrayIntoTwoArray(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
      let innerArray = arr[i];
      innerArray.map((element) => {
        newArray.push(element);
      });
    } else if (typeof arr[i] == "number") {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

let array_transfer = [1, 2, 3, 4, 5, [772, 28282], 191];
let result = convertedONEArrayIntoTwoArray(array_transfer);
console.log(result);
