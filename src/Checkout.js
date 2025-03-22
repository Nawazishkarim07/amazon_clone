import React from 'react';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"; // Don't forget to import this!
import "./Checkout.css";
import Header from './Header';
import Subtotal from './Subtotal';


const Checkout = () => {
    const [{ basket }] = useStateValue();

    return (
        
        <div className='Checkout'>
            <div className='checkout_left'>
            <img 
                className='checkout__ad' 
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_-jpg' 
                alt='ad'
            />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {/* Listing all the items */}
                    {basket.map(item => {
                        console.log(item); // if you want to debug, put it here!

                        return (
                            <CheckoutProduct
                                
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}

                </div>
            )}
            </div>
            {basket.length > 0 &&(
                <div className='checkout_right'>
                    <Subtotal />
                    

                </div>
            )}

        </div>
    );
}

export default Checkout;
