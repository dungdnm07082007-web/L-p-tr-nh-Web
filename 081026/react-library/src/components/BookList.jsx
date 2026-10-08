import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
    if (books.length === 0) {
        return <p style={{ textAlign: 'center', opacity: 0.7, padding: '20px 0' }}>Không tìm thấy sách phù hợp!</p>;
    }

    return (
        <div className="book-grid">
            {books.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
