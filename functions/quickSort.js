let quickSort = async (arr, states, low, high) => {
   if (low < high) {
      let p = await partition(arr, low, high);

      await Promise.all([
         quickSort(arr, states, low, p - 1),
         quickSort(arr, states, p + 1, high),
      ]);
   }

   for (let i = low; i < high; i++) {
      states[i] = 1;
   }
};

let partition = async (arr, low, high) => {
   for (let i = low; i < high; i++) {
      states[i] = 2;
   }

   let pivotElement = arr[high];
   let i = low - 1;

   for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivotElement) {
         i++;
         await swap(arr, i, j);
         states[i] = 0;
         states[j] = 0;
      }
   }

   await swap(arr, i + 1, high);
   states[i + 1] = 0;
   states[high] = 0;

   for (let i = low; i < high; i++) {
      states[i] = 0;
   }
   return i + 1;
};
