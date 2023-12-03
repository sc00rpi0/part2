const Person = ({ id, name, number, removePerson }) => {

    const onDelete = (id, name) => {
        if (window.confirm(`delete ${name} ?`)) {
            removePerson(id)
        }
    }

    return <li>{name} {number}
        <button onClick={() => onDelete(id, name)}>
            delete
        </button></li>
}

export default Person