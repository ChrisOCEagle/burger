// make sure that the DOM is fully loaded before trying to attach the handlebars
$(function() {
    // when the button to eat the burger is clicked
    $(".change-devoured").on("click", function() {
        // grab the id and the data associated with the button that is clicked
        var id = $(this).data("id"),
            devoured = $(this).data("devoured");
        
        // store the data into an object
        var newDevouredState = {
            devoured: JSON.stringify(devoured),
        };

        // send the data to the server, updating existing data = PUT request
        $.ajax("/api/burger/" + id, {
            method: "PUT",
            data: newDevouredState,
        }).then(() => {
            console.log("Changed devoured to " + devoured);
            location.reload();
        });
    });
    // when the submit button is clicked
    $(".create-form").on("submit", event => {
        event.preventDefault();

        // create a new object that will contain the data
        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: JSON.stringify(false),
        };

        // send the data to the server, creating new data = POST request
        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger,
        }).then(() => {
            console.log("Created a new burger");
            location.reload();
        });
    });
});