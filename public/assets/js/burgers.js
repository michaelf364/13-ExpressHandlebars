// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devourButton").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {devoured:true}
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#ca").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
