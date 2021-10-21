for (let i = 0; i < 16; i++){
    $(".content").append('<div class="boxes"></div>')
}

$(".content").on("click", ".boxes", function(){
    $(this).toggleClass("clickBox")
})
