import { useState } from "react"
import personService from '../services/persons'

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
            number: newNumber
        }
        const names = persons.map(person => person.name)
        if (names.indexOf(newName) > -1) {
            alert(`${newName} is already added to phonebook`)
        } else {
            personService.create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                })
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