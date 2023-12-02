import Person from "./Person"

const Persons = ({ persons, filter }) => {

    const personsToShow = filter == '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <ul>
                {personsToShow.map((person, index) => <Person key={person.id} name={person.name} number={person.number} />)}
            </ul>
        </div>
    )
}

export default Persons