<?php

$obj = json_decode( file_get_contents(“products.json”), true );

echo var_dump($obj);

?>