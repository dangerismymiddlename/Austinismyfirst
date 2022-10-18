$(document).ready(function() {

   $(".move").draggable( {revert: "invalid"} );
   $(".target").droppable({
    drop: function() {
        $(".target").addClass("finish");
        $(".target").effect("pulsate");
     $(".move").addClass("moved");
    }
   });

});
