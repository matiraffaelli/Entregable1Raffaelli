// SIMULADOR DE ENTRADAS - BOCA


// Variables y arrays
const partidos = [
  { nombre: "Boca Juniors vs River Plate", precio: 25000 },
  { nombre: "Boca Juniors vs Racing Club", precio: 20000 },
  { nombre: "Boca Juniors vs San Lorenzo", precio: 18000 },
];

const DESCUENTO = 0.10; // 10% de descuento por 3 o más entradas

// Funciones 

// Muestra la lista de partidos disponibles
function mostrarPartidos() {
  console.log("Partidos disponibles:");
  let lista = "";
  for (let i = 0; i < partidos.length; i++) {
    lista += `${i + 1}. ${partidos[i].nombre} - $${partidos[i].precio}\n`;
  }
  return lista;
}

// Calcula el total con posible descuento
function calcularTotal(precio, cantidad) {
  let total = precio * cantidad;
  if (cantidad >= 3) {
    alert("🎉 ¡Descuento aplicado! 10% menos por comprar 3 o más entradas.");
    total -= total * DESCUENTO;
  }
  return total;
}

// Muestra el resumen de la compra
function mostrarResumen(partido, cantidad, total) {
  const mensaje = 
  `✅ COMPRA CONFIRMADA ✅\n\n` +
  `Partido: ${partido.nombre}\n` +
  `Precio unitario: $${partido.precio}\n` +
  `Cantidad de entradas: ${cantidad}\n` +
  `Total a pagar: $${total}\n\n` +
  `¡Gracias por alentar a Boca Juniors! 💙💛💙`;
  
  alert(mensaje);
  console.log("Detalle de compra:", { partido: partido.nombre, cantidad, total });
}

// Programa principal
function simuladorEntradas() {
  alert("Bienvenido al simulador de entradas de Boca Juniors ⚽");
  
  let seguir = true;

  while (seguir) {
    let lista = mostrarPartidos();
    let opcion = parseInt(prompt("Elegí el número del partido:\n\n" + lista));

    // Validación de opción
    if (opcion >= 1 && opcion <= partidos.length) {
      const partidoSeleccionado = partidos[opcion - 1];
      let cantidad = parseInt(prompt(`Elegiste: ${partidoSeleccionado.nombre}\n\n¿Cuántas entradas querés comprar?`));

      if (isNaN(cantidad) || cantidad <= 0) {
        alert("⚠️ Ingresá una cantidad válida.");
      } else {
        const total = calcularTotal(partidoSeleccionado.precio, cantidad);
        mostrarResumen(partidoSeleccionado, cantidad, total);
      }

    } else {
      alert("❌ Opción no válida. Intentá de nuevo.");
    }

    seguir = confirm("¿Querés simular otra compra?");
  }

  alert("Gracias por su compra. ¡Nos vemos en la Bombonera! 🏟️");
}

// ----- Llamada a la función principal -----
simuladorEntradas();
