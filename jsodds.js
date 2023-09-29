function calcularOdds() {
    const oddsInput = parseFloat(document.getElementById("oddsInput").value);
    if (!isNaN(oddsInput)) {
        const probabilidade = 100 / oddsInput;
        document.getElementById("resultado").innerHTML = `Probabilidade: ${probabilidade.toFixed(2)}%`;
    } else {
        alert("Por favor, insira um valor válido para Odds Decimais.");
    }
}

function calcularProbabilidade() {
    const probInput = parseFloat(document.getElementById("probInput").value);
    if (!isNaN(probInput)) {
        const odds = 100 / probInput;
        document.getElementById("resultado").innerHTML = `Odds Decimais: ${odds.toFixed(2)}`;
    } else {
        alert("ERRO.");
    }
}

function limparCampos() {
    document.getElementById("oddsInput").value = "";
    document.getElementById("probInput").value = "";
    document.getElementById("resultado").innerHTML = "";
}