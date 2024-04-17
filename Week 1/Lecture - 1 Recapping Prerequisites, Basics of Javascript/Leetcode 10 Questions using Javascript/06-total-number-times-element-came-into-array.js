function firstResult(arr, n, x) {
  let start = 0;
  let end = n - 1;
  // Math.floor (3.4) => 3(excat vlaue of integer)
  let mid = Math.floor(start + (end - start) / 2);

  let result = -1;

  while (start <= end) {
    if (arr[mid] == x) {
      result = mid;
      end = mid - 1;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    // update the mid of the arry
    mid = Math.floor(start + (end - start) / 2);
  }
  return result;
}
function secondResult(arr, n, x) {
  let start = 0;
  let end = n - 1;
  // Math.floor (3.4) => 3(excat vlaue of integer)
  let mid = Math.floor(start + (end - start) / 2);

  let result = -1;

  while (start <= end) {
    if (arr[mid] == x) {
      result = mid;
      start = mid + 1;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    // update the mid of the arry
    mid = Math.floor(start + (end - start) / 2);
  }
  return result;
}

class Solution {
  count(arr, n, x) {
    //code here
    let ans1 = firstResult(arr, n, x);
    let ans2 = secondResult(arr, n, x);

    let total = ans2 - ans1 + 1;
    if (ans1 == -1 && ans2 == -1) {
      return 0;
    } else {
      return total;
    }
  }
}
