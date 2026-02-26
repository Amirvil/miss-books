const { Link, useParams } = ReactRouterDOM

import { BookPreview } from './BookPreview.jsx'

export function BookList({ books, onRemoveBook}) {
    return <section className="book-list">
        <ul className="fluid-grid">
            {books.map(book => (
                <li key={book.id} className="book-card">
                    <BookPreview book={book} />
                    <div className="actions">
                        <Link to={`/books/${book.id}`}>
                        <button className="btn-details">Details</button>
                        </Link>

                        <Link to={`/books`}>
                            <button
                                onClick={() => onRemoveBook(book.id)}
                                className="btn-remove">x</button>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    </section>
}