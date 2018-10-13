<script>

</script>
<?php
$directory = $_GET["Folder"];
$files = scandir( $directory  );
foreach ( $files as $file) {
    if (endsWith($file, "mp3")){
        #echo "<br/><a href='${directory}/${file}' onclick='swapWithPlayer
        echo "<br/><audio controls><source src='${directory}/${file}' type='audio/mpeg'/></audio>";
    } elseif (endsWith($file, "jpg")){
        echo "<br/><img width='100' height='100' src='${directory}/${file}'/>";
    } else {
        echo "<!--<li>${directory}/${file}</li>-->";
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
