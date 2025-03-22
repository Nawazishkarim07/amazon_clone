import React from 'react'
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
        <img className='home__image'
         src="https://m.media-amazon.com/images/I/7182m-o1GvL._SX3000_.jpg"></img>


         {/* product id, title, price, rating, image */}
        <div className='home__row'>
            <Product
                id="10008"
                title="Samsung Galaxy ​S25 Ultra 5G (2025) ​512GB ​Storage​ + 12GB RAM SM-S938B ​Qualcomm Snapdragon 8 Elite SIM Free Factory Unlocked​ Android 15 Smartphone (Titanium Silver Blue)"
                price={1500}
                rating={5}
                image="https://m.media-amazon.com/images/I/61S2cYnbptL._AC_SY340_.jpg"
            />
            <Product
                id="10007"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5L Glass Bowl, Removable Splash Guard, 1000 W, Red"
                price={150.46}
                rating={4}
                image="https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SX679_.jpg"
            />
            <Product
                id="10006"
                title="Microsoft Xbox Series X 1TB Gaming Console Bundle: New, Sealed Series X 1TB Console System – Double Bonus: The Witcher 3 Game – System Bundle, Games, Accessories, Controller"
                price={1299.9}
                rating={5}
                image="https://m.media-amazon.com/images/I/51co7pol-zL.__AC_SY300_SX300_QL70_ML2_.jpg"
            />
            
            
        </div>
        <div className='home__row'>
            <Product
                id="10001"
                title="Apple Watch SE (2nd Gen) [GPS 44mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band M/L. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor"
                price={422.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/61ulExfWwBL._AC_SX679_.jpg"
            />
            <Product
                id="10002"
                title="Samsung 633 L, 3 Star, Frost Free, Double Door, Convertible 5-in-1 Digital Inverter, Side By Side Refrigerator with AI, WiFi & Water & Ice Dispenser (Silver, Refined Inox)"
                price={2329.98}
                rating={4}
                image="https://m.media-amazon.com/images/I/71jEVJJDVkL._SY879_.jpg"
            />
            <Product
                id="10003"
                title="Apple iPad Pro 11-Inch (M4): Built for Apple Intelligence, Ultra Retina XDR Display, 512GB, 12MP Front/Back Camera, LiDAR Scanner, Wi-Fi 6E — Space Black"
                price={1065.76}
                rating={5}
                image="https://m.media-amazon.com/images/I/61IsQRFoxJL._AC_SX679_.jpg"
            />
            <Product
                id="10004"
                title="Cuisinart Deluxe Ice cream Maker, Frozen yogurt maker & Sorbet Maker, Homemade desserts, Easy to use at home, 5 year guarantee, 2L capacity, Silver ICE30BCU"
                price={422.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/71jnvq9jP1L._AC_SX679_.jpg"
            />
        </div>
        <div className='home__row'>
            <Product
                id="10005"
                title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                price={1498.8}
                rating={4}
                image="https://m.media-amazon.com/images/I/61hYZXz8ptL._AC_SL1500_.jpg"
            />
        </div>

         {/* product id, title, price, rating, image */}
         {/* product id, title, price, rating, image */}
         {/* product id, title, price, rating, image */}
         {/* product id, title, price, rating, image */}
    </div>
  )
}

export default Home