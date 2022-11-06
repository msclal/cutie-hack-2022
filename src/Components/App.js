/*import '../App.css';

function App() {
  return (
    <div>
      <section class="hero is-success is-large">
        <div class="hero-body">
          <div class="container has-text-centered">
            <p class="title is-1">
              R'PARTS
            </p>
            <p class="subtitle is-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
      <section class="hero is-large is-info">
        <div class="hero-body">
          <p class="title">
            Large hero
          </p>
          <p class="subtitle">
            Large subtitle
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;*/

import '../App.css';

function App() {
  return (
    <div>
      <section class="hero is-success is-large is-desktop">
        <div style={{
          backgroundImage: `url("https://admissions.ucr.edu/sites/default/files/styles/article_header_l/public/2020-11/uc-riverside_ucr-campus-tours-four_ways_blog.jpg?h=c118c95a&itok=1715tv0u")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div class="hero-body">
            <div class="container has-text-centered p-0">
              <img
                src={require("../small.PNG")}
                alt="logo"
                style={{ width: "490px", height: "490px" }}
              />
              <p class="subtitle is-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="hero is-large is-info">
        <div class="hero-body">
          <p class="title">
            Large hero
          </p>
          <p class="subtitle">
            Large subtitle
          </p>
        </div>
      </section>






    </div>
  );
}

export default App;
