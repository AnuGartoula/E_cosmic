<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    // Log the raw input
    $input = file_get_contents('php://input');
    error_log("Received input: " . $input);

    // Decode the JSON input
    $data = json_decode($input, true);

    // Check for JSON errors
    if (json_last_error() !== JSON_ERROR_NONE) {
        error_log("JSON error: " . json_last_error_msg());
        throw new Exception('Invalid JSON input');
    }

    // Log the decoded data
    error_log("Decoded data: " . print_r($data, true));

    // Extract email and password
    $email = $data['email'];
    $password = $data['password'];

    // Log email and password
    error_log("Email: " . $email);
    error_log("Password: " . $password);

    // Send a response
    echo json_encode(["message" => "Hello from server: $email"]);
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(["error" => $e->getMessage()]);
}
?>