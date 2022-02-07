let selectionSort = async (arr, states) => {
    for(let i=0; i<arr.length - 1; i++) {
        let minIdx = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[minIdx])
                minIdx = j;
        }
        
        await swap(arr, minIdx, i);
        states[minIdx] = 0;
        states[i] = 0;
        states[i-1] = 1;
    }
}