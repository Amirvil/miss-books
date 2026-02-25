export function BookPreview({ book }) {
   const { title, listPrice, thumbnail } = book

    const priceClass = listPrice.amount > 150 ? 'red' : listPrice.amount < 20 ? 'green' : ''

    return (
        <article className="book-preview">
            {listPrice.isOnSale && <div className="sale-badge">On Sale!</div>}

            <div className="image-container">
                <img src={thumbnail} alt={title} />
            </div>

            <div className="book-info">
                <h3 title={title}>{title}</h3>
                
                <p className={`price ${priceClass}`}>
                    {listPrice.amount} {listPrice.currencyCode === 'EUR' ? '€' : listPrice.currencyCode}
                </p>
            </div>
        </article>
    )
}