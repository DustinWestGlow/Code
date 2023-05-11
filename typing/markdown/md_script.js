// content data structure
// prefilled and formatted
content = filler_content;
for (var i = 0; i < content.length; i++)
{
    content[i]["id"] = i;
}

// current cursor data
var current = {
    id: 0,
    index: 0
};

function addHighlight(target) {
    target.classList.add('highlighted');
}

function removeHighlight(target) {
    target.classList.remove('highlighted');
}

function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;  
}

function loop() {
    
    // window.requestAnimFrame(loop);
}


function display_single(el) {
    id = -1;
    if (Number.isInteger(el))
    {
        id = el;
    }
    else if (isElement(el))
    {
        var el_id = $(el).attr("id");
        // supposedly floor auto converts string to int
        id = Math.floor(el_id.substring(1, el_id.length));
    }
    else
    {
        return -1;
    }
    var markdown = "";
    var d = content[id];
    var whole = "";
    whole += "<" + d.tag + " class='md' id='_" + id + "'>";
    var text = d.text;
    if (id == current.id) {
        var inserted_text = [
            text.slice(0, current.index),
            "<span id='cursor'>|</span>",
            text.slice(current.index)
        ].join('');
        text = inserted_text;
        console.log(inserted_text);
    }
    whole += text;
    whole += "</" + d.tag + ">";
    markdown += whole;
    var dom_id = "#_" + id;
    if ($(dom_id).length)
    {
        $(dom_id).html(markdown);
    }
    else
    {
        // var new_element = document.createElement(d.tag);
        $("#editor").append(markdown);
        // $(new_element).innerHTML = markdown;
    }
    
}

function display_all() {
    
    for (var i = 0; i < content.length; i++) {
        display_single(content[i]["id"]);
    }
}

// editor dom and sizing variables
var editor;
var screen_width;
var screen_height;

$(document).ready(function() { 


    // setup editor dom selector
    // and sizing and sizing variables
    editor = document.getElementById('editor');
    screen_width = window.innerWidth - 50;
    screen_height = window.innerHeight - 50;
    editor.width = screen_width;
    editor.height = screen_height;
    
    
    
    window.addEventListener('mouseover',function(event) {
        if (event.target.classList.contains("md")) {
            addHighlight(event.target);
        }
        
    });

    window.addEventListener('mouseout',function(event) {
        if (event.target.classList.contains("md")) {
            removeHighlight(event.target);
        }
        
    });
    
    window.addEventListener('click',function(event) {
        if (event.target.classList.contains("md")) {
            update_single(event.target);
        }
    });
    
    window.addEventListener('keydown', function(e) {
        display_single(current.id);
        if (e.key == "ArrowLeft") {
            // prevent back further
            if (current.id == 0 && current.index == 0) {
                current.index = Math.max(0, current.index - 1);
            }
            // back one element
            else if (current.index == 0) {
                current.id -= 1;
                current.index = content[current.id]["text"].length - 1;
            }
            // back one character
            else {
                current.index -= 1;
            }
        }
        else if (e.key == "ArrowRight") {
            // prevent moving further
            if (current.id == content.length - 1) {
                current.index = Math.min(content[current.id]["text"].length-1, current.index + d_index);
            }
            // move to next element
            else if (current.index == content[current.id]["text"].length - 1)
            {
                current.id += 1;
                current.index = 0;
            }
            // move to next character
            else {
                current.index += 1;
            }
        }
    });
    
    
    
    function events() {
        // class selectors (click) after classes added (display)
    // or else even after document loads it's still to early!
    $(".md").on("click", function() {
        // alert("clicked.");
        var el_id = $(this).attr("id");
        // supposedly floor auto converts string to int
        var data_id = Math.floor(el_id.substring(1, el_id.length));
        current.id = data_id;
        // TODO
    
    
        // TODO
    });
    }
    
    window.requestAnimFrame(loop);
    display_all();
    
    
    });