

$(document).ready(function(){
    console.log ("loaded")
        $("#mainMenu").load("universal/header.html");
        $("#social").load("universal/footer.html");
});

$(document).click(function(e) {
    if (!$(e.target).is('a')) {
        $('.collapse').collapse('hide');        
    }
});

