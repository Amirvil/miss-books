const { useState, useEffect } = React

export function BookFilter({ filterBy, setFilterBy }) {
    const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)

    function handleChange(ev) {
        const { type, value, name } = ev.target

        setFilterByToEdit(prev => (
            { ...prev, [name]: type === 'text' ? value : +value }))
    }

    useEffect(() => {
        setFilterBy(filterByToEdit)
    }, [filterByToEdit])

    return <section className="book-filter">
        <p>Search:</p>
        <input 
            value={filterByToEdit.txt}
            onChange={ev => handleChange(ev)}
            type="text" 
            name="txt"
            placeholder="title"/>

        <input 
            value={filterByToEdit.price || ''}
            onChange={ev => handleChange(ev)}
            type="number" 
            name="price"
            placeholder="Price"/>
    </section>
}