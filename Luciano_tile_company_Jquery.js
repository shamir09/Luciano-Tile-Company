 $(document).ready(function() {
              var costPsqf= 2.75;
   function calculateCost() {
              var width = $("#w").val();
              var length = $("#l").val();

              var sqft = (width * length).toFixed(2);
              var cost = (sqft * costPsqf).toFixed(2);

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
              $("#logo, #sqfOutput, #costOutput, #infosqf, #header, #floorsContainer").hide();

                          /* Fade in the Logo */
              $("#logo").show(3000);
              $("#header").fadeIn(2000);
              $("#floorsContainer").fadeIn(3000);
              $("#w").focus();       /* Focus to Width Bar */
                                              /* On leave Calculate the Cost */
              $("#l").on("blur",function() {
              calculateCost();
              });
$("#carpet_Flooring").click(function(){
  costPsqf = 2.75;
  calculateCost();
});

$("#laminate_Flooring").click(function(){
  costPsqf = 2.94;
  calculateCost();
});
$("#hardwood_flooring").click(function(){
  costPsqf = 3.50;
  calculateCost();
});
$("#tile_Flooring").click(function(){
  costPsqf = 3.64;
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
