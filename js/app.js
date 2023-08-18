$(function(){


    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $("#nav_contacts").toggleClass("active");
        $(".inner_a_closed").toggleClass("active");
    });

    $("#nav-toggle2").on("click", function(event){
        event.preventDefault();

        $(this).removeClass("active");
        $("#nav").removeClass("active");
        $("#nav-toggle").removeClass("active");
        $("#nav_contacts").removeClass("active");
        $(".inner_a_closed").removeClass("active");
    });


    $("#scrroll").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");

        location.href = '#sk';
       
    });



    $("#nav-toggle_mob").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav_mob").toggleClass("active");
        $("#nav_mob_menu").toggleClass("active");
 
       
    });

});



