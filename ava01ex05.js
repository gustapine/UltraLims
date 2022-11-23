//Escreva um algoritmo para encontrar um único número de um array onde cada
//número repete três vezes, exceto um:
//Input : array(5, 3, 4, 3, 5, 5, 3);
//Output : array
//([0] => 5,
//[1] => 3,
//[2] => 4,
//[3] => 3,
//[4] => 5,
//[5] => 5,
//[6] => 3,);
//Single Number: 4

const array = [5, 3, 4, 3, 5, 5, 3];

const encontreSolitario = (arr) => {
    for (const num of arr) {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) return num;
    }
    return "There'se nothing here bro";
};


console.table(array);
console.log("Single number: " + encontreSolitario(array));
