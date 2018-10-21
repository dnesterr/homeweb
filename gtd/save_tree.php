<?php
date_default_timezone_set("America/New_York"); 
// this is not remotely secure. I really need to toughen this up!!!
$filename = $_POST["filename"];
$content = $_POST["content"];
if (isValid($filename)){
    $handle = fopen($filename, 'w') or die('Cannot open file: '.$filename);
    fwrite($handle, $content);
    fclose($handle);
    echo "Last saved at " . date('g:i a e (D M d, Y)');
} else {
    throw new Exception("Invalid filename: ".$filename);
}

function isValid($filename){
    // NOTE: If I prepend username_ to the filename, I shouldn't have problems with the 'reserved' names
    // contains only alpha characters, and is at least 5 characters and less than 32
    if (preg_match("/[a-zA-z][a-zA-z0-9]*/", $filename)){
        $len = strlen($filename);
        return $len >= 5 && $len <= 32;
    }
    return false;
    // CON, // PRN, // AUX, // NUL, 
    // COM1, // COM2, // COM3, // COM4, // COM5, // COM6, // COM7, // COM8, // COM9, 
    // LPT1, // LPT2, // LPT3, // LPT4, // LPT5, // LPT6, // LPT7, // LPT8, // LPT9
}
?> 
