window.addEventListener('load', function(){
	//variables
	const saber_mas = document.querySelector('#saber-mas');



	//eventos
	saber_mas.addEventListener('click', function(){
		swal({
			title: "Acerca De",
			text: "Todo los cursos y practicas de esta plataforma son completamente gratuitos, esto con el objetivo de que la educación Online gratuita sea tan efectiva como una de paga  para así apoyar a la gente que no puede acceder a la educación privada ya sea universidades o cursos Online",
			icon: "info",
		  });
	});



	//efectos
	ScrollReveal().reveal('#header', {
        interval: 800,
        reset: true
	});


	ScrollReveal().reveal('#aprenderas', {
        interval: 800,
        reset: true
	});


	ScrollReveal().reveal('#tec-enseñar', {
        interval: 800,
        reset: true
	});


	ScrollReveal().reveal('#que-esperas', {
        interval: 800,
        reset: true
	});


	ScrollReveal().reveal('#img-student', {
        interval: 800,
        reset: true
	});

	
});