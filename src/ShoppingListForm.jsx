import { useState } from "react";
export default function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const handleChange = (evt) => {
    setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    addItem(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Product is: {formData.product} & Quantity: {formData.quantity}
      </h1>
      <label htmlFor="product">Product Name: </label>
      <input
        type="text"
        className="product"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />

      <label htmlFor="quantity">Qty: </label>
      <input
        type="number"
        className="quantity"
        placeholder="quantity"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button> Add Item </button>
    </form>
  );
}
