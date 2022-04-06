<?php

$obj = json_decode( file_get_contents(“db.json”), true );

echo var_dump($obj);

?>