<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="v_tabs.css">
    <link rel="stylesheet" href="h_tabs.css">
    <link rel="stylesheet" href="style.css">
    <script src="tabs.js"></script>
  </head>
  <body>

<?php 

$kids["Desire"] = array("Dishes", "Laundry", "Desire_Bedroom", "Viola");
$kids["Elijah"] = array("Back_Yard", "Basement", "Basement_Bathroom", "Bathroom", "Elijah_Bedroom", "Front_Yard", "Living_Room", "Cello");
$kids["Noah"] = array("Kitchen", "Entryway", "Noah_Bedroom", "Upstairs");
$kids["Enoch"] = array("Enoch_Bedroom");

$areas["Back_Yard"]         = array("side", "pit", "top_porch", "bottom_porch", "strawberries");
$areas["Basement"]          = array("floor", "table", "computer", "couch");
$areas["Basement_Bathroom"] = array("toilet_bowl", "floor");
$areas["Bathroom"]          = array("toilet_foot", "toilet_seat", "toilet bowl", "sink", "floor");
$areas["Desire_Bedroom"]    = array("hamper", "floor", "closet", "bed", "dressers");
$areas["Dishes"]            = array("main_counters", "far_counter", "dishwasher", "kitchen_sink");
$areas["Elijah_Bedroom"]    = array("hamper", "floor", "closet", "beds", "clean_clothes");
$areas["Entryway"]          = array("floor", "shoe_table", "closet");
$areas["Enoch_Bedroom"]     = array("hamper", "floor", "closet");
$areas["Front_Yard"]        = array("grass", "driveway");
$areas["Kitchen"]           = array("floor", "table");
$areas["Laundry"]           = array("dirty_hampers", "clean_hampers", "washer", "dryer", "closet");
$areas["Living_Room"]       = array("floor", "hallway");
$areas["Noah_Bedroom"]      = array("hamper", "under_bed", "closet", "floor", "pegs");
$areas["Upstairs"]          = array("purple_room", "main_room", "entry", "triangle_closet");
$areas["Cello"]             = array("daily_practice");
$areas["Viola"]             = array("daily_practice");


makePage($kids);

function makePage($kids){
  echo "\n<h4>" . date("M d, Y") . "</h4>";
  echo makeTabBar("h", array_keys($kids));
  foreach ($kids as $name => $items) {
    echo makeTabContent("h", $items, $name, "makeKidContent");
  }
}
function makeTabBar($orientation, $collection){
  $result = sprintf("\n  <div class='%s_tab'>", $orientation);
  foreach ($collection as $name) {
    $result .= makeTabButton($orientation, $name);
  }
  $result .= "\n  </div>";
  return $result;
}
function makeTabButton($orientation, $kidName){
    return sprintf("\n    <button class='%s_tablinks' %s onclick='openTab(event, \"%s\", \"%s\")'>%s</button>",
        $orientation,
        "", // This will be 'id=defaultXYZ'
        $kidName,
        $orientation,
        no_($kidName)
    );
}
function no_($name){
    return str_replace("_", " ", $name);
}

function makeTabContent($orientation, $collection, $id, $fcnToCall){
    $result = sprintf("\n  <div id='%s' class='%s_tabcontent'>", $id, $orientation);
    //$result .= "\n    content for ". $id;
    $result .= $fcnToCall($id);
    $result .= "\n  </div>";
    return $result;
}

function makeKidContent($kidName){
  global $kids;
  $result = makeTabBar('v', $kids[$kidName]);
  foreach ($kids[$kidName] as $areaName) {
    $result .= makeTabContent('v', $kids[$kidName], $areaName, "makeInspectionTable");
  }
  return $result;
}

function makeInspectionTable($areaName){
  $result = startTable($areaName);
  $result .= populateTable($areaName);
  $result .= endTable();
  return $result;
}

function startTable($areaName){
    $result = "\n   <table border='2'>";
    $result .= "\n    <tbody>          ";
    $result .= "\n     <th>Area</th>   ";
    $result .= "\n     <th>Before</th> ";
    $result .= "\n     <th>After</th>  ";
    $result .= "\n     <th>Ideal</th>  ";
    return $result;
}

function populateTable($areaName){
  global $areas;
  $result = "";
  $areaItems = $areas[$areaName];
  $areaCount = count($areaItems);
  for ($index = 0; $index < $areaCount; $index++) {
    $inspectionSpot = $areaItems[$index];
    $result .= printRow($inspectionSpot, $areaName);
  }
  return $result;
}

function printRow($inspectionSpot, $areaName){
  $result = "\n    <tr>";
  $result .= "\n      <td><h3>" . no_($inspectionSpot) . "</h3></td>";
  $name = $areaName . "_".$inspectionSpot;
  $result .= printCell(dateLocation($name, "before"));
  $result .= printCell(dateLocation($name, "after"));
  $result .= printCell(idealLocation($name));
  $result .= "</tr>";
  return $result;
}

function dateLocation($name, $suffix){
  global $datePath;
  return sprintf("%s/%s_%s.jpg", $datePath, $name, $suffix);
}

function idealLocation($name){
  global $idealPath;
  return sprintf("%s/%s.jpg", $idealPath, $name);
}


function printCell($location){
    if (file_exists($location)){
      return renderImage($location);
    } else {
      return renderUploadButtons($location);
    }
}

function renderImage($location){
  $result = '<td> ';
  $result .= '<img src="' . $location. '". width=250 height=250> ';
  if (isset($_GET["date"])){ 
    $result .= '<br/>'.exif_read_data($location)["DateTimeOriginal"];
  }
  $result .= '</td>';
  return $result;
}

function renderUploadButtons($location){
  $result = '<td> ';
  $result .= '<form action="upload.php" method="post" enctype="multipart/form-data">';
  $result .= '<input type="file" name="fileToUpload">';
  $result .= '<input type="hidden" name="UseThisName" value="'.$location.'">';
  $result .= '<input type="hidden" name="SelectedTab" value="'.$location.'">';
  $result .= '<br/>';
  $result .= '<input type="submit" value="Upload Image" name="submit">';
  $result .= '</form>';
  $result .= '</td>';
  return $result;
}

function endTable(){
    $result  = "\n    </tbody>";
    $result .= "\n   </table>";
    return $result;
}
?> 
<!--
resizeImage({
    file: $image.files[0],
    maxSize: 500
}).then(function (resizedImage) {
    console.log("upload resized image")
}).catch(function (err) {
    console.error(err);
});
-->
  </body>
</html> 


