export function BookDetails({ book, onClearSelectedBook }) {
    const { title, listPrice, pageCount, publishedDate, thumbnail, description } = book;

    function getReadingLevel(count) {
        if (count > 500) return 'Serious Reading';
        if (count > 200) return 'Decent Reading';
        if (count < 100) return 'Light Reading';
        return '';
    }

    function getPublishAge(date) {
        const currYear = new Date().getFullYear();
        const age = currYear - date;
        if (age > 10) return 'Vintage';
        if (age <= 1) return 'New';
        return '';
    }

    function getPriceClass(amount) {
        if (amount > 150) return 'red';
        if (amount < 20) return 'green';
        return '';
    }

    return (
        <article className="book-details">
            <button onClick={onClearSelectedBook}>Back</button>
            
            <div className="img-container">
                <img src={thumbnail} alt={title} />
                {listPrice.isOnSale && <div className="sale">ON SALE!</div>}
            </div>

            <h2>{title}</h2>

            <h3 className={getPriceClass(listPrice.amount)}>
                Price: {listPrice.amount} {listPrice.currencyCode}
            </h3>

            <div className="book-stats">
                {getReadingLevel(pageCount) && <p>Reading: {getReadingLevel(pageCount)}</p>}
                {getPublishAge(publishedDate) && <p>Status: {getPublishAge(publishedDate)}</p>}
                <p>Pages: {pageCount}</p>
            </div>

            <p className="description">{description}</p>
        </article>
    );
}