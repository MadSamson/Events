$(document).ready(function() {
    // more/less
    $(".showMoreBTN").click(function(){
        $(this).siblings(".showMore").toggle()
        $(this).text() === "Hide" ? $(this).text("Show") : $(this).text("Hide");
    })

    $("#sendMessage").click(function(){
        $(".contactForm").html("Tack för ditt meddelande. Vi återkopplar så fort vi kan ")
    })
})
