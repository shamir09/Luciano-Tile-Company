 $(document).ready(function() {
              var costPsqf= 2.75;
   function calculateCost() {
              var width = $("#w").val();
              var length = $("#l").val();

              var sqft = (width * length).toFixed(2);
              var cost = (sqft * costPsqf).toFixed(2);

              $("#sqfOutput").text(sqft + " sqft" || 0);
              $("#costOutput").text("Cost  :  $ " + cost || 0);

              $("#sqfOutput, #costOutput").slideDown(800);
              }


   function clearFields() {
                $("#sqfOutput, #costOutput").fadeOut(1000);
                $("#sqfOutput, #costOutput").hide(1000);
                $("#w").val("");
                $("#l").val("");
                $("#w").focus();  /* Focus to Width Bar */
                $("#w").select();
                          }
                          /* Hide the Logo */
              $("#sqfOutput, #costOutput, #infosqf, #header, #floorsContainer").hide();
              $('#Carpet, #Laminate, #Hardwood, #Tile').hide(1000);    /////// HIDE SPAN PRICING SQF

                          /* Fade in the Logo */
              $("#header").fadeIn(2000);
              $("#floorsContainer").fadeIn(3000);
              $("#w").focus();       /* Focus to Width Bar */
                                              /* On leave Calculate the Cost */
              $("#l").on("blur",function() {
              calculateCost();
              });
$("#carpet_Flooring").click(function(){
  costPsqf = 2.75;
  $("#flooringType").text("Carpet");
  $('#laminate_Flooring, #hardwood_flooring, #tile_Flooring').removeClass('activeFLR');
  $(this).addClass('activeFLR');

  $('#check_1').addClass('checkMarkGreen');      ///////// GREEN CHECKMARK
  $('#check_2, #check_3, #check_4').removeClass('checkMarkGreen');

  $('#Carpet').show(1000);          /////// SHOW SPAN PRICING SQF
  $('#Laminate, #Hardwood, #Tile').hide(1000);    /////// HIDE SPAN PRICING SQF
  calculateCost();
  });

$("#laminate_Flooring").click(function(){
  costPsqf = 2.94;
  $("#flooringType").text("Laminate");
  $('#carpet_Flooring, #hardwood_flooring, #tile_Flooring').removeClass('activeFLR');
  $(this).addClass('activeFLR');

  $('#check_2').addClass('checkMarkGreen'); ///////// GREEN CHECKMARK
  $('#check_1, #check_3, #check_4').removeClass('checkMarkGreen');

  $('#Laminate').show(1000);          /////// SHOW SPAN PRICING SQF
  $('#Carpet, #Hardwood, #Tile').hide(1000);    /////// HIDE SPAN PRICING SQF
  calculateCost();
});


$("#hardwood_flooring").click(function(){
  costPsqf = 3.50;
  $("#flooringType").text("Hardwood");
  $('#carpet_Flooring, #laminate_Flooring, #tile_Flooring').removeClass('activeFLR');
  $(this).addClass('activeFLR');

  $('#check_3').addClass('checkMarkGreen'); ///////// GREEN CHECKMARK
  $('#check_1, #check_2, #check_4').removeClass('checkMarkGreen');

  $('#Hardwood').show(1000);          /////// SHOW SPAN PRICING SQF
  $('#Carpet, #Laminate, #Tile').hide(1000);    /////// HIDE SPAN PRICING SQF
  calculateCost();
});

////////////////////////////////////////  TILE FLOOR //////////////////////////////////
$("#tile_Flooring").click(function(){
  costPsqf = 3.64;
  $("#flooringType").text("Tile");
  $('#carpet_Flooring, #laminate_Flooring, #hardwood_flooring').removeClass('activeFLR');
  $(this).addClass('activeFLR');

  $('#check_4').addClass('checkMarkGreen'); ///////// GREEN CHECKMARK
  $('#check_1, #check_2, #check_3').removeClass('checkMarkGreen');

  $('#Tile').show(1000);          /////// SHOW SPAN PRICING SQF
  $('#Carpet, #Laminate, #Hardwood').hide(1000);    /////// HIDE SPAN PRICING SQF
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
