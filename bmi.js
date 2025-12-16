document.getElementById("bmiex").addEventListener("click", function () {
    let content = document.getElementById("bmiContent");

    if (content.classList.contains("bmi-hidden")) {
        content.classList.remove("bmi-hidden");
        content.classList.add("bmi-visible");

        setTimeout(() => {
            content.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
    } else {
        content.classList.remove("bmi-visible");
        content.classList.add("bmi-hidden");
    }
});

document.getElementById("submitBtn").addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    let BMI = weight / (height * height) * 10000;
    BMI = parseFloat(BMI.toFixed(2));

    document.getElementById("outputName").textContent = "Name: " + name;
    document.getElementById("OutputBMI").textContent = "BMI: " + BMI;

    let category = document.getElementById("bmiCategory");
    let message = document.getElementById("bmiMessage");
    let img = document.getElementById("bmiImage");

    category.className = "bmi-category";

    if (BMI < 18.5) {
        category.textContent = "Underweight";
        category.classList.add("cat-under");
        message.textContent = name + ", you may need more nutritious meals to reach a healthy weight.";
        img.src = "images/lean.png";
    }
    else if (BMI < 24.9) {
        category.textContent = "Normal Weight";
        category.classList.add("cat-normal");
        message.textContent = "Great job " + name + "! Maintain your healthy lifestyle.";
        img.src = "images/fit.png";
    }
    else if (BMI < 29.9) {
        category.textContent = "Overweight";
        category.classList.add("cat-over");
        message.textContent = name + ", small healthy habits can gradually improve your BMI.";
        img.src = "images/overweight.png";
    }
    else {
        category.textContent = "Obese";
        category.classList.add("cat-obese");
        message.textContent = name + ", gentle lifestyle improvements can help reduce your BMI safely over time.";
        img.src = "images/obese.png";
    }

    img.style.display = "block";
});
