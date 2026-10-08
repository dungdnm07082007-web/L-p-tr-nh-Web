import React from 'react';

const genres = ['Tất cả', 'Tiểu thuyết', 'Khoa học', 'Kỹ năng', 'Lịch sử', 'Tâm linh'];

const GenreFilter = ({ selectedGenre, onSelectGenre, searchTerm, onSearchChange }) => {
    return (
        <div className="filter-container">
            <div>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>🔎 Tìm kiếm sách:</label>
                <input 
                    type="text"
                    className="search-input"
                    placeholder="Nhập tên sách hoặc tác giả..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
            
            <div>
                <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>🏷️ Lọc theo thể loại:</label>
                <div className="genre-buttons">
                    {genres.map(genre => (
                        <button 
                            key={genre}
                            className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GenreFilter;