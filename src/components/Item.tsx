import React from "react";

export interface ItemData {
    listing_id: string | number;
    state: string;
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: number;
    url?: string;
    MainImage?: {
      url_570xN: string;
    };
}
  
interface ItemProps {
    item: ItemData;
}
  
const Item: React.FC<ItemProps> = ({ item }) => {
    if (item.state === 'removed') return null;
  
    const title =
    item.title && item.title.length > 50
    ? item.title.substring(0, 50) + '...'
    : item.title || '';

  
    let price: string;
    switch (item.currency_code) {
      case 'USD':
        price = `$${item.price}`;
        break;
      case 'EUR':
        price = `€${item.price}`;
        break;
      default:
        price = `${item.price} ${item.currency_code}`;
    }

    const quantity =
      item.quantity !== undefined
        ? item.quantity <= 10
          ? 'low'
          : item.quantity <= 20
          ? 'medium'
          : 'high'
        : '';

    const imageUrl = item.MainImage?.url_570xN || '';

    return (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={imageUrl} alt="" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{price}</p>
          <p className={`item-quantity level-${quantity}`}>{item.quantity} left</p>
        </div>
      </div>
    );
}

export default Item;
