// Mô hình 3 khối

// Khối 1: nhập vào số ngày làm

// Khối 2: 

// Bước 1: tạo biến lương 1 ngày
// Bước 2: tạo biến cho số ngày làm
// Bước 3: gán giá trị cho lương 1 ngày
// Bước 4: tạo lệnh if nếu số ngày làm là số âm thì không trả lại kết quả
// Bước 5: lấy số ngày làm người dùng nhập vào * lương 1 ngày
// Bước 6: in kết quả ra console

// Khối 3: Số tiền lương nhân viên có được

const payEl = document.getElementById("pay");

payEl.onclick = function(evt) {

    const days = +document.getElementById('days').value;
    const wage = 100000

    const result = wage * days;
    const wrapperEl = document.getElementById("result-wrapper");
    const resultEl = document.getElementById("salary-result");
    document.getElementById("salary-result").value = result
};