const { useState, useEffect } = React

export function BookFilter({ filterBy, setFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    function handleChange(ev) {
        const { type, value, name } = ev.target

        setFilterByToEdit(prev => (
            { ...prev, [name]: type === 'text' ? value : +value }))
    }

    useEffect(() => {
        setFilterBy(filterByToEdit)
    }, [filterByToEdit])

    return <section className="book-filter">
        <div className="search-container">
            <h2>Search:</h2>
            <input
                value={filterByToEdit.txt}
                onChange={ev => handleChange(ev)}
                type="text"
                name="txt"
                placeholder="title" />
        </div>

        <div className="filter-container">
            <h3>Filter By:</h3>
            <input
                value={filterByToEdit.price || ''}
                onChange={ev => handleChange(ev)}
                type="number"
                name="price"
                placeholder="Price" />
        </div>
    </section>
}