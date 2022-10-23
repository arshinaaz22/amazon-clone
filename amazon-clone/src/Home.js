import React from 'react'
import './Home.css'
import washing_machine from './images/washing_machine.jpg';
import tv from './images/tv.jpg';
import makeup from './images/makeup.jpg';
import kitchen_utensils from './images/kitchen_utensils.jpg';
import mens_fashion from './images/mens_fashion.jpg';
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className = 'home__image' src='https://m.media-amazon.com/images/I/71FzIbuu1WL._SX3000_.jpg' alt="">

        </img>
        <div className='home__row'>
            <Product 
            id="1" 
            title="Up to 60% off | Upgrade to Smart TVs"
            price={11900.97}
            rating={5}
            image={tv}
            />
            
            <Product 
            id="2" 
            title="Starting ₹199 | Men's fashion"
            price={1150.97}
            rating={5}
            image={mens_fashion}
            />
            <Product 
            id="3" 
            title="Up to 70% off | Upgarde to latest Appliances & more"
            price={2000}
            rating={4}
            image={washing_machine}
            />
        </div>

        <div className='home__row'>
            <Product 
            id="1" 
            title="Handy kitchen items at a budget"
            price={3000}
            rating={3}
            image={kitchen_utensils}
            />
            
            <Product 
            id="2" 
            title="Deals on beauty | ​Up to 70% off"
            price={1000}
            rating={5}
            image={makeup}
            />

           <Product 
            id="3" 
            title="Up to 60% off | Home picks from small businesses"
            price={1134.97}
            rating={3}
            image="https://m.media-amazon.com/images/I/91duHslT5nL._AC_SY200_.jpg"
            />
            <Product 
            id="4" 
            title="Up to 65% off on daily essentials"
            price={11.97}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41XROPQ41BL._AC_SX184_.jpg"
            />
            

        </div>
        
        <div className="home__row">
          <Product
            id="1"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="2"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className='home__row'>
            <Product 
            id="1" 
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.97}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product 
            id="2" 
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={11.97}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />

            <Product 
            id="3" 
            title="Upto 50% off on K-pop & Anime Merch"
            price={500}
            rating={5}
            image="https://m.media-amazon.com/images/I/71XrgZtWC9L._AC_UL480_FMwebp_QL65_.jpg"
            />

        </div>
      </div>
    </div>
  )
}

export default Home
