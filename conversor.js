class Crypto {

    constructor(nombre, precio, creador, añoDeSalida) {

        this.nombre = nombre;
        this.precio = precio;
        this.creador = creador;
        this.añoDeSalida = añoDeSalida;

    }
}

const BTC = new Crypto("Bitcoin", 40000, "Satoshi Nakamoto", 2009);
const USD = new Crypto("Theter", 1, "J.R Willet", 2014);
const ADA = new Crypto("Cardano", 1.20, "Charles Hoskinson", 2017);
const XRP = new Crypto("Ripple", 0.70, "Chris Larsen", 2016);

const Cryptos = [BTC, USD, ADA, XRP];

const PrecioCryptos = [USD.precio, ADA.precio, XRP.precio,BTC.precio];

function comparar(a, b) {
    return a - b;
}
PrecioCryptos.sort(comparar).precio;

const CryptosPrecio = Cryptos.concat(PrecioCryptos)

function elegirMoneda1() {
    let monedaElegida = prompt("Elija una moneda para hacer el cambio")
    monedaElegida = monedaElegida.toLowerCase();
    while (monedaElegida != "usd" && monedaElegida != "btc" && monedaElegida != "xrp" && monedaElegida != "ada") {

        monedaElegida = prompt("Elija una moneda para hacer el cambio (Recuerde que solo aceptamos BTC, ADA, USD O XRP)")
        monedaElegida = monedaElegida.toLowerCase();
    }

    return monedaElegida;
}

function cantidadMoneda1(moneda1) {

    let cantidad1 = parseInt(prompt("elija la cantidad de " + moneda1 + " que desea convertir"));
    return cantidad1;
}

function elegirMoneda2(moneda1) {

    let segundaMoneda = prompt("Elija la segunda moneda a la que quiere convertir sus " + moneda1);
    segundaMoneda = segundaMoneda.toLowerCase();

    while (segundaMoneda != "usd" && segundaMoneda != "btc" && segundaMoneda != "xrp" && segundaMoneda != "ada") {

        segundaMoneda = prompt("Elija la segunda moneda para hacer el cambio (Recuerde que solo aceptamos BTC, ADA, USD O XRP)")
        segundaMoneda = segundaMoneda.toLowerCase();
    }
    return segundaMoneda;
}

function tipoDeMoneda1(moneda1, cantidad, BTC, ADA, XRP, USD) {

    let precioFijado;

    switch (moneda1) {

        case "usd":
            precioFijado = cantidad * USD.precio;
            break;

        case "btc":
            precioFijado = cantidad * BTC.precio;
            break;

        case "ada":
            precioFijado = cantidad * ADA.precio;
            break;

        case "xrp":
            precioFijado = cantidad * XRP.precio;
            break;

    }

    return precioFijado;
}

function tipoDeMoneda2(moneda2, BTC, ADA, XRP, USD) {

    let precioFijado2;

    switch (moneda2) {

        case "usd":
            precioFijado2 = USD.precio;
            break;

        case "btc":
            precioFijado2 = BTC.precio;
            break;

        case "ada":
            precioFijado2 = ADA.precio;
            break;

        case "xrp":
            precioFijado2 = XRP.precio;
            break;

    }

    return precioFijado2;
}

function conversor(precioMonedaUsuario, precioMonedaUsuario2) {

    let resultado;

    resultado = precioMonedaUsuario / precioMonedaUsuario2;
    return resultado;
}

moneda1 = elegirMoneda1();
cantidad = cantidadMoneda1(moneda1);
moneda2 = elegirMoneda2(moneda1);
precioMonedaUsuario = tipoDeMoneda1(moneda1, cantidad, BTC, ADA, XRP, USD);
precioMonedaUsuario2 = tipoDeMoneda2(moneda2, BTC, ADA, XRP, USD);
conversion = conversor(precioMonedaUsuario, precioMonedaUsuario2);
console.log(moneda1);
console.log(cantidad)
console.log(moneda2);
console.log(precioMonedaUsuario);
console.log(precioMonedaUsuario2);
console.log(conversion);
console.log(CryptosPrecio);