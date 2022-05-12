<?php
    $FileName=$_FILES['fuResume']['name'];
    $TmPName=$_FILES['fuResume']['tmp_name'];
    move_uploaded_file($TmPName, $FileName);
    echo("File Uploaded");
?>