<?php 

    if(isset($_POST['submit'])){

        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $mailBody = "Message From My Portfolio Site. \n <table>
                                                            <tr>
                                                                <td>Name:</td>
                                                                <td>$name</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Subject:</td>
                                                                <td>$subject</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Message:</td>
                                                                <td>$message</td>
                                                            </tr>
                                                        </table>";

        $mailheader ="From : $email \r\n";
        $mailheader = "Reply-To: " .$name.  "\r\n";
        $mailheader = "CC: susan@example.com\r\n";
        $mailheader = "MIME-Version: 1.0\r\n";
        $mailheader = "Content-Type: text/html; charset=UTF-8\r\n";


        if( empty($name) || empty($email) || empty($subject) ||empty($message)  )
        {
            header('location:index.php?error');
        }
        else{
            $to = "habibahasun019@gmail.com";

            if( mail( $to,$subject,$mailBody,$mailheader ) ){
                header('location:index.php?success');
            }
        }
    }else{
        header('location:index.php');
    }

?>