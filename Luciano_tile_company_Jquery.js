 $(document).ready(function() {
                            /* Hide the Logo */
     $("#logo, #sqfOutput, #cost, #infosqf, #header").hide();

                            /* Fade in the Logo */
     $("#logo").show(3000);
     $("#header").fadeIn(4750);
                            /* Focus to Width Bar */
     $("#w").focus();
                            /* On leave Calculate the Cost */
            $("#l").on("blur",function() {


                var width = $("#w").val();
                var length = $("#l").val();
                var sqft = (width * length).toFixed(1);
                var cost = (sqft * 2.93).toFixed(2);

                $("#sqfOutput").text(sqft + " sqft" || 0);
                $("#costOutput").text("Cost  :  $ " + cost || 0);

                $("#sqfOutput, #costOutput, #infosqf").slideDown(1000);
    });
                                                /* On Focus Select All   */
                $("#w").on("focus",function() {
                  $("#sqfOutput").fadeOut(1000);
                  $("#costOutput, #infosqf").hide(2000);
                  $("#w").select();
                   });
});
