const doanChao = document.getElementById("loiChao");

const thoiGianHienTai = new Date();
const gio = thoiGianHienTai.getHours();

let loiChao = "";

if (gio >= 5 && gio < 12) {
  loiChao = "Chào buổi sáng! Chúc bạn một ngày tốt lành";
} else if (gio >= 12 && gio < 18) {
  loiChao = "Chào buổi chiều! Đừng quên nghỉ ngơi nhé";
} else {
  loiChao = "Chào buổi tối! Cảm ơn bạn đã ghé thăm";
}
doanChao.innerText = loiChao;

const nutDoiMau = document.getElementById("btnDoiMau");
const danhSachMau = ["#ffffff", "#fdebd0", "#d6eaf8", "#d5f5e3", "#f5eef8"];
let viTriMau = 0; 

nutDoiMau.addEventListener("click", function () {
  viTriMau = (viTriMau + 1) % danhSachMau.length;  document.body.style.backgroundColor = danhSachMau[viTriMau];});