// NumeroCompra.js
// Generador simple de número de orden incremental persistente en localStorage

const STORAGE_KEY = 'numero_compra_actual';
const INICIO = 1000;

export function getNextNumeroCompra() {
  let actual = parseInt(localStorage.getItem(STORAGE_KEY), 10);
  if (isNaN(actual) || actual < INICIO) actual = INICIO;
  else actual += 1;
  localStorage.setItem(STORAGE_KEY, actual);
  return actual;
}

export function resetNumeroCompra() {
  localStorage.setItem(STORAGE_KEY, INICIO);
}
