export default function ShoppingListItem({ isCompleted, price, name }) {
    const styles = {
        color: isCompleted ? "blue" : "black",
        textDecoration: isCompleted ? "line-through" : "none",
    }
    
    return (
        <li draggable style={styles} >
            {name} - {price}
        </li>
    );
}
