import { LongTxt } from '../cmps/LongTxt.jsx'

export function BookDetails({ book, onClearSelectedBook }) {
    const { title, listPrice, pageCount, publishedDate, thumbnail, description } = book

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

    return (
        <article className="book-details">

            <div className="img-container">
                <img src={thumbnail} alt={title} />
                {listPrice.isOnSale && <h3 className="sale red">ON SALE!</h3>}
            </div>

            <h2>{title}</h2>

            <h3 className={getPriceClass(getPriceInShekels(listPrice.amount, listPrice.currencyCode))}>
                Price: {getPriceInShekels(listPrice.amount, listPrice.currencyCode)} ILS
            </h3>

            <div className="book-stats">
                {getReadingLevel(pageCount) && <p>Reading: {getReadingLevel(pageCount)}</p>}
                {getPublishAge(publishedDate) && <p>Status: {getPublishAge(publishedDate)}</p>}
                <p>Pages: {pageCount}</p>
            </div>

            <LongTxt txt={description} length={100} />
            <button onClick={onClearSelectedBook}>Back</button>
        </article>
    )
}