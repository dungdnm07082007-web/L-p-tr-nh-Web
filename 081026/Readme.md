- **Cách dựng giao diện (UI):**
  - Phần A: Viết HTML trực tiếp, cập nhật giao diện thủ công thông qua `document.getElementById()`
  - Phần B: Khai báo dạng **JSX**

- **Chia nhỏ giao diện (Component):**
  - Phần A: Gom chung giao diện trong một file `index.html` lớn
  - Phần B: Chia nhỏ thành các **Component** độc lập 

- **Quản lý dữ liệu:**
  - Phần A: Tạo mảng dữ liệu `books` và phải gọi hàm `renderBooks()` thủ công để vẽ lại màn hình.
  - Phần B: Sử dụng **State**, mỗi khi State thay đổi, React tự động cập nhật lại giao diện

- **Xử lý sự kiện:**
  - Phần A: Lắng nghe sự kiện bằng `addEventListener('click', ...)` thủ công
  - Phần B: Gắn thuộc tính trực tiếp trên thẻ như `onClick={...}`, `onChange={...}`

- **Lưu Chế độ Sáng/Tối (Dark Mode):**
  - Phần A (JS Thuần): Thay đổi thuộc tính `data-theme` trên thẻ HTML thông qua thao tác DOM
  - Phần B (React): Sử dụng Hook `useEffect` để tự động cập nhật CSS Variable khi State `theme` thay đổi

- **Cách chạy dự án:**
  - Phần A (JS Thuần): Biên dịch TypeScript bằng `npx tsc` và chạy thông qua **Live Server**
  - Phần B (React): Chạy lệnh `npm run dev` qua máy chủ Vite


- **Nên dùng JS Thuần (Phần A) khi:**
  - Muốn nắm chắc bản chất cách trình duyệt web thao tác với DOM
  - Tự làm các trang web nhỏ, đơn giản, không muốn cài đặt các thư viện hay công cụ phức tạp

- **Nên dùng React (Phần B) khi:**
  - Xây dựng các ứng dụng web phức tạp, giao diện thay đổi liên tục theo tương tác của người dùng
  - Cần chia nhỏ dự án thành nhiều thành phần để làm việc nhóm hiệu quả hơn