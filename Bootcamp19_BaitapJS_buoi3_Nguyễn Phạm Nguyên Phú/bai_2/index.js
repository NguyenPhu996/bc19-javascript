// Mô hình 3 khối

// Khối 1: Nhập vào 5 số thực bất kỳ

// Khối 2:
// Bước 1: Tạo biến cho 5 số thực
// Bước 2: Tính giá trị trung bình của 5 số = tổng của 5 số chia cho 5
// Bước 3: in kết quả ra console

// Khối 3: Kết quả 

const submitEl = document.getElementById("submit");

submitEl.onclick = function(evt) {
    const number1 = +document.getElementById('n1').value
    const number2 = +document.getElementById('n2').value
    const number3 = +document.getElementById('n3').value
    const number4 = +document.getElementById('n4').value
    const number5 = +document.getElementById('n5').value

    const result = (number1 + number2 + number3 + number4 + number5) / 5

    const resultEl = document.getElementById("result");
    document.getElementById('result').value = result
}