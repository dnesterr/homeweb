<?php
$directory = $_GET["Folder"];
$files = scandir( $directory  );
echo "<ul>";
foreach ( $files as $file) {
    if (endsWith($file, "mp3")){
        echo "<li><audio controls><source src='${file}' type='audio/mpeg'/></audio></li>";
    } elseif (endsWith($file, "jpg")){
        echo "<li><img src='${file}'/></li>";
    } else {
        echo "<li>${file}</li>";
    }
}
echo "</ul>";


function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }

    return (substr($haystack, -$length) === $needle);
}
?> 
