let swap = (arr, a, b) => {
   let temp = arr[a].y;
   arr[a].y = arr[b].y;
   arr[b].y = temp;
}

let bubbleSort = (chart) => {
   let data = chart.options.data[0].dataPoints;
   let length = data.length;
   let i = 0;
   let j = 0;
   (function sortElements() {
      if (j >= length - i - 1) {
         j = 0;
         i++;
      }

      if (i < length) {
         if (data[j].y > data[j + 1].y) {
            swap(data, j, j+1);
            chart.options.data[0].dataPoints = data;
            chart.render();
         }
         j++;
         setTimeout(() => {
            sortElements();
         }, 0.5);
      }
   })();
}
