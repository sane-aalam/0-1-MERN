// code this pattern
// *
// * *
// * * *
// * * * *

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "* ";
  let result = str.repeat(i);
  console.log(result);
}

let N = 5;
for (let i = 1; i <= N; i++) {
  let str = "* ";
  let space = "  ";
  // first repeat the space(n-1)-(n-2)--- till now (n-0) times
  // second repeat the star(1,2,3,4,----n)
  console.log(space.repeat(n - i) + str.repeat(i));
}
