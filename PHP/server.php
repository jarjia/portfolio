<?php
header('Access-Control-Allow-Origin: http://localhost:5173, https://jarjia.github.io/portfolio/');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');

$json = file_get_contents('php://input');
$data = json_decode($json, true);
$user = $data['name'];
echo ("Hello from server: $user");