<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "visiron577@fsouda.com";
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email;
    mail($to, $subject, $message, $headers);
    echo "Thank you for your message, $name! We will contact you soon.";
?>