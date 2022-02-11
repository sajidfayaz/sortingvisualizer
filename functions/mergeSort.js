let mergeSort = async (arr, states, l, r) => {
   if (l >= r) {
      return;
   }

   let mid = l + parseInt((r - l) / 2);

   await Promise.all([
      mergeSort(arr, states, l, mid),
      mergeSort(arr, states, mid + 1, r),
   ]);

   for (let i = l; i <= r; i++) {
      states[i] = 2;
   }
   // await mergeSort(arr, states, l, mid);
   // await mergeSort(arr, states, mid+1, r);

   await merge(arr, states, l, mid, r);

   for (let i = l; i <= r; i++) {
      states[i] = 1;
   }
};

let ms = 90;

let merge = async (arr, states, l, mid, r) => {
   let size1 = mid - l + 1;
   let size2 = r - mid;

   let arrL = new Array(size1);
   let arrR = new Array(size2);

   for (let i = 0; i < size1; i++) {
      arrL[i] = arr[l + i];
   }

   for (let j = 0; j < size2; j++) {
      arrR[j] = arr[mid + 1 + j];
   }

   let i = 0;
   let j = 0;
   let k = l;

   while (i < size1 && j < size2) {
      if (arrL[i] <= arrR[j]) {
         await sleep(ms);
         arr[k] = arrL[i];
         states[k] = 0;
         i++;
      } else {
         await sleep(ms);
         arr[k] = arrR[j];
         states[k] = 0;
         j++;
      }
      k++;
   }

   while (i < size1) {
      await sleep(ms);
      arr[k] = arrL[i];
      states[k] = 0;
      i++;
      k++;
   }

   while (j < size2) {
      await sleep(ms);
      arr[k] = arrR[j];
      states[k] = 0;
      j++;
      k++;
   }
};
