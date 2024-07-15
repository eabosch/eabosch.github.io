(function($){

    $(document).ready(function(){

        $('.galleryCards').flickity({
            cellAlign: 'center',
            wrapAround: true,
            prevNextButtons: false,
            imagesLoaded: true
        });

        $(".galleryCards img").click(function(){		                                        $("#imgBig").attr("src",$(this).prop('src'));
            $("#imgBig").attr("src",$(this).prop('src'));
            $("#overlay").show('fast');
            $("#overlayContent").show('slow');
            $("#caption").show('slow');
            $('#caption').text($(this).prop('alt'));
        });

        $("#imgBig").click(function(){
            $("#imgBig").attr("src", "");
            $("#overlay").hide();
            $("#overlayContent").hide();
            $("#caption").hide();
        });

        // Function to reinitialize Flickity
        function reinitializeFlickity() {
            $('.galleryCards').flickity('destroy');
            $('.galleryCards').flickity({
                cellAlign: 'center',
                wrapAround: true,
                prevNextButtons: false,
                imagesLoaded: true
            });
        }

        $(window).on('resize orientationchange', function(){
            //document.body.style.display="none";
            reinitializeFlickity();
        })
        
        
    
    });


})(jQuery)