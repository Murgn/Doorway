$(document).ready(function() {

    console.log("website loaded");
    $( function() {
        $( "#draggable" ).draggable({
            scroll: false,
            containment: "window"
          });
      } );

      setTimeout(showPage, 3000);
 })