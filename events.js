const selectBtn = document.querySelector('.selectionSort');
const bubbleBtn = document.querySelector('.bubbleSort');
const insertBtn = document.querySelector('.quickSort');
const mergeBtn = document.querySelector('.mergeSort');
const quickBtn = document.querySelector('.insertionSort');

selectBtn.addEventListener('click', getFunctionName);
bubbleBtn.addEventListener('click', getFunctionName);
insertBtn.addEventListener('click', getFunctionName);
mergeBtn.addEventListener('click', getFunctionName);
quickBtn.addEventListener('click', getFunctionName);

function getFunctionName() {
   const val = this.className; // val is function name

   if (
      val === 'selectionSort' ||
      val === 'bubbleSort' ||
      val === 'insertionSort'
   ) {
      eval(this.className)(arr, states);
   } else eval(this.className)(arr, states, 0, arr.length - 1);
}
