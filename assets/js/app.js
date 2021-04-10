(() => {
  window.addEventListener("load", () => {
    let productos = document.querySelector("#productos");
    productos.classList.add("imagenes-cargadas");

    /* Precio/ Stock/Color/[Caracteristicas]/[Ancho/Largo/Alto]*/
    const PRODUCTOS = [
      {
        nombre: "Canasto ecológico dream",
        datos: [
          1320,
          4,
          "Madera natural",
          [
            "Canasto ecologico de bambu",
            "Tapa con soga y sogas a los costados para sujeción",
            "Cobertor de lino para el interior",
          ],
          ["40cm", "60cm", "40cm"],
        ],
      },
      {
        nombre: "Organizadora Sophistiqué Rattan",
        datos: [
          4700,
          2,
          "Gris Oscuro y Negro",
          [
            "Estante ajustable que puede soportar hasta 15 kg",
            "Puertas con cerradura",
            "Asas suaves al tacto",
          ],
          ["31cm", "26cm", "31cm"],
        ],
      },
      {
        nombre: "Canasto multiuso Rattan L",
        datos: [
          1000,
          6,
          "Marrón y Blanco",
          [
            "Resistente y antihumedad",
            "Puede soportar hasta 10kg",
            "No incluye tapa",
          ],
          ["26cm", "36cm", "17cm"],
        ],
      },
      {
        nombre: "Set de 5 canastos cleaner 15LT",
        datos: [
          2200,
          3,
          "Transparente",
          [
            "Soporta hasta 15 litros/kilos",
            "Incluye tapa",
            "Resistente a olores",
          ],
          ["15cm", "25cm", "15cm"],
        ],
      },
      {
        nombre: "Organizadora ratona de plástico",
        datos: [
          2175,
          1,
          "Blanco y Gris Claro",
          [
            "Incluye 3 estantes con 5kg de capacidad",
            "Plástico resistente",
            "Antideslizante",
          ],
          ["27cm", "34cm", "24cm"],
        ],
      },
      {
        nombre: "Combo Lugury Deluxe",
        datos: [
          66400,
          2,
          "Marron/Gris",
          [
            "Tejido en Rattan Sintetico con protección de rayos Ultravioleta",
            "Colchonetas de placa alta densidad con tela náutica impermeables",
            "Patas de metal",
          ],
          ["122cm", "70cm", "76cm"],
        ],
      },
      {
        nombre: "Juego Textilene Millenium",
        datos: [
          39000,
          1,
          "Negro/Gris",
          [
            "Estructura de acero pintado gris",
            "Resistente a rayos solares",
            "Resistente al óxido",
          ],
          ["Consultar", "Consultar", "Consultar"],
        ],
      },
      {
        nombre: "Reposera de Aluminio liviano x2",
        datos: [
          33700,
          2,
          "Gris y Blanco",
          [
            "Resistentes a factores ambientales",
            "Ecológicos, flexibles y duraderos",
            "Lavables con agua",
          ],
          ["66cm", "193cm", "40cm"],
        ],
      },
      {
        nombre: "Juego De Reposeras De Rattan Sintetico",
        datos: [
          53400,
          1,
          "Negro/Blanco",
          [
            "Base de Aluminio reforzado",
            "El set incluye mesa ratona",
            "Resistentes a factores ambientales",
          ],
          ["60cm", "200cm", "50cm"],
        ],
      },
      {
        nombre: "Mueble de cocina Loyalti XL",
        datos: [
          6400,
          2,
          "Negro",
          [
            "Asas suaves al tacto",
            "Puertas con cerradura",
            "Soporta hasta 15kg/estante",
          ],
          ["60cm", "170cm", "60cm"],
        ],
      },
      {
        nombre: "Combo de muebles Sofistiq",
        datos: [
          29350,
          5,
          "Negro y Marrón",
          [
            "Cuero sintético resistente",
            "Resistente a rayaduras y olores",
            "Patas de hierro",
          ],
          ["150cm", "90cm", "65cm"],
        ],
      },
      {
        nombre: "Juego de muebles Elegant Profile",
        datos: [
          39500,
          1,
          "Beige y Gris",
          [
            "Construidos con madera reforzada",
            "Resistentes a factores ambientales",
            "Patas de madera",
          ],
          ["Consultar", "Consultar", "Consultar"],
        ],
      },
      {
        nombre: "Mueble de cocina Loyalti XS",
        datos: [
          3000,
          2,
          "Negro/Blanco/Gris",
          [
            "Asas suaves al tacto",
            "Puertas con cerradura",
            "Soporta hasta 15kg/estante",
          ],
          ["30cm", "100cm", "30cm"],
        ],
      },
      {
        nombre: "Cucha plástica Sweety chica",
        datos: [
          7150,
          1,
          "Blanco/Gris",
          [
            "Plástico resistente a rayones y factores climaticos",
            "Piso de gamuza para mayor comodidad",
            "No concentra altas temperaturas",
          ],
          ["53cm", "60cm", "58cm"],
        ],
      },
      {
        nombre: "Botinero organizador de melamina",
        datos: [
          5500,
          3,
          ["Blanco/Roble/Gris"],
          [
            "Ideal para ambientes con poco espacio",
            "Resistente a hongos",
            "Bisagras flotantes de acero inoxidable",
          ],
          ["62cm", "120cm", "35cm"],
        ],
      },
      {
        nombre: "Casa de madera para jardín",
        datos: [
          25800,
          1,
          ["Cedro/Blanco y Azul"],
          [
            "Equipado con media puerta, macetero, persianas, toldos",
            "Fabricada con madera de alta calidad",
            "Resistente a hongos",
          ],
          ["155cm", "120cm", "168cm"],
        ],
      },
      {
        nombre: "Parque infantil de plástico Diverland",
        datos: [
          85000,
          1,
          ["Gris/Blanco"],
          [
            "Tobogan y escaleras suaves",
            "Resistente a factores climaticos",
            "Incluye todo lo visual",
          ],
          ["225cm", "220cm", "110cm"],
        ],
      },
    ];
    let boton_cerrarImagenAmpliada = document.querySelector("#cerrar-imagen-ampliada");
    let boton_ampliarImagen = document.querySelectorAll(".btn-ampliar");
    let boton_descripcionImagen = document.querySelectorAll(".btn-descripcion");
    let contenedor_ImagenAmpliada = document.querySelector("#contenedor-imagen-ampliada");
    let contenedor_ImagenDescripcion = document.querySelector("#contenedor-descripcion-producto");

    /* 
  Funcion destinada a crear y mostrar la descripcion de cara producto.
  _Recibe como parametros:
  1)Array de objetos de productos
  2)Nombre del producto
  3)Ruta para la imagen banner segun el html que lo solicite
  4) Ruta para contacto.html segun el html que lo solicite
  
  */
    const mostrarDescripcion = (listadoProductos,nombreProducto,rutaImgBanner,rutaPaginaContacto) => {
      for (let producto of listadoProductos) {
        if (producto.nombre == nombreProducto) {
          contenedor_ImagenDescripcion.innerHTML += `
              <section class="descripcion-producto__contenedor transicion">
              <button class="descripcion-producto__btn-cerrar"><i class="fas fa-times" data-tipo="producto" id="cerrar-imagen-descripcion"></i></button>
              <div class="descripcion-producto__img aparicion">
                <img src=""  id="imagen-descripcion" alt="Canasto ecológico dream"/>
              </div>
              <div class="descripcion-producto__informacion aparicion">
                <h3>${nombreProducto}</h3>
                <img class="descripcion-producto__informacion--banner" src="${rutaImgBanner}" alt="">
                <ol>
                  <li>Precio: ${producto.datos[0]}$</li>
                  <li>Garantia: 1 año</li>
                  <li>Cuotas: Hasta 6 sin interés</li>
                  <li>Stock: ${producto.datos[1]}</li>
                  <li>Color: ${producto.datos[2]}</li>
                </ol>
              </div>
              <div class="descripcion-producto__caracteristicas aparicion">
                <div class="descripcion-producto__caracteristicas--detalle">
                  <h3>Características</h3>
                  <ol>
                    <li>${producto.datos[3][0]}.</li>
                    <li>${producto.datos[3][1]}.</li>
                    <li>${producto.datos[3][2]}.</li>
                  </ol>
                </div>
                <div class="descripcion-producto__caracteristicas--detalle">
                  <h3>Medidas</h3>
                  <ol>
                    <li>Ancho/Largo/Alto</li>
                    <li>${producto.datos[4][0]}/${producto.datos[4][1]}/${producto.datos[4][2]}.</li>
                  </ol>
                </div>
                <div class="descripcion-producto__caracteristicas--detalle">
                  <a href="${rutaPaginaContacto}" target="_blank" class="descripcion-producto__caracteristicas--btn-mas-info animar-consulta">Consultar</a>
                </div>
              </div>
            </section>
              `;
        }
        /* EVENTO PARA CERRAR LA DESCRIPCION DE LA IMAGEN AL DARLE CLICK */
        contenedor_ImagenDescripcion.addEventListener("click", (e) => {
          let cerrar_img = e.target.getAttribute("id");
          if (cerrar_img == "cerrar-imagen-descripcion") {
            contenedor_ImagenDescripcion.classList.add("activada");
            contenedor_ImagenDescripcion.innerHTML = "";
          }
        });
      }
    };

    /* 
  Esta funcion se encarga de mostrar la imagen en pantalla:

  _Recibe como parametros:
  1) url de la imagen que va a mostrar( mediante su atributo data)
  2)Contenedor al que va a afectar: Contenedor 1 = Imagen ampliada/Contenedor 2 = Descripcion del producto

  */
    const mostrarImagen = (url_img, contenedor) => {
      let contenedorImgAmpliada = document.querySelector("#imagen-ampliada");
      let contenedorImgDescripcion = document.querySelector("#imagen-descripcion");
      switch (contenedor) {
        case 1:
          contenedorImgAmpliada.src = `${url_img}`;
          break;
        case 2:
          contenedorImgDescripcion.src = `${url_img}`;
      }
    };

    const filtrarImagen = (contenido) =>{
      document.querySelector("#contenedor-titulo-seccion").classList.add("activada");
      let valorAbuscar = contenido.toLowerCase();
      let mensaje_error = document.querySelector("#mensaje-error");
      let contador = 0;
      contenedor_articulo.forEach((contenedor) => {
        let seccion = contenedor.getAttribute("data-seccion");
        let categorias = contenedor.getAttribute("data-categorias");
        let nombreProducto = contenedor.getAttribute("data-nombre");
        nombreProducto = nombreProducto.toLowerCase();
        if( nombreProducto.indexOf(valorAbuscar) != -1 || valorAbuscar == seccion || valorAbuscar == categorias){
          contador++;
          mensaje_error.classList.add("activada");
          if(contenedor.classList.contains("activada")){
            contenedor.classList.remove("activada");
          }
        }else{
          if(valorAbuscar != seccion && valorAbuscar != categorias){
            contenedor.classList.add("activada");
            if(contador == 0){
              mensaje_error.classList.remove("activada");
            }
          }
        }
      });
    };
    const modificarTitulo = (valor,categoria) => {
      let titulo = document.querySelector(".seccion__titulo");
      let subrayado = document.querySelector(".seccion__subrayado");
      let color;
      let titulo_seccion = document.querySelector("#contenedor-titulo-seccion");
      titulo_seccion.classList.contains("activada") ? titulo_seccion.classList.remove("activada") : "";
      if(valor == "hogar"){
         titulo.innerHTML = categoria;
         color = "#133246";
      }else if(valor == "exteriores"){
        titulo.innerHTML = categoria;
        color = "#664c79";
      }else if(valor == "interiores"){
        titulo.innerHTML = categoria;
        color = "#51a081";
      }else{
        titulo.innerHTML = categoria;
        color = "#cc1728";
      }
      titulo.style.color = color;
      subrayado.style.background = color;
    };
    boton_ampliarImagen.forEach((e) => {
      e.addEventListener("click", (direccion) => {
        /* mediante su atributo data identifico que tipo de contenedor va a mostrar */
        let url_img = direccion.target.getAttribute("data-img");
        mostrarImagen(url_img, 1);
        contenedor_ImagenAmpliada.classList.remove("activada");
      });
    });
    /* Evento para cerrar la imagen ampliada */
    boton_cerrarImagenAmpliada.addEventListener("click", () => {
      contenedor_ImagenAmpliada.classList.add("activada");
    });
    boton_descripcionImagen.forEach((e) => {
      e.addEventListener("click", (datosProducto) => {
        /* mediante su atributo data identifico que tipo de contenedor va a mostrar */
        let url_img = datosProducto.target.getAttribute("data-img");
        let nombreProducto = datosProducto.target.getAttribute("data-nombre");
        let rutaImgBanner = datosProducto.target.getAttribute("data-ruta-banner");
        let rutaPaginaContacto = datosProducto.target.getAttribute("data-ruta-contacto");
        mostrarDescripcion(PRODUCTOS,nombreProducto,rutaImgBanner,rutaPaginaContacto
        );
        mostrarImagen(url_img, 2);
        contenedor_ImagenDescripcion.classList.remove("activada");
      });
    });

    /* EVENTO PARA FILTRAR IMAGENES  */
    let articulos = document.querySelectorAll(".menu-superior__subMenu a");
    let contenedor_articulo = document.querySelectorAll(".filtrar-productos"); //Selecciono todos los article de productos
    articulos.forEach((categoria) =>{
      categoria.addEventListener("click",(data)=>{
        data.preventDefault();
        let articulo = data.target.innerHTML.toLowerCase(); //CAPTURO EL VALOR DE LA CATEGORIA
        contenedor_articulo.forEach((e) =>{
          // Si el atributo data del contenedor es distinto a la categoria data del boton, entonces lo oculta
          if(articulo != e.getAttribute("data-categorias")){
            e.classList.add("activada");
          }else{
            e.classList.remove("activada");
          }
          modificarTitulo(data.target.getAttribute("data-seccion"),articulo);
        });
      });
    });
    /* PROBANDO EL EVENTO DE CAMBIO DINAMICO DE IMAGEN */
    let img = document.querySelectorAll(".contenedor-productos__img");
    img.forEach((data) => {
      //CAMBIO LA IMAGEN AL PASAR EL MOUSE POR ARRIBA
      data.addEventListener("mouseover",(e) => {
        let viejaURL = e.target.src;
        let indice = viejaURL.indexOf("-");
        let valorIndice = parseInt(viejaURL.slice(indice+1,indice+2))+1;
        let rutaDefinitiva = viejaURL.split("-",1);
        rutaDefinitiva = `${rutaDefinitiva}-${valorIndice}.jpg`;
        data.src = rutaDefinitiva;
        //VUELVO A COLOCAR LA IMAGEN ANTERIOR
        data.addEventListener("mouseout",()=>{
          data.src = viejaURL;
        });
      });
    });
    let barra_busqueda = document.querySelector("#barra-busqueda");
    barra_busqueda.addEventListener("keypress",(evento) =>{
      let teclaEnter = evento.key;
      if( teclaEnter == "Enter" && teclaEnter != " "){
        evento.preventDefault();
        filtrarImagen(evento.target.value);
      }
    });
  });//Fin del event load
})();
