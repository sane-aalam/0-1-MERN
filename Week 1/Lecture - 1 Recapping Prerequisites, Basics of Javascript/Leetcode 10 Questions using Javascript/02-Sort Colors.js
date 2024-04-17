class Solution {
    sort012(arr, N)
    {
        //your code here
        let start = 0;
        let mid = 0;
        let end = N - 1;
        
        while(mid <= end){
            // firstly came only 0
            if(arr[mid] == 0 && mid <= end){
                let temp = arr[mid];
                arr[mid] = arr[start];
                arr[start] = temp;
                start++;
                mid++;
            // secondly came only 1
            }else if(arr[mid] == 1 && mid <= end){
                mid++;
            // lastly only came 2
            }else if(arr[mid] == 2 && mid <= end){
                let temp = arr[mid];
                arr[mid] = arr[end];
                arr[end] = temp;
                end--;
            }
        }
    }
}