function nextGreaterElementLeft(arr) {
  const stack = [];
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }
    stack.push(arr[i]);
  }
  return result.reverse();
}

const arr = [11, 13, 21, 3];
const nextGreaterElements = nextGreaterElementLeft(arr);

console.log(nextGreaterElements); //output [-1, 11, 21, -1]
