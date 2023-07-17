<?php
$currentURL = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
if(str_starts_with($currentURL, 'http')) {
    header('Access-Control-Allow-Origin:  http://localhost:5173');
}else {
    header('Access-Control-Allow-Origin: https://jarjia.github.io/portfolio/');
}
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');

$json = file_get_contents('php://input');
$data = json_decode($json, true);
$user = $data['name'];
echo ("Hello from server: $user");