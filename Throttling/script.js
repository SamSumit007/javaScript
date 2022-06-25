let flag;
function throttling(fn, delay) {
  flag = true;
  if (flag == true) {
    fn();
    flag == false;

    setTimeout(() => {
      flag == true;
    }, delay);
  }
}
let count = 0;
function getData() {
  console.log("Button clicked", count++);
}