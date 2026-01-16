function Book() {
    return (
        <div className="page-content" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: 'white' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Books</h1>
                <p style={{ fontSize: '1.2rem', color: '#b0b0b0' }}>Explore our book collection.</p>
            </div>
        </div>
    );
}

export default Book;
