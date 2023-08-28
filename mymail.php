<?php 

    //get data from form  
    $name = $_POST['first_name'];
    $email= $_POST['email'];
    $message= $_POST['message'];
    $phone= $_POST['phone'];
    $date_of_birth= $_POST['date_of_birth'];
    $sex= $_POST['sex'];
    $to = "hkhan1241@gmail.com";
    $subject = "Cypress Foot And Ankle";

    $txt ="Name: ". $name . "\r\n
    Email: " . $email . "\r\n
    Phone: " . $phone . "\r\n
    Date of Birth: " . $date_of_birth . "\r\n
    Sex: " . $sex . "\r\n
    Message: " . $message;

    $headers = "From: " .$email;
    
    if($email!=NULL){
        mail($to,$subject,$txt,$headers);
    }
    
    header('Location: appointment-success-msg.html');
    
?>
