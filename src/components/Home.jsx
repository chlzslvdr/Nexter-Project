import React from 'react';
import HOUSE1 from '../assets/img/house-1.jpeg';
import HOUSE2 from '../assets/img/house-2.jpeg';
import HOUSE3 from '../assets/img/house-3.jpeg';
import HOUSE4 from '../assets/img/house-4.jpeg';
import HOUSE5 from '../assets/img/house-5.jpeg';
import HOUSE6 from '../assets/img/house-6.jpeg';

const Home = () => {
  return (
    <section className="homes">
      <div className="home">
        <img src={HOUSE1} alt="House 1" className="home__img" />
        <svg class="home__like">
          <use xlinkHref="/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 className="home__name">Beautiful Family House</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref="/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>USA</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref="/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>5 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref="/sprite.svg#icon-expand"></use>
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref="/sprite.svg#icon-key"></use>
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={HOUSE2} alt="House 2" className="home__img" />
        <svg class="home__like">
          <use xlinkHref="/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 className="home__name">Modern Glass Villa</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref="/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>Canada</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref="/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>6 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref="/sprite.svg#icon-expand"></use>
          </svg>
          <p>
            475 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref="/sprite.svg#icon-key"></use>
          </svg>
          <p>$2,850,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={HOUSE3} alt="House 3" className="home__img" />
        <svg class="home__like">
          <use xlinkHref="/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 className="home__name">Cozy Country House</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref="/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>UK</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref="/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>4 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref="/sprite.svg#icon-expand"></use>
          </svg>
          <p>
            250 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref="/sprite.svg#icon-key"></use>
          </svg>
          <p>$850,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={HOUSE4} alt="House 4" className="home__img" />
        <svg class="home__like">
          <use xlinkHref="/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 className="home__name">Large Rustical Villa</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref="/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>Portugal</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref="/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>8 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref="/sprite.svg#icon-expand"></use>
          </svg>
          <p>
            510 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref="/sprite.svg#icon-key"></use>
          </svg>
          <p>$1,950,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={HOUSE5} alt="House 5" className="home__img" />
        <svg class="home__like">
          <use xlinkHref="/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 className="home__name">Majestic Palace House</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref="/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>Germany</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref="/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>21 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref="/sprite.svg#icon-expand"></use>
          </svg>
          <p>
            4235 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref="/sprite.svg#icon-key"></use>
          </svg>
          <p>$9,550,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
        <img src={HOUSE6} alt="House 6" className="home__img" />
        <svg class="home__like">
          <use xlinkHref="/sprite.svg#icon-heart-full"></use>
        </svg>
        <h5 className="home__name">Modern Familiy Apartment</h5>
        <div className="home__location">
          <svg>
            <use xlinkHref="/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>Italy</p>
        </div>
        <div className="home__rooms">
          <svg>
            <use xlinkHref="/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>4 rooms</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref="/sprite.svg#icon-expand"></use>
          </svg>
          <p>
            190 m<sup>2</sup>
          </p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref="/sprite.svg#icon-key"></use>
          </svg>
          <p>$680,000</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
    </section>
  );
};

export default Home;
