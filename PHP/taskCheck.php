$jsonString = file_get_contents('/JSON/task.json');
$data = json_decode($jsonString, true);

$data[0]['activity_name'] = "TENNIS";
// or if you want to change all entries with activity_code "1"
foreach ($data as $key => $entry) {
    if ($entry['activity_code'] == '1') {
        $data[$key]['activity_name'] = "TENNIS";
    }
}

$newJsonString = json_encode($data);
file_put_contents('/JSON/task.json', $newJsonString);