// Mô hình 3 khối:

// Khối 1: Nhập vào chiều dài, chiều rộng của hình chữ nhật

// Khối 2:
// Bước 1: Tạo biến cho chiều dài AB, chiều rộng AC của hình chữ nhật
// Bước 2: Tính chu vi của hình chữ nhật bằng công thức chu vi = (AB + AC) * 2
// Bước 3: In kết quả tính chu vi ra màn hình console
// Bước 4: TÍnh diện tích hình chữ nhật bằng công thức diện tích = AB * AC
// Bước 5: In kết quả tính diên tích ra màn hình console

// Khối 3: Kết quả chu vi và diện tích hình chữ nhật

function myFunction() {
    var AB = document.getElementById('AB').value;
    var AC = document.getElementById('AC').value;
    const Chu_vi = (parseInt(AB) + parseInt(AC)) * 2;
    console.log("(AB + AC) * 2:", Chu_vi);
    document.getElementById('Chu_vi').value = Chu_vi
    const Dien_tich = AB * AC;
    console.log("AB * AC:", Dien_tich);
    document.getElementById('Dien_tich').value = Dien_tich
}