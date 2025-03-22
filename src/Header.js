import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket)
  return (
    <nav className='header'>
        <Link to="/">
        {/* Amazon Logo */}
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
        </Link>

        <div className='header__search'>
            {/* Search bar */}
            <input type="text" className='header__searchInput'></input>
        <   SearchIcon className="header__searchIcon"></SearchIcon>
        </div>

        {/* 3 Links */}
        <div className='header__nav'>

            {/*1 Link */}
            <Link to="/login" className="header__link">
                <div className='header__option'>
                    <span className='header__optionLine1'>Hello,</span>
                    <span className='header__optionLine2'>Sign in</span>
                </div>
            </Link>


            {/*2 Link */}
            <Link to="/" className="header__link">
                <div className='header__option'>
                    <span className='header__optionLine1'>Returns</span>
                    <span className='header__optionLine2'>& Orders</span>
                </div>
            </Link>

            {/*3 Link */}
            <Link to="/" className="header__link">
                <div className='header__option'>
                    <span className='header__optionLine1'>Your</span>
                    <span className='header__optionLine2'>Prime</span>
                </div>
            </Link>

            {/*4 Link */}
            <Link to="/checkout" className="header__link">
                <div className='header__optionBasket'>
                    {/*Basket icon */}
                    <ShoppingBasketIcon />
                    {/*Number of item */}
                    <span className='header_basketCount'>{basket?.length}</span>
                </div>
            </Link>
            
            
            




        </div>

        {/* Basket with number */}
    </nav>
  )
}

export default Header