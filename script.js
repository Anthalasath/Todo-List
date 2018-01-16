$(document).ready(function() {

    const delColor = "rgb(245, 80, 80)";
    const doneColor = "rgb(128, 128, 128)";

    $("#add-task").click(function() {
        let entryText = $("#new-task").val();
        if (entryText) {
            let newEntry = "<div class='task'><div class='del-task'><i class='fa fa-trash' aria-hidden='true'></i></div>" 
        + entryText + "</div>";
        $("#tasks-wrapper").append(newEntry);
        }
        
    });


    $(document).on("click", ".del-task", function() {
        $(this).parent().remove();
    });



    $(document).on("mouseover", ".task", function() {
        $(this).children(".del-task").css("background-color", delColor);
    });



    $(document).on("mouseleave", ".task", function() {
        $(this).children(".del-task").css("background-color", "white");
    });

    
    $(document).on("click", ".task", function() {
        if ($(this).css("color") != doneColor) {
            $(this).css("text-decoration", "line-through");
            $(this).css("color", doneColor);
        } else {
            $(this).css("text-decoration", "none");
            $(this).css("color", "black");
        }

    });

});