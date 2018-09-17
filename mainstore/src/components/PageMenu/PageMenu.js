import React from "react";
import { Link } from 'react-router-dom'

class pageMenu extends React.Component {
  render() {
    return (
      <div className="page_menu">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page_menu_content">
                <div className="page_menu_search">
                  <form action="#">
                    <input
                      type="search"
                      required="required"
                      className="page_menu_search_input"
                      placeholder="Search for products..."
                    />
                  </form>
                </div>
                <ul className="page_menu_nav">
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Language
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          English
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Italian
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Spanish
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Japanese
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Currency
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          US Dollar
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          EUR Euro
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          GBP British Pound
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          JPY Japanese Yen
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item">
                    <a href="#">
                      Home
                      <i className="fa fa-angle-down" />
                    </a>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Super Deals
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          Super Deals
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li className="page_menu_item has-children">
                        <a href="#">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                        <ul className="page_menu_selection">
                          <li>
                            <a href="#">
                              Menu Item
                              <i className="fa fa-angle-down" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Menu Item
                              <i className="fa fa-angle-down" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Menu Item
                              <i className="fa fa-angle-down" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Menu Item
                              <i className="fa fa-angle-down" />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Featured Brands
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          Featured Brands
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item has-children">
                    <a href="#">
                      Trending Styles
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="page_menu_selection">
                      <li>
                        <a href="#">
                          Trending Styles
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Menu Item
                          <i className="fa fa-angle-down" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="page_menu_item">
                    <a href="blog.html">
                      blog
                      <i className="fa fa-angle-down" />
                    </a>
                  </li>
                  <li className="page_menu_item">
                    <Link to='/aboutus'>
                      Sobre a gente
                      <i className="fa fa-angle-down" />
                    </Link>
                  </li>
                </ul>
                <div className="menu_contact">
                  <div className="menu_contact_item">
                    <div className="menu_contact_icon">
                      <img src="images/phone_white.png" alt />
                    </div>
                    +38 068 005 3570
                  </div>
                  <div className="menu_contact_item">
                    <div className="menu_contact_icon">
                      <img src="images/mail_white.png" alt />
                    </div>
                    <a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default pageMenu;
