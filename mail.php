<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'apirpiris@outlook.com';
    $subject = "New contact form submission";

    // prepare email body
    $body = "You have received a new message from your website contact form.\n\n".
    "Here are the details:\n\nName: $name\n\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: noreply@athdesigns.com.au\n";
    $headers .= "Reply-To: $email";

    // send email
    mail($to, $subject, $body, $headers);
    header('Location: thankyou.html');
}
?>
