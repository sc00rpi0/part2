import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const removePerson = id => {
    personService.remove(id)
      .then(() => {
        const remainingPersons = persons.filter(person => person.id !== id)
        setPersons(remainingPersons)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new person</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} removePerson={removePerson} />
    </div>
  )
}

export default App