import React from 'react'

const ProductsChild = (props) => {



    const { img, name, description, price} = props ;
  return (
    <div>


        
        <img src={img} alt="products" />
        <h4>{name}</h4>
        <p>{description}</p>
        <h4>{price}</h4>




    </div>
  )
}

export default ProductsChild