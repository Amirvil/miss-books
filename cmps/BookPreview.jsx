export function BookPreview({ book }) {
    return <article className="book-preview">
        <h2>{book.title}</h2>
        <p>{book.listPrice.amount}</p>
        <img 
            src={book.thumbnail} 
            alt="" />
    </article>
}