const selectBtn = document.querySelector('.selectionSort');
const bubbleBtn = document.querySelector('.bubbleSort');
const insertBtn = document.querySelector('.quickSort');
const mergeBtn = document.querySelector('.mergeSort');
const quickBtn = document.querySelector('.insertionSort');
const generateNewArr = document.querySelector('.generateNewArray');

selectBtn.addEventListener('click', getFunctionName);
bubbleBtn.addEventListener('click', getFunctionName);
insertBtn.addEventListener('click', getFunctionName);
mergeBtn.addEventListener('click', getFunctionName);
quickBtn.addEventListener('click', getFunctionName);

// Generate New Array on click
generateNewArr.addEventListener('click', () => {
   setup();
});


function getFunctionName() {
   const val = this.className; // val is the name of sorting algorithm selected

   if(val == "selectionSort") {
      selectionSort(arr, states);
   } else if(val == "bubbleSort") {
      bubbleSort(arr, states);
   } else if(val == "insertionSort") {
      insertionSort(arr, states);
   } else if(val == "mergeSort") {
      mergeSort(arr, states, 0, arr.length - 1);
   } else {
      quickSort(arr, states, 0, arr.length - 1);
   }
}
