import React from "react";

class header extends React.Component {
  render() {
    return (
      <div className="header_main">
        <div className="container">
          <div className="row">
            {}
            <div className="col-lg-6 col-sm-3 col-3 order-1">
              <div className="logo_container">
                <div className="logo">
                  <a href="#">MainStore</a>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
              <div className="header_search">
                <div className="header_search_content">
                  <div className="header_search_form_container">
                    <form action="#" className="header_search_form clearfix">
                      <input
                        type="search"
                        required="required"
                        className="header_search_input"
                        placeholder="Search for products..."
                      />
                      <div className="custom_dropdown">
                        <div className="custom_dropdown_list">
                          <span className="custom_dropdown_placeholder clc">
                            All Categories
                          </span>
                          <i className="fas fa-chevron-down" />
                          <ul className="custom_list clc">
                            <li>
                              <a className="clc" href="#">
                                All Categories
                              </a>
                            </li>
                            <li>
                              <a className="clc" href="#">
                                Computers
                              </a>
                            </li>
                            <li>
                              <a className="clc" href="#">
                                Laptops
                              </a>
                            </li>
                            <li>
                              <a className="clc" href="#">
                                Cameras
                              </a>
                            </li>
                            <li>
                              <a className="clc" href="#">
                                Hardware
                              </a>
                            </li>
                            <li>
                              <a className="clc" href="#">
                                Smartphones
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="header_search_button trans_300"
                        value="Submit"
                      >
                        <img src="images/search.png" alt />
                      </button>
                    </form>
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

export default header;
