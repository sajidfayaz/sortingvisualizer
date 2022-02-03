function generateRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

const arr = [];

// Generate random numbers and push them into the array
for (let i = 0; i < 100; i++) {
   randNumber = Math.floor(Math.random() * 56);
   randColor = generateRandomColor();
   arr.push({
      y: randNumber,
      color: randColor,
      label: randNumber,
   });
}

// Select chart in the DOM and set different properties
const chart = new CanvasJS.Chart('chartContainer', {
   animationEnabled: true,
   theme: 'light2',
   title: {
      text: 'Sorting Visualizer',
   },
   data: [
      {
         type: 'column',
         dataPoints: arr,
      },
   ],
});

let bubbleSort = () => {
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
            let temp = data[j].y;
            data[j].y = data[j + 1].y;
            data[j + 1].y = temp;
            chart.options.data[0].dataPoints = data;
            chart.render();
         }
         j++;
         setTimeout(() => {
            sortElements();
         }, 0.5);
      }
   })();
};

chart.render();
export default bubbleSort;
