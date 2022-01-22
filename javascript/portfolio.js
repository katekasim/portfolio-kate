$(document).ready(function(){
    $('.container_hero').hide().slideDown(600);
});

$(document).ready(function(){
    $('.see_project').hide();

$('.img_project').hover(function(){
    $(this).find('.see_project').toggle( { direction: "right" }, 500); 
},
function(){
    $(this).find('.see_project').hide();
}
)
});








