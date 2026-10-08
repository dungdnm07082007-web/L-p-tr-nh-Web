import React from 'react';

const Header = ({ theme, onToggleTheme }) => {
    return (
        <header style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            paddingBottom: '20px', 
            borderBottom: '1px solid var(--border-color)', 
            marginBottom: '24px'
        }}>
            <h2 style={{ margin: 0 }}>📚 Quản Lý Thư Viện React</h2>
            
            <button onClick={onToggleTheme} className="genre-btn">
                {theme === 'light' ? '🌙 Chế độ Tối' : '☀️ Chế độ Sáng'}
            </button>
        </header>
    );
};

export default Header;