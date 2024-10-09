function calc() {
    const value = parseFloat(document.getElementById('inpt1').value);
    const measurement = document.getElementById('medidas').value;
    let result;

    if (isNaN(value)) {
        result = "Por favor, insira um valor válido.";
    } else {
        switch (measurement) {
            case 'teaspoon':
                result = value * 4.92892 + " ml"; // Colher de Chá
                break;
            case 'dessertspoon':
                result = value * 10 + " ml"; // Colher de Sobremesa
                break;
            case 'tablespoon':
                result = value * 14.7868 + " ml"; // Colher de Sopa
                break;
            case 'cup':
                result = value * 236.588 + " ml"; // Xícara de Chá
                break;
            case 'coffee-cup':
                result = value * 118.294 + " ml"; // Xícara de Café
                break;
            case 'milliliters':
                result = value + " ml"; // Mililitros
                break;
            case 'liters':
                result = value * 1000 + " ml"; // Litros
                break;
            case 'grams':
                result = value + " g"; // Gramas
                break;
            case 'kilograms':
                result = value * 1000 + " g"; // Quilogramas
                break;
            case 'pounds':
                result = value * 453.592 + " g"; // Libras
                break;
            default:
                result = "Medida desconhecida.";
        }
    }

    document.getElementById('result').innerText = result;
}
