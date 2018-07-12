$(document).ready(function(){
	$(".cursos-hide").hide();
    $("#ver-cursos").click(function(){
    	if ($(".cursos-hide").is(":visible")) {
    		$(".cursos-hide").hide(500);
    		$("#ver-cursos").text("Ver Todos Cursos");
    		$('html, body').animate({scrollTop:550}, "slow");
    	} else {
    		// $(".cursos-hide").css("display", "none");
    		$(".cursos-hide").show(500);
    		$("#ver-cursos").text("Fechar Aba");
    		$('html, body').animate({scrollTop:890}, "slow");
    		
    	}
    });
});