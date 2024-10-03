function compararPalabras() {
    const palabra1 = document.getElementById('palabra1').value;
    const palabra2 = document.getElementById('palabra2').value;
    const resultado = document.getElementById('resultado');

    if (palabra1 < palabra2) {
        resultado.textContent = `"${palabra1}" viene antes que "${palabra2}" en orden alfabético.`;
    } else if (palabra1 > palabra2) {
        resultado.textContent = `"${palabra1}" viene después que "${palabra2}" en orden alfabético.`;
    } else {
        resultado.textContent = `"${palabra1}" y "${palabra2}" son iguales.`;
    }
}
