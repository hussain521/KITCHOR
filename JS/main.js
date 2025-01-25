let nums = document.querySelectorAll(".num");
let container = document.querySelector(".con");

let test = false;
window.onscroll = () => {
  if ((window.ScreenY = container.offsetTop)) {
    nums.forEach((e) => {
      let start = 0;
      let end = e.dataset.num;

      let count = setInterval(() => {
        start++;
        e.textContent = start;

        if (start == end) {
          clearInterval(count);
        }
      }, 5000 / end);
    });
  }
};
