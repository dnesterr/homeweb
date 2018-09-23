<?php
$maxSize = 92000000;
define('MAX_SIZE', $maxSize);
$sourceFileName = $_FILES["fileToUpload"]["tmp_name"];
$targetFileName = "../uploads/".$_POST["UseThisName"];

$messages = "";

echo "<h2>". $targetFileName . "</h2>";
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($targetFileName,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($sourceFileName);
    if($check !== false) {
        $messages .= "File is an image - " . $check["mime"] . ".<br/>";
        $uploadOk = 1;
    } else {
        $messages .= "File is not an image.<br/>";
        $uploadOk = 0;
    }
}

// Check if file already exists
//if (file_exists($targetFileName)) {
//    $messages .= "Sorry, file already exists.<br/>";
//    $uploadOk = 0;
//}

// Check file size
if ($_FILES["fileToUpload"]["size"] > $maxSize) {
    $messages .= "Sorry, your file is too large.<br/>";
    $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    $messages .= "Sorry, only JPG, JPEG, PNG & GIF files are allowed.<br/>";
		$messages .= $imageFileType . "<br/>";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    $messages .= "Sorry, your file was not uploaded.<br/>";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($sourceFileName, $targetFileName)) {
        $messages .= "The file ". basename($sourceFileName). " has been uploaded.<br/>";
				header("Location: index.php");
    } else {
        $messages .= "Sorry, there was an error uploading your file.<br/>"
            . "sourceFileName: |" . $sourceFileName . "|<br/>"
            . "targetFileName: |" . $targetFileName . "|<br/>"
            ;
    }
}
echo $messages;
?>
