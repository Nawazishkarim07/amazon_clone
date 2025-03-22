import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // removing from basket...
        dispatch({
            type:"REMOVE_ITEM_FROM_THE_BASKET",
            id:id

        })
    }
  return (
    <><div className='checkout__product'>
          <img className='checkoutproduct__image' src={image}></img>
      
      <div className='checkout__info'>
            <p className='checkoutproduct__Title'>{title}</p>
        

        <p className="checkoutProduct_price">
        <small>$</small>
        < strong>{price}</strong>
        </p>
        
        <div className='checkoutproduct_rating'>
        {Array(rating)
        .fill()
        .map((_, i) => (
            <p key={i}>🌟</p>
        ))
        }
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
        </div>

        
        
        
        
        
        
        
        
        
        
        </>
  )
}

export default CheckoutProduct