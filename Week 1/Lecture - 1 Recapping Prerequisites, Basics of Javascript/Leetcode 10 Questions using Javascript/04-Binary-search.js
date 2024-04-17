// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    binarysearch(arr, n, k) {
        // code here
        let start = 0;
        let end = n - 1;
        // Math.floor (3.4) => 3(excat vlaue of integer)
        let mid = Math.floor(start + (end-start)/2);
        
        while(start <= end){
            if(arr[mid] == k){
                return mid;
            }else if(arr[mid] < k){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
            // update the mid of the arry
            mid = Math.floor(start + (end-start)/2);
        }
        return -1;
    }
}