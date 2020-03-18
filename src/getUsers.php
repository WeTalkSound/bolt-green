<?php

$a = file_get_contents('https://bolt-green.firebaseio.com/users.json');
$b = array_values((array)json_decode($a));

header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename="bolt-green-campaign-users-'. date('d-m-Y') .'.csv"');


$fp = fopen('php://output', 'wb');
fputcsv($fp, ['Name', 'Email'], ',');

foreach ($b as $entry) {
    fputcsv($fp, [$entry->name, $entry->email], ',');
}

fclose($fp);