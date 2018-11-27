// make sure that the DOM is fully loaded before trying to attach the handlebars
$(function() {
    // when the button to eat the burger is clicked
    $(".change-devoured").on("click", function() {
        // grab both the "id" and the data associated with the button that is clicked
        var id = $(this).data("id"),
            newDevoured = $(this).data("devoured");
        // store the data into a property of an object
        var newDevouredState = {
            devoured: newDevoured
        };
        // send the PUT request
        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: newDevouredState
        }).then(function() {
            console.log("changed devoured to " + newDevoured);
            // reload the page to get the updated list
            location.reload();
        });
    });
    // when the submit button is clicked
    $(".create-form").on("submit", function(event) {
        // be sure to prevent default on the submit
        event.preventDefault();
        // create a new object that will contain the data
        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: false
        };
        // send the POST request
        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger
        }).then(function() {
            console.log("Created a new burger");
            // reload the page to get the updated list
            location.reload();
        });
    });
});