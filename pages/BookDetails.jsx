const { useState, useEffect } = React
const { Link, useParams, useNavigate } = ReactRouterDOM

import { bookService } from '../services/book.service.js'
import { LongTxt } from '../cmps/LongTxt.jsx'

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.error('Problem getting book:', err)
                navigate('/books')
            })
    }

    if (!book) return <section className="book-details">Loading...</section>

    const { title, authors, listPrice, pageCount, publishedDate, thumbnail, description, language, categories } = book

    function getReadingLevel(count) {
        if (count > 500) return 'Serious Reading'
        if (count > 200) return 'Decent Reading'
        if (count < 100) return 'Light Reading'
        return ''
    }

    function getPublishAge(date) {
        const currYear = new Date().getFullYear()
        const age = currYear - date;
        if (age > 10) return 'Vintage'
        if (age <= 1) return 'New'
        return ''
    }

    function getPriceClass(amount) {
        if (amount > 250) return 'red'
        if (amount < 100) return 'green'
        return ''
    }

    function getPriceInShekels(amount, currencyCode) {
        let result = amount
        if (currencyCode === 'EUR') result = amount * 3.67
        else if (currencyCode === 'USD') result = amount * 3.11
        return (result.toFixed(2))
    }

    function getBookLanguage(language) {
        switch (language) {
            case 'he':
                return 'Hebrew'
            case 'sp':
                return 'Spanish'
            default:
                return 'English'
        }
    }

    return (
        <article className="book-details">

            <div className="img-container">
                <img src={thumbnail} alt={title} />

            </div>

            <div className="book-stats">
                {listPrice.isOnSale && <h3 className="sale red">ON SALE!</h3>}
                <h2>{title}</h2>
                <p>Authors: {authors}</p>
                <p>Published: {publishedDate} - {getPublishAge(publishedDate)}</p>
                <p>Language: {getBookLanguage({ language })}</p>
                <p>Categories: {categories.join(', ')}</p>
                <p>Pages: {pageCount}</p>
                <p>Reading: {getReadingLevel(pageCount)}</p>
                <h3 className={getPriceClass(getPriceInShekels(listPrice.amount, listPrice.currencyCode))}>
                    Price: {getPriceInShekels(listPrice.amount, listPrice.currencyCode)} ILS
                </h3>
                <LongTxt txt={description} length={100} />

            </div>
            <Link to={`/books`}>
                <button>Back</button>
            </Link>
            <Link to={`/books`}>
                <button>Next</button>
            </Link>
            <Link to={`/books`}>
                <button>Previus</button>
            </Link>
        </article>
    )
}