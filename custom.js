<script>
          $('.handle').on('click', function(){
            $('nav ul').toggleClass('showing')
          });
        </script> 




$(window).on("scroll", function() {
    if($(window).scrollTop() > 20) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
});


