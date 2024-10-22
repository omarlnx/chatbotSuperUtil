

const readlineSync = require('readline-sync');

// Declaración de variables
let nombreCliente;
let opcionPrincipal, opcionColchones, opcionTamaño, opcionPago;
let confirmarCompra, nombreColchon, tamañoColchon, metodoPago;
let total = 0;

nombreColchon = "";
tamañoColchon = "";
metodoPago = "";

// Presentación del chatbot
console.log("¡Hola! Bienvenido a BotSu, tu destino para un descanso perfecto.");
nombreCliente = readlineSync.question("¿Cómo te llamas?\n");//Guardar el datos de todos los clientes

console.log("¡Excelente " + nombreCliente + "! ¿Cómo te gustaría comenzar?");

// Función para mostrar el menú principal
function mostrarMenuPrincipal() {
    console.log("1. Explorar Colchones");
    console.log("2. Ver Ofertas");
    console.log("3. Hablar con un Asesor");
    console.log("4. Realizar Pedido");
    console.log("5. Consultas Frecuentes");
    console.log("6. Salir");
}

// Función para explorar colchones
function explorarColchones() {
    console.log("Selecciona una categoría:");
    console.log("1. Colchones de Espuma");
    console.log("2. Colchones de Muelles");
    console.log("3. Colchones Ecológicos");
    console.log("4. Colchones Premium");

    opcionColchones = parseInt(readlineSync.question());

    switch (opcionColchones) {
        case 1:
            console.log("Colchones de Espuma");
            console.log("1. Modelo A - $50 USD");
            console.log("2. Modelo B - $60 USD");
            console.log("3. Modelo C - $70 USD");

            opcionColchones = parseInt(readlineSync.question());

            if (opcionColchones === 1) {
				nombreColchon = "Modelo A";
			}
            else if (opcionColchones === 2) {
				nombreColchon = "Modelo B";
			}
            else if (opcionColchones === 3){ //ELSE IF PARA TODAS LAS DEMAS
				nombreColchon = "Modelo C";

			}else{
				console.log("SELECCIONA UNA OPCION VALIDA")
			}

            console.log("Haz seleccionado el modelo " + nombreColchon);
            console.log("Te comparto el enlace para ver todos los detalles https://www.mercadolibre.com.mx/");
            break;

        case 2:
            console.log("Colchones de Muelles");
            console.log("1. Modelo D - $50 USD");
            console.log("2. Modelo E - $60 USD");
            console.log("3. Modelo F - $70 USD");
            opcionColchones = parseInt(readlineSync.question());
            if (opcionColchones === 1) nombreColchon = "Modelo D";
            else if (opcionColchones === 2) nombreColchon = "Modelo E";
            else nombreColchon = "Modelo F";
            console.log("Haz seleccionado el modelo " + nombreColchon);
            console.log("Te comparto el enlace para comprar en la web https://www.mercadolibre.com.mx/");
            break;

        case 3:
            console.log("Colchones Ecológicos");
            console.log("1. Modelo G - $50 USD");
            console.log("2. Modelo H - $60 USD");
            console.log("3. Modelo I - $70 USD");
            opcionColchones = parseInt(readlineSync.question());
            if (opcionColchones === 1) nombreColchon = "Modelo G";
            else if (opcionColchones === 2) nombreColchon = "Modelo H";
            else nombreColchon = "Modelo I";
            console.log("Haz seleccionado el modelo " + nombreColchon);
            console.log("Te comparto el enlace para comprar en la web https://www.mercadolibre.com.mx/");
            break;

        case 4:
            console.log("Colchones Premium");
            console.log("1. Modelo J - $50 USD");
            console.log("2. Modelo K - $60 USD");
            console.log("3. Modelo L - $70 USD");
            opcionColchones = parseInt(readlineSync.question());
            if (opcionColchones === 1) nombreColchon = "Modelo J";
            else if (opcionColchones === 2) nombreColchon = "Modelo K";
            else nombreColchon = "Modelo L";
            console.log("Haz seleccionado el modelo " + nombreColchon);
            console.log("Te comparto el enlace para comprar en la web https://www.mercadolibre.com.mx/");
            break;

        default:
            console.log("Opción no válida.");
            break;
    }
}

// Función para ver ofertas
function verOfertas() {
    console.log("Estas son nuestras ofertas:");
    console.log("1. Modelo A: 20% de descuento");
    console.log("2. Modelo B: 10% de descuento en segunda unidad");
    console.log("3. Modelo C: Envío gratis");

    opcionColchones = parseInt(readlineSync.question());
    if (opcionColchones === 1) nombreColchon = "Modelo A";
    else if (opcionColchones === 2) nombreColchon = "Modelo B";
    else nombreColchon = "Modelo C";
    console.log("Haz seleccionado la oferta del " + nombreColchon);
}

// Función para realizar pedido
function realizarPedido() {
    console.log("Selecciona el colchón que deseas comprar:");
    console.log("1. Modelo A");
    console.log("2. Modelo B");
    console.log("3. Modelo C");
    opcionColchones = parseInt(readlineSync.question());
    if (opcionColchones === 1) nombreColchon = "Modelo A";
    else if (opcionColchones === 2) nombreColchon = "Modelo B";
    else nombreColchon = "Modelo C";

    console.log("Selecciona el tamaño:");
    console.log("1. Individual");
    console.log("2. Matrimonial");
    console.log("3. Queen");
    console.log("4. King");
    opcionTamaño = parseInt(readlineSync.question());
    if (opcionTamaño === 1) tamañoColchon = "Individual";
    else if (opcionTamaño === 2) tamañoColchon = "Matrimonial";
    else if (opcionTamaño === 3) tamañoColchon = "Queen";
    else tamañoColchon = "King";

    if (nombreColchon === "Modelo A") total = 500;
    else if (nombreColchon === "Modelo B") total = 600;
    else total = 700;

    console.log("El precio total del colchón " + nombreColchon + " en tamaño " + tamañoColchon + " es $" + total + " USD.");
    console.log("¿Cómo te gustaría pagar?");
    console.log("1. Tarjeta de crédito/débito");
    console.log("2. Pago en efectivo contra entrega");
    console.log("3. PayPal");
    opcionPago = parseInt(readlineSync.question());
    if (opcionPago === 1) metodoPago = "Tarjeta de crédito/débito";
    else if (opcionPago === 2) metodoPago = "Pago en efectivo contra entrega";
    else metodoPago = "PayPal";

    console.log("Confirmando tu compra...");
    console.log("Tu pago con " + metodoPago + " ha sido procesado correctamente.");
    console.log("Gracias por tu compra. Pronto recibirás tu pedido.");
}

// Función para mostrar preguntas frecuentes
function consultasFrecuentes() {
    console.log("1. ¿Cuánto tiempo tarda el envío?");
    console.log("2. ¿Puedo devolver un colchón si no me gusta?");
    console.log("3. ¿Qué garantía tienen los colchones?");
}

// Ciclo principal del chatbot
let salir = false;
while (!salir) {
    mostrarMenuPrincipal();
    opcionPrincipal = parseInt(readlineSync.question());
    
    switch (opcionPrincipal) {
        case 1:
            explorarColchones();
            break;
        case 2:
            verOfertas();
            break;
        case 3:
            console.log("Te estamos conectando con un asesor. Por favor, espera...");
            break;
        case 4:
            realizarPedido();
            break;
        case 5:
            consultasFrecuentes();
            break;
        case 6:
            console.log("¡Gracias por visitar nuestra tienda! Hasta pronto.");
            salir = true;
            break;
        default:
            console.log("Opción no válida.");
            break;
    }

    if (!salir) {
        let continuar = readlineSync.question("¿Deseas volver al menú principal? (si/no)\n");
        if (continuar.toLowerCase() !== "si") {
            salir = true;
            console.log("¡Gracias por visitar nuestra tienda! Hasta pronto.");
        }
    }
}










































































































































































































































