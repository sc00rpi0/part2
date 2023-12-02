const Filter = ({ filter, setFilter }) => {

    const onFilterChange = (e) => {
        setFilter(e.target.value)
    }

    return (
        <div>
            filter shown with
            <input value={filter} onChange={onFilterChange} />
        </div>
    )
}

export default Filter