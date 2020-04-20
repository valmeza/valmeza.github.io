(function () {
  "use strict";
  $(document).ready(function () {
    console.log("Looking Good");
    var superMarioTrigger = "38384040373937396665";
    var triggerMario = "";
    $(document).keyup(function (e) {
      console.log(e.which);
      triggerMario += e.which;

      if (triggerMario === superMarioTrigger) {
        console.log("Here we Gooooo!");
        $("#mario").prepend('<img id="marioDrive" src="images/mario.png" />');
        $("#mario").prepend('<img id="luigiDrive" src="images/luigi.png" />');
        setTimeout(function () {
          $("#mario").empty();
        }, 5000);
      }
    });
  });
})();

