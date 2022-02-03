import bubbleSort from './bubbleSort.js';

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

chart.render();

bubbleSort(chart);
