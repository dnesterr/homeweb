<!--
<script>
function swapWithPlayer(label){
    var item = document.getElementById(label);
    item.outerHTML = "<audio controls><source src=\"" + item.attributes.href.value + "\"/> </audio>"}
</script>
-->

<?php
$directory = $_GET["Folder"];
$files = scandir( $directory  );
foreach ( $files as $file) {
    $path = $directory . '/' . $file;
    if (endsWith($file, "mp3")){
        $label = substr($file, -10, 6);
        echo "\n<br/><a id='${label}' href=\"${path}\"'>${label}</a>";
        #echo "\n<br/>${label}<audio controls><source src=\"${path}\" type='audio/mpeg'/></audio>";
    } elseif (endsWith($file, "jpg")){
        echo "\n<br/><img width='100' height='100' src=\"${path}\"/>";
    } else {
        echo "\n<!--${path}-->";
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
