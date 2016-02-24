 $(document).ready(function() {

   function calculateCost() {
              var width = $("#w").val();
              var length = $("#l").val();
              var sqft = (width * length).toFixed(2);
              var cost = (sqft * 2.93).toFixed(2);

              $("#sqfOutput").text(sqft + " sqft" || 0);
              $("#costOutput").text("Cost  :  $ " + cost || 0);

              $("#sqfOutput, #costOutput").slideDown(1000);
              }

   function clearFields() {
                $("#sqfOutput, #costOutput").fadeOut(1000);
                $("#sqfOutput, #costOutput").hide(2000);
                $("#w").val("");
                $("#l").val("");
                $("#w").focus();  /* Focus to Width Bar */
                $("#w").select();
                          }
                          /* Hide the Logo */
              $("#logo, #sqfOutput, #cost, #infosqf, #header, #floorsContainer").hide();

                          /* Fade in the Logo */
              $("#logo").show(3000);
              $("#header").fadeIn(2000);
              $("#floorsContainer").fadeIn(3000);
              $("#w").focus();       /* Focus to Width Bar */
                                              /* On leave Calculate the Cost */
              $("#l").on("blur",function() {
              calculateCost();
              });
                        

   document.onkeydown = function (evt) {
       evt = evt || window.event;
       if (evt.keyCode == 27) {
           clearFields();
       }
       if (evt.keyCode == 13) {
           calculateCost();
           }
   };
});
