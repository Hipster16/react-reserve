import { Input } from "semantic-ui-react";

function AddProductToCart() {
  return <Input
    type="number"
    min="1"
    placeholder="Quantity"
    action={{
      color: "orange",
      content: "add to cart", 
      icon: "plus cart"
    }}
  />;
}

export default AddProductToCart;
