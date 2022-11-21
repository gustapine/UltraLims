//Escreva um algoritmo para encontrar três números consecutivos de um array que
//somados o resultado é igual a um outro número fornecido:7
//Input : (array(2, 7, 7, 1, 8, 2, 7, 8, 7), 16));
//Output : array(
//[0] => 2 + 7 + 7 = 16,
//[1] => 7 + 1 + 8 = 16
//);


<!DOCTYPE html>
<html>
<body>

<?php
function soma($arr, $target)
{
$count = count($arr) - 2;
$result=[];
for ($x = 0; $x < $count; $x++) {
    if ($arr[$x] + $arr[$x+1] + $arr[$x+2] == $target) {
        array_push($result, "{$arr[$x]} + {$arr[$x+1]} + {$arr[$x+2]} = $target");
    }
}
return $result;
}
$my_array = array(2, 7, 7, 1, 8, 2, 7, 8, 7);
print_r(soma($my_array, 16));
?>

</body>
</html>
