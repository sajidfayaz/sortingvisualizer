// Hold all the buttons that are in the navbar inside this variable
const navItems = document.querySelector("#navItems").childNodes;

// Select the Sort button
const sortArray = document.querySelector("#sortArray");

// Select the button which will generate a new array on click
const generateNewArr = document.querySelector('#generateNewArray');

// Generate New Array on click
generateNewArr.addEventListener('click', () => {
   setup();
});

// This will hold the sorting algorithm which was selected
let selectedSort;

// Highlight the selected sorting algorithm and save it in selectedSort
navItems.forEach((item) => {
   item.addEventListener("click", () => {
      if(item.tagName === "A") {
         item.classList.add("focus:text-red-500");
         selectedSort = item.childNodes[1].innerText;
         console.log(item.childNodes[1].innerText);
         console.log(item);
      }
   });
});

// When Sort button is clicked, run the selected sorting algorithm and disable all the buttons
sortArray.addEventListener("click", async () => {
   if(selectedSort === undefined) {
      alert("Please select a sorting algorithm");
   } else if (selectedSort.toLowerCase() === "bubble sort") {
      lockAllButtons();
      await bubbleSort(arr, states);
      releaseLock();
      console.log("hurray");
   } else if(selectedSort.toLowerCase() === "selection sort") {
      lockAllButtons();
      await selectionSort(arr, states);
      releaseLock();
   } else if(selectedSort.toLowerCase() === "insertion sort") {
      lockAllButtons();
      await insertionSort(arr, states);
      releaseLock();
   } else if(selectedSort.toLowerCase() === "merge sort") {
      lockAllButtons();
      await mergeSort(arr, states, 0, arr.length - 1);
      releaseLock();
   } else if(selectedSort.toLowerCase() === "quick sort") {
      lockAllButtons();
      await quickSort(arr, states, 0, arr.length - 1);
      releaseLock();
   }
});

let lockAllButtons = () =>  {
   navItems.forEach((item) => {
      item.disabled = true;
   });
}

let releaseLock = () => {
   navItems.forEach((item) => {
      item.disabled = false;
   });
}