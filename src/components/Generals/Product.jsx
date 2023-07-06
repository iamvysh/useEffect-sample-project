import React from 'react'
import ProductsChild from './ProductsChild';

function Product(props) {

    // const { img, name, description, price} = props ;
  return (
    <div>
        {/* <img src={img} alt="products" />
        <h4>{name}</h4>
        <p>{description}</p>
        <h4>{price}</h4> */}

<ProductsChild img={props.img} name={props.name} description={props.description} price={props.price} />

        
    </div>
  )
}

export default Product