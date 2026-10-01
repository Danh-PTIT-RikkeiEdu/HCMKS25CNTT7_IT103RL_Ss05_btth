let code = " med-rhm-0815-bhyt ";
let codeSeparation = code.trim().toUpperCase().split("-");
let codeValidate = code.trim().toUpperCase();

let specialty = "";
let nameSpecialty = "Chưa xác định";
let isValid = true;
let price = 150000;
let discount = 0;
const line = "=".repeat(35);

if (codeSeparation[0] === "MED") {
    isValid = true;
} else {
    isValid = false;

}


if (isValid === true) {
    specialty = codeSeparation[1];

    if (specialty === "RHM") {
        nameSpecialty = "Răng hàm mặt"
    } else if (specialty === "TAI") {
        nameSpecialty = "Tai mũi họng"
    } else if (specialty === "MAT") {
        nameSpecialty = "Mắt"
    } else {
        nameSpecialty = "Không xác định"
    }

    if (codeSeparation[3] === "BHYT") {
        discount = price * 0.8;
    }

    console.log(`${line}
Mã số khám: ${codeValidate}
Số thứ tự: ${codeSeparation[2]}
Chuyên khoa: ${nameSpecialty}
Giảm giá (nếu có BHYT): ${discount}      
${line}`);
    
} else {
    console.log("Lỗi! Mã phiếu không hợp lệ");
    
}
