// crete an array to store values
let arr = [];

// create states to keep track of indexes being swapped and sorted indexes
let states = [];

function setup() {
    let canv = createCanvas(800, 500);
    console.log(canv);
    // place canvas inside a div
    canv.parent("canvasContainer");
    
    arr = new Array(floor(width/10));
    for(let i=0; i<arr.length - 2; i++) {
        arr[i] = random(height) + 1;
        states[i] = -1;
    }
    //bubbleSort(arr, states);
    selectionSort(arr, states);
}

function draw() {
    background(0);
    for(let i=0; i<arr.length - 2; i++) {
        if(states[i] == 0) {
            //fill('#E0777D');
            fill(0, 0, 255);
            states[i] = -1;
        } else if(states[i] == 1) {
            fill(0, 255, 0);
        } else {
            fill(255);
        }
        
        rect(i * 10 + 20, height - arr[i] , 10, arr[i]);
        // stroke(255);
        // line(i, height, i, height - arr[i]);
        
    }
}