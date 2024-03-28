import React from 'react'

export default function ShopingList({items}) {




    return (
        <ul>
            {items.map((item) => <li style={{color: item.isCompleted ? "grey" : "blue"}}>

                {item.name} - {item.price}
            </li>

            )}
        </ul>
    );
}
