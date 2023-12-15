import React from "react";
import {
 Headingxl,
 ListItem,
 OrderedList,
 Paragraphmd,
 UnorderedList,
} from "@/components/typography/Heading";
import AuthPre from "@/components/mdx/AuthPre";

export default function AddToCart() {
 return (
  <React.Fragment>
   <Paragraphmd>
    The provided code snippets aim to integrate the `dataLayer` object for
    Google Tag Manager (GTM) with a Shopify store. The main goal is to send an
    event called `custom_add_to_cart` whenever a user visits a product page and
    clicks on the AddToCart button on Shopify.
   </Paragraphmd>
   <Headingxl>Head DataLayer Code</Headingxl>
   <Paragraphmd>
    This code initializes the `dataLayer` array if it hasn't been already. It
    then checks if the current page template is a 'product' page and renders a
    specific snippet called 'datalayer-product'.
   </Paragraphmd>
   <AuthPre>
    <code>
     {`<script>
    window.dataLayer = window.dataLayer || [];
</script>

{%- if template contains 'product' -%}
  {%- render 'datalayer-product', product: product -%}
{%- endif -%}
`}
    </code>
   </AuthPre>
   <Headingxl>Product DataLayer Code</Headingxl>
   This code snippet contains the main logic for populating the `dataLayer`
   object with product details whenever a product page is viewed:
   <OrderedList>
    <ListItem>It first captures the current variant of the product.</ListItem>
    <ListItem>
     It constructs an `itemObject` containing various product details.
    </ListItem>
    <ListItem>
     On document load, it pushes this data to the `dataLayer` object.
    </ListItem>
   </OrderedList>
   <AuthPre>
    <code>
     {`{%- liquid
  assign current_variant = product.selected_or_first_available_variant
-%}

<script>
  console.log("datalayer-product snippet is loaded")
  var itemObject = {
      item_id: {{ current_variant.id | json }},
      id: {{ current_variant.id | json }},
      item_name: {{ product.title | json }},
      currency: {{ shop.currency | json }},
      item_brand: {{ product.vendor | json }},
      item_category: {{ product.type | json }},
      item_variant: {{ current_variant.title | json }},
      price: {{ current_variant.price }} / 100,
      google_business_vertical: 'retail',
      quantity: 1
  }

  document.addEventListener('DOMContentLoaded', () => {
      const addToCartBtn = document.querySelector('[name="add"]')
      addToCartBtn?.addEventListener('click', () => {
          dataLayer.push({ ecommerce: null });
          dataLayer.push({
              event: "custom_add_to_cart",
              ecommerce: {
              currency: {{ shop.currency | json }},
                  items: [itemObject]
              }
          });
      })
  })
</script>
`}
    </code>
   </AuthPre>
   <Headingxl> Theme DataLayer Code</Headingxl>
   <Paragraphmd>
    This code renders the `head-datalayer` snippet. Depending on the setup of
    your Shopify theme, this is likely where the head datalayer code resides.
    Add this code GTM Body Code.
   </Paragraphmd>
   <AuthPre>
    <code>
     {`{% render 'head-datalayer' %}
`}
    </code>
   </AuthPre>
   <Headingxl> Steps to Add the DataLayer Code Snippets in Shopify:</Headingxl>
   <OrderedList>
    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Backup: </span>
      Before making any changes, always backup your current theme.
     </Paragraphmd>
    </ListItem>

    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Access Theme Files: </span>
      Login to your Shopify Admin. Then, go to Online Store {">"} Themes. Click
      on the "Actions" dropdown for your live theme and select "Edit code".
     </Paragraphmd>
    </ListItem>

    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Add Head DataLayer Code: </span>
      In the left sidebar, locate and click on `theme.liquid`. Insert the "Head
      DataLayer Code" snippet within the `{"<head>"}` tags.
     </Paragraphmd>
    </ListItem>

    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Add Product DataLayer Code: </span>
      Click "Add a new snippet" depending on your Shopify version. Name it
      `datalayer-product.liquid`. Insert the "Product DataLayer Code" snippet
      into this new file. Save changes.
     </Paragraphmd>
    </ListItem>

    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Add Theme DataLayer Code: </span>
      Determine where you want this code to render (usually within the `
      {"<head>"}` tags in `theme.liquid`). Insert the "Theme DataLayer Code"
      snippet in the desired location. Save changes.
     </Paragraphmd>
    </ListItem>

    <ListItem>
     <Paragraphmd>
      <span className='font-bold'>Test: </span>
      Visit a product page on your Shopify store. Open browser's developer
      console. Confirm that the `custom_add_to_cart` event is fired and the
      `dataLayer` object contains the correct product details.
     </Paragraphmd>
    </ListItem>
   </OrderedList>
   Remember, these instructions assume a typical Shopify setup. Some custom
   themes might require a different approach. Always test thoroughly before and
   after making changes.
  </React.Fragment>
 );
}
