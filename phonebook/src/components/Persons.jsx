import Person from "./Person"

const Persons = ({ persons, filter, removePerson }) => {

    const personsToShow = filter == '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <ul>
                {personsToShow.map((person) =>
                    <Person
                        key={person.id}
                        id={person.id}
                        name={person.name}
                        number={person.number}
                        removePerson={removePerson}
                    />)}
            </ul>
        </div>
    )
}

export default Persons