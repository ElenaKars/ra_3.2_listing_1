Offer list
===

![CI](https://github.com/ElenaKars/ra_3.2_listing/actions/workflows/web.yml/badge.svg)

You need to display a list of Etsy.com catalog offers using the React library. After the data is loaded and rendered, the list should look like this:
![List of offers](./assets/preview.png)

## Offer list data

The data for the list is available in JSON format in the `data` directory. You need to copy them and store them as a constant in a variable. Use `JSON.parse` to create JS objects.

This is an _array of objects_, each _object_ represents one sentence. The offer has many properties available, but the application must use the following:
- `listing_id` — unique offer identifier, _number_;
- `url` — link to the offer, _string_;
- `MainImage` - information about the image, _object_, we need to use the `url_570xN` property to get the address of the main image, _string_;
- `title` — title of the offer, _string_;
- `currency_code` — currency code, _string_;
- `price` — price, _string_;
- `quantity` — available quantity, _number_.

## Component description

To display a list, create a `Listing` component that accepts the following attributes:
- `items` — list of offers, _array of objects_, empty array by default.

The component should generate the following HTML code based on the offer list:
```html
<div class="item list">
   <div class="item">
     <div class="item-image">
       <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
         <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg">
       </a>
     </div>
     <div class="item-details">
       <p class="item-title">Woodland Fairy</p>
       <p class="item-price">$3.99</p>
       <p class="item-quantity level-medium">12 left</p>
     </div>
   </div>
</div>
```

If the sentence name exceeds `50` characters, then only the first `50` characters should be displayed, and the `…` character must be added at the end.

When deriving the cost of the offer, it is necessary to take into account the currency. If the price is set:
- in US dollars, code `USD`, then display the price in the format `$50.00`;
- in euros, code `EUR`, then display the price in the format `€50.00`;
- in other cases, display the price in the format `50.00 GBP`, where `GBP` is the currency code.

Print the remainder, highlighting it depending on the amount, using the `level-*` class:
- `level-low` - if the remainder is less than `10` inclusive;
- `level-medium` - if the remainder is less than `20` inclusive;
- `level-high` — if the remainder is greater than `20`.

## Implementation

You need to display the offer list data using the `Listing` component.

Use the attached CSS file for styling.