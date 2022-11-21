//1. Escreva um algoritmo para encontrar os números faltantes de um array:
//Input : array(1,2,3,6,7,8);
//Output : array([3] => 4, [4] => 5);

function encontrarNumeros(arr, n)
    {
        let marca = new Array(n+1);
        for (let i = 0; i < n-2; i++)
            marca[arr[i]] = true;
        
        for (let i = 1; i <= n; i++)
            if (!marca[i])
                console.log(i);
    }
   
    let arr = [1, 2, 3, 6, 7, 8];
   
    // O range de numeros é mais o dobro do tamanho do array
    let n = 2 + arr.length;
   
    encontrarNumeros(arr, n);
