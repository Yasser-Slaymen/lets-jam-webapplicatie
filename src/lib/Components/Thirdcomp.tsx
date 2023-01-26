import "../Stylingcomponents/ThirdComp.css";
import TthirdComp from "./TthirdComp";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
import Img3_1 from "../Images/img3_1.png";
import Img3_2 from "../Images/img3_2.png";
import Ellipse3_4 from "../Images/Ellipse3_4.png";
import Shape3_3 from "../Images/shape3_3.png";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ThirdComp() {
  // gsap
  const ap = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".thirdcomp",
        { opacity: 0, y: 500 },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: "elastic.out(1, .7)",
          scrollTrigger: {
            trigger: ".thirdcomp",
            start: "top bottom",
          },
        }
      );
      gsap.fromTo(
        ".img3_2",
        { opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          delay: 0,
          ease: "elastic.out(1, .7)",
          scrollTrigger: {
            trigger: ".img3_2",
            start: "top bottom",
          },
        }
      );
      gsap.fromTo(
        ".img3_1",
        { opacity: 0, x: -500 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          delay: 0,
          ease: "elastic.out(1, .7)",
          scrollTrigger: {
            trigger: ".img3_1",
            start: "top bottom",
          },
        }
      );
    }, ap);
    return () => ctx.revert();
  });

  // hyraph
  const [thirdSections, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const { thirdSections } = await request(
        "https://api-eu-west-2.hygraph.com/v2/clcyyb4443l3q01t8hceqaruo/master",
        `
        {
          thirdSections {
                id
                title
                img {
                  url
                }
                multiText                
          }
        }
      `
      );

      setProducts(thirdSections);
    };

    fetchProducts();
  }, []);
  return (
    <div ref={ap}>
      <TthirdComp>
        <div>
          {!thirdSections ? (
            "Oopss somthing going wrong"
          ) : (
            <div>
              {thirdSections.map((third: any) => (
                <div className="thirdcomp" key={third.id}>
                  <section className="third_images">
                    <img className="img3_1" src={Img3_1} alt="img" />
                    <img className="img3_2" src={Img3_2} alt="img" />
                    <img className="ellipse3_4" src={Ellipse3_4} alt="img" />
                    <img className="shape3_3" src={Shape3_3} alt="img" />
                  </section>

                  <section className="third_content">
                    <h5>ABOUT US</h5>
                    <h3>{third.title}</h3>
                    <p>
                      {third.multiText}
                    </p>
                    <ul>
                      <li>
                        <input type="checkbox" id="check3_box" />
                        <span className="checkbox3_span">
                          Lorem ipsu mdolor sit amet.Lorem ipsum dolor sit amet.
                        </span>
                      </li>
                      <li>
                        <input type="checkbox" id="check3_box" />
                        <span className="checkbox3_span">
                          Lorem ipsu mdolor sit amet.Lorem ipsum dolor sit amet.
                        </span>
                      </li>
                      <li>
                        <input type="checkbox" id="check3_box" />
                        <span className="checkbox3_span">
                          Lorem ipsu mdolor sit amet.Lorem ipsum dolor sit amet.
                        </span>
                      </li>
                      <li>
                        <input type="checkbox" id="check3_box" />
                        <span className="checkbox3_span">
                          Lorem ipsu mdolor sit amet.Lorem ipsum dolor sit amet.
                        </span>
                      </li>
                    </ul>
                    <article>
                      <span>120%</span>
                      <span>250%</span>
                      <span>100%</span>
                    </article>
                  </section>
                </div>
              ))}
            </div>
          )}
        </div>
      </TthirdComp>
    </div>
  );
}
export default ThirdComp;
