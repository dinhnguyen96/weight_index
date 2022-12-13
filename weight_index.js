function weightCalulator()
{
    let weight = +document.getElementById("weight").value;
    let height = +document.getElementById("height").value;
    if (height <= 0 || weight <= 0)
    {
        alert("Dữ liệu nhập vào không hợp lệ !");
    }
    else
    {
        let bmi = weight / Math.pow(height, 2);
        if (bmi < 18.5)
        {
            alert("Underweight!");
        }
        else if (bmi >= 18.5 && bmi < 25) {
            alert("Normal!");
        }
        else if (bmi >= 25 && bmi < 30) {
            alert("Overweight!");
        }
        else
        {
            alert("Obese!");
        }
    }

}