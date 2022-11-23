//Escreva um algoritmo que receba um numero e que apartir deste numero construa
//um array com a sequencia fibonacci e com o numero de elementos sendo o
//informado:
//Input : 6;
//Output : array (1, 1, 2, 3, 5, 8);


///creating function
function fibonacci(n){
	var output = [];
	
  if(n === 1) 
    {
      output = [0];
    }
    else if(n === 2){	
      output = [0, 1];
    }
    else{
  	output = [0, 1];
  	
  	for(var i = 2; i < n; i++){
    	
        output.push(output[output.length - 2] + output[output.length - 1]);
    }
  return output;
}
}
output = fibonacci(6); //put here your input
console.log(output);
