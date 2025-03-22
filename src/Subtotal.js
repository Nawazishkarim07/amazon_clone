import React from 'react'
import { NumericFormat } from 'react-number-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import './Subtotal.css';

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='Subtotal'>
        {/* Price */}
        <NumericFormat 
         renderText={(value)=> (
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type='checkbox' /> This order contains a gift
            </small>
            </>
         )}
            value={getBasketTotal(basket)}  // Fixed typo here
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'} 
        />
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;
