import React from "react";
import { Link } from 'react-router-dom'

class middle extends React.Component {
  render() {
    return (
      <nav className="main_nav">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main_nav_content d-flex flex-row">
                {}
                <div className="main_nav_menu ml-auto">
                  <ul className="standard_dropdown main_nav_dropdown">
                    <li>
                      <a href="#">
                        Home
                        <i className="fas fa-chevron-down" />
                      </a>
                    </li>
                    <li className="hassubs">
                      <a href="#">
                        Super Deals
                        <i className="fas fa-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            Menu Item
                            <i className="fas fa-chevron-down" />
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Menu Item
                                <i className="fas fa-chevron-down" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item
                                <i className="fas fa-chevron-down" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item
                                <i className="fas fa-chevron-down" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="hassubs">
                      <a href="#">
                        Featured Brands
                        <i className="fas fa-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            Menu Item
                            <i className="fas fa-chevron-down" />
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Menu Item
                                <i className="fas fa-chevron-down" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item
                                <i className="fas fa-chevron-down" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item
                                <i className="fas fa-chevron-down" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="hassubs">
                      <a href="#">
                        Pages
                        <i className="fas fa-chevron-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="shop.html">
                            Shop
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="product.html">
                            Product
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="blog.html">
                            Blog
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="blog_single.html">
                            Blog Post
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="regular.html">
                            Regular Post
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="cart.html">
                            Cart
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            Contact
                            <i className="fas fa-chevron-down" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">
                        Blog
                        <i className="fas fa-chevron-down" />
                      </a>
                    </li>
                    <li>
                      <Link to="/aboutus">
                        Sobre a gente
                        <i className="fas fa-chevron-down" />
                      </Link>
                    </li>
                  </ul>
                </div>
                {}
                <div className="menu_trigger_container ml-auto">
                  <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                    <div className="menu_burger">
                      <div className="menu_trigger_text">menu</div>
                      <div className="cat_burger menu_burger_inner">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default middle;
