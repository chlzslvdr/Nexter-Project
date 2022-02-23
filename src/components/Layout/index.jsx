import React from 'react';
import STORY1 from '../../assets/img/story-1.jpeg';
import STORY2 from '../../assets/img/story-2.jpeg';
import REALTOR1 from '../../assets/img/realtor-1.jpeg';
import REALTOR2 from '../../assets/img/realtor-2.jpeg';
import REALTOR3 from '../../assets/img/realtor-3.jpeg';
import Header from '../Header';
import Home from '../Home';
import Gallery from '../Gallery';

const Layout = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <button className="nav-btn" />
      </div>

      <Header />

      <div className="realtors">
        <h3 className="heading-3">Top 3 Realtors</h3>
        <div className="realtors__list">
          <img src={REALTOR1} alt="Realtor 1" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Edward Palmer</h4>
            <p className="realtors__sold">312 houses sold</p>
          </div>

          <img src={REALTOR2} alt="Realtor 2" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Sarah Hamilton</h4>
            <p className="realtors__sold">256 houses sold</p>
          </div>

          <img src={REALTOR3} alt="Realtor 3" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
            <p className="realtors__sold">180 houses sold</p>
          </div>
        </div>
      </div>

      <section className="features">
        {/* .feature{feature $}*6 */}
        <div className="feature">
          <svg class="feature__icon">
            <use xlinkHref="/sprite.svg#icon-global"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            World's best luxury homes
          </h4>
          <p className="feature__text">
            Vehicula eros facilisi egestas erat mauris ante praesent conubia
            commodo scelerisque, gravida maecenas eleifend.
          </p>
        </div>

        <div className="feature">
          <svg class="feature__icon">
            <use xlinkHref="/sprite.svg#icon-trophy"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Only the best properties
          </h4>
          <p className="feature__text">
            Aliquet vitae nam sapien eu vestibulum curae donec pretium tellus
            nullam gravida, nisi condimentum faucibus luctus a etiam lacinia
            suscipit.
          </p>
        </div>

        <div className="feature">
          <svg class="feature__icon">
            <use xlinkHref="/sprite.svg#icon-map-pin"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            All homes in top locations
          </h4>
          <p className="feature__text">
            Tenetur distinctio necessitatibus pariatur aptent voluptatibus
            quidem consequatur ullamcorper leo harum.
          </p>
        </div>

        <div className="feature">
          <svg class="feature__icon">
            <use xlinkHref="/sprite.svg#icon-key"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">New home in one week</h4>
          <p className="feature__text">
            Blandit curabitur tellus ridiculus platea praesent faucibus pharetra
            quam porttitor consequat dictumst odio a suscipit ultricies.
          </p>
        </div>

        <div className="feature">
          <svg class="feature__icon">
            <use xlinkHref="/sprite.svg#icon-presentation"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
          <p className="feature__text">
            Luctus inceptos habitant imperdiet tempus suscipit senectus,
            himenaeos vivamus, massa consequat sodales arcu bibendum varius
            interdum.
          </p>
        </div>

        <div className="feature">
          <svg class="feature__icon">
            <use xlinkHref="/sprite.svg#icon-lock"></use>
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Secure payments on nexter
          </h4>
          <p className="feature__text">
            Quidem consequatur harum, voluptatum mollitia quae. Tenetur
            distinctio necessitatibus pariatur voluptatibus magnis fermentum.
          </p>
        </div>
      </section>

      <div className="story__pictures">
        <img
          src={STORY1}
          alt="Couple with new house"
          className="story__img--1"
        />
        <img src={STORY2} alt="New house" className="story__img--2" />
      </div>

      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text">
          Interdum mattis praesent natoque habitasse curae congue odio, iaculis
          metus dapibus facilisis vulputate dolor ligula lacinia, ultricies
          ornare laoreet posuere pretium faucibus!!
        </p>
        <button className="btn">Find your own home</button>
      </div>

      <Home />

      <Gallery />

      <footer className="footer">
        <ul className="nav">
          <li className="nav-item">
            <a href="/" className="nav__link">
              Find your dream home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav__link">
              Request proposal
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav__link">
              Download home planner
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav__link">
              Contact us
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav__link">
              Submit your property
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav__link">
              Come work with us!
            </a>
          </li>
        </ul>
        <p className="copyright">
          &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this
          project for your own purposes. This does NOT apply if you plan to
          produce your own course or tutorials based on this project.
        </p>
        <p className="label">
          {' '}
          Built by{' '}
          <a
            href="https://github.com/chlzslvdr"
            target="_blank"
            className="label__link"
            rel="noopener noreferrer"
          >
            Chelzea Salvador
          </a>{' '}
          while learning an online course on{' '}
          <a
            href="https://github.com/jonasschmedtmann/advanced-css-course.git"
            target="_blank"
            className="label__link"
            rel="noopener noreferrer"
          >
            Advanced CSS and Sass
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
