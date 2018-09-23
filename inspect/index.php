<html>
 <head>
  <title>Daily inspections</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
  <!--<script src="tabs.js">-->
  <script >
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

</script>
 </head>

 <body>

<?php 
$datePath = "../uploads/".date("Y_m_d");
$idealPath = "../uploads/ideal";
$defaultAreaName = "Dishes";

// Debugging
if (isset($_GET["date"])){ 
    $datePath = $_GET["date"];
} else {
    createFolder($datePath);
    createFolder($idealPath);
}

// create a folder based on the current date
// We will store the uploaded inspection photos there
function createFolder($datePath) {
    if (!file_exists($datePath)){
        if (!mkdir($datePath)){
            echo "\n<H1>Tell dad there was a directory problem</h1>";
            return;
        }
    }
}

function printRow($location){
    if (file_exists($location)){
        echo '<td> ';
        echo '<img src="' . $location. '". width=250 height=250> ';
        if (isset($_GET["date"])){ 
            echo '<br/>'.exif_read_data($location)["DateTimeOriginal"];
        }
        echo '</td>';
    } else {
        echo '<td> ';
        echo '<form action="upload.php" method="post" enctype="multipart/form-data">';
        echo '<input type="file" name="fileToUpload">';
        echo '<input type="hidden" name="UseThisName" value="'.$location.'">';
        echo '<input type="hidden" name="SelectedTab" value="'.$location.'">';
        echo '<br/>';
        echo '<input type="submit" value="Upload Image" name="submit">';
        echo '</form>';
        echo '</td>';
    }
}

$areas["Back_Yard"]         = array("side", "pit", "top_porch", "bottom_porch", "strawberries");
$areas["Basement"]          = array("floor", "table", "computer", "couch");
$areas["Basement_Bathroom"] = array("toilet_bowl");
$areas["Bathroom"]          = array("toilet_foot", "toilet_seat", "toilet bowl", "sink", "floor");
$areas["Desire_Bedroom"]    = array("hamper", "floor", "closet", "bed", "dressers");
$areas["Dishes"]            = array("main_counters", "far_counter", "dishwasher", "kitchen_sink");
$areas["Elijah_Bedroom"]    = array("hamper", "floor", "closet", "beds");
$areas["Enoch_Bedroom"]     = array("hamper", "floor", "closet");
$areas["Front_Yard"]        = array("grass", "driveway");
$areas["Kitchen"]           = array("floor", "table");
$areas["Laundry"]           = array("dirty_hampers", "clean_hampers", "washer", "dryer", "closet");
$areas["Living_Room"]       = array("floor", "hallway");
$areas["Noah_Bedroom"]      = array("hamper", "under_bed", "closet", "floor_and_pegs");
$areas["Upstairs"]          = array("purple_room", "main_room", "entry", "triangle_closet");

function no_($name){
    return str_replace("_", " ", $name);
}

function startTable($areaName){
    echo "<h1>" . date("M d, Y") . "<br/>" . no_($areaName) . "</h1>";
    echo '<table border="2">';
    echo ' <tbody>          ';
    echo '  <th>Area</th>   ';
    echo '  <th>Before</th> ';
    echo '  <th>After</th>  ';
    echo '  <th>Ideal</th>  ';
}

function endTable(){
    echo '</tbody>';
    echo '</table>';
}

function setupTabs($areas) {
    global $defaultAreaName;
    echo "\n<div class='tab'>";
    foreach ($areas as $areaName => $areaItems) {
        $id = $areaName == $defaultAreaName?"defaultOpen":"";
        echo "\n  <button class='tablinks' $id onclick='openTab(event, \"$areaName\")'>" . no_($areaName) . "</button>";
    }
    echo "\n</div>";

    foreach ($areas as $areaName => $areaItems) {
        echo "\n<div id='$areaName' class='tabcontent' style='display:none'>";
        tabContent($areaName, $areaItems);
        echo "\n</div>"; 
    }
}

function tabContent($areaName, $areaItems){
    global $datePath;
    global $idealPath;
    startTable($areaName);
    $areaCount = count($areaItems);
    for ($index = 0; $index < $areaCount; $index++) {
        echo "<tr>";
        echo '<td><h3>' . str_replace("_", " ", $areaItems[$index]) . '</h3></td>';
        echo printRow($datePath . "/".$areaName."_".$areaItems[$index]."_before.jpg");
        echo printRow($datePath . "/".$areaName."_".$areaItems[$index]."_after.jpg");
        echo printRow($idealPath. "/".$areaName."_".$areaItems[$index].".jpg");
        echo "</tr>";
    }
    endTable();
}
setupTabs($areas);
?> 
<script>

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

</script>
