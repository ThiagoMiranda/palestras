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
                      <Link to="/">
                        Home
                        <i className="fas fa-chevron-down" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/product">
                        Produto
                        <i className="fas fa-chevron-down" />
                      </Link>
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
