<!DOCTYPE html>
<html>
<body>

<?php
function somaTresZero($arr)
{
$count = count($arr) - 2;
$result=[];
for ($x = 0; $x < $count; $x++) 
{
    if ($arr[$x] + $arr[$x+1] + $arr[$x+2] == 0)
    {
        array_push($result, "{$arr[$x]} + {$arr[$x+1]} + {$arr[$x+2]} = 0");
    }
}
return $result;
}
$soma = array(-1,0,1,2,-1,-4);

print_r(somaTresZero($soma));
?>

</body>
</html>
