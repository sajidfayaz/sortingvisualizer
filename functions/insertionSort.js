let insertionSort = async (arr, states) => {
   let j; let key;
   for (let i = 1; i < arr.length; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
         states[j] = 2;
         arr[j+1] = arr[j];
         // states[j+1] = 0;
         j -= 1;
      }
      await sleep(100);
      arr[j+1] = key;
      states[j+1] = 0;
      if (i == arr.length - 1) {
         for (let i = 0; i < arr.length; i++) states[i] = 1;
      }
   }
};
