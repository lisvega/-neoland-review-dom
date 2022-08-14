//------Iteración #1: Interacción con el DOM

/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

/*Paso 1= Crear lista ul>li. dinamicamente en el html
Paso2= que imprima cada uno de los pasos. */

const newUl = document.createElement(`ul`);
document.body.appendChild(newUl);

countries.forEach((places) => {
    let li = document.createElement("li");
    li.innerHTML = places;
    newUl.appendChild(li);
});

/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/

//Primero llamo al elemento que quiero eliminar del Html//

const removeElement = document.querySelector(".fn-remove-me");

removeElement.remove();

//Luego recorro el array con un "foreach" y aplico el metodo "remove" para eliminar el elemento//

/*removeElement.forEach((element) => {
  element.remove();
});


/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

/*paso1= crear una constantes para unir Html con JS*/
const dataFunction = document.querySelector(`[data-function="printHere"]`);

/*paso2= creamos una constante a traves de la funcion "document.createElement" en la cual guardaremos una (ul). Luego esa constante la llamamos "newUldos".*/
const newUldos = document.createElement(`ul`);

/*paso3= accedemos a la direccion "dataFunction" a traves de la funcion "appenchild" (newUldos) para imprimir en el html nuestra constante newUldos que a su vez es la UL."*/
dataFunction.appendChild(newUldos);

/*paso4= recorremos el array "cars" con el bucle "foreach" y le creamos un contenedor denomimnado "liDos" para contener la lista a traves de la funcion "document.createElement(li)".
 */
cars.forEach((auto) => {
    let liDos = document.createElement("li");

    /* A traves de nuestra variable liDos guardamos cada auto(elemento) de nuestro "array cars", por ende cada elemento va a tomar el valor de cada auto de la array cars.*/
    liDos.innerHTML = auto;

    /*Con el metodo appendChild colocandole anteriormente nuestra constante "newUldos", lo que hicimos fue imprimir esta lista en el HTML.*/
    newUldos.appendChild(liDos);
});

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/

const countriesUno = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

//Paso1= creamos un div con el metodo createElement dentro del body y  con el appendchiled le insertamos al body el div creado/
const divOne = document.createElement(`div`);
document.body.appendChild(divOne);

//Paso2= creamos un UL con el metodo createElement dentro del div y  con el appendchiled le insertamos al div el Ul creado/
const newUlTres = document.createElement(`ul`);
divOne.appendChild(newUlTres);

//Paso3= con un bucle foreach recorremos los elementos de la array "countriesUno"
countriesUno.forEach((list) => {
    //3.1.Creamos los contenedores li que va a contener el "contenedor" h4 e "img" con el metodo createElement
    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");

    /*3.2.con el metodo innertext insertamoms en el h4 el texto: Title que se encuentra
     en el array countriesUNo (este metodo INNERTEXT se puede utilizar en todas las etiquetas de texto)*/
    h4.innerText = `${list.title}`;

    //3.3.con el .src insertamoms el url de imgUrl que se encuentra en el array countriesUNo. Con .src se accede directamente a la url de la imagen sin tener que utilizar el metodo inner.
    img.src = `${list.imgUrl}`;

    //3.4.Con el metodo appenchlid insertamos el h4 y la img en el contenedor li.
    li.appendChild(h4);
    li.appendChild(img);

    //3.5. Con el metodo appenChild insertamos el li en la UL (newUlTres) que es el padre.
    newUlTres.appendChild(li);
});

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*/

//Paso1: Relacionar el ejercicio 1.5 con el ejercicio 1.4
//Paso2: generar un boton js (caja)
//Paso3: generar una funcion para eliminar el ultimo elemento de la lista

//Paso1:

//Creamos un boton con el metodo "createElement" para poder eliminar la ultima imagen de la lista del ejercicio anterior. Luego el boton se lo insertamos en el cuerpo del HTML con el metodo "appendChild"
const buttonDelete = document.createElement(`button`);
document.body.appendChild(buttonDelete);

//Paso2:
//Insertamos adentro del boton el texto "Delete" con la funcion "innerHtml"
buttonDelete.innerHTML = "Delete";

//Paso3:
//Llamamos array buttonDelete y le añadimos la `funcion predeterminada de JS` ".addEventListener (en español `anadir escuchador de eventos`)". Dentro de esta funcion, primero vamos a hacer referencia al evento "click" (sin parametros). Para darle funcionalidad al "click", es decir cuando se apreta el boton se elimina la ultima imagen, tuvimos que crear otra funcion dentro de esta funcion la cual la armamos de la siguiente manera:
//a- llamamos al padre, que en este caso es la UL (newUlTres) creada en el punto anterior que contiene a las imagenes (hijos)
//b- luego le indicamos la funcion "removeChild", que se utiliza para eliminar dinamicamente elementos.
//c- Como debiamos eliminar el ultimo elemento de la lista (li), le sumamos al metodo "removeChild" los parametros que en este caso son: newUlTres (padre).(punto)+lastchild(hijo)/ Manera en que podemos atacar al hijo, es entrando por el padre.
buttonDelete.addEventListener("click", () => {
    newUlTres.removeChild(newUlTres.lastChild);
});


/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/



