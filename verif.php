/**
 * Requires libcurl
 */

$query = array(
  "client_id" => "string",
  "client_secret" => "string",
  "code" => "string"
);

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_PORT => "",
  CURLOPT_URL => "https://api.clickup.com/api/v2/oauth/token?" . http_build_query($query),
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "POST",
]);

$response = curl_exec($curl);
$error = curl_error($curl);

curl_close($curl);

if ($error) {
  echo "cURL Error #:" . $error;
} else {
  echo $response;
}