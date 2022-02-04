let swap = (arr, a, b) => {
    temp = arr[a].y;
    arr[a].y = arr[b].y;
    arr[b].y = temp;
}

let selectionSort = (chart) => {
    let data = chart.options.data[0].dataPoints;
    let length = data.length;
    let i=0;
    let j=1;
    let minIdx;

    (function sortElements() {
        if(j >= length) {
            j=i+1;
            i++;
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
