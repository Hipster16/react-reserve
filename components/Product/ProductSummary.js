import { Item, ItemGroup, Label } from "semantic-ui-react";
import AddProductToCart from './AddProductToCart'

function ProductSummary({name, mediaUrl, _id, price, sku}) {
  return(
    <ItemGroup>
      <Item>
        <Item.Image size="medium" src={mediaUrl}/>
        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Description>
            <p>{price}</p>
            <Label>SKU: {sku}</Label>
          </Item.Description>
          <Item.Extra>
            <AddProductToCart productId={_id}/>
          </Item.Extra>
        </Item.Content>
      </Item>
    </ItemGroup>
  )
}

export default ProductSummary;
