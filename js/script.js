$(document).ready(function(){

    var div = $("#hero");
    div.animate({height: '+=300px', opacity: '0.4'}, "slow");
    div.animate({width: '+=300px', opacity: '0.8'}, "slow");


    $('.button').click(function(event){
        var $this = $(event.target),
            data = $this.attr('data-num');

        $("#hero").hide();
        $("#reset").show();

        var $sec = $(".sec"+data);

        $("section").hide();
        $sec.slideDown("fast");

        $('.button').removeClass("active");
        $this.addClass("active");

        $("section").hover(function(){

            $(this).find( "img" ).css("filter", "grayscale(0)");
            $(this).find( "img" ).animate({ width: "50%" });
    
            }, function(){
    
            $(this).find( "img" ).css("filter", "grayscale(1)");
            
        });

    });


    $("#reset").click(function () {
        location.reload(true);
    });


  });


