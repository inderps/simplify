(function () {
    "use strict";

    $(".screen").hide();
    $(".main .screen").show();

    $(window).scroll(function() {
        var exit = false;
        var windowHeight = $(window).height();
        var scrollTop = $(document).scrollTop();

        $(".page").each(function(index, element){
            var pageHeight = $(element).position().top;
            if((pageHeight - windowHeight + 400) < scrollTop){
                exit = true;
                hideIphone();
                return;
            }
        });

        if(exit){
            return;
        }

        showIphone();
        if(scrollTop < 300 && $(".main .screen:visible").length <= 0){
            $(".screen").hide();
            $(".main .screen").show();
            return;
        }
         $(".feature").each(function(index, element){
                var featureHeight = $(element).position().top;
                 if((featureHeight - windowHeight + 400) > scrollTop || $(element).find(".screen:visible").length>0){
                    return;
                 }
                $(".screen").hide();
                $(element).find(".screen").show();
         });
    });

    function hideIphone(){
        $("#iphone").addClass("reallyHide");
        $(".screen").hide();
    }

    function showIphone(){
        $("#iphone").removeClass("reallyHide")
    }
})();
