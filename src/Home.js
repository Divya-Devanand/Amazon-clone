import React from 'react'
import './Home.css'
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/GW/GW_Desktop_DotBulb_1500X600._CB658004804_.jpg"
                    alt=""
                />

                <div className="home_row">
                <Product
                    id= "12321341" 
                    title="The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback"
                    price={29.99} 
                    image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg" 
                    rating={5} />
                <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and whisk, 5 litre Glass Bowl"
                    price={239.0}
                    rating= {4}
                    image= "https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY218_.jpg"
                />
                </div>

                <div className="home_row">
                <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating= {3}
                    image= "https://m.media-amazon.com/images/I/61ZXTZMycXL._AC_UY218_.jpg"
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9- inch, wi-Fi, 120GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/811aBwuSuIL._AC_UY218_.jpg"
                />
                </div>
                
                <div className="home_row">
                <Product
                    id="98829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={1094.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41TXCe7NGML._AC_SY200_.jpg"
                />
                </div>
            </div>
        </div>
    )
}

export default Home
