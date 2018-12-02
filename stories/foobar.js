
function startHere() {
    $.getJSON("./stories.json", function(data) {
        alert("aha!");
        grid = new Slick.Grid("#myGrid", data, columns, options);
        grid.setSelectionModel(new Slick.CellSelectionModel());
        grid.onAddNewRow.subscribe(function (e, args) {
            var item = args.item;
            grid.invalidateRow(data.length);
            data.push(item);
            grid.updateRowCount();
            grid.render();
        });
    })
}

