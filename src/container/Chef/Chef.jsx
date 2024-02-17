import React from 'react';

import {images } from "../../constants";
import { SubHeading } from "../../components";
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />

    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we belivev in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          
          <p className="p__opensans">
          At Richmond Station, we believe that our staff is the heart and soul of our restaurant. We are committed to creating a work environment that fosters growth, collaboration, and a passion for exceptional hospitality 
          </p>
        </div>

        
      </div>

      <div className="app__chef-sign">
        <p>William Kresky</p>
        <p className="p__opensans">Executive Chef</p>
        
      </div>
    </div>
    
  </div>
);

export default Chef;
