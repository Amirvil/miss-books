const { useState } = React

import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { Books } from "./pages/Books.jsx"

export function RootCmp() {
    const [page, setPage] = useState('home')

    return <section className="app main-layout">
        <AppHeader page={page} onSetPage={setPage} />
        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'books' && <Books />}
        </main>
    </section>
}