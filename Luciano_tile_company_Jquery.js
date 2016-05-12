 $(document).ready(function() {
              var costPsqf= 2.75;
              $('#carpet_Flooring').click();

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
                $("#sqfOutput, #costOutput").fadeOut(800);
                $("#sqfOutput, #costOutput").hide(800);
                $("#w").val("");
                $("#l").val("");
                $("#w").focus();  /* Focus to Width Bar */
                $("#w").select();
                          }
                          /* Hide the Logo */
              $("#sqfOutput, #costOutput, #infosqf, #header, #floorsContainer").hide();
              $('#Carpet, #Laminate, #Hardwood, #Tile').hide(700);    /////// HIDE SPAN PRICING SQF

                          /* Fade in the Logo */
              $("#header").fadeIn(800);
              $("#floorsContainer").fadeIn(800);
              $("#w").focus();       /* Focus to Width Bar */
                                              /* On leave Calculate the Cost */
              $("#l").on("blur",function() {
              calculateCost();
              });
$('#carpet_Flooring').click(function(){
  costPsqf = 2.75;
  $('#flooringTypeLabel').text("Carpet");
  $('#laminate_Flooring, #hardwood_flooring, #tile_Flooring').removeClass('activeFLR');
  $('#laminate_Flooring, #hardwood_flooring, #tile_Flooring').addClass('floorType');
  $('#flooringType').addClass('activeFLR');

  $('#check_1').addClass('checkMarkGreen');      ///////// GREEN CHECKMARK
  $('#carpet_Flooring').removeClass('floorType');
  $('#check_2, #check_3, #check_4').removeClass('checkMarkGreen');

  $('#Carpet').show(800);          /////// SHOW SPAN PRICING SQF
  $('#Laminate, #Hardwood, #Tile').hide(800);    /////// HIDE SPAN PRICING SQF

  //////////////// ADD AND REMOVE WALLPAPER WHEN FLOOR TYPE CLICKED ///////////////////
  $('#main_container').addClass('carpet_Flooring_wall');
  $('#main_container').removeClass('hardwood_Flooring_wall laminate_Flooring_wall tile_Flooring_wall');
  calculateCost();
});

$('#laminate_Flooring').click(function(){
  costPsqf = 2.94;
  $("#flooringTypeLabel").text("Laminate");
  $('#carpet_Flooring, #hardwood_flooring, #tile_Flooring').removeClass('activeFLR');
  $('#carpet_Flooring, #hardwood_flooring, #tile_Flooring').addClass('floorType');
  $('#laminate_Flooring').addClass('activeFLR');

  $('#check_2').addClass('checkMarkGreen'); ///////// GREEN CHECKMARK
  $('#laminate_Flooring').removeClass('floorType');
  $('#check_1, #check_3, #check_4').removeClass('checkMarkGreen');

  $('#Laminate').show(800);          /////// SHOW SPAN PRICING SQF
  $('#Carpet, #Hardwood, #Tile').hide(800);    /////// HIDE SPAN PRICING SQF

    //////////////// ADD AND REMOVE WALLPAPER WHEN FLOOR TYPE CLICKED ///////////////////
  $('#main_container').addClass('laminate_Flooring_wall');
  $('#main_container').removeClass('carpet_Flooring_wall hardwood_Flooring_wall tile_Flooring_wall');
  calculateCost();
});


$('#hardwood_flooring').click(function(){
  costPsqf = 3.50;
  $('#flooringTypeLabel').text("Hardwood");
  $('#carpet_Flooring, #laminate_Flooring, #tile_Flooring').removeClass('activeFLR');
  $('#carpet_Flooring, #laminate_Flooring, #tile_Flooring').addClass('floorType');
  $('#hardwood_flooring').addClass('activeFLR');

  $('#check_3').addClass('checkMarkGreen'); ///////// GREEN CHECKMARK
  $('#hardwood_flooring').removeClass('floorType');
  $('#check_1, #check_2, #check_4').removeClass('checkMarkGreen');

  $('#Hardwood').show(800);          /////// SHOW SPAN PRICING SQF
  $('#Carpet, #Laminate, #Tile').hide(800);    /////// HIDE SPAN PRICING SQF

    //////////////// ADD AND REMOVE WALLPAPER WHEN FLOOR TYPE CLICKED ///////////////////
  $('#main_container').addClass('hardwood_Flooring_wall');
  $('#main_container').removeClass('carpet_Flooring_wall tile_Flooring_wall laminate_Flooring_wall');
  calculateCost();
});

////////////////////////////////////////  TILE FLOOR //////////////////////////////////
$('#tile_Flooring').click(function(){
  costPsqf = 3.64;
  $('#flooringTypeLabel').text("Tile");
  $('#carpet_Flooring, #laminate_Flooring, #hardwood_flooring').removeClass('activeFLR');
  $('#carpet_Flooring, #laminate_Flooring, #tile_Flooring').addClass('floorType');
  $('#tile_Flooring').addClass('activeFLR');

  $('#check_4').addClass('checkMarkGreen'); ///////// GREEN CHECKMARK
  $('#tile_Flooring').removeClass('floorType');
  $('#check_1, #check_2, #check_3').removeClass('checkMarkGreen');

  $('#Tile').show(800);          /////// SHOW SPAN PRICING SQF
  $('#Carpet, #Laminate, #Hardwood').hide(800);    /////// HIDE SPAN PRICING SQF

  //////////////// ADD AND REMOVE WALLPAPER WHEN FLOOR TYPE CLICKED ///////////////////
  $('#main_container').addClass('tile_Flooring_wall');
  $('#main_container').removeClass('carpet_Flooring_wall hardwood_Flooring_wall laminate_Flooring_wall');
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
