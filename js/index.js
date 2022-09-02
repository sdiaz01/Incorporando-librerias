
function generadorAutomatico() {
    recetas.push(new Receta('MARQUISE', 'TORTA', "DULCE", '2 HORAS', './fotos/rogel.jpeg'));
    recetas.push(new Receta('BROWNIE DE CHOCOLATE', 'POSTRE', "DULCE", '1 HORA', './fotos/brownie.jpeg'));
    recetas.push(new Receta('LEMON PIE', 'TORTA', "LIMON", '1:30 HORAS', './fotos/lemonpie.jpeg'));
    recetas.push(new Receta('FLAN', 'POSTRE', "DULCE", '30 MINUTOS', './fotos/flan.jpg'));
    recetas.push(new Receta('GALLETAS DE MANTECA', 'PARA EL TÉ', "DULCE", '30 MINUTOS', './fotos/galletasdemanteca.jpeg'));
    recetas.push(new Receta('ALFAJORES DE MAICENA', 'ALFAJOR', "DULCE", '1:30 HORAS', './fotos/alfajordemaicena.jpeg'));
    recetas.push(new Receta('PASTAFROLA', 'TORTA', "DULCE", '1 HORA', './fotos/pastafrola.jpeg'));
    recetas.push(new Receta('BAGLES', 'APERITIVO', "SALADO", '3 HORAS', './fotos/bagles.jpeg'));
    recetas.push(new Receta('TIRAMISÚ', 'POSTRE', "DULCE", '1 HORA', './fotos/tiramisu.jpeg'));
    recetas.push(new Receta('CARROT CAKE', 'TORTA', "DULCE", '2:30 HORAS', './fotos/carrotcake.jpeg'));
    recetas.push(new Receta('BUDIN DE LIMON', 'PARA EL TÉ', "SEMI AMARGO", '2 HORAS', './fotos/budindelimon.jpeg'));

    console.log("Se generaron recetas automaticamente.")
}

generadorAutomatico()



function borrarReceta() {

    if (datosCompletosBorrar(true)) {

        let borrarR = borrar.value.toUpperCase()
        const borrando = recetas.some(receta => receta.nombre === borrarR)

        if (borrando === true) {

             let encontrada = recetas.find(receta => receta.nombre === borrarR)
             let posicion = recetas.indexOf(encontrada)
             recetas.splice(posicion, 1)
             borrar.value = ""
             localStorage.setItem("recetas", JSON.stringify(recetas))
             cargarRecetas()
             cerrarBorrar()
             toastSwal("La receta fue borrada", "warning", "white")

        } else {
            toastSwal("La receta ingresada no existe", "error", "white")
            borrar.value = ""
            borrar.focus()

        }
    } else {
        toastSwal("Debe ingresar un nombre.", "error", "white")
    }

}


const buscarReceta = () => {

    const busqueda = recetas.filter(receta => receta.nombre.includes(buscar.value.toUpperCase()))

    const cuerpo = document.getElementById("cuerpo")

    cuerpo.innerHTML = ""

    busqueda.forEach(receta => {

        cuerpo.innerHTML += `
                                <div class="grid-item">
                                <div class="card">
                                  <img class="card-img" src="${receta.imagen}">
                                  <div class="card-content">
                                    <h1 class="card-header">${receta.nombre}</h1>
                                    <br><br>
                                     <p class="card-text">${receta.tipo}</p>
                                     <p class="card-text">${receta.sabor}</p>
                                     <p class="card-text">${receta.tiempo}</p>
                                    <button class="card-btn">Ver <span>&rarr;</span></button>
                                  </div>
                                </div>
                                </div>
                                `
    })

    if (busqueda.length === 0) {
        document.getElementById("noEncontrado").style.display = 'block';
    } else {
        document.getElementById("noEncontrado").style.display = 'none';
    }

    if (buscar.value == "") {
        cargarRecetas()
    }
}




function cargarRecetas() {

    const cuerpo = document.getElementById("cuerpo")
    cuerpo.innerHTML = ""
    recetas.forEach(receta => {
        cuerpo.innerHTML += `
                                <div class="grid-item">
                                <div class="card">
                                  <img class="card-img" src="${receta.imagen}">
                                  <div class="card-content">
                                    <h1 class="card-header">${receta.nombre}</h1>
                                    <br><br>
                                     <p class="card-text">${receta.tipo}</p>
                                     <p class="card-text">${receta.sabor}</p>
                                     <p class="card-text">${receta.tiempo}</p>
                                    <button class="card-btn">Ver <span>&rarr;</span></button>
                                  </div>
                                </div>
                                </div>
                                `
    })
}


const calcularIMC = () => {

    const imc = new IMC(peso.value, altura.value)
    let resultadoIMC = imc.calcular()
    if (datosCompletosIMC(true)) {

        valorIMC.innerText = resultadoIMC

        if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
            toastSwal("Su peso se encuentra normal", "succces", "white")
            peso.value = ""
            altura.value = ""
            peso.focus()
        } else if (resultadoIMC > 25) {
            toastSwal("Su peso se encuentra por arriba del limite", "warning", "white")
            peso.value = ""
            altura.value = ""
            peso.focus()
        } else if (resultadoIMC < 18.4) {
            toastSwal("Su peso se encuentra por debajo del limite", "warning", "white")
            peso.value = ""
            altura.value = ""
            peso.focus()
    
        } 

    } else {
        toastSwal("Debe ingresar valores correctos!", "error", "white")
    }



}

const agregarReceta = () => {

    const resultado = recetas.some(receta => receta.nombre === (nombre.value).toUpperCase())

    if (datosCompletosAgregar(true) && resultado === false) {

        recetas.unshift(new Receta((nombre.value).toUpperCase(), (tipo.value).toUpperCase(), (sabor.value).toUpperCase(), (tiempo.value).toUpperCase(), './fotos/proximamente.jpg'))
        localStorage.setItem("recetas", JSON.stringify(recetas))
        nombre.value = ""
        tipo.value = ""
        sabor.value = ""
        tiempo.value = ""
        cerrarAgregar()
        toastSwal("La receta fue agregada", "success", "white")
        cargarRecetas()

    } else if (datosCompletosAgregar(true) && resultado === true) {
        nombre.value = ""
        tipo.value = ""
        sabor.value = ""
        tiempo.value = ""
        nombre.focus()
    } else {
        toastSwal("Debe ingresar todos los valores", "error", "white")
    }

}


function recuperarLS() {
    if (localStorage.recetas) {
        recetas = JSON.parse(localStorage.getItem("recetas"))
        cargarRecetas()
    }
}

cargarRecetas()
recuperarLS()

const toastSwal = (mensaje, icono, bgcolor)=> {
    Swal.fire({
    title: mensaje,
    icon: icono,
    background: bgcolor,
    color: 'black'
  })
}


const borrarSwal = () => {
    Swal.fire({
        title: "¿Estas segur@?",
        text: "Una vez borrada, no podrás recuperarla!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
       .then((willDelete) => {
         if (willDelete) {
           swal("Poof! Your imaginary file has been deleted!", {
             icon: "success",
           });
         } else {
           swal("Your imaginary file is safe!");
         }
       });
}