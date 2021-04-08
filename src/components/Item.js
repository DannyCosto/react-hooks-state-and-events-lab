import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleAddClick(){
    console.log(inCart,setInCart)
    setInCart((inCart) => !inCart)
  }
  return (
    <li className= {inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddClick}className={inCart ? "add" : "remove"}> {inCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
