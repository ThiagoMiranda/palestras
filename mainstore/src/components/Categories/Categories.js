import React from "react";

class categories extends React.Component {
  render() {
    return (
      <div className="popular_categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="popular_categories_slider_container">
                <div className="owl-carousel owl-theme popular_categories_slider">
                  {}
                  <div className="owl-item">
                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                      <div className="popular_category_image">
                        <img src="images/popular_1.png" alt />
                      </div>
                      <div className="popular_category_text">
                        Smartphones & Tablets
                      </div>
                    </div>
                  </div>
                  {}
                  <div className="owl-item">
                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                      <div className="popular_category_image">
                        <img src="images/popular_2.png" alt />
                      </div>
                      <div className="popular_category_text">
                        Computers & Laptops
                      </div>
                    </div>
                  </div>
                  {}
                  <div className="owl-item">
                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                      <div className="popular_category_image">
                        <img src="images/popular_3.png" alt />
                      </div>
                      <div className="popular_category_text">Gadgets</div>
                    </div>
                  </div>
                  {}
                  <div className="owl-item">
                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                      <div className="popular_category_image">
                        <img src="images/popular_4.png" alt />
                      </div>
                      <div className="popular_category_text">
                        Video Games & Consoles
                      </div>
                    </div>
                  </div>
                  {}
                  <div className="owl-item">
                    <div className="popular_category d-flex flex-column align-items-center justify-content-center">
                      <div className="popular_category_image">
                        <img src="images/popular_5.png" alt />
                      </div>
                      <div className="popular_category_text">Accessories</div>
                    </div>
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

export default categories;
