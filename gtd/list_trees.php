<?php
$directory = $_GET["Folder"];
$files = scandir( $directory  );
foreach ( $files as $file) {
    $path = $directory . '/' . $file;
    if (endsWith($file, "gtd")){
        $label = substr($file, -10, 6);
        echo "\n<br/><a id='${label}' href=\"${path}\"'>${label}</a>";
    }
}


function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }
    return (substr($haystack, -$length) === $needle);
}
?> 
