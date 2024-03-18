/* global gsap */
/* global ScrollTrigger */
/* global ScrollSmoother */

import React, { useEffect } from 'react';
import './ParallaxScroll.css';
import base from '../img/layer-base.png';
import middle from '../img/layer-middle.png';
import front from '../img/layer-front.png';
import dungen from '../img/dungeon.jpg'

const ParallaxScroll = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`);
    });

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content'
    });

    return () => {
      window.removeEventListener('scroll', () => {
        document.documentElement.style.removeProperty('--scrollTop');
      });

      smoother.kill();
    };
  }, []);


  return (
    <div className="wrapper">
      <div className="content">
        <header className="main-header">
          <div className="layers">
            <div className="layer__header">
            <div className="layers__title">Terrian Recognition</div>
              <div className="layers__caption">Using Machine Learning</div>
            </div>
            <div className="layer layers__base" style={{backgroundImage: `url(${base})`}}></div>
            <div className="layer layers__middle" style={{backgroundImage: `url(${middle})`}}></div>
            <div className="layer layers__front" style={{backgroundImage: `url(${front})`}}></div>
          </div>
        </header>
      
        <article className="main-article" style={{backgroundImage: `url(${dungen})`}}>
          <div className="main-article__content">
            <h2 className="main-article__header">About Us</h2>
            <p className="main-article__paragraph">The Terrain Recognition Using Machine Learning project introduces an automated solution for identifying terrains, benefiting autonomous navigation and disaster response. Through rigorous data analysis and model training, it enhances decision-making in dynamic environments. Positioned at the forefront of machine learning and environmental analysis, it sets new industry benchmarks.</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ParallaxScroll;
