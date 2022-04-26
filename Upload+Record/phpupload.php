<?php
    $FileName=$_FILES['fuResume']['name'];
    $TmPName=$_FILES['fuResume']['tmp_name'];
    move_uploaded_file($TmpName,$FileName);
    echo("File Uploaded");
?>