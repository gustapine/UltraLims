const array = [5, 3, 4, 3, 4];

const encontreSolitario = (arr) => {
    for (const num of arr) {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) return num;
    }
    return "There's nothing here bro.";
};


console.table(array);
console.log("Single number: " + encontreSolitario(array));
