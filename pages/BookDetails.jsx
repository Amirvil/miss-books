export function BookDetails({ book, onClearSelectedBook }) {
    return <article className="book-details">
        <h2>{book.title}</h2>
        <p>{book.listPrice}</p>
        <img
            src={`./assets/img/1.jpg`}
            alt="" />

        <button onClick={onClearSelectedBook}>Back</button>
    </article>
}