/**
 * Requires libcurl
 */

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_HTTPHEADER => [
    "Authorization: Q8LKPLZTT891PD7NSD238EBCUJH81BJE6NVH8X153TR40VO9Q3NLLAR2SODBSZLK"
  ],
  CURLOPT_PORT => "",
  CURLOPT_URL => "https://api.clickup.com/api/v2/user",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "GET",
]);

$response = curl_exec($curl);
$error = curl_error($curl);

curl_close($curl);

if ($error) {
  echo "cURL Error #:" . $error;
} else {
  echo $response;
}
