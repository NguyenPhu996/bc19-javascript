// Mô hình 3 số

// Khối 1: 
// Bước 1: Người dùng nhập vào số nguyên dương có 2 ký số vd: 23,56,82
// Bước 2: Tổng của 2 ký số 23 = 2 + 3  = 5, 56 = 5 + 6 = 11

// Khối 2:
// Bước 1: Tao biến cho number = n
// Bước 2: Gán giá trị cho n
// Bước 3: Đặt lệnh if nếu người dùng nhập vào số không có 2 ký số thì không trả lại kết quả
// Bước 4: Tách số hàng đơn vị theo công thức units = n % 10
// Bước 5: Tách số hàng chục theo công thức tens = Math.trunc(int = (n / 10))
// Bước 6: CỘng 2 ký ố lại với nhau result = units + tens
// BƯớc 6: In kết quả ra màn hình console

// Khối 3: Kết quả cộng 2 ký số



function myFunction(n) {
    const number = n
    var n = document.getElementById('n').value;
    if (n.toString().length !== 2) return -1;
    const tens = Math.trunc(int = (n / 10));
    const units = (n % 10);
    const result = units + tens
    console.log("units + tens:", result);
    document.getElementById('result').value = result

}