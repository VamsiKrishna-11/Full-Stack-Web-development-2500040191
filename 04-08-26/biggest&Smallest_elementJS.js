const array = [115 ,78,56,265, 45];
let largest = array[0]
let smallest = array[0]

array.forEach(element => {
    if (element > largest) {
        largest = element;
    }
    if (element < smallest){
        smallest = element;
    }
});

console.log("Largest element: ", largest);
console.log("Smallest element: ", smallest);