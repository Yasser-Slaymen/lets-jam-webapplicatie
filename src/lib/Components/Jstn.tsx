import "../Stylingcomponents/Test.css";
// import Ttest from "./Ttest";
// import { useEffect, useState } from "react";
import gsap from "gsap";
// import { useLayoutEffect, useRef } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import React, { Component } from "react";
import { TweenMax, ScrollTrigger } from "gsap/all";

class MyComponent extends Component {
  componentDidMount() {
    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger)
    // Select the element you want to animate
    const myElement = document.querySelector('.my-element')
    // Create a new animation
    TweenMax.to(myElement, { 
      duration: 5,
      scrollTrigger: {
        trigger: myElement,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart none none none'
      },
      x: 500
    })
  }
 

  render() {
    return (
      <div>
        <div className="my-element">
          Animate me! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Maxime deserunt beatae quam. Delectus sed laboriosam quis, incidunt
          doloremque facilis recusandae similique esse qui culpa sit sapiente
          assumenda! Facere, omnis dicta.
        </div>
      </div>
    );
  }
}

export default MyComponent;
