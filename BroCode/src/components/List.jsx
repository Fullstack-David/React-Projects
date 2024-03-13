

export default function List() {
    const fruits = [
        {id: 1, name: "David", age: 28},
        {id: 2, name: "Sofie", age: 30},
        {id: 3, name: "Peter", age: 69},
        { id: 4, name: "Patrik", age: 35 }];
    // Sort by alphabetic
    fruits.sort((a, b) => a.name.localeCompare(b.name));

    // Sort by age
    fruits.sort((a,b) => a.age - b.age)
    
        const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        {fruit.age}
        </li>)
    
    return (
        <ul>
            {listItems}
        </ul>
    );
}

 