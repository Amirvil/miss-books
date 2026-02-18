export function BookPreview({ book }) {
    return <article className="book-preview">
        <h2>{book.title}</h2>
        <p>{book.listPrice}</p>
        <img 
            src={`./assets/img/1.jpg`} 
            alt="" />
    </article>
}