$("#search").on("keydown", function () {

    if ($(this).val()) {
        var value = $(this).val().toLowerCase();
        $(".banner").hide();
        $(".item-search").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            console.log($(this));
        });

    }
    else {
        $(".banner").show();

    }

});

// $(".select-show").click(function () {
//     $(".location-list").show();
//     $(".select-show").hide();
//     $(".select-hide").show();
// });
// $(".select-hide").click(function () {
//     $(".location-list").hide();
//     $(".select-show").show();
//     $(".select-hide").hide();
// });
