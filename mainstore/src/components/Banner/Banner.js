import React from "react";
import { Link } from 'react-router-dom'

class banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div
          className="banner_background"
          style={{
            backgroundImage: "url(images/banner_background.jpg)"
          }}
        />
        <div className="container fill_height">
          <div className="row fill_height">
            <div className="banner_product_image">
              <img src="images/banner_product.png" alt />
            </div>
            <div className="col-lg-5 offset-lg-4 fill_height">
              <div className="banner_content">
                <h1 className="banner_text">Nova era dos computadores!</h1>
                <div className="banner_price">
                  <span>R$ 19.999,00</span>
                  R$ 19.998,00
                </div>
                <div className="banner_product_name">Macbook Pro Retina Display</div>
                <div className="button banner_button">
                  <Link to='/product'>Comprar agora!!!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default banner;
