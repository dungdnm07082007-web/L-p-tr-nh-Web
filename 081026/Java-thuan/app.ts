interface Book {
    id: string | number;
    title: string;
    author: string;
    genre: string;
    year?: number;
}

// --- Dữ liệu ban đầu (Cập nhật từ data.js) ---
let books: Book[] = [
    { id: "1", title: "Dế Mèn Phiêu Lưu Ký", author: "a", genre: "Tiểu thuyết", year: 2000 },
    { id: "2", title: "Vũ Trụ Trong Vỏ Hạt Dẻ", author: "b", genre: "Khoa học", year: 2000 },
    { id: "3", title: "Đắc Nhân Tâm", author: "c", genre: "Kỹ năng", year: 2000 },
    { id: "4", title: "Lịch Sử Loài Người", author: "d", genre: "Lịch sử", year: 2000 },
    { id: "5", title: "Nhà Giả Kim", author: "e", genre: "Tiểu thuyết", year: 2000 },
    { id: "6", title: "Mèn Mén Phiêu Lưu Ký", author: "f", genre: "Tiểu thuyết", year: 2000 },
    { id: "7", title: "Vũ Trụ Ngoài Vỏ Hạt Dẻ", author: "g", genre: "Khoa học", year: 2000 },
    { id: "8", title: "Đắc An Tâm", author: "h", genre: "Kỹ năng", year: 2000 },
    { id: "9", title: "Lịch Sử Loài Rắn", author: "i", genre: "Lịch sử", year: 2000 },
    { id: "10", title: "Nhà Thật Kim", author: "e", genre: "Tiểu thuyết", year: 2000 }
];

// --- Quản lý Theme ---
const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;
let currentTheme = localStorage.getItem('vanilla-theme') || 'light';

function applyTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '☀️ Chế độ Sáng' : '🌙 Chế độ Tối';
    }
}
applyTheme(currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('vanilla-theme', currentTheme);
        applyTheme(currentTheme);
    });
}

// --- Hiển thị & Lọc Sách ---
const bookListContainer = document.getElementById('book-list') as HTMLElement;
const filterGenreSelect = document.getElementById('filter-genre') as HTMLSelectElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;

function renderBooks() {
    if (!bookListContainer) return;
    
    const selectedGenre = filterGenreSelect ? filterGenreSelect.value : 'Tất cả';
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = books.filter(b => {
        const matchGenre = selectedGenre === 'Tất cả' || b.genre === selectedGenre;
        const matchSearch = b.title.toLowerCase().includes(searchTerm) || 
                            b.author.toLowerCase().includes(searchTerm);
        return matchGenre && matchSearch;
    });

    if (filtered.length === 0) {
        bookListContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; opacity: 0.7;">Không tìm thấy sách phù hợp!</p>';
        return;
    }

    bookListContainer.innerHTML = filtered.map(b => `
        <div class="book-card">
            <span class="badge">${b.genre}</span>
            <h4 style="margin: 10px 0 5px 0;">${b.title}</h4>
            <p style="margin: 0 0 4px 0; opacity: 0.8; font-size: 0.9em;">Tác giả: ${b.author}</p>
            ${b.year ? `<p style="margin: 0; opacity: 0.6; font-size: 0.85em;">Năm xuất bản: ${b.year}</p>` : ''}
        </div>
    `).join('');
}

// Lắng nghe sự kiện
if (filterGenreSelect) filterGenreSelect.addEventListener('change', renderBooks);
if (searchInput) searchInput.addEventListener('input', renderBooks);

renderBooks();

// --- Xử lý Form Thêm Sách ---
const form = document.getElementById('book-form') as HTMLFormElement;

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        const titleInput = document.getElementById('title') as HTMLInputElement;
        const authorInput = document.getElementById('author') as HTMLInputElement;
        const genreSelect = document.getElementById('genre') as HTMLSelectElement;
        
        const errTitle = document.getElementById('err-title') as HTMLElement;
        const errAuthor = document.getElementById('err-author') as HTMLElement;
        const errGenre = document.getElementById('err-genre') as HTMLElement;

        if (!titleInput.value.trim()) {
            errTitle.style.display = 'block'; isValid = false;
        } else { errTitle.style.display = 'none'; }

        if (!authorInput.value.trim()) {
            errAuthor.style.display = 'block'; isValid = false;
        } else { errAuthor.style.display = 'none'; }

        if (!genreSelect.value) {
            errGenre.style.display = 'block'; isValid = false;
        } else { errGenre.style.display = 'none'; }

        if (isValid) {
            const newBook: Book = {
                id: Date.now().toString(),
                title: titleInput.value.trim(),
                author: authorInput.value.trim(),
                genre: genreSelect.value,
                year: new Date().getFullYear()
            };
            books.push(newBook);
            renderBooks();
            form.reset();
            alert('Thêm sách thành công!');
        }
    });
}