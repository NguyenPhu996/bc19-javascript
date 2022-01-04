// Mô hình 3 khối

// Khối 1: Nhập vào 5 số thực bất kỳ

// Khối 2:
// Bước 1: Tạo biến cho 5 số thực
// Bước 2: Tính giá trị trung bình của 5 số = tổng của 5 số chia cho 5
// Bước 3: in kết quả ra console

// Khối 3: Kết quả 



function myFunction() {
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var n3 = document.getElementById('n3').value
    var n4 = document.getElementById('n4').value
    var n5 = document.getElementById('n5').value
    const result = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5)) / 5;
    console.log("(n1 + n2 + n3 + n4 + n5) / 5:", result);
    document.getElementById('result').value = result
}