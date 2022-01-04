// Mô hình 3 khối:

// Khối 1: Nhập vào số tiền cần quy đổi

// Khối 2:
// Bước 1: tạo biến cho VNĐ, USD
// Bước 2: gán giá trị cho tỷ giá USD
// Bước 3: Tính số tiền sau khi quy đổi bằng tỷ giá USD * số USD
// Bước 4: In kết quả ra màn hình console

// Khối 3: Số tiền VNĐ sau khi quy đổi

function myFunction() {
    const TY_GIA_USD = 23500
    var usd = document.getElementById('usd').value;
    const result = TY_GIA_USD * usd;
    console.log("TY_GIA_USD * usd:", result);
    document.getElementById('result').value = result
}