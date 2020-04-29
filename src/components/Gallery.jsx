import React from 'react';
import GALLERY1 from '../assets/img/gal-1.jpeg';
import GALLERY2 from '../assets/img/gal-2.jpeg';
import GALLERY3 from '../assets/img/gal-3.jpeg';
import GALLERY4 from '../assets/img/gal-4.jpeg';
import GALLERY5 from '../assets/img/gal-5.jpeg';
import GALLERY6 from '../assets/img/gal-6.jpeg';
import GALLERY7 from '../assets/img/gal-7.jpeg';
import GALLERY8 from '../assets/img/gal-8.jpeg';
import GALLERY9 from '../assets/img/gal-9.jpeg';
import GALLERY10 from '../assets/img/gal-10.jpeg';
import GALLERY11 from '../assets/img/gal-11.jpeg';
import GALLERY12 from '../assets/img/gal-12.jpeg';
import GALLERY13 from '../assets/img/gal-13.jpeg';
import GALLERY14 from '../assets/img/gal-14.jpeg';

const Gallery = () => {
  return (
    <section className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src={GALLERY1} alt="Gallery Image 1" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--2">
        <img src={GALLERY2} alt="Gallery Image 2" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--3">
        <img src={GALLERY3} alt="Gallery Image 3" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--4">
        <img src={GALLERY4} alt="Gallery Image 4" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--5">
        <img src={GALLERY5} alt="Gallery Image 5" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--6">
        <img src={GALLERY6} alt="Gallery Image 6" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--7">
        <img src={GALLERY7} alt="Gallery Image 7" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--8">
        <img src={GALLERY8} alt="Gallery Image 8" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--9">
        <img src={GALLERY9} alt="Gallery Image 9" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--10">
        <img src={GALLERY10} alt="Gallery Image 10" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--11">
        <img src={GALLERY11} alt="Gallery Image 11" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--12">
        <img src={GALLERY12} alt="Gallery Image 12" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--13">
        <img src={GALLERY13} alt="Gallery Image 13" className="gallery__img" />
      </figure>

      <figure className="gallery__item gallery__item--14">
        <img src={GALLERY14} alt="Gallery Image 14" className="gallery__img" />
      </figure>
    </section>
  );
};

export default Gallery;
