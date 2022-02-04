let swap = (arr, a, b) => {
    temp = arr[a].y;
    arr[a].y = arr[b].y;
    arr[b].y = temp;

    tempColor = arr[a].color;
    arr[a].color = arr[b].color;
    arr[b].color = tempColor;

    tempLabel = arr[a].label;
    arr[a].label = arr[b].label;
    arr[b].label = temp;
}

let selectionSort = (chart) => {
    let data = chart.options.data[0].dataPoints;
    let length = data.length;
    let i=0;
    let j=1;
    let minIdx;

    (function sortElements() {
        if(j >= length) {
            i++;
            j=i+1;
            
        }

        if(i<length - 1) {
            minIdx = i;
            if(data[j].y < data[minIdx].y) {
                swap(data, j, i);
                chart.options.data[0].dataPoints = data;
                chart.render();
            }
            j++;
            setTimeout(() => {
                sortElements();
            }, 1);
        }
    })();
}
