export function BookPreview({ book }) {
   const { title, listPrice, thumbnail } = book

    // Determine price color class
    const priceClass = listPrice.amount > 150 ? 'red' : listPrice.amount < 20 ? 'green' : ''

    return (
        <article className="book-preview">
            {/* 1. Sale Badge */}
            {listPrice.isOnSale && <div className="sale-badge">On Sale!</div>}

            {/* 2. Image Container (to maintain aspect ratio) */}
            <div className="image-container">
                <img src={thumbnail} alt={title} />
            </div>

            {/* 3. Text Content */}
            <div className="book-info">
                <h3 title={title}>{title}</h3>
                
                <p className={`price ${priceClass}`}>
                    {listPrice.amount} {listPrice.currencyCode === 'EUR' ? '€' : listPrice.currencyCode}
                </p>
            </div>
        </article>
    )
}