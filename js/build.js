$(".toggle-menu").click(function() {
    $(this).toggleClass("on");
    $(".nav-mobile").slideToggle(function(){
        $(this).removeClass(".hide");
        $(this).addClass(".show")
    });
    return false;
});