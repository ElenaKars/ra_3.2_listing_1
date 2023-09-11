import React from 'react';
import Item, { ItemData } from './Item';

interface ListingProps {
  items: ItemData[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map((i) => (
        <Item item={i} key={i.listing_id} />
      ))}
    </div>
  );
};

export default Listing;
