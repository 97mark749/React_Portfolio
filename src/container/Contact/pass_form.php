<?php

/*  First Name          --> firstName
    Last Name           --> lastNname
    Email               --> email
    Phone Number        --> phoneNumber
    Message             --> comments

*/
function sanitize_input($input){
    $string = preg_replace("#[^0-9a-z]#i ","",$input);
    $temp = filter_var($string, FILTER_SANITIZE_STRING);

    return $temp;
}
// Unpack and sanitize input

if(ISSET($_POST['firstName']) & ISSET($_POST['lastName']) & ISSET($_POST['email']) & ISSET($_POST['comments'])){
    // Checks to see if required credentials are inserted
        $fname = sanitize_input($_POST['firstName']);
        $lname = sanitize_input($_POST['lastName']);
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $message = sanitize_input($_POST['comments']);
    

    if(ISSET($_POST['phoneNumber'])){
        // Checks to see if optional credential is inserted
        $pNum = preg_replace('/[^0-9]/','',$_POST['phoneNumber']);
    }
    else{
        $pNum = "Not Provided";
    }
    
}
else{
    // If all of the required credentials are not inserted then throw an exception and lists which need to be filled in 

}
$msg = "First Name: " + $fName + "<br/>Last Name: " + $lname + "<br/>Phone Number: " + $pNum + "<br/>Message: " + $message;
$headers = "From: $email";
$mail = mail('markkircy1997@gmail.com', 'Contact Form Submission', $msg, $headers);

if($mail){
    return "Message Sent, Thank You For Your Interest!";
}
else{
    return "I am Sorry But Your Message Could Not Be Processed.";
}

?>