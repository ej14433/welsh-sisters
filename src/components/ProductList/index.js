/* eslint-disable camelcase */
import React from 'react'
import {Card, Image, Label} from 'semantic-ui-react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const mapProductsToItems = products =>
  products.map(({node: {name, id, meta, mainImage, new: isNew}}) => {
    const price = meta.display_price && meta.display_price.with_tax.formatted
    console.log(price)
    return {
      as: Link,
      to: `/product/${id}/`,
      childKey: id,
      image: (
        <Image>
          {isNew ? (
            <Label color="red" ribbon style={{zIndex: '1'}}>
              New!
            </Label>
          ) : null}
          <Img
            sizes={mainImage.childImageSharp.sizes}
            alt={name}
            style={{
              background: `${'#fafafa'}`,
            }}
          />
        </Image>
      ),
      header: name,
      meta: <Card.Meta style={{color: 'dimgray'}}>{price}</Card.Meta>,
    }
  })

export default ({products}) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
)
