import React from "react";


const Home = () => {
  return (
    <>
      {/* Offer Section */}
      <section className="offer_section layout_padding-bottom">
        <div className="offer_container">
          <div className="container">
            <div className="row">
              {/* Offer 1 */}
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/o1.jpg" alt="Offer 1" />
                  </div>
                  <div className="detail-box">
                    <h5>Tasty Thursdays</h5>
                    <h6>
                      <span>20%</span> Off
                    </h6>
                    <a href="#">
                      Order Now{" "}
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 456.029 456.029"
                      >
                        <g>
                          <g>
                            <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Offer 2 */}
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/o2.jpg" alt="Offer 2" />
                  </div>
                  <div className="detail-box">
                    <h5>Pizza Days</h5>
                    <h6>
                      <span>15%</span> Off
                    </h6>
                    <a href="#">
                      Order Now{" "}
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 456.029 456.029"
                      >
                        <g>
                          <g>
                            <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Menu Section */}
      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          <ul className="filters_menu">
            <li className="active" data-filter="*">
              All
            </li>
            <li data-filter=".burger">Burger</li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li>
          </ul>

          <div className="filters-content">
            <div className="row grid">
              {/* ===== Single Product Box Start ===== */}
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="images/f1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$20</h6>
                        <a href="#">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 456.029 456.029"
                          >
                            <g>
                              <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"></path>
                              <path d="M439.296,84.91H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z"></path>
                              <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"></path>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ===== Single Product Box End ===== */}

              {/* ===== Burger Item ===== */}
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="images/f2.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Burger</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$15</h6>
                        <a href="#">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 456.029 456.029"
                          >
                            <g>
                              <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"></path>
                              <path d="M439.296,84.91H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z"></path>
                              <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"></path>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== Pizza Item ===== */}
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="images/f3.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$17</h6>
                        <a href="#">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 456.029 456.029"
                          >
                            <g>
                              <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"></path>
                              <path d="M439.296,84.91H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z"></path>
                              <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"></path>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== Pasta Item ===== */}
              <div className="col-sm-6 col-lg-4 all pasta">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="images/f4.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Pasta</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$18</h6>
                        <a href="#">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 456.029 456.029"
                          >
                            <g>
                              <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"></path>
                              <path d="M439.296,84.91H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z"></path>
                              <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"></path>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== Fries Item ===== */}
              <div className="col-sm-6 col-lg-4 all fries">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="images/f5.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>French Fries</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$10</h6>
                        <a href="#">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 456.029 456.029"
                          >
                            <g>
                              <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"></path>
                              <path d="M439.296,84.91H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z"></path>
                              <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"></path>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ===== Burger Item ===== */}
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="images/f2.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Burger</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$15</h6>
                        <a href="#">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 456.029 456.029"
                          >
                            <g>
                              <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248 c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"></path>
                              <path d="M439.296,84.91H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48 C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064 c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4 C457.728,97.71,450.56,86.958,439.296,84.91z"></path>
                              <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296 c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"></path>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Continue similarly for f6 item... */}
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            {/* Left Image */}
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="about" />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>We Are Feane</h2>
                </div>

                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>

                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Book A Table</h2>
          </div>

          <div className="row">
            {/* Form */}
            <div className="col-md-6">
              <div className="form_container">
                <form>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>

                  <div>
                    <select
                      className="form-control nice-select wide"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        How many persons?
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <div>
                    <input type="date" className="form-control" />
                  </div>

                  <div className="btn_box">
                    <button type="submit">Book Now</button>
                  </div>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="col-md-6">
              <div className="map_container">
                <div id="googleMap"></div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>What Says Our Customers</h2>
          </div>

          <div className="carousel-wrap row">
            <div className="owl-carousel client_owl-carousel">
              {/* Testimonial 1 */}
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Moana Michell</h6>
                    <p>magna aliqua</p>
                  </div>

                  <div className="img-box">
                    <img
                      src="images/client1.jpg"
                      alt="client"
                      className="box-img"
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Mike Hamell</h6>
                    <p>magna aliqua</p>
                  </div>

                  <div className="img-box">
                    <img
                      src="images/client2.jpg"
                      alt="client"
                      className="box-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};

export default Home;
