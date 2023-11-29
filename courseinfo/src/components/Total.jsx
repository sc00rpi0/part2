const Total = ({ parts }) => {

    let total = 0;
    for (let index = 0; index < parts.length; index++) {
        total = total + parts[index].exercises
    }

    return (
        <p>
            <b>total of {total} exercises</b>
        </p>
    )
}

export default Total;