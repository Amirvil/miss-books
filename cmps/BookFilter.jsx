const { useState, useEffect } = React

export function BookFilter({ filterBy, setFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    function handleChange(ev) {
		const field = ev.target.name
		const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value

		setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
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
                placeholder="Title" />
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