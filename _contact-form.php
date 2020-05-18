<?php
var_dump($_POST);
// Fetching Values from URL.
$email = $_POST['email'];
$message = $_POST['project'];
$budget = $_POST['budget'];

$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
$subject = "Contacted";
// To send HTML mail, the Content-type header must be set.
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:' . 'harryraywebdev@gmail.com' . "\r\n"; // Sender's Email
$template = 'Email: ' . $email . '<br />'
. 'Budget: ' . $budget . '<br /><br />'
. 'Message: ' . $message . '<br /><br />';
// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($template, 50);
// Send mail by PHP Mail Function.
//mail($email, $subject, $sendmessage, $headers);
mail("harryraywebdev@gmail.com","Contact form response",$sendmessage,$headers);
echo "Your Query has been received, We will contact you soon.";
}
else {
echo "<span>* invalid email *</span>";
}
?>