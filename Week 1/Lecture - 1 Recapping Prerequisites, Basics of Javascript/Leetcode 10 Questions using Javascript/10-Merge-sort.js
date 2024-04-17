//**** Working of Merge Sort
// Step 1: Divide the array into two equal halves.
// Step 2: Further divide those subarrays in equal halves untill they become array of unit length and can't be divided futher.
// Step 3: Now, merge the unit array to form sorted subarrays and continue getting bigger subarrays.

function merge(arr, left, middle, right) {
  let l1 = middle - left + 1;
  let l2 = right - middle;
  // Create new subarrays
  let arr1 = new Array(l1);
  let arr2 = new Array(l2);

  // Assign values in subarrays
  for (let i = 0; i < l1; ++i) {
    arr1[i] = arr[left + i];
  }
  for (let i = 0; i < l2; ++i) {
    arr2[i] = arr[middle + 1 + i];
  }

  // To travesrse and modify main array
  let i = 0,
    j = 0,
    k = left;

  // Assign the smaller value for sorted output
  while (i < l1 && j < l2) {
    if (arr1[i] < arr2[j]) {
      arr[k] = arr1[i];
      ++i;
    } else {
      arr[k] = arr2[j];
      j++;
    }
    k++;
  }
  // Update the remaining elements
  while (i < l1) {
    arr[k] = arr1[i];
    i++;
    k++;
  }
  while (j < l2) {
    arr[k] = arr2[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }

  let middle = left + parseInt((right - left) / 2);

  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);
  merge(arr, left, middle, right);
}

const arr = [38, 27, 43, 10];
console.log("Original array: " + arr);
mergeSort(arr, 0, arr.length - 1);
// Display output
console.log("After sorting: " + arr);
