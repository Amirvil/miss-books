const { useState, useEffect } = React

import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookDetails } from './BookDetails.jsx'

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadbooks()
    }, [filterBy])

    function loadbooks() {
        return bookService.query(filterBy)
            .then(setBooks)
    }

    function removeBook(bookId) {
        return bookService.remove(bookId)
            .then(() => setBooks(prev => prev.filter(book => book.id !== bookId)))
    }

    if (!books) return <div className="loader">
        <img src="./assets/img/loader.svg" alt="" />
    </div>


    return <div className="book-index">
        {!selectedBook &&
            <React.Fragment>
                <BookFilter
                    filterBy={filterBy}
                    setFilterBy={setFilterBy} />
                <BookList
                    books={books}
                    onSelectBook={setSelectedBook}
                    onRemoveBook={removeBook} />
            </React.Fragment>
        }
        {selectedBook &&
            <React.Fragment>
                <BookDetails
                    book={selectedBook}
                    onClearSelectedBook={() => setSelectedBook(null)} />
            </React.Fragment>}

    </div>
}