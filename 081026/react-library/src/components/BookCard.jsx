import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <span className="badge">{book.genre}</span>
            <h3 style={{ margin: '15px 0 8px 0' }}>{book.title}</h3>
            <p style={{ margin: '0 0 4px 0', opacity: 0.8 }}>Tác giả: {book.author}</p>
            {book.year && <p style={{ margin: 0, opacity: 0.6, fontSize: '0.85em' }}>Năm xuất bản: {book.year}</p>}
        </div>
    );
};

export default BookCard;
