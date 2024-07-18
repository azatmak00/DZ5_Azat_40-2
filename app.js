// function hidePhone(phoneNumber) {
//     const remove = phoneNumber.slice(0, -2) + 'xx'
//     return remove;
// }
// console.log(hidePhone('+996 555 123 123'));
//
// // --------------------------------------------------------
// function myReverse(number) {
//     let reversedNum = "";
//     for (let i = number.length - 1; i >= 0; i--) {
//         reversedNum += number[i];
//     }
//     return reversedNum;
// }
//
// console.log(myReverse("123456789"));



// funciton create for calculate the BMI
calculateBMI = () => {
    // get height and weight input values
    const height = document.getElementById("heightInput").value;
    const weight = document.getElementById("weightInput").value;

    // validate input
    if (height === "" || weight === "") {
        alert("Пожалуйста, введите значения роста и веса");
        return;
    }

    // calculate BMI
    let bmi = weight / (height / 100) ** 2;
    let result = "Ваш индекс массы тела  " + bmi.toFixed(2);

    let category = "";

    // determine BMI category
    if (bmi < 18.5) {
        category = "У вас недостаток веса";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "У вас вес в норме";
    } else if (bmi >= 25 && bmi < 30) {
        category = "У вас лишний вес";
    } else {
        category = "У вас ожирение,займитесь спортом)";
    }

    result += "<br> Category: " + category;

    // display result
    document.getElementById("result").innerHTML = result;
};
