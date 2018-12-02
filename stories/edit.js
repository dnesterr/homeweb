var defaultConfig = {
    showAllColumns: false,
    showRows: false,
    filters: {
        State: "Downloaded",
    }
};

function createTable(config){
    console.log(JSON.stringify(config));
    var html =  createHeaders(config);
    if (config.showRows){
        html += createRows(config);
    }
    document.getElementById("fillme").innerHTML = html;
}

function createHeaders(config){
    var html = "<tr>";
    if (config.showAllColumns) {
        var count = 0;
        for (var key in library[0]){
            html += makeTitle(key, count);
            count += 1;
        }
    } else {
        html += makeTitle("Series", 0);
        html += makeTitle("Author", 1);
        html += makeTitle("Title", 2);
        if (config.showRows){
            html += makeTitle("#", 3);
        }
    }
    html += "</tr>"
    return html;
}
function makeTitle(name, index){
    return "<th><a href='#' onclick='showOnly(\""+name+"\", "+index+")'/>"+name+"</a></th>";
    //return "<th><a href='#' onclick='showOnly(\"{0}\", {1}'/>{0}</a></th>".format(name, index);
}

function sortLibraryBy(name){
    library.sort( function(a,b) { 
        if (a[name] < b[name]) { return -1;} 
        if (a[name] > b[name]) { return +1;} 
        return 0;
    } 
    );
 }
function showOnly(name, index){
    var html = "<tr>" + makeTitle(name, index) + "</tr>";
    sortLibraryBy(name);
    var lastEntry = "asl;dkfjas;dlfkj";
    library.forEach( function(row){
        if (row[name] != lastEntry){
            lastEntry = row[name];
            html += "<tr>"+makeCell(row, name, defaultConfig) +"</tr>";
        }
    }
    );
    document.getElementById("fillme").innerHTML = html;
}


function createRows(config){
    var html = "";
    var count = 0;
    sortLibraryBy("Book Number");
    library.forEach( function(row){
        count++;
        var print = true;
        for (var key in config.filters){
            if (row[key] != config.filters[key]){
                //console.log(key + ": " + row[key] + " != " + config.filters[key]);
                //console.log(count + ": " + config.filters[key] + "\n" + row[key] + "\n" + JSON.stringify(row) + "\n\n");
                print = false;
                break;
            }
        }
        if (print){
            html += createRow(row, config);
        }
    });
    return html;
}
function createRow(row, config){
    var html = "<tr>";
    if (config.showAllColumns){
        for (var key in row) {
            html += makeCell(row, key, config); 
        }
    } else {
        html += makeCell(row, "Series", config);
        html += makeCell(row, "Author", config);
        html += makeCell(row, "Title", config); 
        html += makeCell(row, "Book Number", config);
        //html += makeCell(row, "Folder", config); 
    }
    html += "</tr>"
    return html;
}
function makeCell(row, key, config){
    if (key == "Title"){ 
        return makeTitleLink(row, key, config); }
    else {
        return '<td><a href="#" onclick=\'filter("{0}", "{1}")\'>{1}</a></td>'.format(key, row[key]);
    }
}

function makeTitleLink(row, key, config){
    return '<td><a href="play.php?Folder=books/{0}">{1}</a></td>'.format(row["Folder"], row[key]);
}

function filter(key, value){
    var clone = Object.assign({}, defaultConfig);
    clone.filters = Object.assign({}, defaultConfig.filters);
    clone.filters[key] = value;
    clone.showRows = true;
    createTable(clone);
}
createTable(defaultConfig);
