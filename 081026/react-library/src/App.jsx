import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GenreFilter from './components/GenreFilter';
import BookList from './components/BookList';
import { initialBooks } from './data';
import './index.css';

export default function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('react-app-theme') || 'light';
    });

    const [selectedGenre, setSelectedGenre] = useState('Tất cả');
    const [searchTerm, setSearchTerm] = useState('');
    const [books] = useState(initialBooks);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('react-app-theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    // Logic Lọc theo Thể loại và Tìm kiếm
    const filteredBooks = books.filter(book => {
        const matchGenre = selectedGenre === 'Tất cả' || book.genre === selectedGenre;
        const matchSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchTerm.toLowerCase());
        return matchGenre && matchSearch;
    });

    return (
        <div className="app-container">
            <Header theme={theme} onToggleTheme={toggleTheme} />
            <main>
                <GenreFilter 
                    selectedGenre={selectedGenre} 
                    onSelectGenre={setSelectedGenre}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />
                <BookList books={filteredBooks} />
            </main>
        </div>
    );
}