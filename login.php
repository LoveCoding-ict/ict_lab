<?php
session_start();

$servername = "localhost";
$username = "root"; // Adjust with your MySQL username
$password = ""; // Adjust with your MySQL password
$dbname = "user_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input_username = $_POST['username'];
    $input_password = $_POST['password'];

    // Prepare statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $input_username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verify password
        if (hash('sha256', $input_password) === $user['password']) {
            $_SESSION['username'] = $input_username;
            header("Location: ict_lab.php");
            exit();
        } else {
            // Redirect with error message for invalid password
            header("Location: login.html?error=Invalid+password");
            exit();
        }
    } else {
        // Redirect with error message for user not found
        header("Location: login.html?error=User+not+found");
        exit();
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_SESSION['username'])) {
    // Return the logged-in user's data as JSON
    echo json_encode([
        "username" => $_SESSION['username'],
        // NEVER expose raw password. If you really need it, only provide a hashed version.
        "password" => "hidden_for_security" 
    ]);
    exit();
}

?>
