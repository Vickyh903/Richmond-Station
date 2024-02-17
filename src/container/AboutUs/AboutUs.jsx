import React from 'react';

import {images } from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>


    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Richmond Station is a stopping place. A bustling neighbourhood restaurant in the downtown core. We are committed to delicious food and excellent hospitality.
        </p>
        <button className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Since we opened our doors in 2012, we’ve been blessed to meet an ever growing list of fantastic people. We work with passionate farmers, dedicated cooks, committed waitstaff and a long list of talented trades that all work together to keep Richmond Station working day in and day out. 
        </p>
        <button className="custom__button">Know More</button>
      </div>

    </div>

  </div>
);

export default AboutUs;
