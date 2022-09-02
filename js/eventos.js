const buscar = document.querySelector("#buscar")
const itemAgregar = document.querySelector("#itemAgregar")
const itemIMC = document.querySelector("#itemIMC")
const itemBorrar = document.querySelector("#itemBorrar")
const btnBuscar = document.querySelector("#btnBuscar")
const btnCalcular = document.querySelector("#btnCalcular")
const valorIMC = document.querySelector("spanIMC")
const textoIMC = document.querySelector("spanTEXTO")
const btnCerrarA = document.querySelector("#btnCerrarA")
const btnCerrarC = document.querySelector("#btnCerrarC")
const btnCerrarB = document.querySelector("#btnCerrarB")
//const campos = document.querySelectorAll("input")
const btnAgregar = document.querySelector("#btnAgregar")

const btnBorrar = document.querySelector("#btnBorrar")
const borrar = document.querySelector("#borrar")

const nombre = document.querySelector("#nombre")
const tipo = document.querySelector("#tipo")
const sabor = document.querySelector("#sabor")
const tiempo = document.querySelector("#tiempo")
const imagen = document.querySelector("#img-uploader")
const textoAgregar = document.querySelector("spanAGREGAR")
const textoBorrar = document.querySelector("spanBORRAR")


btnAgregar.addEventListener("click", agregarReceta)
btnBorrar.addEventListener("click", borrarReceta)

btnBuscar.addEventListener("click", buscarReceta)

btnCalcular.addEventListener("click", calcularIMC)
btnCerrarA.addEventListener("click", cerrarAgregar)
btnCerrarC.addEventListener("click", cerrarIMC)
btnCerrarB.addEventListener("click", cerrarBorrar)

buscar.addEventListener('keyup', () => {
    buscarReceta()
    document.querySelector("#agregandoReceta").style.display = 'none';
    document.querySelector("#calculandoIMC").style.display = 'none';
    document.querySelector("#borrandoReceta").style.display = 'none';
})

itemAgregar.addEventListener("click", mostrarAgregar)
itemIMC.addEventListener("click", mostrarIMC)
itemBorrar.addEventListener("click", mostrarBorrar)
// imagen.addEventListener()

function cerrarAgregar(){
    document.querySelector("#agregandoReceta").style.display = 'none';
}

function mostrarAgregar(){
    document.querySelector("#borrandoReceta").style.display = 'none';
    document.querySelector("#calculandoIMC").style.display = 'none';
    document.querySelector("#agregandoReceta").style.display = 'block';
    nombre.focus()
}

function cerrarIMC(){
    document.querySelector("#calculandoIMC").style.display = 'none';
}

function mostrarIMC(){
    document.querySelector("#borrandoReceta").style.display = 'none';
    document.querySelector("#agregandoReceta").style.display = 'none';
    document.querySelector("#calculandoIMC").style.display = 'block';
    peso.focus()
}

function cerrarBorrar(){
    document.querySelector("#borrandoReceta").style.display = 'none';
}

function mostrarBorrar(){
    document.querySelector("#agregandoReceta").style.display = 'none';
    document.querySelector("#calculandoIMC").style.display = 'none';
    document.querySelector("#borrandoReceta").style.display = 'block';
    borrar.focus()
}

const datosCompletosIMC = ()=> { 

    if (peso.value !== "" && altura.value !== "" && peso.value > 0 && altura.value > 10 && peso.value < 300 && altura.value < 250) {
        return true
    } else {
        peso.value = ""
        altura.value = ""
        peso.focus()
        return false 
    }
}

const datosCompletosAgregar = ()=> { 

    if (nombre.value !== "" && sabor.value !== "" && tipo.value !== "" && tiempo.value !== "") {
        return true
    } else {
        nombre.focus()
        return false 
    }
}


const datosCompletosBorrar= ()=> { 

    if (borrar.value !== "") {
        return true
    } else {
        borrar.value = ""
        borrar.focus()
        return false 
    }
}


// $(document).ready(function(){

// 	$('#inicio').click(function(){
// 		$('body, html').animate({
// 			scrollTop: '0px'
// 		}, 300);
// 	});

// 	$(window).scroll(function(){
// 		if( $(this).scrollTop() > 0 ){
// 			$('#inicio').slideDown(300);
// 		} else {
// 			$('#inicio').slideUp(300);
// 		}
// 	});

// });

