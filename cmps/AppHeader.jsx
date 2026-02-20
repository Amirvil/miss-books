export function AppHeader({ page = 'home', onSetPage }) {

    return <header className="app-header">
        <section className="header-container">
            <h1><span className="white">Miss</span> Books</h1>
            <nav className="app-nav">
                <a href="#" className={(page === 'home') ? 'active' : ''}
                    onClick={(ev) => onSetPage('home')}>
                    Home
                </a>

                <a href="#" className={(page === 'about') ? 'active' : ''}
                    onClick={(ev) => onSetPage('about')}>
                    About
                </a>

                <a href="#" className={(page === 'books') ? 'active' : ''}
                    onClick={(ev) => onSetPage('books')}>
                    Books
                </a>
            </nav>
        </section>
    </header>
}
