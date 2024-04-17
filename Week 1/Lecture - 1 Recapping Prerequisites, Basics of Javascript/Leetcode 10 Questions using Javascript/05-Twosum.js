class Solution {
  Twosum(arr, n, target) {
    // code here
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i] + arr[j] == target) {
          return true;
        }
      }
    }
    return false;
  }
}
