// crete an array to store values
let arr = [];

// create states to keep track of indexes being swapped and sorted indexes
let states = [];

//p5js setup() method
function setup() {
   let canv = createCanvas(1000, 500);
   console.log(canv);
   // place canvas inside a div
   canv.parent('canvasContainer');

   arr = new Array(floor(width / 10));
   for (let i = 0; i < arr.length - 2; i++) {
      arr[i] = random(height) + 1;
      states[i] = -1;
   }

   const sel = document.querySelector('.selectionSort');
   const bubb = document.querySelector('.bubbleSort');
   const insert = document.querySelector('.quickSort');
   const merg = document.querySelector('.mergeSort');
   const quick = document.querySelector('.insertionSort');

   sel.addEventListener('click', getFunctionName);
   bubb.addEventListener('click', getFunctionName);
   insert.addEventListener('click', getFunctionName);
   merg.addEventListener('click', getFunctionName);
   quick.addEventListener('click', getFunctionName);

   function getFunctionName() {
      let funcName = this.className;
      if (funcName === 'selectionSort') selectionSort(arr, states);
      else if (funcName === 'bubbleSort') bubbleSort(arr, states);
      else if (funcName === 'insertionSort') insertionSort(arr, states);
      else if (funcName === 'mergeSort')
         mergeSort(arr, states, 0, arr.length - 1);
      else if (funcName === 'quickSort')
         quickSort(arr, states, 0, arr.length - 1);
   }
}

//p5js draw() method
function draw() {
   background(0);
   for (let i = 0; i < arr.length - 2; i++) {
      if (states[i] == 0) {
         //fill('#E0777D');
         fill(0, 0, 255);
         states[i] = -1;
      } else if (states[i] == 1) {
         fill(0, 255, 0);
      } else if (states[i] == 2) {
         fill('orange');
      } else {
         fill(255);
      }

      rect(i * 10 + 20, height - arr[i], 10, arr[i]);
      // stroke(255);
      // line(i, height, i, height - arr[i]);
   }
}

// common swap function
let swap = async (arr, a, b) => {
   await sleep(90);
   let temp = arr[a];
   arr[a] = arr[b];
   arr[b] = temp;
};

// common sleep function to add delay in animations
let sleep = ms => {
   return new Promise(resolve => setTimeout(resolve, ms));
};
