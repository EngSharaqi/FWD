// $(document).ready(function(){
// 	$(".intro").css("height", $(window).height());
// 	//console.log(window.innerWidth);
// 	$(".chooses-of-pars").css("height", $(window).height());
// 	$(".pars").click(function(){
// 		$(".chooses-of-pars").slideToggle(300);
// 		$("body").css("overflow-y", "hidden")
// 		$(".chooses-of-pars").css("overflow-y", "hidden")

		
// 	});
// $(".fa-times").click(()=>{
// 	$(".chooses-of-pars").slideUp();
// 	$("body").css("overflow-y", "scroll")
// });
// });


// #4b74ff

$(document).ready(function(){
	$(".add-btn").click(()=>{
        $(".table").hide();
        $(".add-table").show();
        $(".add-btn").css("background", "#4b74ff").css("color", "#fff");
        $(".svg-inline--fa.fa-plus-circle.fa-w-16").css("color", "#fff");
    });

    $(".filter-btn").click(()=>{
        $(".filter-table").show();
        $(".filter-btn").css("background", "#4b74ff").css("color", "#fff");
        $(".svg-inline--fa.fa-filter.fa-w-16").css("color", "#fff");
    });

    $(".close-filter-card").click(()=>{
        $(".filter-table").hide();
        $(".filter-btn").css("background", "#edeff7").css("color", "#000");
        $(".svg-inline--fa.fa-filter.fa-w-16").css("color", "#4b74ff");
    })
	
});
