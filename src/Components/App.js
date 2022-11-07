import "../App.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopComponent from "./ShopComponent";
import Navbar from "./Navbar";
import About from "../pages/about";
import Classes from "../pages/classes";
import Product from "./Product";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/about" element={About} />
          <Route path="/classes" component={Classes} />
          <Route path="/ShopComponent" element={<ShopComponent />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
        {/* <ShopComponent /> */}

        <section class="hero is-success is-desktop">
          <div
            style={{
              backgroundImage: `url("https://admissions.ucr.edu/sites/default/files/styles/article_header_l/public/2020-11/uc-riverside_ucr-campus-tours-four_ways_blog.jpg?h=c118c95a&itok=1715tv0u")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "1700px",
              height: "700px",
            }}
          >
            <div class="container has-text-centered">
              <img
                src={require("../Images/small.PNG")}
                alt="logo"
                style={{ width: "490px", height: "490px" }}
              />
              <Link
                class="button is-hovered is-medium is-fullwidth is-rounded is-warning"
                to={"/ShopComponent"}
              >
                start shopping
              </Link>
            </div>
          </div>
        </section>

        <section class="hero is-medium has-background-white-ter">
          <div class="hero-body">
            <div class="has-text-centered">
              <p class="title is-2">community | sustainability | knowledge</p>
              <p></p>
              <p class="subtitle is-5">
                R'Parts is a sustainable solution to ongoing chip and hardware
                shortages. Our goal is to decrease student fees and assist in
                those who are aiming to learn, grow, and push limits.
              </p>
              <p></p>
            </div>

            <section class="is-relative section py-20">
              <div class="container">
                <div class="columns is-multiline">
                  <div class="column is-6">
                    <div class="box p-6">
                      <div class="columns">
                        <div class="column is-4 mb-4 mb-3-desktop">
                          <img
                            class="image is-fullwidth is-cover is-rounded"
                            style="height: 50px;"
                            src={require("../PeoplePics/Person1.png")}
                            alt="logo"
                            style={{ width: "200px", height: "200px" }}
                          />
                        </div>
                        <div class="column is-8">
                          <h3 class="is-size-4 has-text-weight-semibold">
                            Esther Howard
                          </h3>
                          <p class="mb-4 has-text-grey-dark">
                            Computer Science Student
                          </p>
                          <p class="has-text-grey-dark">
                            Saved a lot of money and time searching for my
                            Raspberry Pi. Everyone needs to know R'PARTS! Broke
                            college student in STEM necessity.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="box p-6">
                      <div class="columns is-multiline">
                        <div class="column is-4 mb-4 mb-3-desktop">
                          <img
                            class="image is-fullwidth is-cover is-rounded"
                            style="height: 50px;"
                            src={require("../PeoplePics/Person2.png")}
                            alt="logo"
                            style={{ width: "490px", height: "200px" }}
                          />
                        </div>
                        <div class="column is-8">
                          <h3 class="is-size-4 has-text-weight-semibold">
                            Cameron Williamson
                          </h3>
                          <p class="mb-4 has-text-grey-dark">
                            Embedded Systems Professor
                          </p>
                          <p class="has-text-grey-dark">
                            Great resource for my undergraduate and graduate
                            students. Always had trouble trying to direct them
                            to various marketplaces and disucssion boards to get
                            the equipment they need to succeed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="box p-6">
                      <div class="columns is-multiline">
                        <div class="column is-4 mb-4 mb-3-desktop">
                          <img
                            class="image is-fullwidth is-cover is-rounded"
                            style="height: 50px;"
                            src={require("../PeoplePics/Person3.png")}
                            alt="logo"
                            style={{ width: "400px", height: "200px" }}
                          />
                        </div>
                        <div class="column is-8">
                          <h3 class="is-size-4 has-text-weight-semibold">
                            Brian Turby
                          </h3>
                          <p class="mb-4 has-text-grey-dark">
                            Computer Engineer Alumni
                          </p>
                          <p class="has-text-grey-dark">
                            It was my go-to resource all throughout my college
                            career. Urged all my friends and siblings to use
                            this. 10/10. Absolute need.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="box p-6">
                      <div class="columns is-multiline">
                        <div class="column is-4 mb-4 mb-3-desktop">
                          <img
                            class="image is-fullwidth is-cover is-rounded"
                            style="height: 50px;"
                            src={require("../PeoplePics/Person4.png")}
                            alt="logo"
                            style={{ width: "490px", height: "200px" }}
                          />
                        </div>
                        <div class="column is-8">
                          <h3 class="is-size-4 has-text-weight-semibold">
                            Zack Moon
                          </h3>
                          <p class="mb-4 has-text-grey-dark">
                            Systems Researcher
                          </p>
                          <p class="has-text-grey-dark">
                            Great resource for research purposes. Cheap and
                            sustainable. This is it right here everyone!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </Router>
      {/* <ShopComponent id="ShopComponent"></ShopComponent> */}
      {/* <Product id="Product"></Product> */}
    </div>
  );
}

export default App;
