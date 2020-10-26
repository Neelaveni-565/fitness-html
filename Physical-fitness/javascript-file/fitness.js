function BMI() {
    var height = Number(document.getElementById("height").value);
    var weight = Number(document.getElementById("weight").value);
    var BMI =weight / Math.pow(height, 2)*10000;
    document.getElementById("output").innerText = Math.round(BMI * 100)/100;
    var output = Math.round(BMI * 100)/100
    if (output < 18.5)
        document.getElementById("comment").innerText = "Underweight";
    else if (output >= 18.5 && output <= 23)
        document.getElementById("comment").innerText = "Normal";
    else if (output>23)
        document.getElementById("comment").innerText = "Over weight";
}
