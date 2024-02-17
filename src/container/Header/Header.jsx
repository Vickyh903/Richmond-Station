import React from 'react';
import{ SubHeading} from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">
        The key to Fine Dining
      </h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
      The food at Richmond Station is inspired by the ingredients we use. We buy locally, seasonally, and whole. We have spent years building partnerships with farmers and growers around Southern Ontario, and the Chef’s Menu highlights the ingredients that are in peak season at this very moment.      </p>
      <button tyle="button" className="custom__button">Explore Menu</button>

    </div>


    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"/>
    </div>

  </div>
);

export default Header;
