function generateRandomColor() {
   let letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

const arr = [];

// Generate random numbers and push them into the array
for (let i = 0; i < 100; i++) {
   let randNumber = Math.floor(Math.random() * 56);
   let randColor = generateRandomColor();
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

// Render chart
chart.render();

bubbleSort(chart);
