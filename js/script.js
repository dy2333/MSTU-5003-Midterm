
$( function() {
  $( "#draggable" ).draggable({ revert: "valid" });
  $( "#draggable2" ).draggable({ revert: "invalid" });

  $( "#droppable" ).droppable({
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "If accepted, then your answer is correct. If your pic goes back, please try again!" );
    }
  });
} );
