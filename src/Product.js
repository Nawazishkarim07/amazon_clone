import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';




const Product = ({id, title, price, rating, image}) => {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () =>{
        //add item to basket
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image

            }
        })
    };
  return (
    
    <div className='product'>
        <p className='product__title'>{title}</p>
        <p className='product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product_rating'>
            {Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐️</p>
                ))
            }
        </div>
        <img src={image}></img>
        <button onClick={addToBasket}>Add to basket</button>

    </div>
  )
}

export default Product