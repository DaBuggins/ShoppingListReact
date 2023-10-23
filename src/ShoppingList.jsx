import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

function ShoppingList() {
  [items, setItems] = useState([
    { id: 1, product: "banana", quantity: 2 },
    { id: 2, product: "apple", quantity: 3 }
  ]);
  const addItem = () => {};
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm />
    </div>
  );
}
