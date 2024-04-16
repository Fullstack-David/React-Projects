/*
Använd index som en key endast när du är säker på att 
listans innehåll inte kommer att ändras. I alla andra 
fall är det bättre att använda en unik och stabil 
identifierare från dina data som key för att undvika 
potentiella problem med prestanda och beteende.
*/

/**
 * Om det inte finns en enskild unik identifierare, 
 * kan du kombinera flera värden för att skapa en nyckel. 
 * Till exempel, om du vet att kombinationen av item.name 
 * och item.price alltid kommer att vara unik i din lista, 
 * kan du använda dem tillsammans som en nyckel.
 * 
 */

import ShoppingListItem from "./ShoppingListItem"

const davids = [
    { name: "Egg", price: 10 + " kr", isCompleted: true },
    { name: "Milk", price: 2 + " kr", isCompleted: false },
    { name: "Fish", price: 20 + " kr", isCompleted: false },
    { name: "Bread", price: 3 + " kr", isCompleted: true }
  ]

export default function ShopingList() {

    return (
        <ul>
            {davids.map((david) => (
                <ShoppingListItem
                    key={`${david.name}-${david.price}`}
                    {...david} // för att förkorta det ännu mer kan vi avända oss av spread operator, för att propen är exakt samma som vi skicakr till vår "shoppingListItem komponent"
                />
            ))}
        </ul>
    );
}



