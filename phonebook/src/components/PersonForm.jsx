import { useState } from "react"

const PersonForm = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const onNameChange = (e) => {
        setNewName(e.target.value)
    }

    const onNumberChange = (e) => {
        setNewNumber(e.target.value)
    }

    const addNewName = (e) => {
        e.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
        const names = persons.map(person => person.name)
        if (names.indexOf(newName) > -1) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
        }
        setNewName('')
        setNewNumber('')
    }

    return (
        <form onSubmit={addNewName}>
            <div>
                name: <input value={newName} onChange={onNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={onNumberChange} />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )
}

export default PersonForm