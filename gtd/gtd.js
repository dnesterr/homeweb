function populateTree()
{
    $.jstree.defaults.checkbox.whole_node = false;
    $.jstree.defaults.checkbox.three_state = false;
    $.jstree.defaults.checkbox.tie_selection = false;
    $('#jstree2').jstree({'plugins':["checkbox", "dnd"], 'core' : {
        "check_callback" : true, 
        'data' : [
            {
                "text" : "Minimum Functionality",
                "children" : [
                    "Add item",
                    "Complete item",
                    "Remove item",
                    "Save everything",
                    "Reparent item"
                ]
            },
            {
                "text": "Phase 2",
                "children" : [
                    "Tag item",
                    "Filter by tag",
                    "Show only leaves",
                    "Show only projects",
                    "Show/hide completed items"
                    ]
            },
            {
                "text": "Phase 3",
                "children": [
                    "Multi-add",
                    "Move using keyboard",
                    "link to detail page (wiki, onenote)"
                    ]
            }

        ]
    }});
}
function tree(){
    return $("#jstree2").jstree();
}
function editNode(node){
    // Edit one way in a browser
    tree().edit(node);
    // TODO: Edit a different way on a phone
}

$("#delete").on("click", function(){ tree().delete_node(tree().get_selected());} );

$("#expand_all").on("click", function(){ tree().open_all(); });

$("#collapse_all").on("click", function(){ tree().close_all(); });

$("#add_child").on("click", function(){ 
    var selectedId = tree().get_selected()[0];
    var created = tree().create_node(selectedId, "new");
    tree().open_node(created);
    editNode(created);
});

$("#add_sibling").on("click", function(){ 
    var selectedId = tree().get_selected()[0];
    var parent = tree().get_parent(selectedId);
    var parentNode = tree().get_node(parent);
    var pos = $.inArray(selectedId, parentNode.children) + 1;
    var created = tree().create_node(parent, "new", pos);
    tree().open_node(created);
    editNode(created);
});

$("#rename").on("click", function(){ 
    var selectedId = tree().get_selected()[0];
    tree().edit(selectedId);
});

$("#show_json").on("click", function(){ 
    console.log(JSON.stringify(tree().get_json("#", {"flat": true})));
});

$("#save").on("click", function(){ 
    var whatToSave = JSON.stringify(tree().get_json("#", {"flat": true}));
    jQuery.post("save_tree.php", {"filename": "saveme.gtd", "content": whatToSave}, 
        function(data){ 
            //$("#messages").innerHtml = data; 
            document.getElementById("messages").innerHTML = data;
            //alert(data); 
        });
});




