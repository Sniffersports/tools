function calcularPorcentagem() {
    const numeroX = parseFloat(document.getElementById("numeroX").value);
    const numeroY = parseFloat(document.getElementById("numeroY").value);
    
    if (!isNaN(numeroX) && !isNaN(numeroY)) {
        const resultado = (numeroX / numeroY) * 100;
        document.getElementById("resultado").textContent = `${resultado.toFixed(2)}%`;
    } else {
        document.getElementById("resultado").textContent = "Erro!.";
    
}
}
    function limparCampos() {
    document.getElementById("numeroX").value = "";
    document.getElementById("numeroY").value = "";
    document.getElementById("resultado").innerHTML = "";
}