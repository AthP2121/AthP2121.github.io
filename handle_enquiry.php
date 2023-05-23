<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = strip_tags(trim($_POST["phone"]));
        $description = trim($_POST["description"]);

        if ( empty($name) OR empty($description) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        $recipient = "apirpiris@outlook.com";

        $subject = "New ring commission enquiry from $name";

        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        if (!empty($phone)) {
            $email_content .= "Phone: $phone\n\n";
        }
        $email_content .= "Description:\n$description\n";

        $email_headers = "From: $name <$email>";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Thank you! Your message has been sent.";
        } else {
            http_response_code(500);
            echo "Oops! Something went wrong, we couldn't send your message.";
        }

    } else {
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>
