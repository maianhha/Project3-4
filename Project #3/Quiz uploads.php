<?php
    $uploaddir = 'quiz uploads/';
    $uploadfile = $uploaddir . basename($_FILES['userfile']['name']);
    echo "<p>";
    if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
      echo "File is valid, and was successfully uploaded.\n";
    } else {
       echo "Upload failed";
    }
    ?>