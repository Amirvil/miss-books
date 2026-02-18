const { useState, useEffect } = React

import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/BookList.jsx'

export function BookIndex() {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadbooks()
    })

    function loadbooks() {
        return bookService.query()
            .then(setBooks)
    }

    if (!books) return <div className="loader">
        <img src="./assets/img/loader.svg" alt="" />
    </div>

    return <div className="book-index">
        <React.Fragment>
            <BookList books={books} />
        </React.Fragment>

    </div>
}