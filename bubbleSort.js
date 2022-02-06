let bubbleSort = async (arr, states) => {
   for(let i=0; i<arr.length; i++) {
       for(let j=0; j<arr.length - i - 1; j++) {
           if(arr[j] > arr[j+1]) {
               await swap(arr, j, j+1);
               states[j] = 0;
               states[j+1] = 0;
           }
           states[arr.length - i - 2] = 1;
       }
   }
}

let swap = async (arr, a, b) => {
   await sleep(100);
   let temp = arr[a];
   arr[a] = arr[b];
   arr[b] = temp;
}

let sleep =  (ms) => {
   return new Promise(resolve => setTimeout(resolve, ms));
}