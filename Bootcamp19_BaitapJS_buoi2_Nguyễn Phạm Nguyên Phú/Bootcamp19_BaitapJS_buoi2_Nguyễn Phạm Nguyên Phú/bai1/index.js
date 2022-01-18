const number1 = prompt("Nhập số thứ 1:")
const number2 = prompt("Nhập số thứ 2:")
const number3 = prompt("Nhập số thứ 3:")


if (number1 > number2 && number2 > number3) {
    console.log("Thứ tự tăng dần sẽ là:", number3, number2, number1);
} else if (number1 > number2 && number1 > number3) {
    console.log("Thứ tự tăng dần sẽ là:", number2, number3, number1);
} else if (number2 > number1 && number1 > number3) {
    console.log("Thứ tự tăng dần sẽ là:", number3, number1, number2);
} else if (number2 > number1 && number2 > number3) {
    console.log("Thứ tự tăng dần sẽ là:", number1, number3, number2);
} else if (number3 > number2 && number2 > number1) {
    console.log("Thứ tự tăng dần sẽ là:", number1, number2, number3);
} else if (number1 > number2 && number1 < number3) {
    console.log("Thứ tự tăng dần sẽ là:", number2, number1, number3);
}