//* Pivot Element into the sorted array
class Solution
{
    //Function to find the minimum element in sorted and rotated array.
    findMin(arr, n){
        //your code here
        let start = 0;
        let end = n - 1;
        let mid = Math.floor(start+(end-start)/2);
        
        while(start < end){
            if(arr[0] <= arr[mid]){
                start = mid + 1;
            }else{
                end = mid;
            }
             mid = Math.floor(start+(end-start)/2);
        
        }
        return arr[start];
    }
}