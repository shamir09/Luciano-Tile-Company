 $(document).ready(function() {
              var costPsqf= 2.75;
              var sqft = 0;

   function calculateCost() {
              var width = $("#w").val();
              var length = $("#l").val();

              sqft = (width * length).toFixed(2);
              var cost = (sqft * costPsqf).toFixed(0);

                   // CARPET PRICING //
                    carpetCostPsqf = 2.75;
                    carpetCostTotal = (carpetCostPsqf * sqft).toFixed(0);
                    $("#Carpet").text("$" + carpetCostTotal);

                    // LAMINATE PRICING //
                    laminateCostPsqf = 2.94;
                     laminateCostTotal = (laminateCostPsqf * sqft).toFixed(0);
                     $("#Laminate").text("$" + laminateCostTotal);

                   // HARDWOOD PRICING //
                   hardwoodCostPsqf = 3.50;
                    hardwoodCostTotal = (hardwoodCostPsqf * sqft).toFixed(0);
                    $("#Hardwood").text("$" + hardwoodCostTotal);

                    // TILE PRICING //
                    tileCostPsqf = 3.64;
                     tileCostTotal = (tileCostPsqf * sqft).toFixed(0);
                     $("#Tile").text("$" + tileCostTotal);

              $("#sqfOutput").text(sqft + " sqft" || 0);
              $("#costOutput").text("Cost  :  $ " + cost || 0);


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
              $("#l").keyup(function() {
              calculateCost();
              });
$("#carpet_Flooring").click(function(){

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
