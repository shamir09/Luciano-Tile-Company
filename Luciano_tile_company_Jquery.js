 $(document).ready(function() {
                            /* Hide the Logo */
     $("#logo, #sqft, #cost, #infosqf, #header").hide();

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

                $("#sqft").text(sqft || 0);
                $("#cost").text(cost || 0);

                $("#sqft, #cost, #infosqf").slideDown(1000);
    });
                                                /* On Focus Select All   */
                $("#w").on("focus",function() {
                  $("#sqft, #cost, #infosqf").hide(2000);
                  $("#w").select();
                   });
});
