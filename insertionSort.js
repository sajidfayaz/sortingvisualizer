let insertionSort = async (arr, states) => {
    let j;
    for(let i=1; i<arr.length; i++) {
        j = i;

        while(j>=0 && arr[j] < arr[j-1]) {
            await swap(arr, j, j-1);
            // arr[j+1] = arr[j];
            states[j] = 0;
            states[j-1] = 0;
            j -= 1;
        }
        
        if(i== arr.length - 1) {
            for(let i=0; i<arr.length; i++)
            states[i] = 1;
        }
    }
    
}