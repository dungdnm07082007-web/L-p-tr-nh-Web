const form = document.querySelector("#myForm");

// Lấy các phần tử Họ tên
const fullname = document.querySelector("#fullname");
const fullnameErr = document.querySelector("#fullname-error");

// Lấy các phần tử Email
const email = document.querySelector("#email");
const emailErr = document.querySelector("#email-error");

// Lấy các phần tử SĐT
const phone = document.querySelector("#phone");
const phoneErr = document.querySelector("#phone-error");

// 1. Validate Họ tên (Bắt buộc, >= 3 ký tự)
function validateFullname() {
  const ok = fullname.value.trim().length >= 3;
  fullnameErr.textContent = ok ? "" : "Họ tên tối thiểu 3 ký tự";
  fullname.classList.toggle("invalid", !ok);
  return ok;
}

// 2. Validate Email (Đúng định dạng)
function validateEmail() {
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  emailErr.textContent = ok ? "" : "Email không hợp lệ";
  email.classList.toggle("invalid", !ok);
  return ok;
}

// 3. Validate SĐT (Đúng 10 chữ số)
function validatePhone() {
  const ok = /^\d{10}$/.test(phone.value.trim());
  phoneErr.textContent = ok ? "" : "SĐT phải gồm 10 số";
  phone.classList.toggle("invalid", !ok);
  return ok;
}

// Báo lỗi ngay khi gõ (sự kiện input)
fullname.addEventListener("input", validateFullname);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);

// Chặn gửi form nếu còn lỗi
form.addEventListener("submit", (e) => {
  const isFullnameValid = validateFullname();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();

  if (!isFullnameValid || !isEmailValid || !isPhoneValid) {
    e.preventDefault();
  }
});
