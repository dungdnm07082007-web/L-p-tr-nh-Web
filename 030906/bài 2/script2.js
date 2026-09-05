const manHinh = document.getElementById("manHinh");
const tatCaNut = document.querySelectorAll("button");
let dangLaMacDinh = true;
tatCaNut.forEach(function (nut) {
  nut.addEventListener("click", function () {
    const giaTri = nut.dataset.value;

    if (giaTri === "clear") {
      manHinh.innerText = "0";
      dangLaMacDinh = true;
    } else if (giaTri === "=") {
      try {
        const ketQua = eval(manHinh.innerText);
        manHinh.innerText = ketQua;
      } catch (loi) {
        manHinh.innerText = "Lỗi";
      }
      dangLaMacDinh = true;
    } else {
      if (dangLaMacDinh) {
        manHinh.innerText = giaTri;
        dangLaMacDinh = false;
      } else {
        manHinh.innerText = manHinh.innerText + giaTri;
      }
    }
  });
});