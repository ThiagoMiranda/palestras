import React from 'react'

export default () => (
    <div className="single_product">
    <div className="container">
        <div className="row">
            <div className="col-lg-2 order-lg-1 order-2">
                <ul className="image_list">
                    <li data-image="images/single_4.jpg"><img src="images/single_4.jpg" alt="" /></li>
                    <li data-image="images/single_2.jpg"><img src="images/single_2.jpg" alt="" /></li>
                    <li data-image="images/single_3.jpg"><img src="images/single_3.jpg" alt="" /></li>
                </ul>
            </div>
            <div className="col-lg-5 order-lg-2 order-1">
                <div className="image_selected"><img src="images/single_4.jpg" alt="" /></div>
            </div>
            <div className="col-lg-5 order-3">
                <div className="product_description">
                    <div className="product_category">Laptops</div>
                    <div className="product_name">MacBook Air 13</div>
                    <div className="rating_r rating_r_4 product_rating"><i></i><i></i><i></i><i></i><i></i></div>
                    <div className="product_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum. laoreet turpis, nec sollicitudin dolor cursus at. Maecenas aliquet, dolor a faucibus efficitur, nisi tellus cursus urna, eget dictum lacus turpis.</p></div>
                    <div className="order_info d-flex flex-row">
                        <form action="#">
                            <div className="clearfix" style={{ 'z-index': 1000 }}>
                                <div className="product_quantity clearfix">
                                    <span>Quantity: </span>
                                    <input id="quantity_input" type="text" pattern="[0-9]*" value="1" />
                                    <div className="quantity_buttons">
                                        <div id="quantity_inc_button" className="quantity_inc quantity_control"><i className="fas fa-chevron-up"></i></div>
                                        <div id="quantity_dec_button" className="quantity_dec quantity_control"><i className="fas fa-chevron-down"></i></div>
                                    </div>
                                </div>
                                <ul className="product_color">
                                    <li>
                                        <span>Color: </span>
                                        <div className="color_mark_container"><div id="selected_color" className="color_mark"></div></div>
                                        <div className="color_dropdown_button"><i className="fas fa-chevron-down"></i></div>

                                        <ul className="color_list">
                                            <li><div className="color_mark" style={{ background: '#999999' }}></div></li>
                                            <li><div className="color_mark" style={{ background: '#b19c83' }}></div></li>
                                            <li><div className="color_mark" style={{ background: '#000000' }}></div></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="product_price">$2000</div>
                            <div className="button_container">
                                <button type="button" className="button cart_button">Add to Cart</button>
                                <div className="product_fav"><i className="fas fa-heart"></i></div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
)